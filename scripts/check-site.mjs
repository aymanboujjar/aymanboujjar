/** Check the crawlable output instead of relying on client-side rendering. */
import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root,'dist')
const sitemap = await fs.readFile(path.join(dist,'sitemap.xml'),'utf8')
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match=>new URL(match[1]))
assert(urls.length > 10,'Sitemap should include the main pages and case studies')
assert.equal(new Set(urls.map(url=>url.href)).size,urls.length,'Duplicate sitemap URL')
const titles = new Set()
const routePaths = new Set(urls.map(url=>decodeURIComponent(url.pathname)))
let checkedLinks = 0
const decode = value=>value.replace(/&amp;/g,'&').replace(/&quot;/g,'"')
for (const url of urls) {
  const file=path.join(dist,...decodeURIComponent(url.pathname).split('/').filter(Boolean),'index.html')
  const html=await fs.readFile(file,'utf8')
  assert(!/\/articles(?:\/|["<])/.test(html),`Retired article link in ${url.pathname}`)
  assert(!/profile\.jpg|bojojojo|\/src\/assets\//.test(html),`Incorrect portrait or unresolved asset in ${url.pathname}`)
  assert.equal((html.match(/<h1\b/g)||[]).length,1,`Expected one visible H1 on ${url.pathname}`)
  assert(!/seo-shell|<!--app-html-->/.test(html),`Missing readable prerendered content on ${url.pathname}`)
  assert(!/(?:[;" ])opacity:0(?:;|")/.test(html),`Content hidden by initial animation on ${url.pathname}`)
  const title=html.match(/<title>([^<]+)<\/title>/)?.[1]
  assert(title && !titles.has(title),`Missing or duplicate title on ${url.pathname}`)
  titles.add(title)
  const canonical=[...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/g)]
  assert.equal(canonical.length,1,`Expected one canonical on ${url.pathname}`)
  assert.equal(decode(canonical[0][1]),url.href,`Incorrect canonical on ${url.pathname}`)
  const description=html.match(/<meta\b[^>]*name="description"[^>]*content="([^"]*)"/)?.[1]
  assert(description && decode(description).length <= 160,`Missing or overly long description on ${url.pathname}`)
  assert(!/<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/.test(html),`Public page marked noindex: ${url.pathname}`)
  const schemas=[...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  assert.equal(schemas.length,1,`Expected one entity graph on ${url.pathname}`)
  const graph=JSON.parse(schemas[0][1])['@graph']
  assert(Array.isArray(graph),`Expected graph on ${url.pathname}`)
  const person=graph.find(node=>node['@type']==='Person')
  assert(person && person.name==='Ayman Boujjar',`Missing identity on ${url.pathname}`)
  assert(!person.image,`Unverified portrait in identity schema on ${url.pathname}`)
  assert.equal(graph.filter(node=>node['@type']==='Person').length,1,`Duplicate identity on ${url.pathname}`)
  assert(graph.some(node=>node['@type']==='WebSite'),`Missing website identity on ${url.pathname}`)
  const body=html.slice(html.indexOf('<body>')).replace(/<script\b[\s\S]*?<\/script>/g,'').replace(/<[^>]+>/g,' ')
  assert(body.length > 300,`Insufficient crawlable content on ${url.pathname}`)
  for (const match of html.matchAll(/\b(?:href|src)="(\/(?!\/)[^"]+)"/g)) {
    const link=new URL(decode(match[1]),url)
    const local=decodeURIComponent(link.pathname)
    if (local === url.pathname && link.hash) {
      assert(html.includes(`id="${decodeURIComponent(link.hash.slice(1))}"`),`Broken anchor ${match[1]} on ${url.pathname}`)
    }
    if(routePaths.has(local)) {checkedLinks++;continue}
    await fs.access(path.join(dist,...local.split('/').filter(Boolean))).catch(()=>assert.fail(`Broken local link ${match[1]} on ${url.pathname}`))
    checkedLinks++
  }
}
const home=await fs.readFile(path.join(dist,'index.html'),'utf8')
assert(home.includes('What can you help me build?') && home.includes('React Native'),'Homepage FAQ and specialties must be crawlable')
const contact=await fs.readFile(path.join(dist,'contact','index.html'),'utf8')
assert(/<form[^>]+method="post"/.test(contact) && contact.includes('<noscript>'),'Contact form must provide a safe no-JavaScript fallback')
const redirects=JSON.parse(await fs.readFile(path.join(root,'vercel.json'),'utf8')).redirects
for(const redirect of redirects) assert(routePaths.has(redirect.destination),`Redirect points to missing page: ${redirect.destination}`)
const llms=await fs.readFile(path.join(dist,'llms.txt'),'utf8')
assert(!llms.includes('/articles'),'Assistant summary contains retired URLs')
for(const match of llms.matchAll(/https:\/\/aymanboujjar\.com\/[^)\s]*/g)) {
  const link=new URL(match[0]);assert(routePaths.has(link.pathname) || link.pathname==='/Ayman_Boujjar_CV.pdf',`Unknown summary URL: ${link.pathname}`)
}
console.log(`[check:seo] ${urls.length} pages: content, metadata, entity graphs, sitemap, redirects, and ${checkedLinks} local links passed.`)
