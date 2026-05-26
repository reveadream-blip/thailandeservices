import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const actualites = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actualites' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    /** Mettre `true` pour masquer l’article (non publié). */
    draft: z.boolean().optional().default(false),
    /** Image optionnelle : `/images/mon-visuel.jpg` */
    image: z.string().optional(),
  }),
})

export const collections = { actualites }
