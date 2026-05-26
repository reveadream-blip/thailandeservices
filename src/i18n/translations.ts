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
      faqTitle: 'Questions fréquentes',
      relatedTitle: 'À lire aussi',
      frenchBodyNotice:
        'Le détail des adresses ci-dessous est en français (sources locales). Les informations essentielles sont en haut de page.',
    },
    categoryPage: {
      home: 'Accueil',
      breadcrumbLabel: "Fil d'Ariane",
      faqTitle: 'Questions fréquentes',
      articleCountOne: 'article',
      articleCountMany: 'articles',
    },
    contactPage: {
      home: 'Accueil',
      breadcrumbLabel: "Fil d'Ariane",
      breadcrumbContact: 'Formulaire de contact',
      pageTitle: 'Contact assurance, immo & interprète',
      pageH1: 'Contact — assurance, immobilier et interprète à Phuket',
      metaDescription:
        'Contactez Thailande-services.fr : assurance santé Phuket et Thaïlande, interprète thaï français anglais, immobilier Phuket & Krabi.',
    },
    actualites: {
      pageTitle: 'Actualités Phuket & Thaïlande',
      metaDescription:
        'Actualités et guides pour expatriés à Phuket : assurance santé, immobilier, interprète et vie en Thaïlande.',
      h1: 'Actualités',
      lead:
        'Articles et conseils pour les francophones à Phuket et en Thaïlande : assurance, immobilier, interprète et expatriation.',
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
      eyebrow: 'Votre accès privilégié à la Thaïlande',
      /** H1 unique du carrousel (SEO). */
      seoH1: 'Assurance santé Phuket & Thaïlande · Immobilier Phuket & Krabi',
      seoH1Sub: 'Interprète thaï français anglais — maisons à vendre et location',
      titleLine1: "Besoin d'un interprète ?",
      titleLine2: 'Français · Anglais · Thaï',
      subtitle:
        "Interprétariat, immobilier, assurance : nous vous accompagnons pour votre installation, vos démarches et vos investissements sur l'île de Phuket.",
      ctaContact: 'Nous contacter',
      ctaWhatsapp: 'WhatsApp direct',
    },
    services: {
      title: 'Assurance santé, immobilier et interprète',
      subtitle: 'Phuket, Krabi et Thaïlande — trois expertises francophones',
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
      eyebrow: 'Guides expatriés',
      title: 'Phuket & Thaïlande : assurance, immobilier et interprète',
      paragraphs: [
        'Thailande-services.fr accompagne les <strong>francophones à Phuket</strong> et en Thaïlande : assurance santé expatrié, <strong>maison à vendre à Phuket ou Krabi</strong>, et interprétariat thaï–français–anglais pour les urgences et démarches.',
        'Retrouvez nos guides — <a href="/hopitaux-a-phuket/">hôpitaux à Phuket</a>, <a href="/numeros-durgences/">numéros d\'urgence</a>, <a href="/osteopathe-francais-a-phuket/">ostéopathe français</a> — et nos pages services pour vous installer sereinement.',
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
      faqTitle: 'Frequently asked questions',
      relatedTitle: 'Related guides',
      frenchBodyNotice:
        'The detailed listings below are in French (local sources). Key information is summarised at the top of this page.',
    },
    categoryPage: {
      home: 'Home',
      breadcrumbLabel: 'Breadcrumb',
      faqTitle: 'Frequently asked questions',
      articleCountOne: 'article',
      articleCountMany: 'articles',
    },
    contactPage: {
      home: 'Home',
      breadcrumbLabel: 'Breadcrumb',
      breadcrumbContact: 'Contact form',
      pageTitle: 'Contact — insurance, real estate & interpreter',
      pageH1: 'Contact — insurance, real estate and interpreter in Phuket',
      metaDescription:
        'Contact Thailande-services.fr: health insurance Phuket & Thailand, Thai-French-English interpreter, real estate Phuket & Krabi.',
    },
    actualites: {
      pageTitle: 'News — Phuket & Thailand',
      metaDescription:
        'News and guides for expats in Phuket: health insurance, real estate, interpreter services and life in Thailand.',
      h1: 'News',
      lead:
        'Articles and tips for expats in Phuket and Thailand: insurance, real estate, interpreter services and relocation.',
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
      seoH1: 'Health insurance Phuket & Thailand · Real estate Phuket & Krabi',
      seoH1Sub: 'Thai-French-English interpreter — homes for sale and rent',
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
    seoIntro: {
      eyebrow: 'Expat guides',
      title: 'Phuket & Thailand: insurance, real estate and interpreter',
      paragraphs: [
        'Thailande-services.fr helps <strong>expats in Phuket</strong> and Thailand: health insurance, <strong>homes for sale in Phuket or Krabi</strong>, and Thai–French–English interpretation for emergencies and paperwork.',
        'Browse our guides — <a href="/en/hopitaux-a-phuket/">hospitals in Phuket</a>, <a href="/en/numeros-durgences/">emergency numbers</a>, <a href="/en/osteopathe-francais-a-phuket/">French-speaking osteopath</a> — and our service pages to settle in with confidence.',
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
      faqTitle: 'คำถามที่พบบ่อย',
      relatedTitle: 'บทความที่เกี่ยวข้อง',
      frenchBodyNotice:
        'รายละเอียดด้านล่างเป็นภาษาฝรั่งเศส (แหล่งข้อมูลท้องถิ่น) ข้อมูลสำคัญสรุปไว้ด้านบนของหน้า',
    },
    categoryPage: {
      home: 'หน้าแรก',
      breadcrumbLabel: 'เส้นทางนำทาง',
      faqTitle: 'คำถามที่พบบ่อย',
      articleCountOne: 'บทความ',
      articleCountMany: 'บทความ',
    },
    contactPage: {
      home: 'หน้าแรก',
      breadcrumbLabel: 'เส้นทางนำทาง',
      breadcrumbContact: 'แบบฟอร์มติดต่อ',
      pageTitle: 'ติดต่อ — ประกัน อสังหาฯ และล่าม',
      pageH1: 'ติดต่อ — ประกัน อสังหาริมทรัพย์ และล่ามที่ภูเก็ต',
      metaDescription:
        'ติดต่อ Thailande-services.fr: ประกันสุขภาพภูเก็ตและไทย ล่ามไทยฝรั่งเศสอังกฤษ อสังหาภูเก็ตและกระบี่',
    },
    actualites: {
      pageTitle: 'ข่าวสาร — ภูเก็ตและไทย',
      metaDescription:
        'ข่าวและคู่มือสำหรับชาวต่างชาติที่ภูเก็ต: ประกันสุขภาพ อสังหาฯ ล่ามและชีวิตในไทย',
      h1: 'ข่าวสาร',
      lead:
        'บทความและคำแนะนำสำหรับชาวต่างชาติที่ภูเก็ตและไทย: ประกัน อสังหาฯ ล่ามและการย้ายถิ่น',
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
      seoH1: 'ประกันสุขภาพภูเก็ตและไทย · อสังหาภูเก็ตและกระบี่',
      seoH1Sub: 'ล่ามไทยฝรั่งเศสอังกฤษ — บ้านขายและเช่า',
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
    seoIntro: {
      eyebrow: 'คู่มือชาวต่างชาติ',
      title: 'ภูเก็ตและไทย: ประกัน อสังหาฯ และล่าม',
      paragraphs: [
        'Thailande-services.fr ช่วย<strong>ชาวต่างชาติที่ภูเก็ต</strong>และไทย: ประกันสุขภาพ <strong>บ้านขายภูเก็ตและกระบี่</strong> และล่ามไทย–ฝรั่งเศส–อังกฤษ',
        'ดูคู่มือ — <a href="/th/hopitaux-a-phuket/">โรงพยาบาลภูเก็ต</a> <a href="/th/numeros-durgences/">เบอร์ฉุกเฉิน</a> <a href="/th/osteopathe-francais-a-phuket/">นักกระดูกฝรั่งเศส</a>',
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
