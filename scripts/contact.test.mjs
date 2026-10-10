import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import ts from 'typescript'

const source = await readFile(new URL('../api/contact.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } })
const loadHandler = async (id = '') => (await import(`data:text/javascript;base64,${Buffer.from(outputText + `\n// ${id}`).toString('base64')}`)).default
const handler = await loadHandler()
const valid = { name: 'Test visitor', email: 'visitor@example.com', subject: 'Project', message: 'Build a dashboard', company: '' }
const envNames = ['RESEND_API_KEY', 'UPSTASH_REDIS_REST_URL', 'UPSTASH_REDIS_REST_TOKEN', 'CONTACT_RATE_LIMIT_SECRET', 'CONTACT_RATE_LIMIT_NAMESPACE', 'VERCEL', 'VERCEL_ENV', 'CONTACT_FROM_EMAIL', 'CONTACT_TO_EMAIL']

async function request(body = valid, { method = 'POST', ip = '203.0.113.10', run = handler, headers = {} } = {}) {
  const response = { code: 0, headers: {}, body: null, setHeader(key, value) { this.headers[key] = value }, status(code) { this.code = code; return this }, json(body) { this.body = body; return this } }
  await run({ method, body, headers: { 'x-vercel-forwarded-for': ip, ...headers }, socket: { remoteAddress: '127.0.0.1' } }, response)
  return response
}

// This transport models a shared Redis store; it is not a live Lua/Upstash test.
// Separate imported handler instances deliberately share only this fake service.
function fixture() {
  for (const name of envNames) delete process.env[name]
  Object.assign(process.env, { RESEND_API_KEY: 'mock-key', UPSTASH_REDIS_REST_URL: 'https://test.upstash.io', UPSTASH_REDIS_REST_TOKEN: 'mock-token', CONTACT_RATE_LIMIT_SECRET: 'mock-secret-with-at-least-32-characters', VERCEL: '1', VERCEL_ENV: 'preview' })
  let now = 0
  const store = new Map()
  const state = { redis: [], mail: [], redisMode: 'ok', mailMode: 'ok', mailBodyRead: false, advance(seconds) { now += seconds } }
  globalThis.fetch = async (url, options) => {
    assert(options.signal instanceof AbortSignal)
    if (String(url) === process.env.UPSTASH_REDIS_REST_URL + '/') {
      const command = JSON.parse(options.body)
      state.redis.push(command)
      assert.equal(command[0], 'EVAL')
      assert.equal(command[2], '2')
      assert.match(command[1], /redis.call\('INCR'/)
      assert.match(command[1], /redis.call\('EXPIRE'/)
      assert.deepEqual(command.slice(5), ['5', '600', '30', '3600'])
      assert.equal(options.redirect, 'error')
      if (state.redisMode === 'throw') throw new Error('mock outage')
      if (state.redisMode === 'timeout') throw new DOMException('mock timeout', 'TimeoutError')
      if (state.redisMode === 'http') return { ok: false, status: 401 }
      if (state.redisMode === 'bad-json') return { ok: true, json: async () => { throw new Error('bad JSON') } }
      if (state.redisMode === 'malformed') return { ok: true, json: async () => ({ result: [0, -1] }) }
      if (state.redisMode === 'error') return { ok: true, json: async () => ({ error: 'mock Redis error' }) }
      if (state.redisMode === 'mixed-error') return { ok: true, json: async () => ({ error: 'mock Redis error', result: [1, 0] }) }
      const keys = command.slice(3, 5)
      const limits = [5, 30], windows = [600, 3600]
      const entries = keys.map(key => { const entry = store.get(key); return entry && entry.expiry > now ? entry : { count: 0, expiry: 0 } })
      const retry = Math.max(0, ...entries.map((entry, i) => entry.count >= limits[i] ? entry.expiry - now : 0))
      if (retry) return { ok: true, json: async () => ({ result: [0, retry] }) }
      entries.forEach((entry, i) => store.set(keys[i], { count: entry.count + 1, expiry: entry.count ? entry.expiry : now + windows[i] }))
      return { ok: true, json: async () => ({ result: [1, 0] }) }
    }
    assert.equal(String(url), 'https://api.resend.com/emails')
    state.mail.push(JSON.parse(options.body))
    if (state.mailMode === 'throw') throw new Error('mock mail outage')
    if (state.mailMode === 'timeout') throw new DOMException('mock timeout', 'TimeoutError')
    return { ok: state.mailMode === 'ok', status: 500, text: async () => { state.mailBodyRead = true; return 'sensitive provider body' } }
  }
  return state
}

test('contact release regression checks', async t => {
  const originalFetch = globalThis.fetch, originalLog = console.error
  const env = Object.fromEntries(envNames.map(name => [name, process.env[name]]))
  const logs = []
  console.error = (...args) => logs.push(args.join(' '))
  t.after(() => { globalThis.fetch = originalFetch; console.error = originalLog; for (const name of envNames) { if (env[name] === undefined) delete process.env[name]; else process.env[name] = env[name] } })

  await t.test('invalid inputs and honeypot never call Redis or Resend', async () => {
    const state = fixture()
    assert.equal((await request(valid, { method: 'GET' })).code, 405)
    for (const body of [null, [], 'bad', {}, { ...valid, email: 'bad' }, { ...valid, message: ' ' }, { ...valid, service: 'unknown' }, { ...valid, budget: 123 }, { ...valid, timeline: 'x'.repeat(201) }]) assert.equal((await request(body)).code, 400)
    assert.equal((await request({ ...valid, company: 'spam' })).code, 200)
    assert.equal(state.redis.length, 0); assert.equal(state.mail.length, 0)
  })
  await t.test('CRLF, NUL and other controls rejected before trimming', async () => {
    const state = fixture()
    for (const field of ['email', 'subject']) for (const control of ['\r', '\n', '\0', '\t', '\u007f', '\u0085', '\u2028']) {
      assert.equal((await request({ ...valid, [field]: control + valid[field] })).code, 400)
      assert.equal((await request({ ...valid, [field]: valid[field] + control })).code, 400)
    }
    assert.equal(state.mail.length, 0)
  })
  await t.test('valid international names, multiline messages and inquiry fields; HTML escaped', async () => {
    const state = fixture()
    assert.equal((await request({ ...valid, name: 'أيمن — José', subject: '<script>project</script>', message: 'Bonjour\nمرحبا <img src=x>\tDetails', service: 'web', organization: '<agency>', timeline: 'Next month', budget: 'To discuss' })).code, 200)
    const mail = state.mail[0]
    assert.equal(mail.reply_to, valid.email)
    assert.match(mail.html, /أيمن — José/); assert.match(mail.text, /timeline: Next month/)
    assert.match(mail.html, /&lt;agency&gt;/); assert(!mail.html.includes('<script>')); assert(!mail.html.includes('<img src=x>'))
    assert.equal((await request(valid)).code, 200, 'Legacy payload remains supported')
  })
  await t.test('sixth attempt blocked across independently imported functions; expiry allows retry', async () => {
    const state = fixture(), secondHandler = await loadHandler('second-serverless-instance')
    const requests = await Promise.all(Array.from({ length: 6 }, (_, i) => request(valid, { run: i % 2 ? secondHandler : handler })))
    assert.equal(requests.filter(r => r.code === 200).length, 5)
    const limited = requests.find(r => r.code === 429)
    assert.deepEqual(limited.body, { error: 'Too many requests. Please try again later.' })
    assert.equal(limited.headers['Retry-After'], '600'); assert.equal(limited.headers['Cache-Control'], 'no-store')
    assert.equal(state.mail.length, 5)
    state.advance(600); assert.equal((await request()).code, 200)
  })
  await t.test('site-wide cap limits rotating IPs; namespaces separate preview and production', async () => {
    const state = fixture()
    for (let i = 1; i <= 30; i++) assert.equal((await request(valid, { ip: `203.0.113.${i}` })).code, 200)
    const limited = await request(valid, { ip: '203.0.113.40' })
    assert.equal(limited.code, 429); assert.equal(limited.headers['Retry-After'], '3600'); assert.equal(state.mail.length, 30)
    process.env.VERCEL_ENV = 'production'; assert.equal((await request()).code, 200)
  })
  await t.test('missing and invalid infrastructure fails closed without Resend', async () => {
    for (const name of ['UPSTASH_REDIS_REST_URL', 'UPSTASH_REDIS_REST_TOKEN', 'CONTACT_RATE_LIMIT_SECRET']) {
      const state = fixture(); delete process.env[name]
      const result = await request(); assert.equal(result.code, 503); assert.equal(result.headers['Retry-After'], '60'); assert.equal(state.mail.length, 0)
    }
    for (const endpoint of ['http://test.upstash.io', 'https://foreign.example', 'https://test.upstash.io/redirect']) {
      const state = fixture(); process.env.UPSTASH_REDIS_REST_URL = endpoint
      assert.equal((await request()).code, 503); assert.equal(state.redis.length, 0); assert.equal(state.mail.length, 0)
    }
    const state = fixture(); process.env.CONTACT_RATE_LIMIT_SECRET = 'short'
    assert.equal((await request()).code, 503); assert.equal(state.mail.length, 0)
  })
  await t.test('Redis outage, timeout, HTTP error and malformed responses fail closed', async () => {
    for (const mode of ['throw', 'timeout', 'http', 'bad-json', 'malformed', 'error', 'mixed-error']) {
      const state = fixture(); state.redisMode = mode
      assert.equal((await request()).code, 503); assert.equal(state.mail.length, 0)
    }
  })
  await t.test('trusted client identity is required; raw IP and inquiry content never appear in Redis keys', async () => {
    const state = fixture()
    assert.equal((await request(valid, { ip: undefined, headers: { 'x-vercel-forwarded-for': undefined } })).code, 503)
    assert.equal((await request(valid, { ip: '203.0.113.10, 1.2.3.4' })).code, 503)
    assert.equal((await request()).code, 200)
    const keys = state.redis.at(-1).slice(3, 5)
    assert.match(keys[0], /:ip:[a-f0-9]{64}$/)
    for (const key of keys) assert(!key.includes(valid.email) && !key.includes(valid.message) && !key.includes('203.0.113.10'))
    const firstKey = keys[0]
    assert.equal((await request(valid, { headers: { 'x-forwarded-for': '198.51.100.99' } })).code, 200)
    assert.equal(state.redis.at(-1)[3], firstKey, 'Use Vercel header, not spoofed fallback')
    process.env.VERCEL = '0'
    assert.equal((await request()).code, 200)
    const socketKey = state.redis.at(-1)[3]
    assert.equal((await request(valid, { ip: '198.51.100.99' })).code, 200)
    assert.equal(state.redis.at(-1)[3], socketKey, 'Non-Vercel requests use socket identity')
  })
  await t.test('missing Resend configuration and provider failures still handled; bodies not logged', async () => {
    let state = fixture(); delete process.env.RESEND_API_KEY
    assert.equal((await request()).code, 503); assert.equal(state.mail.length, 0)
    for (const mode of ['http', 'throw', 'timeout']) {
      state = fixture(); state.mailMode = mode
      assert.equal((await request()).code, 502); assert.equal(state.mailBodyRead, false)
    }
    assert(!logs.some(line => line.includes('sensitive provider body')))
    state = fixture(); process.env.CONTACT_FROM_EMAIL = 'Sender\r\nBcc: injected@example.com'
    assert.equal((await request()).code, 503); assert.equal(state.mail.length, 0)
  })
  await t.test('client reports throttling in English and French without claiming success', async () => {
    const clientSource = await readFile(new URL('../src/lib/contactApi.ts', import.meta.url), 'utf8')
    const clientJs = ts.transpileModule(clientSource, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText
    const { submitContactForm } = await import(`data:text/javascript;base64,${Buffer.from(clientJs).toString('base64')}`)
    const originalDocument = globalThis.document
    try {
      globalThis.fetch = async () => ({ ok: false, status: 429 })
      globalThis.document = { documentElement: { lang: 'en' } }
      assert.deepEqual(await submitContactForm(valid), { ok: false, error: 'Too many requests. Please wait before trying again, or email me directly.' })
      globalThis.document.documentElement.lang = 'fr'
      assert.deepEqual(await submitContactForm(valid), { ok: false, error: 'Trop de demandes. Patientez avant de réessayer ou écrivez-moi directement.' })
    } finally {
      if (originalDocument === undefined) delete globalThis.document
      else globalThis.document = originalDocument
    }
  })
})
