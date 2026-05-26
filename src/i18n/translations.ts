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
      title: 'Assurance santé Phuket | Immobilier & interprète thaï FR-EN',
      description:
        "Assurance santé Phuket et Thaïlande, interprète thaï français anglais, immobilier à Phuket et Krabi. Maisons à vendre, location et accompagnement expatriation francophone.",
      /** Accueil FR uniquement : variantes OG plus courtes (réseaux sociaux). */
      ogTitle: 'Assurance santé Phuket · Immobilier · Interprète thaï FR-EN',
      ogDescription:
        "Assurance santé Thaïlande, interprète thaï français anglais, immobilier Phuket & Krabi — maisons à vendre et location.",
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
      actualites: 'Actualités',
      menu: {
        groups: {
          adresses: 'Adresses utiles',
          stores: 'Bonnes adresses',
          insurance: 'Assurance & santé',
          expat: 'Expatriation',
        },
      },
    },
    categories: {
      labels: {
        'adresses-utiles': 'Adresses Utiles à Phuket',
        'les-bonnes-adresses-francophones': 'Les bonnes adresses Francophones à Phuket',
        'assurance-sante-et-biens-en-thailande': 'Assurance Santé et Biens à Phuket',
        'services-expatriation-en-thailande': 'Services expatriation en Thaïlande',
      },
    },
    articlePage: {
      home: 'Accueil',
      breadcrumbLabel: "Fil d'Ariane",
      faqTitle: 'On nous demande souvent',
      relatedTitle: 'D’autres pages utiles',
      frenchBodyNotice:
        'Les adresses détaillées plus bas sont souvent en français (comme sur place). L’essentiel est résumé juste au-dessus.',
    },
    categoryPage: {
      home: 'Accueil',
      breadcrumbLabel: "Fil d'Ariane",
      faqTitle: 'En bref',
      articleCountOne: 'article',
      articleCountMany: 'articles',
    },
    contactPage: {
      home: 'Accueil',
      breadcrumbLabel: "Fil d'Ariane",
      breadcrumbContact: 'Nous écrire',
      pageTitle: 'Contact assurance, immo & interprète',
      pageH1: 'Écrire à Tammy ou Thomas',
      metaDescription:
        'WhatsApp ou formulaire : assurance AXA, interprète, immo Phuket/Krabi. On répond dès qu’on peut.',
    },
    actualites: {
      pageTitle: 'Actualités Phuket & Thaïlande',
      metaDescription:
        'Actualités et guides pour expatriés à Phuket : assurance santé, immobilier, interprète et vie en Thaïlande.',
      h1: 'Actualités',
      lead:
        'Nouvelles du site et retours d’expérience sur l’île — assurance, immo, interprète. Pas de pub déguisée, juste ce qu’on met à jour.',
      empty: 'Aucun article publié pour le moment.',
      home: 'Accueil',
      breadcrumbLabel: "Fil d'Ariane",
      relatedTitle: 'Autres actualités',
      backToList: '← Toutes les actualités',
    },
    homeSlider: {
      slide1: {
        title: 'Interprète thaï français anglais à Phuket',
        subtitle: 'Urgences, hôpital, police — accompagnement francophone',
        cta: 'Contactez Tammy!',
      },
      slide2: {
        eyebrow: 'Immobilier à Phuket et Krabi',
        title: 'Maison à vendre à Phuket & Krabi',
        body:
          'Achat, location, vente et gestion avec une agence locale de confiance. Villas, appartements et investissement immobilier sur Phuket et Krabi.',
        cta: 'Contactez Thomas!',
      },
      slide3: {
        title: 'Assurance santé Phuket',
        subtitle: 'Assurance santé Thaïlande — auto, maison et vie',
        cta: 'Contactez Tammy!',
      },
      prev: 'Diapositive précédente',
      next: 'Diapositive suivante',
    },
    hero: {
      eyebrow: 'Sur place à Phuket',
      /** H1 unique du carrousel (SEO). */
      seoH1: 'Assurance santé Phuket & Thaïlande · Immobilier Phuket & Krabi',
      seoH1Sub: 'Interprète thaï français anglais — maisons à vendre et location',
      titleLine1: "Besoin d'un interprète ?",
      titleLine2: 'Français · Anglais · Thaï',
      subtitle:
        "Tammy (assurance + interprète) et Thomas (immo) répondent en français. Urgence, visa, achat maison : le numéro WhatsApp est en haut de page.",
      ctaContact: 'Nous contacter',
      ctaWhatsapp: 'WhatsApp direct',
    },
    services: {
      title: 'Assurance santé, immobilier et interprète',
      subtitle: 'Deux personnes sur l’île, trois métiers',
      realEstate: {
        title: 'Immobilier à Phuket et Krabi',
        tagline: 'Maison à vendre & location',
        description:
          'Maison à vendre à Phuket et Krabi : achat, location, vente et gestion avec Thomas et son agence immobilière locale.',
        cta: 'Nous contacter',
      },
      insurance: {
        title: 'Assurance santé Phuket & Thaïlande',
        tagline: 'Assurance santé',
        description:
          "Assurance santé à Phuket et en Thaïlande (auto, maison, vie). Tammy, agent AXA, vous conseille en français et en anglais.",
        cta: 'Nous contacter',
      },
      interpreter: {
        title: 'Interprète thaï français anglais',
        tagline: 'Interprétariat',
        description:
          "Interprète et traducteur thaï, français et anglais à Phuket : démarches, urgences médicales et police.",
        cta: 'Nous contacter',
      },
    },
    seoIntro: {
      eyebrow: 'Le site en deux mots',
      title: 'Ce qu’on fait vraiment à Phuket',
      paragraphs: [
        'On n’est pas une plateforme anonyme : <strong>Tammy</strong> gère l’assurance (AXA) et l’interprétariat, <strong>Thomas</strong> l’immobilier à Phuket et Krabi. Le reste ce sont des adresses qu’on partage entre francophones.',
        'Hôpitaux, urgences, ostéo : <a href="/hopitaux-a-phuket/">liste ici</a>, <a href="/numeros-durgences/">numéros 1155 / 1669</a>, <a href="/osteopathe-francais-a-phuket/">Dr Tur</a>. Besoin d’aide tout de suite ? WhatsApp en haut.',
      ],
      links: [
        { href: '/assurance-sante-thailande-phuket/', label: 'Assurance santé' },
        { href: '/interprete-thai-francais-anglais-a-phuket/', label: 'Interprète thaï FR-EN' },
        { href: '/expatriation-a-phuket-besoin-achat-immobilier-ou-locatif/', label: 'Immobilier Phuket' },
        { href: '/category/adresses-utiles/', label: 'Adresses utiles' },
        { href: '/formulaire-de-contact/', label: 'Contact' },
      ],
    },
    emergency: {
      eyebrow: 'Disponible 7j/7',
      title: 'Interprète thaï français anglais — urgences',
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
        'Les deux visages du site — le reste ce sont des fiches adresses qu’on met à jour au fil de l’eau.',
      tammy: {
        name: 'Tammy',
        role: 'Agent AXA · Interprète FR-EN-TH',
        description:
          "« Bonjour, moi c’est Tammy. Agent AXA sur l’île, et quand il faut traduire à l’hôpital ou chez la police, je viens. Appelez le WhatsApp du site, on verra si je suis libre. »",
      },
      thomas: {
        name: 'Thomas',
        role: 'Agent immobilier à Phuket & Krabi',
        description:
          "« Thomas — immo Rawai, Chalong, Krabi. J’ai l’habitude des dossiers étrangers : condo, location longue, parfois villa en leasehold. On se parle avant de visiter. »",
      },
      consulate: {
        name: 'Consulat de France',
        role: 'Phuket',
        description:
          'Vous avez une activité pro sur l’île et vous voulez apparaître ici ? Écrivez-nous, on regarde au cas par cas.',
      },
    },
    contact: {
      title: 'Contactez-nous',
      subtitle:
        'Formulaire ou WhatsApp — en général on répond dans la journée, parfois le soir si on est sur le terrain.',
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
      tagline: 'Assurance · Immo · Interprète — Phuket',
      rights: 'Tous droits réservés',
      madeIn: 'Phuket, Thaïlande',
      contactBlockTitle: 'Contacts',
      byWhatsapp: 'Par WhatsApp',
      moreInfo: 'Pour plus d’informations!',
      archives: 'Archives',
      archiveItems: {
        adresses: 'Adresses Utiles à Phuket',
        stores: 'Les bonnes adresses Francophones à Phuket',
        insurance: 'Assurance Santé et Biens à Phuket',
        expat: 'Services expatriation en Thaïlande',
      },
    },
  },

  en: {
    meta: {
      title: 'Health insurance Phuket Thailand | Real estate & interpreter',
      description:
        'Health insurance Phuket and Thailand, Thai-French-English interpreter, real estate in Phuket and Krabi. Homes for sale, rentals and expat support.',
      ogTitle: 'Health insurance Phuket · Real estate · Interpreter FR-EN-TH',
      ogDescription:
        'Phuket & Krabi real estate, Thailand health insurance, Thai-French-English interpreter.',
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
      actualites: 'News',
      menu: {
        groups: {
          adresses: 'Useful addresses',
          stores: 'Top picks',
          insurance: 'Insurance & health',
          expat: 'Expat services',
        },
      },
    },
    categories: {
      labels: {
        'adresses-utiles': 'Useful addresses in Phuket',
        'les-bonnes-adresses-francophones': 'Francophone-friendly places',
        'assurance-sante-et-biens-en-thailande': 'Health & property insurance',
        'services-expatriation-en-thailande': 'Expat services in Thailand',
      },
    },
    articlePage: {
      home: 'Home',
      breadcrumbLabel: 'Breadcrumb',
      faqTitle: 'People often ask',
      relatedTitle: 'More pages worth bookmarking',
      frenchBodyNotice:
        'The long address list below is usually in French (how we got it locally). The important bits are up top.',
    },
    categoryPage: {
      home: 'Home',
      breadcrumbLabel: 'Breadcrumb',
      faqTitle: 'Quick notes',
      articleCountOne: 'article',
      articleCountMany: 'articles',
    },
    contactPage: {
      home: 'Home',
      breadcrumbLabel: 'Breadcrumb',
      breadcrumbContact: 'Get in touch',
      pageTitle: 'Contact — insurance, real estate & interpreter',
      pageH1: 'Message Tammy or Thomas',
      metaDescription:
        'WhatsApp or form: AXA insurance, interpreter, Phuket/Krabi property. We reply when we can.',
    },
    actualites: {
      pageTitle: 'News — Phuket & Thailand',
      metaDescription:
        'News and guides for expats in Phuket: health insurance, real estate, interpreter services and life in Thailand.',
      h1: 'News',
      lead:
        'Site news and island tips — insurance, property, interpreter. No filler articles, just what we update.',
      empty: 'No articles published yet.',
      home: 'Home',
      breadcrumbLabel: 'Breadcrumb',
      relatedTitle: 'More news',
      backToList: '← All news',
    },
    homeSlider: {
      slide1: {
        title: 'Need an interpreter!',
        subtitle: 'French, English, Thai',
        cta: 'Contact Tammy!',
      },
      slide2: {
        eyebrow: 'Phuket & Krabi property',
        title: 'Buy or rent with Thomas',
        body:
          'Rawai, Chalong, Kata, Ao Nang… Thomas shows homes for sale and long rentals — he’s used to foreign buyers and leasehold questions.',
        cta: 'Contact Thomas!',
      },
      slide3: {
        title: 'Health insurance on the island',
        subtitle: 'AXA, hospital cover, sometimes car or home',
        cta: 'Contact Tammy!',
      },
      prev: 'Previous slide',
      next: 'Next slide',
    },
    hero: {
      eyebrow: 'Based in Phuket',
      seoH1: 'Health insurance Phuket & Thailand · Real estate Phuket & Krabi',
      seoH1Sub: 'Thai-French-English interpreter — homes for sale and rent',
      titleLine1: 'Need an interpreter?',
      titleLine2: 'French · English · Thai',
      subtitle:
        'Tammy (insurance + interpreter) and Thomas (property) answer in French. Emergency, visa, buying a home — WhatsApp is at the top.',
      ctaContact: 'Contact us',
      ctaWhatsapp: 'WhatsApp now',
    },
    services: {
      title: 'Our services',
      subtitle: 'Two people on the island, three jobs',
      realEstate: {
        title: 'Real estate in Phuket & Krabi',
        tagline: 'Buy · Rent · Sell · Manage',
        description:
          'Thomas knows Rawai, Chalong and Krabi side — condos, long lets, sometimes leasehold villas. Visits when it makes sense, not spam calls.',
        cta: 'Ask Thomas',
      },
      insurance: {
        title: 'Health, car & home insurance',
        tagline: 'AXA Krung Thai',
        description:
          'Hospital bills hurt without cover. Tammy compares AXA plans in French (English/Thai too) and stays reachable if something goes wrong.',
        cta: 'Talk to Tammy',
      },
      interpreter: {
        title: 'Trilingual interpreter',
        tagline: 'French · English · Thai',
        description:
          'Hospital, police, immigration, landlord rows — Tammy translates on site. Same WhatsApp as insurance.',
        cta: 'Call Tammy',
      },
    },
    seoIntro: {
      eyebrow: 'In short',
      title: 'What this site is for',
      paragraphs: [
        'Not a faceless portal: <strong>Tammy</strong> does AXA insurance and on-site interpreting, <strong>Thomas</strong> sells and rents property in Phuket/Krabi. Everything else is address lists we share.',
        'Hospitals, 1155/1669, osteopath: <a href="/en/hopitaux-a-phuket/">here</a>, <a href="/en/numeros-durgences/">numbers</a>, <a href="/en/osteopathe-francais-a-phuket/">Dr Tur</a>. Urgent? WhatsApp at the top.',
      ],
      links: [
        { href: '/en/assurance-sante-thailande-phuket/', label: 'Health insurance' },
        { href: '/en/interprete-thai-francais-anglais-a-phuket/', label: 'Interpreter FR-EN-TH' },
        { href: '/en/expatriation-a-phuket-besoin-achat-immobilier-ou-locatif/', label: 'Real estate Phuket' },
        { href: '/en/category/adresses-utiles/', label: 'Useful addresses' },
        { href: '/en/contact/', label: 'Contact' },
      ],
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
        'The two people behind the site — plus address pages we update when numbers change.',
      tammy: {
        name: 'Tammy',
        role: 'AXA Agent · Interpreter FR-EN-TH',
        description:
          "\"Hi, I'm Tammy — AXA on the island, and I translate at hospitals or the police when needed. WhatsApp on the site, we'll see if I'm free.\"",
      },
      thomas: {
        name: 'Thomas',
        role: 'Real estate agent in Phuket & Krabi',
        description:
          '"Thomas, property around Rawai and Krabi. Foreign buyers, condos, long rent — we talk before viewings."',
      },
      consulate: {
        name: 'French Consulate',
        role: 'Phuket',
        description:
          'Run a business here and want a mention? Write us — we decide case by case.',
      },
    },
    contact: {
      title: 'Contact us',
      subtitle:
        'Form or WhatsApp — usually same-day reply, sometimes evening if we’re out on a visit.',
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
      tagline: 'Insurance · Property · Interpreter — Phuket',
      rights: 'All rights reserved',
      madeIn: 'Phuket, Thailand',
      contactBlockTitle: 'Contact',
      byWhatsapp: 'By WhatsApp',
      moreInfo: 'More information',
      archives: 'Archives',
      archiveItems: {
        adresses: 'Useful addresses in Phuket',
        stores: 'Francophone-friendly places',
        insurance: 'Health & property insurance',
        expat: 'Expat services in Thailand',
      },
    },
  },

  th: {
    meta: {
      title: 'ประกันสุขภาพภูเก็ต | อสังหาฯ & ล่ามไทย-ฝรั่งเศส-อังกฤษ',
      description:
        'ประกันสุขภาพภูเก็ตและไทย ล่ามไทยฝรั่งเศสอังกฤษ อสังหาริมทรัพย์ภูเก็ตและกระบี่ บ้านขายและเช่า บริการชาวฝรั่งเศส',
      ogTitle: 'ประกันสุขภาพภูเก็ต · อสังหาฯ · ล่ามไทย FR-EN',
      ogDescription:
        'ประกันสุขภาพไทย ล่ามไทยฝรั่งเศสอังกฤษ อสังหาภูเก็ตกระบี่',
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
      actualites: 'ข่าวสาร',
      menu: {
        groups: {
          adresses: 'ที่อยู่ที่เป็นประโยชน์',
          stores: 'ร้านแนะนำ',
          insurance: 'ประกันและสุขภาพ',
          expat: 'บริการชาวต่างชาติ',
        },
      },
    },
    categories: {
      labels: {
        'adresses-utiles': 'ที่อยู่ที่เป็นประโยชน์ภูเก็ต',
        'les-bonnes-adresses-francophones': 'ร้านแนะนำสำหรับชาวฝรั่งเศส',
        'assurance-sante-et-biens-en-thailande': 'ประกันสุขภาพและทรัพย์สิน',
        'services-expatriation-en-thailande': 'บริการชาวต่างชาติในไทย',
      },
    },
    articlePage: {
      home: 'หน้าแรก',
      breadcrumbLabel: 'เส้นทางนำทาง',
      faqTitle: 'คำถามที่มักได้รับ',
      relatedTitle: 'หน้าอื่นที่เก็บไว้ได้',
      frenchBodyNotice:
        'รายชื่อด้านล่างมักเป็นภาษาฝรั่งเศส (ข้อมูลจากท้องถิ่น) สรุปสำคัญอยู่ด้านบน',
    },
    categoryPage: {
      home: 'หน้าแรก',
      breadcrumbLabel: 'เส้นทางนำทาง',
      faqTitle: 'สรุปสั้นๆ',
      articleCountOne: 'บทความ',
      articleCountMany: 'บทความ',
    },
    contactPage: {
      home: 'หน้าแรก',
      breadcrumbLabel: 'เส้นทางนำทาง',
      breadcrumbContact: 'ติดต่อเรา',
      pageTitle: 'ติดต่อ — ประกัน อสังหาฯ และล่าม',
      pageH1: 'ทักแทมมี่หรือโทมาส',
      metaDescription:
        'วอทส์แอปหรือแบบฟอร์ม: ประกัน AXA ล่าม อสังหาภูเก็ต/กระบี่ ตอบเมื่อว่าง',
    },
    actualites: {
      pageTitle: 'ข่าวสาร — ภูเก็ตและไทย',
      metaDescription:
        'ข่าวและคู่มือสำหรับชาวต่างชาติที่ภูเก็ต: ประกันสุขภาพ อสังหาฯ ล่ามและชีวิตในไทย',
      h1: 'ข่าวสาร',
      lead:
        'ข่าวจากเว็บและประสบการณ์บนเกาะ — ประกัน อสังหาฯ ล่าม อัปเดตเมื่อมีเรื่องใหม่',
      empty: 'ยังไม่มีบทความ',
      home: 'หน้าแรก',
      breadcrumbLabel: 'เส้นทางนำทาง',
      relatedTitle: 'ข่าวอื่นๆ',
      backToList: '← ข่าวสารทั้งหมด',
    },
    homeSlider: {
      slide1: {
        title: 'ต้องการล่าม!',
        subtitle: 'ฝรั่งเศส อังกฤษ ไทย',
        cta: 'ติดต่อแทมมี่!',
      },
      slide2: {
        eyebrow: 'อสังหาภูเก็ตและกระบี่',
        title: 'ซื้อหรือเช่ากับโทมาส',
        body:
          'ราไวย์ ฉลอง กะตะ อ่าวนาง… โทมาสพาดูบ้านขายและเช่าระยะยาว คุ้นกับผู้ซื้อต่างชาติ',
        cta: 'ติดต่อโทมัส!',
      },
      slide3: {
        title: 'ประกันสุขภาพบนเกาะ',
        subtitle: 'AXA โรงพยาบาล บางครั้งรถหรือบ้าน',
        cta: 'ติดต่อแทมมี่!',
      },
      prev: 'สไลด์ก่อนหน้า',
      next: 'สไลด์ถัดไป',
    },
    hero: {
      eyebrow: 'อยู่ภูเก็ตจริงๆ',
      seoH1: 'ประกันสุขภาพภูเก็ตและไทย · อสังหาภูเก็ตและกระบี่',
      seoH1Sub: 'ล่ามไทยฝรั่งเศสอังกฤษ — บ้านขายและเช่า',
      titleLine1: 'ต้องการล่ามใช่ไหม?',
      titleLine2: 'ฝรั่งเศส · อังกฤษ · ไทย',
      subtitle:
        'แทมมี่ (ประกัน+ล่าม) และโทมาส (อสังหาฯ) ตอบภาษาฝรั่งเศส ฉุกเฉิน วีซ่า ซื้อบ้าน — วอทส์แอปด้านบน',
      ctaContact: 'ติดต่อเรา',
      ctaWhatsapp: 'วอทส์แอปทันที',
    },
    services: {
      title: 'บริการของเรา',
      subtitle: 'สองคนบนเกาะ สามงาน',
      realEstate: {
        title: 'อสังหาริมทรัพย์ภูเก็ตและกระบี่',
        tagline: 'ซื้อ · เช่า · ขาย · บริหาร',
        description:
          'โทมาสรู้จักราไวย์ ฉลอง กระบี่ — คอนโด เช่ายาว บางทีวิลล่า leasehold พาดูเมื่อเหมาะ',
        cta: 'ถามโทมาส',
      },
      insurance: {
        title: 'ประกันสุขภาพ รถยนต์ และบ้าน',
        tagline: 'AXA กรุงไทย',
        description:
          'โรงพยาบาลเอกชนแพงถ้าไม่มีประกัน แทมมี่เปรียบแผน AXA ภาษาฝรั่งเศส (อังกฤษ/ไทยได้) ติดตามเคลมได้',
        cta: 'คุยกับแทมมี่',
      },
      interpreter: {
        title: 'ล่ามสามภาษา',
        tagline: 'ฝรั่งเศส · อังกฤษ · ไทย',
        description:
          'โรงพยาบาล ตำรวจ ตรวจคนเข้าเมือง เจ้าของบ้านโต้เถียง — แทมมี่ไปล่ามหน้างาน วอทส์แอปเดียวกับประกัน',
        cta: 'โทรแทมมี่',
      },
    },
    seoIntro: {
      eyebrow: 'สรุปสั้นๆ',
      title: 'เว็บนี้ทำอะไร',
      paragraphs: [
        'ไม่ใช่พอร์ทัลใหญ่: <strong>แทมมี่</strong> ดูแลประกัน AXA และล่าม <strong>โทมาส</strong> อสังหาภูเก็ต/กระบี่ ที่เหลือคือเบอร์ที่อยากแชร์',
        'โรงพยาบาล 1155/1669: <a href="/th/hopitaux-a-phuket/">รายชื่อ</a> <a href="/th/numeros-durgences/">เบอร์ฉุกเฉิน</a> <a href="/th/osteopathe-francais-a-phuket/">ดร. Tur</a> ด่วน? วอทส์แอปด้านบน',
      ],
      links: [
        { href: '/th/assurance-sante-thailande-phuket/', label: 'ประกันสุขภาพ' },
        { href: '/th/interprete-thai-francais-anglais-a-phuket/', label: 'ล่าม FR-EN-TH' },
        { href: '/th/expatriation-a-phuket-besoin-achat-immobilier-ou-locatif/', label: 'อสังหาภูเก็ต' },
        { href: '/th/category/adresses-utiles/', label: 'ที่อยู่ที่เป็นประโยชน์' },
        { href: '/th/contact/', label: 'ติดต่อ' },
      ],
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
        'สองคนหลังเว็บ — บวกหน้าเบอร์ที่อัปเดตเมื่อเปลี่ยน',
      tammy: {
        name: 'แทมมี่',
        role: 'ตัวแทน AXA · ล่าม FR-EN-TH',
        description:
          '"สวัสดีค่ะ แทมมี่ค่ะ ตัวแทน AXA บนเกาะ ถ้าต้องล่ามที่โรงพยาบาลหรือตำรวจก็ไปได้ ทักวอทส์แอปบนเว็บนะคะ"',
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
          'มีธุรกิจบนเกาะอยากให้ลงรายชื่อ? เขียนมา เราดูเป็นรายกรณี',
      },
    },
    contact: {
      title: 'ติดต่อเรา',
      subtitle:
        'แบบฟอร์มหรือวอทส์แอป — มักตอบภายในวัน ถ้าออกไปดูบ้านอาจช้าหน่อยตอนเย็น',
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
      tagline: 'ประกัน · อสังหาฯ · ล่าม — ภูเก็ต',
      rights: 'สงวนลิขสิทธิ์',
      madeIn: 'ภูเก็ต ประเทศไทย',
      contactBlockTitle: 'ติดต่อ',
      byWhatsapp: 'ทางวอทส์แอป',
      moreInfo: 'ข้อมูลเพิ่มเติม',
      archives: 'หมวดหมู่',
      archiveItems: {
        adresses: 'ที่อยู่ที่เป็นประโยชน์ภูเก็ต',
        stores: 'ร้านแนะนำสำหรับชาวฝรั่งเศส',
        insurance: 'ประกันสุขภาพและทรัพย์สิน',
        expat: 'บริการชาวต่างชาติในไทย',
      },
    },
  },
} as const

export type Translation = typeof translations.fr
