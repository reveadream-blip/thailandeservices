import type { Lang } from './translations'

export type PersonField = 'nom' | 'prenom' | 'age' | 'taille' | 'poids' | 'antecedents'

export type ChatbotCopy = {
  welcome: string
  launcherLabel: string
  launcherAria: string
  panelTitle: string
  minimizeAria: string
  minimizeTitle: string
  startButton: string
  placeholder: string
  send: string
  sending: string
  minimizeWindow: string
  restart: string
  householdQuestion: string
  householdOne: string
  householdTwo: string
  householdThreePlus: string
  householdOneUser: string
  householdTwoUser: string
  householdThreePlusUser: string
  askCountMany: string
  countMinError: string
  introMulti: (n: number) => string
  introSingle: string
  shared: {
    email: string
    adresse: string
    visa: string
    telephone: string
  }
  personPrefix: (n: number, total: number) => string
  personQuestions: Record<PersonField, string>
  emailInvalid: string
  phoneInvalid: string
  missingKeyStart: (block: string) => string
  missingKeyAfter: (block: string) => string
  missingKeyAdminDev: string
  missingKeyAdminProd: string
  missingKeyContactLine: string
  successMessage: string
  submitFailed: (detail: string) => string
  networkError: string
  web3Subject: string
  web3FromName: string
  buildMessage: (answers: Record<string, string>, nb: number) => string
  displayFallbackMulti: (n: number) => string
  displayFallbackDefault: string
}

const fr: ChatbotCopy = {
  welcome:
    "Bonjour, c'est Tammy. Quelques questions pour préparer votre devis, puis je vous rappelle. Cliquez sur Commencer.",
  launcherLabel: 'Devis assurance santé',
  launcherAria: 'Ouvrir le devis assurance santé',
  panelTitle: 'Devis assurance santé',
  minimizeAria: 'Réduire le chat',
  minimizeTitle: 'Réduire',
  startButton: 'Commencer',
  placeholder: 'Votre réponse…',
  send: 'Envoyer',
  sending: 'Envoi…',
  minimizeWindow: 'Réduire la fenêtre',
  restart: 'Recommencer',
  householdQuestion:
    'Souhaitez-vous une assurance santé pour une seule personne ou pour plusieurs personnes ?',
  householdOne: 'Une seule personne',
  householdTwo: 'Deux personnes',
  householdThreePlus: 'Trois personnes ou plus',
  householdOneUser: 'Une seule personne',
  householdTwoUser: 'Deux personnes',
  householdThreePlusUser: 'Trois personnes ou plus',
  askCountMany:
    'Combien de personnes souhaitez-vous assurer au total ? (indiquez un nombre, minimum 3)',
  countMinError: 'Merci d’indiquer un nombre entier au moins égal à 3.',
  introMulti: (n) =>
    `D’accord. D’abord e-mail, adresse et visa (communs), puis pour chacune des ${n} personnes : nom, prénom, âge, taille, poids, antécédents, et enfin votre téléphone.`,
  introSingle:
    'D’accord. E-mail, adresse, visa, puis nom, prénom, âge, taille, poids, antécédents, et votre téléphone à la fin.',
  shared: {
    email: 'Quelle est votre adresse e-mail pour recevoir les informations ?',
    adresse:
      'Quelle est votre adresse actuelle en Thaïlande ou avez-vous prévu de vous expatrier en Thaïlande ?',
    visa: 'Quel type de visa avez-vous ou prévoyez-vous (pour le foyer / la situation principale) ?',
    telephone:
      'Pour finaliser, quel est votre numéro de téléphone (avec indicatif pays, ex. +66 …) afin que nous puissions vous rappeler ?',
  },
  personPrefix: (n, total) => (total > 1 ? `Personne ${n} sur ${total}, ` : ''),
  personQuestions: {
    nom: 'Quel est le nom de famille ?',
    prenom: 'Quel est le prénom ?',
    age: 'Quel âge avez-vous ?',
    taille: 'Quelle est votre taille ? (ex. 175 cm ou 1,75 m)',
    poids: 'Quel est votre poids ? (ex. 70 kg)',
    antecedents:
      'Avez-vous des antécédents médicaux ? Si oui, veuillez les décrire.',
  },
  emailInvalid:
    'Cette adresse ne semble pas valide. Merci d’indiquer une adresse e-mail correcte.',
  phoneInvalid:
    'Merci d’indiquer un numéro valide avec indicatif (ex. +33612345678 ou +66634432634).',
  missingKeyStart: (block) =>
    `Le formulaire ne peut pas encore envoyer votre demande depuis cette version du site.\n\n${block}`,
  missingKeyAfter: (block) =>
    `Merci pour vos réponses ! Nous n’avons pas pu envoyer le dossier depuis le formulaire.\n\n${block}`,
  missingKeyAdminDev:
    '[Développement] Ajoutez PUBLIC_WEB3FORMS_ACCESS_KEY (ou PUBLIC_CHATBOT_WEB3FORMS_ACCESS_KEY) dans .env, ou sur Cloudflare Pages, le nom doit commencer par PUBLIC_, puis redéployez.',
  missingKeyAdminProd:
    'Si vous gérez le site : Cloudflare Pages → Settings → Environment variables → ajoutez PUBLIC_WEB3FORMS_ACCESS_KEY (même valeur que Web3Forms), puis relancez un déploiement.',
  missingKeyContactLine: 'Formulaire « Contact » en bas de la page.',
  successMessage:
    "✅ Merci pour vos réponses ! Nous avons bien reçu votre demande d'assurance santé. Nous vous contacterons bientôt. Vous pouvez réduire cette fenêtre.",
  submitFailed: (detail) =>
    `⚠️ L'envoi a échoué.${detail} Merci de réessayer ou de nous écrire sur WhatsApp.`,
  networkError:
    '⚠️ Erreur réseau. Merci de réessayer ou de nous contacter via WhatsApp.',
  web3Subject: "Demande d'assurance santé, formulaire site",
  web3FromName: 'Thailande-services, devis assurance santé',
  buildMessage: (answers, nb) => {
    const lines: string[] = [
      "Nouvelle demande d'assurance santé (formulaire)",
      '',
      `Nombre de personnes à assurer : ${nb}`,
      '',
      'Coordonnées et situation',
      `Email : ${answers.email ?? ''}`,
      `Adresse / expatriation : ${answers.adresse ?? ''}`,
      `Visa : ${answers.visa ?? ''}`,
      `Téléphone : ${answers.telephone ?? ''}`,
      '',
    ]
    for (let i = 0; i < nb; i++) {
      lines.push(`Personne ${i + 1}`)
      lines.push(`Nom : ${answers[`p${i}_nom`] ?? ''}`)
      lines.push(`Prénom : ${answers[`p${i}_prenom`] ?? ''}`)
      lines.push(`Âge : ${answers[`p${i}_age`] ?? ''}`)
      lines.push(`Taille : ${answers[`p${i}_taille`] ?? ''}`)
      lines.push(`Poids : ${answers[`p${i}_poids`] ?? ''}`)
      lines.push(`Antécédents : ${answers[`p${i}_antecedents`] ?? ''}`)
      lines.push('')
    }
    return lines.join('\n').trimEnd()
  },
  displayFallbackMulti: (n) => `Demande ${n} personnes`,
  displayFallbackDefault: 'Devis',
}

const en: ChatbotCopy = {
  welcome:
    "Hi, it's Tammy. A few questions for your quote, then we'll call you back. Tap Start.",
  launcherLabel: 'Insurance quote',
  launcherAria: 'Open insurance quote form',
  panelTitle: 'Insurance quote',
  minimizeAria: 'Minimize chat',
  minimizeTitle: 'Minimize',
  startButton: 'Start',
  placeholder: 'Your answer…',
  send: 'Send',
  sending: 'Sending…',
  minimizeWindow: 'Minimize window',
  restart: 'Start over',
  householdQuestion:
    'Do you need cover for one person or for several people?',
  householdOne: 'One person',
  householdTwo: 'Two people',
  householdThreePlus: 'Three or more',
  householdOneUser: 'One person',
  householdTwoUser: 'Two people',
  householdThreePlusUser: 'Three or more',
  askCountMany: 'How many people do you want to insure in total? (number, minimum 3)',
  countMinError: 'Please enter a whole number of at least 3.',
  introMulti: (n) =>
    `OK. First email, address and visa (shared), then for each of the ${n} people: surname, first name, age, height, weight, medical history, then your phone.`,
  introSingle:
    'OK. Email, address, visa, then surname, first name, age, height, weight, medical history, and your phone at the end.',
  shared: {
    email: 'What email address should we use to send information?',
    adresse:
      'What is your current address in Thailand, or are you planning to move to Thailand?',
    visa: 'What type of visa do you have or plan to get (for the household / main situation)?',
    telephone:
      'Lastly, what is your phone number (with country code, e.g. +66 …) so we can call you back?',
  },
  personPrefix: (n, total) => (total > 1 ? `Person ${n} of ${total}, ` : ''),
  personQuestions: {
    nom: 'What is your surname?',
    prenom: 'What is your first name?',
    age: 'How old are you?',
    taille: 'What is your height? (e.g. 175 cm or 1.75 m)',
    poids: 'What is your weight? (e.g. 70 kg)',
    antecedents:
      'Do you have any medical history? If yes, please describe it.',
  },
  emailInvalid: "That doesn't look like a valid email. Please enter a correct address.",
  phoneInvalid:
    'Please enter a valid number with country code (e.g. +33612345678 or +66634432634).',
  missingKeyStart: (block) =>
    `This form can't send your request from this version of the site yet.\n\n${block}`,
  missingKeyAfter: (block) =>
    `Thank you for your answers! We couldn't send the file from the form.\n\n${block}`,
  missingKeyAdminDev:
    '[Development] Add PUBLIC_WEB3FORMS_ACCESS_KEY (or PUBLIC_CHATBOT_WEB3FORMS_ACCESS_KEY) in .env, or in Cloudflare Pages, the name must start with PUBLIC_, then redeploy.',
  missingKeyAdminProd:
    'If you manage the site: Cloudflare Pages → Settings → Environment variables → add PUBLIC_WEB3FORMS_ACCESS_KEY (same value as Web3Forms), then redeploy.',
  missingKeyContactLine: 'Use the Contact form at the bottom of the page.',
  successMessage:
    '✅ Thank you! We received your insurance request and will contact you soon. You can minimize this window.',
  submitFailed: (detail) =>
    `⚠️ Sending failed.${detail} Please try again or message us on WhatsApp.`,
  networkError: '⚠️ Network error. Please try again or contact us on WhatsApp.',
  web3Subject: 'Insurance request, site form',
  web3FromName: 'Thailande-services, insurance quote',
  buildMessage: (answers, nb) => {
    const lines: string[] = [
      'New insurance request (form)',
      '',
      `People to insure: ${nb}`,
      '',
      'Contact & situation',
      `Email: ${answers.email ?? ''}`,
      `Address / relocation: ${answers.adresse ?? ''}`,
      `Visa: ${answers.visa ?? ''}`,
      `Phone: ${answers.telephone ?? ''}`,
      '',
    ]
    for (let i = 0; i < nb; i++) {
      lines.push(`Person ${i + 1}`)
      lines.push(`Surname: ${answers[`p${i}_nom`] ?? ''}`)
      lines.push(`First name: ${answers[`p${i}_prenom`] ?? ''}`)
      lines.push(`Age: ${answers[`p${i}_age`] ?? ''}`)
      lines.push(`Height: ${answers[`p${i}_taille`] ?? ''}`)
      lines.push(`Weight: ${answers[`p${i}_poids`] ?? ''}`)
      lines.push(`Medical history: ${answers[`p${i}_antecedents`] ?? ''}`)
      lines.push('')
    }
    return lines.join('\n').trimEnd()
  },
  displayFallbackMulti: (n) => `Request for ${n} people`,
  displayFallbackDefault: 'Quote',
}

const th: ChatbotCopy = {
  welcome:
    'สวัสดีค่ะ, แบบฟอร์มประกันแบบสั้นจากแทมมี่ ตอบคำถามไม่กี่ข้อ แล้วเราจะโทรกลับ กด «เริ่ม»',
  launcherLabel: 'ใบเสนอราคาประกัน',
  launcherAria: 'เปิดแบบฟอร์มประกัน',
  panelTitle: 'ใบเสนอราคาประกัน',
  minimizeAria: 'ย่อแชท',
  minimizeTitle: 'ย่อ',
  startButton: 'เริ่ม',
  placeholder: 'คำตอบของคุณ…',
  send: 'ส่ง',
  sending: 'กำลังส่ง…',
  minimizeWindow: 'ย่อหน้าต่าง',
  restart: 'เริ่มใหม่',
  householdQuestion: 'ต้องการประกันสำหรับคนเดียวหรือหลายคน?',
  householdOne: 'คนเดียว',
  householdTwo: 'สองคน',
  householdThreePlus: 'สามคนขึ้นไป',
  householdOneUser: 'คนเดียว',
  householdTwoUser: 'สองคน',
  householdThreePlusUser: 'สามคนขึ้นไป',
  askCountMany: 'ต้องการประกันกี่คนรวม? (ตัวเลข อย่างน้อย 3)',
  countMinError: 'กรุณาระบุจำนวนเต็มอย่างน้อย 3',
  introMulti: (n) =>
    `ได้ค่ะ อีเมล ที่อยู่ วีซ่า (ใช้ร่วมกัน) จากนั้น ${n} คน: นามสกุล ชื่อ อายุ ส่วนสูง น้ำหนัก ประวัติการรักษา แล้วเบอร์โทร`,
  introSingle:
    'ได้ค่ะ อีเมล ที่อยู่ วีซ่า นามสกุล ชื่อ อายุ ส่วนสูง น้ำหนัก ประวัติการรักษา แล้วเบอร์โทร',
  shared: {
    email: 'อีเมลสำหรับรับข้อมูลคืออะไร?',
    adresse: 'ที่อยู่ปัจจุบันในประเทศไทย หรือวางแผนจะย้ายมาไทย?',
    visa: 'ประเภทวีซ่าที่มีหรือวางแผน (สำหรับครัวเรือน / สถานการณ์หลัก)?',
    telephone:
      'สุดท้าย เบอร์โทร (พร้อมรหัสประเทศ เช่น +66 …) เพื่อให้เราโทรกลับ?',
  },
  personPrefix: (n, total) => (total > 1 ? `คนที่ ${n} จาก ${total}, ` : ''),
  personQuestions: {
    nom: 'นามสกุล?',
    prenom: 'ชื่อ?',
    age: 'อายุเท่าไร?',
    taille: 'ส่วนสูง? (เช่น 175 ซม. หรือ 1.75 ม.)',
    poids: 'น้ำหนัก? (เช่น 70 กก.)',
    antecedents: 'มีประวัติการรักษาหรือไม่? ถ้ามี โปรดอธิบาย',
  },
  emailInvalid: 'อีเมลไม่ถูกต้อง กรุณากรอกอีเมลที่ใช้ได้',
  phoneInvalid:
    'กรุณาระบุเบอร์ที่ถูกต้องพร้อมรหัสประเทศ (เช่น +33612345678 หรือ +66634432634)',
  missingKeyStart: (block) =>
    `แบบฟอร์มยังส่งคำขอจากเวอร์ชันนี้ไม่ได้\n\n${block}`,
  missingKeyAfter: (block) =>
    `ขอบคุณสำหรับคำตอบ! เราส่งแฟ้มจากแบบฟอร์มไม่ได้\n\n${block}`,
  missingKeyAdminDev:
    '[พัฒนา] เพิ่ม PUBLIC_WEB3FORMS_ACCESS_KEY ใน .env หรือ Cloudflare Pages, ชื่อต้องขึ้นต้นด้วย PUBLIC_ แล้ว deploy ใหม่',
  missingKeyAdminProd:
    'ผู้ดูแลเว็บ: Cloudflare Pages → Settings → Environment variables → เพิ่ม PUBLIC_WEB3FORMS_ACCESS_KEY แล้ว deploy ใหม่',
  missingKeyContactLine: 'ใช้แบบฟอร์ม «ติดต่อ» ด้านล่างหน้า',
  successMessage:
    '✅ ขอบคุณค่ะ! เราได้รับคำขอประกันแล้ว จะติดต่อกลับเร็วๆ นี้ คุณสามารถย่อหน้าต่างนี้ได้',
  submitFailed: (detail) =>
    `⚠️ ส่งไม่สำเร็จ${detail} ลองอีกครั้งหรือทัก WhatsApp`,
  networkError: '⚠️ เครือข่ายผิดพลาด ลองอีกครั้งหรือติดต่อทาง WhatsApp',
  web3Subject: 'คำขอประกัน, แบบฟอร์มเว็บ',
  web3FromName: 'Thailande-services, ใบเสนอราคาประกัน',
  buildMessage: (answers, nb) => {
    const lines: string[] = [
      'คำขอประกันใหม่ (แบบฟอร์ม)',
      '',
      `จำนวนผู้เอาประกัน: ${nb}`,
      '',
      'ข้อมูลติดต่อและสถานการณ์',
      `อีเมล: ${answers.email ?? ''}`,
      `ที่อยู่ / การย้ายถิ่น: ${answers.adresse ?? ''}`,
      `วีซ่า: ${answers.visa ?? ''}`,
      `โทรศัพท์: ${answers.telephone ?? ''}`,
      '',
    ]
    for (let i = 0; i < nb; i++) {
      lines.push(`คนที่ ${i + 1}`)
      lines.push(`นามสกุล: ${answers[`p${i}_nom`] ?? ''}`)
      lines.push(`ชื่อ: ${answers[`p${i}_prenom`] ?? ''}`)
      lines.push(`อายุ: ${answers[`p${i}_age`] ?? ''}`)
      lines.push(`ส่วนสูง: ${answers[`p${i}_taille`] ?? ''}`)
      lines.push(`น้ำหนัก: ${answers[`p${i}_poids`] ?? ''}`)
      lines.push(`ประวัติการรักษา: ${answers[`p${i}_antecedents`] ?? ''}`)
      lines.push('')
    }
    return lines.join('\n').trimEnd()
  },
  displayFallbackMulti: (n) => `คำขอ ${n} คน`,
  displayFallbackDefault: 'ใบเสนอราคา',
}

export const chatbotTranslations: Record<Lang, ChatbotCopy> = { fr, en, th }

export function getChatbotCopy(lang: Lang): ChatbotCopy {
  return chatbotTranslations[lang]
}

export function questionForPerson(
  copy: ChatbotCopy,
  nb: number,
  personIndex: number,
  field: PersonField,
): string {
  const n = personIndex + 1
  return `${copy.personPrefix(n, nb)}${copy.personQuestions[field]}`
}

export function storageKeyForLang(lang: Lang): string {
  return `chatbot_v2_state_${lang}`
}
