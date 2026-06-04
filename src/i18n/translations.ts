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
      title: 'Assurance & interprète Surin | Phuket francophone',
      description:
        'Assurance santé, interprète et aide administrative à Surin. Accompagnement des francophones de Phuket. Immobilier Phuket & Krabi avec Thomas.',
      /** Accueil FR uniquement : variantes OG plus courtes (réseaux sociaux). */
      ogTitle: 'Surin : assurance · interprète · admin | Phuket',
      ogDescription:
        'Services à Surin (assurance, interprète, démarches). On continue pour les francophones de Phuket. Immo avec Thomas.',
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
        'Le détail des adresses ci-dessous est souvent en français. L’essentiel est au-dessus.',
    },
    categoryPage: {
      home: 'Accueil',
      breadcrumbLabel: "Fil d'Ariane",
      faqTitle: 'En pratique',
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
        'WhatsApp ou formulaire : assurance, interprète et admin à Surin ; francophones Phuket et immo Krabi. On répond dès qu’on peut.',
    },
    regions: {
      eyebrow: 'Où nous trouver',
      title: 'Surin & Phuket',
      lead: 'Tammy travaille à Surin (assurance, interprète, admin). On reste joignable pour les francophones de Phuket.',
      surin: {
        badge: 'Surin, sur place',
        title: 'Services ouverts à Surin',
        services: [
          'Assurance santé (AXA KrungThai)',
          'Interprète thaï · français · anglais',
          'Aide administrative (visa, immigration, démarches)',
        ],
        note: 'Tammy reçoit sur place dans la région de Surin pour ces trois services.',
        cta: 'Nous contacter',
      },
      phuket: {
        badge: 'Phuket, on continue',
        title: 'Francophones à Phuket',
        services: [
          'Assurance santé & interprète (WhatsApp, déplacement possible)',
          'Immobilier avec Thomas (Phuket & Krabi)',
          'Annuaire : hôpitaux, urgences, bonnes adresses',
        ],
        note: 'Les fiches utiles à Phuket restent en ligne ; on répond toujours aux résidents et visiteurs francophones.',
      },
    },
    actualites: {
      pageTitle: 'Actualités Phuket & Thaïlande',
      metaDescription:
        'Actualités et guides pour expatriés à Phuket : assurance santé, immobilier, interprète et vie en Thaïlande.',
      h1: 'Actualités',
      lead:
        'Ce qui change sur le site et ce qu’on voit sur l’île, assurance, immo, interprète.',
      empty: 'Aucun article publié pour le moment.',
      home: 'Accueil',
      breadcrumbLabel: "Fil d'Ariane",
      relatedTitle: 'Autres actualités',
      backToList: '← Toutes les actualités',
    },
    homeSlider: {
      slide1: {
        title: 'Interprète thaï français anglais à Phuket',
        subtitle: 'Urgences, hôpital, police, accompagnement francophone',
        cta: 'Contactez Tammy!',
      },
      slide2: {
        eyebrow: 'Immobilier à Phuket et Krabi',
        title: 'Maison à vendre à Phuket & Krabi',
        body:
          'Thomas montre les biens à Rawai, Chalong, Kata ou Krabi (Ao Nang) : achat, location longue, gestion locative.',
        cta: 'Contactez Thomas!',
      },
      slide3: {
        title: 'Assurance santé, Surin & Phuket',
        subtitle: 'Surin : conseil sur place · Phuket : on reste joignables',
        cta: 'Contactez Tammy!',
      },
      slide4: {
        title: 'Services à Surin : visas, assurances, interprétariat',
        alt: 'Tammy, Thailande-services à Surin : visas, assurances et interprétariat',
        subtitle: '',
        cta: 'Contactez Tammy!',
      },
      prev: 'Diapositive précédente',
      next: 'Diapositive suivante',
    },
    hero: {
      eyebrow: 'Surin & Phuket',
      seoH1: 'Assurance · Interprète · Admin · Surin & Phuket',
      seoH1Sub: 'Immobilier Phuket & Krabi, Thomas',
      titleLine1: "Besoin d'un interprète ?",
      titleLine2: 'Français · Anglais · Thaï',
      subtitle:
        'Tammy est basée à Surin (assurance, interprète, aide admin). On continue pour les francophones de Phuket ; Thomas gère l’immo sur l’île. WhatsApp en haut de page.',
      ctaContact: 'Nous contacter',
      ctaWhatsapp: 'WhatsApp direct',
    },
    services: {
      title: 'Nos services',
      subtitle: 'Surin sur place · Phuket & Krabi',
      realEstate: {
        title: 'Immobilier à Phuket et Krabi',
        tagline: 'Phuket & Krabi',
        description:
          'Thomas reste votre contact immo sur l’île et à Krabi : achat, location, visites, indépendant de notre base à Surin.',
        cta: 'Nous contacter',
      },
      insurance: {
        title: 'Assurance santé',
        tagline: 'Surin & Phuket',
        description:
          'Agent AXA : conseil en français à Surin et pour les francophones de Phuket (hospitalisation, visa, auto ou maison).',
        cta: 'Nous contacter',
      },
      interpreter: {
        title: 'Interprète thaï français anglais',
        tagline: 'Surin & Phuket',
        description:
          'Hôpital, police, immigration : Tammy intervient à Surin sur place et se déplace à Phuket quand c’est nécessaire.',
        cta: 'Nous contacter',
      },
      administration: {
        title: 'Aide administrative',
        tagline: 'Région de Surin',
        description:
          'Visa, immigration, formulaires, rendez-vous officiels : accompagnement en thaï, français et anglais, service ouvert à Surin.',
        cta: 'Nous contacter',
      },
    },
    seoIntro: {
      eyebrow: 'Qui fait quoi',
      title: 'Surin & Phuket',
      paragraphs: [
        '<strong>Surin</strong> : Tammy y propose assurance santé (AXA), interprétariat et aide administrative sur place. <strong>Phuket</strong> : on continue pour les francophones (assurance, interprète) ; <strong>Thomas</strong> gère l’immo à Phuket et Krabi.',
        'Hôpitaux, urgences, ostéo à Phuket : <a href="/hopitaux-a-phuket/">liste ici</a>, <a href="/numeros-durgences/">1155 / 1669</a>, <a href="/osteopathe-francais-a-phuket/">Dr Tur</a>. Une question ? WhatsApp en haut.',
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
      title: 'Interprète thaï français anglais, urgences',
      description:
        'Accidents, urgences médicales ou police : Tammy interprète à Surin sur place et se déplace à Phuket si besoin. WhatsApp en tête du site.',
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
        'Les deux visages du site, le reste ce sont des fiches adresses qu’on met à jour au fil de l’eau.',
      tammy: {
        name: 'Tammy',
        role: 'Agent AXA · Interprète · Admin · Surin',
        description:
          "« Bonjour, c’est Tammy. Je suis à Surin pour l’assurance, l’interprétariat et l’aide administrative. Pour Phuket, on reste joignables, hôpital, police, visa. WhatsApp du site. »",
      },
      thomas: {
        name: 'Thomas',
        role: 'Agent immobilier à Phuket & Krabi',
        description:
          "« Thomas, immo Rawai, Chalong, Krabi. J’ai l’habitude des dossiers étrangers : condo, location longue, parfois villa en leasehold. On se parle avant de visiter. »",
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
        'Formulaire ou WhatsApp, en général on répond dans la journée, parfois le soir si on est sur le terrain.',
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
      tagline: 'Assurance · Interprète · Admin · Surin & Phuket',
      rights: 'Tous droits réservés',
      madeIn: 'Surin & Phuket, Thaïlande',
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
      title: 'Insurance & interpreter Surin | Phuket francophone',
      description:
        'Health insurance, interpreter and admin help in Surin. Still serving francophones in Phuket. Real estate Phuket & Krabi with Thomas.',
      ogTitle: 'Surin: insurance · interpreter · admin | Phuket',
      ogDescription:
        'On-site services in Surin. Still here for Phuket francophones. Property with Thomas.',
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
      faqTitle: 'Common questions',
      relatedTitle: 'See also',
      frenchBodyNotice:
        'Address details below are often in French. The summary is above.',
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
      pageTitle: 'Contact, insurance, real estate & interpreter',
      pageH1: 'Message Tammy or Thomas',
      metaDescription:
        'WhatsApp or form: insurance, interpreter and admin in Surin; Phuket francophones and Krabi property. We reply when we can.',
    },
    regions: {
      eyebrow: 'Where we work',
      title: 'Surin & Phuket',
      lead: 'We are now based in the Surin area for insurance, interpreting and administrative support, while staying available for francophones in Phuket.',
      surin: {
        badge: 'Surin, on site',
        title: 'Services in Surin',
        services: [
          'Health insurance (AXA KrungThai)',
          'Thai · French · English interpreter',
          'Administrative help (visa, immigration, paperwork)',
        ],
        note: 'Tammy meets you in the Surin region for these three services.',
        cta: 'Contact us',
      },
      phuket: {
        badge: 'Phuket, still here',
        title: 'Francophones in Phuket',
        services: [
          'Health insurance & interpreter (WhatsApp, visits when needed)',
          'Real estate with Thomas (Phuket & Krabi)',
          'Directory: hospitals, emergencies, useful addresses',
        ],
        note: 'Phuket address pages stay online; we still answer francophone residents and visitors.',
      },
    },
    actualites: {
      pageTitle: 'News, Phuket & Thailand',
      metaDescription:
        'News and guides for expats in Phuket: health insurance, real estate, interpreter services and life in Thailand.',
      h1: 'News',
      lead:
        'What we change on the site and hear from the island, insurance, property, interpreter.',
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
          'Rawai, Chalong, Kata, Ao Nang… Thomas shows homes for sale and long rentals, he’s used to foreign buyers and leasehold questions.',
        cta: 'Contact Thomas!',
      },
      slide3: {
        title: 'Health insurance, Surin & Phuket',
        subtitle: 'Surin: on-site advice · Phuket: still reachable',
        cta: 'Contact Tammy!',
      },
      slide4: {
        title: 'Services in Surin: visas, insurance, interpreting',
        alt: 'Tammy, Thailande-services in Surin: visas, insurance and interpreting',
        subtitle: '',
        cta: 'Contact Tammy!',
      },
      prev: 'Previous slide',
      next: 'Next slide',
    },
    hero: {
      eyebrow: 'Surin & Phuket',
      seoH1: 'Insurance · Interpreter · Admin · Surin & Phuket',
      seoH1Sub: 'Property in Phuket & Krabi, Thomas',
      titleLine1: 'Need an interpreter?',
      titleLine2: 'French · English · Thai',
      subtitle:
        'Tammy is based in Surin (insurance, interpreter, admin help). We still support francophones in Phuket; Thomas handles island property. WhatsApp at the top.',
      ctaContact: 'Contact us',
      ctaWhatsapp: 'WhatsApp now',
    },
    services: {
      title: 'Our services',
      subtitle: 'Surin on site · Phuket & Krabi',
      realEstate: {
        title: 'Real estate in Phuket & Krabi',
        tagline: 'Phuket & Krabi',
        description:
          'Thomas stays your property contact on the island and in Krabi, separate from our Surin base.',
        cta: 'Ask Thomas',
      },
      insurance: {
        title: 'Health, car & home insurance',
        tagline: 'Surin & Phuket',
        description:
          'AXA agent: French advice in Surin and for francophones in Phuket (hospital cover, visa, car or home).',
        cta: 'Talk to Tammy',
      },
      interpreter: {
        title: 'Trilingual interpreter',
        tagline: 'Surin & Phuket',
        description:
          'Hospital, police, immigration, Tammy works on site in Surin and travels to Phuket when needed.',
        cta: 'Call Tammy',
      },
      administration: {
        title: 'Administrative help',
        tagline: 'Surin region',
        description:
          'Visa, immigration, forms, official appointments, support in Thai, French and English, available in Surin.',
        cta: 'Contact us',
      },
    },
    seoIntro: {
      eyebrow: 'Who does what',
      title: 'Surin & Phuket',
      paragraphs: [
        '<strong>Surin</strong>: Tammy, health insurance (AXA), interpreting, admin help. <strong>Phuket</strong>: we still answer francophones (insurance, interpreter); <strong>Thomas</strong> handles property in Phuket/Krabi.',
        'Phuket hospitals & emergencies: <a href="/en/hopitaux-a-phuket/">list</a>, <a href="/en/numeros-durgences/">1155 / 1669</a>, <a href="/en/osteopathe-francais-a-phuket/">Dr Tur</a>. Questions? WhatsApp at the top.',
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
        'Accidents, medical emergencies or police: Tammy interprets on site in Surin and can come to Phuket when needed. WhatsApp at the top.',
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
        'The two people behind the site, plus address pages we update when numbers change.',
      tammy: {
        name: 'Tammy',
        role: 'AXA · Interpreter · Admin · Surin',
        description:
          "\"Hi, I'm Tammy, based in Surin for insurance, interpreting and admin help. For Phuket we stay reachable: hospital, police, visa. Site WhatsApp.\"",
      },
      thomas: {
        name: 'Thomas',
        role: 'Real estate agent in Phuket & Krabi',
        description:
          '"Thomas, property around Rawai and Krabi. Foreign buyers, condos, long rent, we talk before viewings."',
      },
      consulate: {
        name: 'French Consulate',
        role: 'Phuket',
        description:
          'Run a business here and want a mention? Write us, we decide case by case.',
      },
    },
    contact: {
      title: 'Contact us',
      subtitle:
        'Form or WhatsApp, usually same-day reply, sometimes evening if we’re out on a visit.',
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
      tagline: 'Insurance · Interpreter · Admin · Surin & Phuket',
      rights: 'All rights reserved',
      madeIn: 'Surin & Phuket, Thailand',
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
      title: 'ประกันสุขภาพสุรินทร์ | ภูเก็ต & ล่ามไทย-ฝรั่งเศส-อังกฤษ',
      description:
        'ประกันสุขภาพ ล่าม และช่วยเรื่องธุรการที่สุรินทร์ ยังดูแลชาวฝรั่งเศสที่ภูเก็ต อสังหาภูเก็ตกระบี่กับโทมัส',
      ogTitle: 'สุรินทร์: ประกัน · ล่าม · ธุรการ | ภูเก็ต',
      ogDescription:
        'บริการที่สุรินทร์ ยังรับงานภูเก็ต อสังหากับโทมัส',
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
      relatedTitle: 'อ่านเพิ่ม',
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
      pageTitle: 'ติดต่อ, ประกัน อสังหาฯ และล่าม',
      pageH1: 'ทักแทมมี่หรือโทมาส',
      metaDescription:
        'วอทส์แอปหรือแบบฟอร์ม: ประกัน ล่าม และธุรการที่สุรินทร์ ชาวฝรั่งเศสภูเก็ต อสังหากระบี่ ตอบเมื่อว่าง',
    },
    regions: {
      eyebrow: 'พื้นที่ให้บริการ',
      title: 'สุรินทร์ & ภูเก็ต',
      lead: 'ย้ายฐานไปสุรินทร์สำหรับประกัน ล่าม และช่วยเรื่องธุรการ แต่ยังดูแลชาวฝรั่งเศสที่ภูเก็ต',
      surin: {
        badge: 'สุรินทร์, หน้างาน',
        title: 'บริการที่สุรินทร์',
        services: [
          'ประกันสุขภาพ (AXA กรุงไทย)',
          'ล่ามไทย · ฝรั่งเศส · อังกฤษ',
          'ช่วยเรื่องธุรการ (วีซ่า ตรวจคนเข้าเมือง เอกสาร)',
        ],
        note: 'แทมมี่พบลูกค้าในพื้นที่สุรินทร์สำหรับบริการทั้งสาม',
        cta: 'ติดต่อเรา',
      },
      phuket: {
        badge: 'ภูเก็ต, ยังรับงาน',
        title: 'ชาวฝรั่งเศสที่ภูเก็ต',
        services: [
          'ประกันและล่าม (วอทส์แอป ไปภูเก็ตเมื่อจำเป็น)',
          'อสังหากับโทมัส (ภูเก็ตและกระบี่)',
          'รายชื่อโรงพยาบาล ฉุกเฉิน ที่อยู่',
        ],
        note: 'หน้าที่อยู่ภูเก็ตยังอัปเดต ตอบชาวฝรั่งเศสที่อาศัยหรือมาเยือน',
      },
    },
    actualites: {
      pageTitle: 'ข่าวสาร, ภูเก็ตและไทย',
      metaDescription:
        'ข่าวและคู่มือสำหรับชาวต่างชาติที่ภูเก็ต: ประกันสุขภาพ อสังหาฯ ล่ามและชีวิตในไทย',
      h1: 'ข่าวสาร',
      lead:
        'ข่าวจากเว็บและประสบการณ์บนเกาะ, ประกัน อสังหาฯ ล่าม อัปเดตเมื่อมีเรื่องใหม่',
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
        title: 'ประกันสุขภาพ, สุรินทร์ & ภูเก็ต',
        subtitle: 'สุรินทร์: ปรึกษาหน้างาน · ภูเก็ต: ยังติดต่อได้',
        cta: 'ติดต่อแทมมี่!',
      },
      slide4: {
        title: 'บริการที่สุรินทร์: วีซ่า ประกัน ล่าม',
        alt: 'แทมมี่ Thailande-services ที่สุรินทร์: วีซ่า ประกัน และล่าม',
        subtitle: '',
        cta: 'ติดต่อแทมมี่!',
      },
      prev: 'สไลด์ก่อนหน้า',
      next: 'สไลด์ถัดไป',
    },
    hero: {
      eyebrow: 'สุรินทร์ & ภูเก็ต',
      seoH1: 'ประกัน · ล่าม · ธุรการ, สุรินทร์ & ภูเก็ต',
      seoH1Sub: 'อสังหาภูเก็ตกระบี่, โทมาส',
      titleLine1: 'ต้องการล่ามใช่ไหม?',
      titleLine2: 'ฝรั่งเศส · อังกฤษ · ไทย',
      subtitle:
        'แทมมี่อยู่สุรินทร์ (ประกัน ล่าม ธุรการ) ยังรับงานชาวฝรั่งเศสภูเก็ต โทมาสดูแลอสังหาบนเกาะ, วอทส์แอปด้านบน',
      ctaContact: 'ติดต่อเรา',
      ctaWhatsapp: 'วอทส์แอปทันที',
    },
    services: {
      title: 'บริการของเรา',
      subtitle: 'สุรินทร์หน้างาน · ภูเก็ต & กระบี่',
      realEstate: {
        title: 'อสังหาริมทรัพย์ภูเก็ตและกระบี่',
        tagline: 'ภูเก็ต & กระบี่',
        description:
          'โทมาสยังเป็นที่ปรึกษาอสังหาบนเกาะและกระบี่ แยกจากฐานที่สุรินทร์',
        cta: 'ถามโทมาส',
      },
      insurance: {
        title: 'ประกันสุขภาพ รถยนต์ และบ้าน',
        tagline: 'สุรินทร์ & ภูเก็ต',
        description:
          'ตัวแทน AXA: ปรึกษาภาษาฝรั่งเศสที่สุรินทร์และชาวฝรั่งเศสภูเก็ต (โรงพยาบาล วีซ่า รถ บ้าน)',
        cta: 'คุยกับแทมมี่',
      },
      interpreter: {
        title: 'ล่ามสามภาษา',
        tagline: 'สุรินทร์ & ภูเก็ต',
        description:
          'โรงพยาบาล ตำรวจ ตรวจคนเข้าเมือง, แทมมี่ล่ามที่สุรินทร์และไปภูเก็ตเมื่อจำเป็น',
        cta: 'โทรแทมมี่',
      },
      administration: {
        title: 'ช่วยเรื่องธุรการ',
        tagline: 'พื้นที่สุรินทร์',
        description:
          'วีซ่า ตรวจคนเข้าเมือง แบบฟอร์ม นัดหน่วยงาน, ช่วยเป็นภาษาไทย ฝรั่งเศส อังกฤษ เปิดบริการที่สุรินทร์',
        cta: 'ติดต่อเรา',
      },
    },
    seoIntro: {
      eyebrow: 'ใครทำอะไร',
      title: 'สุรินทร์ & ภูเก็ต',
      paragraphs: [
        '<strong>สุรินทร์</strong>: แทมมี่ให้ประกัน AXA ล่าม และช่วยธุรการ <strong>ภูเก็ต</strong>: ยังดูแลชาวฝรั่งเศส (ประกัน ล่าม) <strong>โทมาส</strong> อสังหาภูเก็ต/กระบี่',
        'โรงพยาบาลภูเก็ต: <a href="/th/hopitaux-a-phuket/">รายชื่อ</a> <a href="/th/numeros-durgences/">1155/1669</a> <a href="/th/osteopathe-francais-a-phuket/">ดร. Tur</a> วอทส์แอปด้านบน',
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
        'อุบัติเหตุ ฉุกเฉิน ตำรวจ: แทมมี่ล่ามที่สุรินทร์หรือไปภูเก็ตเมื่อจำเป็น วอทส์แอปที่หัวเว็บ',
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
        'สองคนหลังเว็บ, บวกหน้าเบอร์ที่อัปเดตเมื่อเปลี่ยน',
      tammy: {
        name: 'แทมมี่',
        role: 'AXA · ล่าม · ธุรการ, สุรินทร์',
        description:
          '"สวัสดีค่ะ แทมมี่อยู่สุรินทร์ ประกัน ล่าม และช่วยธุรการ ภูเก็ตยังรับงาน โรงพยาบาล ตำรวจ วีซ่า วอทส์แอปบนเว็บ"',
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
        'แบบฟอร์มหรือวอทส์แอป, มักตอบภายในวัน ถ้าออกไปดูบ้านอาจช้าหน่อยตอนเย็น',
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
      tagline: 'ประกัน · ล่าม · ธุรการ, สุรินทร์ & ภูเก็ต',
      rights: 'สงวนลิขสิทธิ์',
      madeIn: 'สุรินทร์ & ภูเก็ต ประเทศไทย',
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
