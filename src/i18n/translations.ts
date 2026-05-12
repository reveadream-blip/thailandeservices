export type Lang = 'fr' | 'en' | 'th'

export const LANGS: Lang[] = ['fr', 'en', 'th']

export const LANG_LABELS: Record<Lang, string> = {
  fr: 'FR',
  en: 'EN',
  th: 'TH',
}

export const translations = {
  fr: {
    meta: {
      title: 'Thailande Services | Assurance, Immobilier & Interprète Français-Thaï à Phuket',
      description:
        "Services d'expatriation à Phuket et partout en Thaïlande. Assurance santé, expertise immobilière et interprète Français-Thaï pour vos démarches. Votre partenaire de confiance francophone.",
      /** Accueil FR uniquement : variantes OG plus courtes (réseaux sociaux). */
      ogTitle: 'Thailande Services | Assurance, Immobilier & Interprète à Phuket',
      ogDescription:
        "Besoin d'une assurance, d'un bien immobilier ou d'un interprète Français-Thaï ? Services experts partout en Thaïlande.",
    },
    nav: {
      services: 'Services',
      emergency: 'Urgences',
      partners: 'Nos partenaires',
      contact: 'Contact',
      whatsapp: 'WhatsApp',
      contactForm: 'Formulaire de contact',
      /** Libellé court pour la barre de menu desktop */
      menuContact: 'Contact',
      skipContent: 'Aller au contenu',
      viewCategory: 'Voir la catégorie',
    },
    homeSlider: {
      slide1: {
        title: "Besoin d'une interprète!",
        subtitle: 'Francais, Anglais, Thai',
        cta: 'Contactez Tammy!',
      },
      slide2: {
        eyebrow: 'Votre accès privilégié à l’immobilier thaïlandais',
        title: 'Investir en Thaïlande!',
        body:
          'Nous sommes fiers de collaborer avec une agence immobilière locale de confiance. Grâce à ce partenariat, vous bénéficiez d’un accompagnement personnalisé et d’opportunités uniques pour investir, acheter ou louer sur l\'île de Phuket.',
        cta: 'Contactez Thomas!',
      },
      slide3: {
        title: "Besoin d'une assurance!",
        subtitle: 'Besoin d\'une assurance santé vie! assurer votre voiture ou votre maison?',
        cta: 'Contactez Natcha!',
      },
      prev: 'Diapositive précédente',
      next: 'Diapositive suivante',
    },
    hero: {
      eyebrow: 'Votre accès privilégié à la Thaïlande',
      titleLine1: "Besoin d'un interprète ?",
      titleLine2: 'Français · Anglais · Thaï',
      subtitle:
        "Interprétariat, immobilier, assurance : nous vous accompagnons pour votre installation, vos démarches et vos investissements sur l'île de Phuket.",
      ctaContact: 'Nous contacter',
      ctaWhatsapp: 'WhatsApp direct',
    },
    services: {
      title: 'Nos services',
      subtitle: 'Trois expertises pour votre installation à Phuket',
      realEstate: {
        title: 'Achat - Location - Vente - Gestion',
        tagline: 'Immobilier',
        description:
          'Vous recherchez une location, achat, vente ou gestion de votre bien! Thomas depuis son agence immobilière vous aidera!',
        cta: 'Nous contacter',
      },
      insurance: {
        title: 'Assurance santé, auto, maison.',
        tagline: 'Assurance',
        description:
          "Nous collaborons avec Tammy, agent d'assurance sur Phuket. Vous n'aurez aucun mal à communiquer car Tammy parle Anglais et Français couramment.",
        cta: 'Nous contacter',
      },
      interpreter: {
        title: 'Interprète français-anglais-thaï',
        tagline: 'Interprétariat',
        description:
          "Vous avez besoin d'un interprète, traducteur, français-anglais-thaï! Tammy est là pour vous!",
        cta: 'Nous contacter',
      },
    },
    emergency: {
      eyebrow: 'Disponible 7j/7',
      title: "Besoin d'un interprète en urgence!",
      description:
        "Nous avons beaucoup de demandes de traductions pour des accidents, urgences médicales ou avec la police. Un interprète vous accompagnera. Appelez le numéro whatsapp en tête du site!",
      tags: ['Urgence medicale - Accident - Police'],
      cta: 'Appelez-nous avec WhatsApp',
      features: {
        urgent: {
          title: 'Urgence medicale - Accident - Police',
          desc: "Besoin d'un interprète en urgence!",
          linkLabel: 'Appelez-nous avec WhatsApp',
        },
        business: {
          title: 'Nous parlons de vous!',
          desc: 'Si vous êtes une entreprise sérieuse en Thaïlande, nous vous recommanderons.',
          linkLabel: 'Contactez-nous',
        },
        consulate: {
          title: 'Consulat de France à Phuket',
          desc: '',
          linkLabel: 'Informations',
        },
      },
    },
    partners: {
      title: 'Nos recommandations',
      subtitle:
        'Nous vous mettons en relation avec des professionnels de confiance pour votre installation en Thaïlande.',
      tammy: {
        name: 'Tammy',
        role: 'Agent AXA · Interprète FR-EN-TH',
        description:
          "« Bonjour, je m'appelle Tammy. Je suis agent AXA Krung Thai et je peux vous conseiller pour votre assurance santé ou autre. J'accompagne aussi les francophones en tant qu'interprète français, anglais, thaï. »",
      },
      thomas: {
        name: 'Thomas',
        role: 'Agent immobilier à Phuket & Krabi',
        description:
          "« Bonjour, je m'appelle Thomas, agent immobilier à Phuket et Krabi. Vente, achat, location : nous offrons un service personnalisé pour chaque client. »",
      },
      consulate: {
        name: 'Consulat de France',
        role: 'Phuket',
        description:
          "Si vous êtes une entreprise sérieuse établie en Thaïlande et souhaitez figurer dans nos recommandations, n'hésitez pas à nous contacter.",
      },
    },
    contact: {
      title: 'Contactez-nous',
      subtitle:
        "Remplissez le formulaire ou utilisez WhatsApp pour une réponse rapide. Nous vous répondons sous 24 heures, 7 jours sur 7.",
      form: {
        name: 'Votre nom',
        email: 'Votre email',
        phone: 'Votre téléphone (optionnel)',
        subject: 'Sujet',
        subjectOptions: {
          realEstate: 'Immobilier',
          insurance: 'Assurance',
          interpreter: 'Interprète',
          emergency: 'Urgence',
          other: 'Autre',
        },
        message: 'Votre message',
        submit: 'Envoyer le message',
        sending: 'Envoi en cours…',
        success: 'Message envoyé ! Nous vous répondons très vite.',
        successSpamHint:
          'Si vous ne recevez rien : vérifiez les indésirables (spam), l’onglet Promotions (Gmail), et attendez quelques minutes. L’expéditeur peut être Web3Forms ou une adresse « no-reply ». Le propriétaire du site doit aussi vérifier sur app.web3forms.com que la clé du formulaire est active et que l’email de notification est confirmé.',
        error: 'Erreur lors de l\'envoi. Merci d\'utiliser WhatsApp ou de réessayer.',
        captchaRequired: 'Merci de valider la case anti-robot avant d’envoyer.',
      },
      directContact: 'Ou contactez-nous directement',
      writtenMessage: 'Message écrit',
      writtenMessageSub: 'Utilisez le formulaire à droite.',
      whatsapp: 'WhatsApp',
    },
    footer: {
      tagline: 'Votre accès privilégié aux services en Thaïlande',
      rights: 'Tous droits réservés',
      madeIn: 'Phuket, Thaïlande',
      contactBlockTitle: 'Contacts',
      byWhatsapp: 'Par WhatsApp',
      moreInfo: 'Pour plus d’informations!',
      archives: 'Archives',
    },
  },

  en: {
    meta: {
      title: 'Home - Thailande-services.fr',
      description:
        'Phuket, Thailand: real estate, AXA health insurance, FR-EN-TH interpreter, expatriation and guides for French speakers.',
    },
    nav: {
      services: 'Services',
      emergency: 'Emergency',
      partners: 'Partners',
      contact: 'Contact',
      whatsapp: 'WhatsApp',
      contactForm: 'Contact form',
      menuContact: 'Contact',
      skipContent: 'Skip to content',
      viewCategory: 'View category',
    },
    homeSlider: {
      slide1: {
        title: 'Need an interpreter!',
        subtitle: 'French, English, Thai',
        cta: 'Contact Tammy!',
      },
      slide2: {
        eyebrow: 'Your gateway to Thai real estate',
        title: 'Invest in Thailand!',
        body:
          'We are proud to work with a trusted local agency. Through this partnership, you get personalized support and unique opportunities to invest, buy or rent on Phuket.',
        cta: 'Contact Thomas!',
      },
      slide3: {
        title: 'Need insurance!',
        subtitle: 'Health or life insurance? Car or home?',
        cta: 'Contact Natcha!',
      },
      prev: 'Previous slide',
      next: 'Next slide',
    },
    hero: {
      eyebrow: 'Your privileged access to Thailand',
      titleLine1: 'Need an interpreter?',
      titleLine2: 'French · English · Thai',
      subtitle:
        'Interpretation, real estate, insurance: we support you with your move, paperwork and investments on Phuket island.',
      ctaContact: 'Contact us',
      ctaWhatsapp: 'WhatsApp now',
    },
    services: {
      title: 'Our services',
      subtitle: 'Three areas of expertise, one trusted contact',
      realEstate: {
        title: 'Real estate in Phuket & Krabi',
        tagline: 'Buy · Rent · Sell · Manage',
        description:
          "We work with a trusted local real estate agency. Enjoy personalized support and unique opportunities to invest, buy or rent on Phuket island.",
        cta: 'Learn more',
      },
      insurance: {
        title: 'Health, car & home insurance',
        tagline: 'AXA Krung Thai partnership',
        description:
          "Need health, life, car or home insurance? Tammy, AXA agent in Phuket, advises you in French, English and Thai to find the best coverage.",
        cta: 'Get a quote',
      },
      interpreter: {
        title: 'Trilingual interpreter',
        tagline: 'French · English · Thai',
        description:
          "Translations, administrative support, medical appointments, banking or real estate procedures: Tammy assists you everywhere in Phuket.",
        cta: 'Book an interpreter',
      },
    },
    emergency: {
      eyebrow: 'Available 7/7',
      title: 'Need an interpreter urgently!',
      description:
        'We receive many requests for accidents, medical emergencies or police matters. An interpreter will go with you. Call the WhatsApp number at the top of the site!',
      tags: ['Medical emergency - Accident - Police'],
      cta: 'WhatsApp us',
      features: {
        urgent: {
          title: 'Medical emergency - Accident - Police',
          desc: 'Need an interpreter urgently!',
          linkLabel: 'WhatsApp us',
        },
        business: {
          title: 'We talk about you!',
          desc: 'If you are a serious business in Thailand, we will recommend you.',
          linkLabel: 'Contact us',
        },
        consulate: {
          title: 'French Consulate in Phuket',
          desc: '',
          linkLabel: 'Information',
        },
      },
    },
    partners: {
      title: 'Our recommendations',
      subtitle:
        'We connect you with trusted professionals for your move to Thailand.',
      tammy: {
        name: 'Tammy',
        role: 'AXA Agent · Interpreter FR-EN-TH',
        description:
          "\"Hi, my name is Tammy. I'm an AXA Krung Thai agent and I can advise you on health or other insurance. I also assist French speakers as an interpreter in French, English and Thai.\"",
      },
      thomas: {
        name: 'Thomas',
        role: 'Real estate agent in Phuket & Krabi',
        description:
          "\"Hi, my name is Thomas, real estate agent in Phuket and Krabi. Sales, purchases, rentals: we offer personalized service to every client.\"",
      },
      consulate: {
        name: 'French Consulate',
        role: 'Phuket',
        description:
          "If you are a serious business established in Thailand and wish to appear in our recommendations, feel free to contact us.",
      },
    },
    contact: {
      title: 'Contact us',
      subtitle:
        'Fill the form or use WhatsApp for a quick answer. We reply within 24 hours, 7 days a week.',
      form: {
        name: 'Your name',
        email: 'Your email',
        phone: 'Your phone (optional)',
        subject: 'Subject',
        subjectOptions: {
          realEstate: 'Real estate',
          insurance: 'Insurance',
          interpreter: 'Interpreter',
          emergency: 'Emergency',
          other: 'Other',
        },
        message: 'Your message',
        submit: 'Send message',
        sending: 'Sending…',
        success: 'Message sent! We will reply very soon.',
        successSpamHint:
          'If nothing arrives: check spam / Promotions (Gmail) and wait a few minutes. The sender may be Web3Forms or a no-reply address. The site owner should verify on app.web3forms.com that the form key is active and the notification email is confirmed.',
        error: 'Error while sending. Please use WhatsApp or try again.',
        captchaRequired: 'Please complete the anti-spam check before sending.',
      },
      directContact: 'Or contact us directly',
      writtenMessage: 'Written message',
      writtenMessageSub: 'Use the form on the right.',
      whatsapp: 'WhatsApp',
    },
    footer: {
      tagline: 'Your privileged access to services in Thailand',
      rights: 'All rights reserved',
      madeIn: 'Phuket, Thailand',
      contactBlockTitle: 'Contact',
      byWhatsapp: 'By WhatsApp',
      moreInfo: 'More information',
      archives: 'Archives',
    },
  },

  th: {
    meta: {
      title: 'หน้าแรก - Thailande-services.fr',
      description:
        'ภูเก็ต ประเทศไทย — อสังหาริมทรัพย์ ประกันสุขภาพ AXA ล่าม FR-EN-TH และคู่มือสำหรับชาวฝรั่งเศส',
    },
    nav: {
      services: 'บริการ',
      emergency: 'ฉุกเฉิน',
      partners: 'พันธมิตร',
      contact: 'ติดต่อ',
      whatsapp: 'วอทส์แอป',
      contactForm: 'แบบฟอร์มติดต่อ',
      menuContact: 'ติดต่อ',
      skipContent: 'ข้ามไปยังเนื้อหา',
      viewCategory: 'ดูหมวดหมู่',
    },
    homeSlider: {
      slide1: {
        title: 'ต้องการล่าม!',
        subtitle: 'ฝรั่งเศส อังกฤษ ไทย',
        cta: 'ติดต่อแทมมี่!',
      },
      slide2: {
        eyebrow: 'ประตูสู่อสังหาริมทรัพย์ไทย',
        title: 'ลงทุนในประเทศไทย!',
        body:
          'เราภูมิใจที่ได้ร่วมงานกับเอเจนซี่ท้องถิ่นที่ไว้วางใจได้ ผ่านความร่วมมือนี้ คุณจะได้รับการดูแลเป็นรายบุคคลและโอกาสพิเศษในการลงทุน ซื้อ หรือเช่าบนเกาะภูเก็ต',
        cta: 'ติดต่อโทมัส!',
      },
      slide3: {
        title: 'ต้องการประกัน!',
        subtitle: 'ประกันสุขภาพหรือชีวิต? รถหรือบ้าน?',
        cta: 'ติดต่อนัชชา!',
      },
      prev: 'สไลด์ก่อนหน้า',
      next: 'สไลด์ถัดไป',
    },
    hero: {
      eyebrow: 'ประตูสู่ประเทศไทยของคุณ',
      titleLine1: 'ต้องการล่ามใช่ไหม?',
      titleLine2: 'ฝรั่งเศส · อังกฤษ · ไทย',
      subtitle:
        'บริการล่าม อสังหาริมทรัพย์ และประกันภัย เราช่วยเหลือคุณในการย้ายถิ่นฐาน ดำเนินเอกสาร และการลงทุนบนเกาะภูเก็ต',
      ctaContact: 'ติดต่อเรา',
      ctaWhatsapp: 'วอทส์แอปทันที',
    },
    services: {
      title: 'บริการของเรา',
      subtitle: 'ความเชี่ยวชาญสามด้าน ผู้ติดต่อที่ไว้วางใจได้คนเดียว',
      realEstate: {
        title: 'อสังหาริมทรัพย์ภูเก็ตและกระบี่',
        tagline: 'ซื้อ · เช่า · ขาย · บริหาร',
        description:
          'เราร่วมมือกับตัวแทนอสังหาริมทรัพย์ท้องถิ่นที่น่าเชื่อถือ รับบริการดูแลเป็นรายบุคคลและโอกาสพิเศษในการลงทุน ซื้อ หรือเช่าบนเกาะภูเก็ต',
        cta: 'ดูรายละเอียด',
      },
      insurance: {
        title: 'ประกันสุขภาพ รถยนต์ และบ้าน',
        tagline: 'ความร่วมมือกับ AXA กรุงไทย',
        description:
          'ต้องการประกันสุขภาพ ชีวิต รถยนต์ หรือบ้าน? แทมมี่ ตัวแทน AXA ที่ภูเก็ต ให้คำปรึกษาเป็นภาษาฝรั่งเศส อังกฤษ และไทย เพื่อหาความคุ้มครองที่ดีที่สุด',
        cta: 'ขอใบเสนอราคา',
      },
      interpreter: {
        title: 'ล่ามสามภาษา',
        tagline: 'ฝรั่งเศส · อังกฤษ · ไทย',
        description:
          'แปลเอกสาร ช่วยเหลือด้านการปกครอง นัดหมายทางการแพทย์ ธุรกรรมธนาคารหรืออสังหาริมทรัพย์: แทมมี่ช่วยเหลือคุณได้ทุกที่ในภูเก็ต',
        cta: 'จองล่าม',
      },
    },
    emergency: {
      eyebrow: 'พร้อมบริการ 7 วัน',
      title: 'ต้องการล่ามฉุกเฉิน!',
      description:
        'เรามีคำขอแปลจำนวนมากสำหรับอุบัติเหตุ เหตุฉุกเฉินทางการแพทย์ หรือตำรวจ ล่ามจะไปกับคุณ โทรหมายเลขวอทส์แอปที่หัวเว็บ!',
      tags: ['เหตุฉุกเฉินทางการแพทย์ - อุบัติเหตุ - ตำรวจ'],
      cta: 'วอทส์แอป',
      features: {
        urgent: {
          title: 'เหตุฉุกเฉินทางการแพทย์ - อุบัติเหตุ - ตำรวจ',
          desc: 'ต้องการล่ามด่วน!',
          linkLabel: 'วอทส์แอป',
        },
        business: {
          title: 'เราพูดถึงคุณ!',
          desc: 'หากคุณเป็นธุรกิจที่จริงจังในประเทศไทย เราจะแนะนำคุณ',
          linkLabel: 'ติดต่อเรา',
        },
        consulate: {
          title: 'สถานกงสุลฝรั่งเศสที่ภูเก็ต',
          desc: '',
          linkLabel: 'ข้อมูล',
        },
      },
    },
    partners: {
      title: 'คำแนะนำของเรา',
      subtitle:
        'เราเชื่อมโยงคุณกับมืออาชีพที่ไว้วางใจได้สำหรับการย้ายไปประเทศไทย',
      tammy: {
        name: 'แทมมี่',
        role: 'ตัวแทน AXA · ล่าม FR-EN-TH',
        description:
          '"สวัสดีค่ะ ดิฉันชื่อแทมมี่ ดิฉันเป็นตัวแทน AXA กรุงไทย และสามารถให้คำปรึกษาด้านประกันสุขภาพและประกันอื่น ๆ นอกจากนี้ดิฉันยังช่วยชาวฝรั่งเศสในฐานะล่ามภาษาฝรั่งเศส อังกฤษ ไทย"',
      },
      thomas: {
        name: 'โทมัส',
        role: 'นายหน้าอสังหาริมทรัพย์ ภูเก็ตและกระบี่',
        description:
          '"สวัสดีครับ ผมชื่อโทมัส นายหน้าอสังหาริมทรัพย์ที่ภูเก็ตและกระบี่ ขาย ซื้อ เช่า: เราให้บริการดูแลเป็นรายบุคคลสำหรับลูกค้าทุกท่าน"',
      },
      consulate: {
        name: 'สถานกงสุลฝรั่งเศส',
        role: 'ภูเก็ต',
        description:
          'หากคุณเป็นธุรกิจที่จริงจังและตั้งอยู่ในประเทศไทย และต้องการปรากฏในคำแนะนำของเรา ติดต่อเราได้เลย',
      },
    },
    contact: {
      title: 'ติดต่อเรา',
      subtitle:
        'กรอกแบบฟอร์มหรือใช้วอทส์แอปเพื่อการตอบกลับที่รวดเร็ว เราตอบกลับภายใน 24 ชั่วโมง 7 วันต่อสัปดาห์',
      form: {
        name: 'ชื่อของคุณ',
        email: 'อีเมลของคุณ',
        phone: 'เบอร์โทรศัพท์ (ไม่บังคับ)',
        subject: 'หัวข้อ',
        subjectOptions: {
          realEstate: 'อสังหาริมทรัพย์',
          insurance: 'ประกันภัย',
          interpreter: 'ล่าม',
          emergency: 'ฉุกเฉิน',
          other: 'อื่น ๆ',
        },
        message: 'ข้อความของคุณ',
        submit: 'ส่งข้อความ',
        sending: 'กำลังส่ง…',
        success: 'ส่งข้อความสำเร็จ! เราจะตอบกลับเร็ว ๆ นี้',
        successSpamHint:
          'หากไม่ได้รับอีเมล: ตรวจสอบสแปม / โปรโมชัน (Gmail) และรอสักครู่ ผู้ส่งอาจเป็น Web3Forms หรือ no-reply เจ้าของเว็บควรตรวจที่ app.web3forms.com ว่าคีย์ฟอร์มใช้งานได้และอีเมลแจ้งเตือนยืนยันแล้ว',
        error: 'เกิดข้อผิดพลาดในการส่ง กรุณาใช้วอทส์แอปหรือลองใหม่อีกครั้ง',
        captchaRequired: 'กรุณายืนยันช่องป้องกันสแปมก่อนส่ง',
      },
      directContact: 'หรือติดต่อเราโดยตรง',
      writtenMessage: 'ข้อความทางอีเมล',
      writtenMessageSub: 'ใช้แบบฟอร์มทางขวา',
      whatsapp: 'วอทส์แอป',
    },
    footer: {
      tagline: 'ประตูสู่บริการในประเทศไทยของคุณ',
      rights: 'สงวนลิขสิทธิ์',
      madeIn: 'ภูเก็ต ประเทศไทย',
      contactBlockTitle: 'ติดต่อ',
      byWhatsapp: 'ทางวอทส์แอป',
      moreInfo: 'ข้อมูลเพิ่มเติม',
      archives: 'หมวดหมู่',
    },
  },
} as const

export type Translation = typeof translations.fr
