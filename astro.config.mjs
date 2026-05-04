import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import { loadEnv } from 'vite'

/**
 * Ne pas utiliser `defineConfig(() => ({ ... }))` : Astro fusionne la config avec
 * `{ ...userConfig }`, ce qui annule un export fonction et ignore `site`, intégrations, etc.
 *
 * Cloudflare Pages : variable `PUBLIC_SITE_URL` = https://votre-projet.pages.dev (sans slash final).
 */
const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production'
const env = loadEnv(mode, process.cwd(), '')
const siteUrl =
  process.env.PUBLIC_SITE_URL || env.PUBLIC_SITE_URL || 'https://thailande-services.fr'

export default defineConfig({
  site: siteUrl,
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'th'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
})
