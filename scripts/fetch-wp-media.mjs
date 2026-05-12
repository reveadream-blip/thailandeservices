/**
 * Télécharge les fichiers /wp-content/uploads/... référencés dans articles.json
 * depuis l’ancien hébergement WordPress (HTTP + Host), vers public/wp-content/...
 *
 * Note : `fetch()` vers une IP peut renvoyer 404 sur ce cluster OVH ; on utilise `http.get`.
 *
 * Usage : node scripts/fetch-wp-media.mjs
 * Optionnel : WP_LEGACY_IP, WP_LEGACY_HOST
 */
import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const LEGACY_IP = process.env.WP_LEGACY_IP || '51.91.236.193'
const LEGACY_HOST = process.env.WP_LEGACY_HOST || 'thailande-services.fr'
const publicDir = path.join(root, 'public')

function downloadLegacy(relPath) {
  return new Promise((resolve, reject) => {
    const opts = {
      hostname: LEGACY_IP,
      port: 80,
      path: `/${relPath.replace(/^\/+/, '')}`,
      headers: { Host: LEGACY_HOST },
      method: 'GET',
    }
    const req = http.request(opts, (res) => {
      if (res.statusCode !== 200) {
        res.resume()
        resolve({ ok: false, status: res.statusCode })
        return
      }
      const chunks = []
      res.on('data', (c) => chunks.push(c))
      res.on('end', () => resolve({ ok: true, body: Buffer.concat(chunks) }))
    })
    req.on('error', reject)
    req.setTimeout(45_000, () => {
      req.destroy()
      reject(new Error('timeout'))
    })
    req.end()
  })
}

const data = JSON.parse(fs.readFileSync(path.join(root, 'src/data/articles.json'), 'utf8'))
const re = /https?:\/\/thailande-services\.fr\/(wp-content\/uploads\/[^\s"'<>]+)/gi
const paths = new Set()
for (const a of data.articles ?? []) {
  const h = a.content ?? ''
  let m
  re.lastIndex = 0
  while ((m = re.exec(h))) paths.add(m[1])
}

const sorted = [...paths].sort()
console.log(`[fetch-wp-media] ${sorted.length} fichiers uniques à récupérer`)

let ok = 0
let skip = 0
let fail = 0

for (const rel of sorted) {
  const dest = path.join(publicDir, rel)
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
    skip++
    continue
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  try {
    const result = await downloadLegacy(rel)
    if (!result.ok || !('body' in result)) {
      console.warn(`[fetch-wp-media] ${result.status ?? '?'} ${rel}`)
      fail++
      continue
    }
    if (result.body.length < 100) {
      console.warn(`[fetch-wp-media] trop petit (${result.body.length}) ${rel}`)
      fail++
      continue
    }
    fs.writeFileSync(dest, result.body)
    ok++
  } catch (e) {
    console.warn(`[fetch-wp-media] erreur ${rel}:`, e instanceof Error ? e.message : e)
    fail++
  }
}

console.log(`[fetch-wp-media] ok=${ok} skip=${skip} fail=${fail}`)
