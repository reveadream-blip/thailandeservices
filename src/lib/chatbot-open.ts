/** Ancre et événement pour ouvrir le chatbot « devis assurance santé » depuis n’importe quelle page. */
export const CHATBOT_OPEN_HASH = '#devis-assurance'

export const OPEN_CHATBOT_EVENT = 'ts:open-chatbot'

/** Articles assurance : le formulaire contact est remplacé par le devis chatbot. */
export const INSURANCE_ARTICLE_SLUGS = [
  'assurance-sante-thailande-phuket',
  'assurance-sante-axa-a-phuket-thailande',
] as const

export function isInsuranceArticleSlug(slug: string): boolean {
  return (INSURANCE_ARTICLE_SLUGS as readonly string[]).includes(slug)
}

export function openChatbot(): void {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(OPEN_CHATBOT_EVENT))
}
