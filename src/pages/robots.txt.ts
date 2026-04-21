import type { APIRoute } from 'astro'

export const prerender = true

/** Généré au build : Sitemap aligné sur `site` (astro.config) / PUBLIC_SITE_URL. */
export const GET: APIRoute = ({ site }) => {
  const base = site?.origin ?? 'https://thailande-services.fr'
  const body = `# ${base}
User-agent: *
Allow: /

Sitemap: ${base}/sitemap-index.xml
`
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
