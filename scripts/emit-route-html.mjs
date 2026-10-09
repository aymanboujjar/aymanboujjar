/** Prerender the actual React pages, metadata, and entity graph for every public URL. */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const escapeHtml = value => String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')

function meta(html, attribute, name, value) {
  const tag = `<meta ${attribute}="${name}" content="${escapeHtml(value)}" />`
  const pattern = new RegExp(`<meta\\b(?=[^>]*\\b${attribute}="${name}")[^>]*>`, 'g')
  return pattern.test(html) ? html.replace(pattern, () => tag) : html.replace('</head>', `${tag}\n</head>`)
}

function buildHead(html, page, seo) {
  const url = seo.absoluteUrl(page.path)
  let next = html.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<link\b(?=[^>]*\brel="canonical")[^>]*>/, () => `<link rel="canonical" href="${escapeHtml(url)}" />`)
  for (const [attribute, name, value] of [
    ['name','description',page.description],
    ['name','robots',page.robots || 'index, follow, max-image-preview:large'],
    ['property','og:title',page.title], ['property','og:description',page.description],
    ['property','og:url',url], ['property','og:type',page.type === 'profile' ? 'profile' : 'website'],
    ['name','twitter:title',page.title], ['name','twitter:description',page.description],
  ]) next = meta(next, attribute, name, value)
  const graph = seo.enrichPageJsonLd(page.jsonLd)
  if (graph) {
    // Escape '<' so content cannot terminate a script tag.
    const json = JSON.stringify(graph).replace(/</g,'\\u003c')
    next = next.replace('</head>', `<script id="page-json-ld" type="application/ld+json">${json}</script>\n</head>`)
  }
  return next
}

function revealInitialContent(html) {
  // Framer Motion starts some elements transparent. Prerendered pages must also
  // be fully readable with JavaScript disabled; the client keeps its animations.
  return html.replace(/style="([^"]*)"/g, (whole, value) => {
    if (!/(^|;)opacity:0(?:;|$)/.test(value)) return whole
    const styles = value.split(';').filter(rule => !/^(opacity|transform|filter):/.test(rule))
    return styles.filter(Boolean).length ? `style="${styles.join(';')}"` : ''
  })
}

async function main() {
  const baseHtml = await fs.readFile(path.join(dist,'index.html'),'utf8')
  const manifest = JSON.parse(await fs.readFile(path.join(dist,'.vite','manifest.json'),'utf8'))
  const assetMap = new Map()
  for (const [key, asset] of Object.entries(manifest)) {
    assetMap.set(`/${key}`, `/${asset.file}`)
    if (asset.src) assetMap.set(`/${asset.src}`, `/${asset.file}`)
  }
  const server = await createServer({root,server:{middlewareMode:true},appType:'custom',optimizeDeps:{noDiscovery:true}})
  try {
    const seo = await server.ssrLoadModule('/src/constants/seo.ts')
    const catalog = await server.ssrLoadModule('/src/constants/projects.tsx')
    const landings = await server.ssrLoadModule('/src/constants/serviceLandings.ts')
    const {renderPage} = await server.ssrLoadModule('/src/entry-server.tsx')
    const projects = [catalog.awardProject,...catalog.proProjects,...catalog.persoProjects]
    const pages = [
      {path:'/',title:seo.DEFAULT_TITLE,description:seo.DEFAULT_DESCRIPTION,type:'profile',jsonLd:seo.buildPersonGraph()},
      ...seo.STATIC_PAGE_SEO.map(page => page.path === '/projects' ? {...page,jsonLd:seo.buildProjectsPageJsonLd([catalog.awardProject,...catalog.proProjects])} : page),
      ...landings.serviceLandings.map(seo.serviceLandingPageSeo),
      ...projects.map(seo.projectPageSeo),
    ]
    const written = []
    for (const page of pages) {
      let html = buildHead(baseHtml,page,seo).replace('<!--app-html-->', () => revealInitialContent(renderPage(page.path)))
      for (const [source, built] of assetMap) html = html.split(source).join(built)
      if (html.includes('/src/assets/')) throw new Error(`Unresolved production asset in ${page.path}`)
      if (html.includes('<!--app-html-->') || !/<h1\b/.test(html)) throw new Error(`Missing prerendered content for ${page.path}`)
      const file = path.join(dist,...page.path.split('/').filter(Boolean),'index.html')
      await fs.mkdir(path.dirname(file),{recursive:true})
      await fs.writeFile(file,html,'utf8')
      written.push(page.path)
    }
    // The sitemap uses the exact same route catalog as the HTML output.
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(page=>`  <url><loc>${escapeHtml(seo.absoluteUrl(page.path))}</loc></url>`).join('\n')}\n</urlset>\n`
    await fs.writeFile(path.join(dist,'sitemap.xml'),sitemap,'utf8')
    await fs.writeFile(path.join(root,'public','sitemap.xml'),sitemap,'utf8')
    console.log(`[prerender] Wrote ${written.length} complete pages and a matching sitemap.`)
  } finally { await server.close() }
}
main().catch(error => {console.error('[prerender]',error);process.exitCode=1})
