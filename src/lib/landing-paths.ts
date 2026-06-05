import type { Lang } from '../i18n/translations'
import { absoluteUrl } from './seo'
import { localePath } from './locale-path'

export const LANDING_PHUKET_PATH = '/assurance-sante-phuket/'
export const LANDING_SURIN_PATH = '/agence-surin/'

export type LandingVariant = 'phuket' | 'surin'

const PATH_BY_VARIANT: Record<LandingVariant, string> = {
  phuket: LANDING_PHUKET_PATH,
  surin: LANDING_SURIN_PATH,
}

export function landingPath(variant: LandingVariant, lang: Lang): string {
  return localePath(lang, PATH_BY_VARIANT[variant])
}

export function getLandingHreflangAlternates(
  variant: LandingVariant,
): Record<Lang, string> {
  return {
    fr: absoluteUrl(landingPath(variant, 'fr')),
    en: absoluteUrl(landingPath(variant, 'en')),
    th: absoluteUrl(landingPath(variant, 'th')),
  }
}

export function landingVariantFromSlug(slug: string): LandingVariant | null {
  if (slug === 'assurance-sante-phuket') return 'phuket'
  if (slug === 'agence-surin') return 'surin'
  return null
}
