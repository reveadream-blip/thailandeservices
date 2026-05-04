/** Réponse JSON de https://api.web3forms.com/submit (formats possibles selon la doc / versions). */
export function parseWeb3FormsSubmitResponse(raw: string): {
  success: boolean
  message?: string
} {
  try {
    const j = JSON.parse(raw) as Record<string, unknown>
    const success = j.success === true
    let message: string | undefined
    if (typeof j.message === 'string' && j.message.trim()) message = j.message.trim()
    else if (j.body && typeof j.body === 'object' && j.body !== null) {
      const b = j.body as Record<string, unknown>
      if (typeof b.message === 'string' && b.message.trim()) message = b.message.trim()
    }
    return { success, message }
  } catch {
    return { success: false, message: undefined }
  }
}
