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
      title: 'Assurance santé Thaïlande · Bangkok, Phuket · Tammy AXA',
      description:
        'Assurance santé en Thaïlande pour expatriés : hospitalisation, visa, devis en français. Bangkok, Chiang Mai, Phuket, Pattaya, Hua Hin, Koh Samui, Surin. Tammy, agent KrungThai AXA, sur place ou en visio.',
      /** Accueil FR uniquement : variantes OG plus courtes (réseaux sociaux). */
      ogTitle: 'Assurance santé Thaïlande · expatriés · Bangkok, Phuket, Chiang Mai',
      ogDescription:
        'Assurance santé Thaïlande pour expatriés à Bangkok, Chiang Mai, Phuket, Pattaya, Surin. Devis hospitalisation en français, Tammy (AXA) en agence ou en visio.',
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
          insurance: 'Assurance santé Thaïlande',
          expat: 'Expatriation',
        },
      },
    },
    categories: {
      labels: {
        'adresses-utiles': 'Adresses Utiles à Phuket',
        'les-bonnes-adresses-francophones': 'Les bonnes adresses Francophones à Phuket',
        'assurance-sante-et-biens-en-thailande': 'Assurance santé Thaïlande et biens',
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
      pageTitle: 'Contact immo, interprète & admin',
      pageH1: 'Écrire à Tammy ou Thomas',
      metaDescription:
        'WhatsApp ou formulaire pour l’immo, l’interprète thaï français anglais en Thaïlande et l’admin. Pour l’assurance santé, utilisez le devis chatbot en bas de page.',
    },
    regions: {
      eyebrow: 'Où nous trouver',
      title: 'Surin, Phuket & toute la Thaïlande',
      lead: 'Vous cherchez une assurance santé en Thaïlande ? À Surin, Tammy vous reçoit sur place pour comparer les garanties AXA. À Phuket, à distance ou avec une collaboratrice. Depuis Bangkok, Chiang Mai, Pattaya, Hua Hin, Koh Samui et ailleurs : devis et souscription par téléphone et visio.',
      surin: {
        badge: 'Surin, sur place',
        title: 'Tous les services à Surin',
        services: [
          'Assurance santé (AXA KrungThai)',
          'Interprète thaï français anglais',
          'Visas et aide administrative',
        ],
        note: 'Visas, assurance, interprète et admin : tout se règle sur place avec Tammy à Surin.',
        cta: 'Agence Surin',
      },
      phuket: {
        badge: 'Phuket, à distance',
        title: 'Suivi à Phuket',
        services: [
          'Assurance, interprète, visas : à distance ou avec une collaboratrice',
          'Immobilier avec Thomas sur place (Phuket & Krabi)',
        ],
        note: 'Phuket : téléphone, visio ou présence d’une collaboratrice locale selon le dossier. Thomas reste sur l’île pour l’immo.',
        cta: 'Assurance santé Phuket Thaïlande',
      },
      thailand: {
        badge: 'Toute la Thaïlande',
        title: 'À distance, téléphone et visio',
        services: [
          'Assurance santé en Thaïlande',
          'Interprète thaï français anglais en Thaïlande',
          'Visas et conseil administratif',
        ],
        note: 'Assurance santé Bangkok, Chiang Mai, Pattaya, Hua Hin, Koh Samui, Rayong : Tammy compare hospitalisation et plafonds par visio, où que vous viviez en Thaïlande.',
        cta: 'Nous contacter',
      },
    },
    actualites: {
      pageTitle: 'Actualités Phuket & Thaïlande',
      metaDescription:
        'Actualités et guides pour expatriés à Phuket : assurance santé, immobilier, interprète thaï français anglais en Thaïlande et vie en Thaïlande.',
      h1: 'Actualités',
      lead:
        'Ce qui change sur le site et ce qu’on voit sur l’île, assurance santé Thaïlande, immo, interprète thaï français anglais en Thaïlande.',
      empty: 'Aucun article publié pour le moment.',
      home: 'Accueil',
      breadcrumbLabel: "Fil d'Ariane",
      relatedTitle: 'Autres actualités',
      backToList: '← Toutes les actualités',
    },
    homeSlider: {
      slide1: {
        h1: 'Interprète thaï français anglais en Thaïlande',
        title: 'Interprète thaï français anglais en Thaïlande',
        subtitle:
          'À Surin sur place · à Phuket à distance ou avec une collaboratrice · partout en Thaïlande au téléphone et en visio.',
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
        title: 'Assurance santé en Thaïlande',
        subtitle:
          'Assurance santé à Surin sur place · à Phuket à distance ou collaboratrice · partout en Thaïlande par téléphone et visio.',
        cta: 'Devis assurance santé',
      },
      slide4: {
        title: 'Visas, interprète et assurance santé à Surin',
        alt: 'Tammy à Surin : visas, interprète et assurance santé, tous les services sur place',
        subtitle:
          'Visas, interprète et assurance santé à Surin : tous les services sur place avec Tammy.',
        cta: 'Contactez Tammy!',
      },
      prev: 'Diapositive précédente',
      next: 'Diapositive suivante',
    },
    hero: {
      eyebrow: 'Surin & Phuket',
      seoH1: 'Assurance santé Surin · assurance santé Thaïlande · interprète thaï français anglais en Thaïlande · Admin',
      seoH1Sub: 'Immobilier Phuket & Krabi, Thomas',
      titleLine1: "Besoin d'un interprète thaï français anglais en Thaïlande ?",
      titleLine2: 'Français · Anglais · Thaï',
      subtitle:
        'Assurance santé Thaïlande : Surin sur place, Phuket à distance, Bangkok et Chiang Mai en visio. Interprète et immo avec Thomas à Phuket et Krabi. WhatsApp en haut de page.',
      ctaContact: 'Nous contacter',
      ctaWhatsapp: 'WhatsApp direct',
    },
    services: {
      title: 'Nos services',
      subtitle: 'Surin sur place · Phuket à distance · Thaïlande en visio',
      realEstate: {
        title: 'Immobilier à Phuket et Krabi',
        tagline: 'Phuket & Krabi',
        description:
          'Thomas reste votre contact immo sur l’île et à Krabi : achat, location, visites, indépendant de notre base à Surin.',
        cta: 'Nous contacter',
      },
      insurance: {
        title: 'Assurance santé Surin & Thaïlande',
        tagline: 'Surin & toute la Thaïlande',
        description:
          'Surin : assurance sur place. Phuket : à distance ou collaboratrice. Bangkok, Chiang Mai, Pattaya, Hua Hin, Koh Samui : devis et souscription par téléphone et visio (KrungThai AXA).',
        cta: 'Devis assurance santé',
      },
      interpreter: {
        title: 'Interprète thaï français anglais en Thaïlande',
        tagline: 'Surin & toute la Thaïlande',
        description:
          'Surin : interprète sur place (hôpital, police, immigration). Phuket : à distance ou collaboratrice. Bangkok, Chiang Mai, Pattaya, Hua Hin, Koh Samui : téléphone, WhatsApp et visio.',
        cta: 'Nous contacter',
      },
      administration: {
        title: 'Aide administrative',
        tagline: 'Surin sur place · ailleurs à distance',
        description:
          'Visa, immigration, formulaires : sur place à Surin ; à Phuket à distance ou avec une collaboratrice ; partout en Thaïlande au téléphone et en visio.',
        cta: 'Nous contacter',
      },
    },
    seoIntro: {
      eyebrow: 'Assurance santé expatriés',
      title: 'Assurance santé en Thaïlande, où que vous viviez',
      paragraphs: [
        'Vous tapez « assurance santé Thaïlande » parce qu’une clinique privée demande souvent un paiement ou une garantie avant de vous soigner. Tammy, agent <strong>KrungThai AXA</strong>, vous aide à choisir un contrat avec hospitalisation, ambulatoire et plafonds adaptés à votre visa.',
        'À <strong>Bangkok</strong>, <strong>Chiang Mai</strong>, <strong>Pattaya</strong>, <strong>Hua Hin</strong>, sur <strong>Koh Samui</strong> ou dans une autre province, on fait le point par téléphone ou visio : comparaison iHealthy, franchise, hôpitaux partenaires. À <strong>Surin</strong>, tout se fait sur place ; à <strong>Phuket</strong>, à distance ou avec une collaboratrice.',
        'Besoin d’un <a href="#devis-assurance">devis assurance santé</a> ? Le chatbot en bas de page ou WhatsApp en haut. Urgences à Phuket : <a href="/hopitaux-a-phuket/">hôpitaux</a> et <a href="/numeros-durgences/">1155 / 1669</a>.',
      ],
      links: [
        { href: '/assurance-sante-phuket/', label: 'Assurance santé Phuket Thaïlande' },
        { href: '/agence-surin/', label: 'Agence Surin' },
        { href: '/interprete-thai-francais-anglais-a-phuket/', label: 'Interprète thaï français anglais en Thaïlande' },
        { href: '/expatriation-a-phuket-besoin-achat-immobilier-ou-locatif/', label: 'Immobilier Phuket' },
        { href: '/category/adresses-utiles/', label: 'Adresses utiles' },
        { href: '/formulaire-de-contact/', label: 'Contact' },
      ],
    },
    emergency: {
      eyebrow: 'Disponible 7j/7',
      title: 'Interprète thaï français anglais en Thaïlande, urgences',
      description:
        'Surin : interprète sur place. Phuket : à distance ou collaboratrice. Toute la Thaïlande : téléphone et visio. WhatsApp en tête du site.',
      tags: ['Urgence medicale - Accident - Police'],
      cta: 'Appelez-nous avec WhatsApp',
      features: {
        urgent: {
          title: 'Urgence medicale - Accident - Police',
          desc: "Besoin d'un interprète thaï français anglais en Thaïlande en urgence!",
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
        role: 'Agent AXA · interprète thaï français anglais Surin · Admin',
        description:
          "« Bonjour, c’est Tammy. À Surin, tous les services sur place. À Phuket, à distance ou avec une collaboratrice. Partout en Thaïlande, au téléphone et en visio. WhatsApp du site. »",
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
          interpreter: 'Interprète thaï français anglais',
          emergency: 'Urgence',
          other: 'Autre',
        },
        insuranceViaChatbot:
          'Pour une demande d’assurance santé, utilisez le devis en bas à droite (chat), pas ce formulaire.',
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
    insuranceQuoteCta: {
      title: 'Demande d’assurance santé',
      lead: 'Répondez aux questions du devis assurance santé : Tammy prépare votre dossier et vous rappelle.',
    },
    footer: {
      tagline: 'Assurance santé Surin · assurance santé Thaïlande · interprète thaï français anglais en Thaïlande · Admin',
      rights: 'Tous droits réservés',
      madeIn: 'Surin & Phuket, Thaïlande',
      contactBlockTitle: 'Contacts',
      byWhatsapp: 'Par WhatsApp',
      moreInfo: 'Pour plus d’informations!',
      archives: 'Archives',
      archiveItems: {
        adresses: 'Adresses Utiles à Phuket',
        stores: 'Les bonnes adresses Francophones à Phuket',
        insurance: 'Assurance santé Thaïlande et biens',
        expat: 'Services expatriation en Thaïlande',
      },
    },
  },

  en: {
    meta: {
      title: 'Thailand health insurance · Bangkok, Phuket · Tammy AXA',
      description:
        'Health insurance in Thailand for expats: hospitalisation, visa cover, quotes in French. Bangkok, Chiang Mai, Phuket, Pattaya, Hua Hin, Koh Samui, Surin. Tammy, KrungThai AXA agent, on site or by video.',
      ogTitle: 'Thailand health insurance · expats · Bangkok, Phuket, Chiang Mai',
      ogDescription:
        'Thailand health insurance for expats in Bangkok, Chiang Mai, Phuket, Pattaya, Surin. Hospital cover quotes in French, Tammy (AXA) on site or by video.',
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
          insurance: 'Thailand health insurance',
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
      pageTitle: 'Contact real estate, interpreter & admin',
      pageH1: 'Message Tammy or Thomas',
      metaDescription:
        'WhatsApp or form for property, Thai French English interpreter in Thailand and admin. For health insurance, use the quote chatbot at the bottom of the page.',
    },
    regions: {
      eyebrow: 'Where we work',
      title: 'Surin, Phuket & all of Thailand',
      lead: 'Looking for health insurance in Thailand? In Surin, Tammy meets you on site to compare AXA cover. In Phuket, remotely or with a collaborator. From Bangkok, Chiang Mai, Pattaya, Hua Hin, Koh Samui and beyond: quotes and subscription by phone and video.',
      surin: {
        badge: 'Surin, on site',
        title: 'All services in Surin',
        services: [
          'Health insurance (KrungThai AXA)',
          'Thai French English interpreter',
          'Visas and administrative help',
        ],
        note: 'Visas, insurance, interpreter and admin: everything is handled on site with Tammy in Surin.',
        cta: 'Surin branch',
      },
      phuket: {
        badge: 'Phuket, remote',
        title: 'Support in Phuket',
        services: [
          'Insurance, interpreter, visas: remote or with a local collaborator',
          'Real estate with Thomas on site (Phuket & Krabi)',
        ],
        note: 'Phuket: phone, video or a local collaborator depending on the case. Thomas stays on the island for property.',
        cta: 'Phuket Thailand health insurance',
      },
      thailand: {
        badge: 'All of Thailand',
        title: 'Remote, phone and video',
        services: [
          'Health insurance in Thailand',
          'Thai French English interpreter in Thailand',
          'Visas and administrative advice',
        ],
        note: 'Health insurance in Bangkok, Chiang Mai, Pattaya, Hua Hin, Koh Samui, Rayong: Tammy compares hospital cover and limits by video, wherever you live in Thailand.',
        cta: 'Contact us',
      },
    },
    actualites: {
      pageTitle: 'News, Phuket & Thailand',
      metaDescription:
        'News and guides for expats in Phuket: health insurance, real estate, Thai French English interpreter in Thailand and life in Thailand.',
      h1: 'News',
      lead:
        'What we change on the site and hear from the island, Thailand health insurance, property, Thai French English interpreter in Thailand.',
      empty: 'No articles published yet.',
      home: 'Home',
      breadcrumbLabel: 'Breadcrumb',
      relatedTitle: 'More news',
      backToList: '← All news',
    },
    homeSlider: {
      slide1: {
        h1: 'Thai French English interpreter in Thailand',
        title: 'Thai French English interpreter in Thailand',
        subtitle:
          'Surin on site · Phuket remote or with a collaborator · all of Thailand by phone and video.',
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
        title: 'Health insurance in Thailand',
        subtitle:
          'Health insurance in Surin on site · in Phuket remote or with a collaborator · all of Thailand by phone and video.',
        cta: 'Insurance quote',
      },
      slide4: {
        title: 'Visas, interpreter and health insurance in Surin',
        alt: 'Tammy in Surin: visas, interpreter and health insurance, all services on site',
        subtitle:
          'Visas, interpreter and health insurance in Surin: all services on site with Tammy.',
        cta: 'Contact Tammy!',
      },
      prev: 'Previous slide',
      next: 'Next slide',
    },
    hero: {
      eyebrow: 'Surin & Phuket',
      seoH1: 'Surin health insurance · Thailand health insurance · Thai French English interpreter in Thailand · Admin',
      seoH1Sub: 'Property in Phuket & Krabi, Thomas',
      titleLine1: 'Need a Thai French English interpreter in Thailand?',
      titleLine2: 'French · English · Thai',
      subtitle:
        'Surin: everything on site. Phuket: remote or with a collaborator. Bangkok, Chiang Mai, Pattaya, Hua Hin, Koh Samui: phone and video. Thomas handles property in Phuket and Krabi. WhatsApp at the top.',
      ctaContact: 'Contact us',
      ctaWhatsapp: 'WhatsApp now',
    },
    services: {
      title: 'Our services',
      subtitle: 'Surin on site · Phuket remote · Thailand by video',
      realEstate: {
        title: 'Real estate in Phuket & Krabi',
        tagline: 'Phuket & Krabi',
        description:
          'Thomas stays your property contact on the island and in Krabi, separate from our Surin base.',
        cta: 'Ask Thomas',
      },
      insurance: {
        title: 'Surin & Thailand health insurance',
        tagline: 'Surin & all of Thailand',
        description:
          'Surin: insurance on site. Phuket: remote or with a collaborator. Bangkok, Chiang Mai, Pattaya, Hua Hin, Koh Samui: quotes and subscription by phone and video (KrungThai AXA).',
        cta: 'Insurance quote',
      },
      interpreter: {
        title: 'Thai French English interpreter in Thailand',
        tagline: 'Surin & all of Thailand',
        description:
          'Surin: interpreter on site (hospital, police, immigration). Phuket: remote or with a collaborator. Bangkok, Chiang Mai, Pattaya, Hua Hin, Koh Samui: phone, WhatsApp and video.',
        cta: 'Call Tammy',
      },
      administration: {
        title: 'Administrative help',
        tagline: 'Surin on site · elsewhere remote',
        description:
          'Visa, immigration, forms: on site in Surin; in Phuket remote or with a collaborator; all of Thailand by phone and video.',
        cta: 'Contact us',
      },
    },
    seoIntro: {
      eyebrow: 'Expat health insurance',
      title: 'Health insurance in Thailand, wherever you live',
      paragraphs: [
        'You search for <strong>Thailand health insurance</strong> because private clinics often want payment or a guarantee before treatment. Tammy, a <strong>KrungThai AXA</strong> agent, helps you pick inpatient, outpatient and visa-compliant limits.',
        'In <strong>Bangkok</strong>, <strong>Chiang Mai</strong>, <strong>Pattaya</strong>, <strong>Hua Hin</strong>, on <strong>Koh Samui</strong> or elsewhere, we review iHealthy tiers, excess and partner hospitals by phone or video. In <strong>Surin</strong>, everything is on site; in <strong>Phuket</strong>, remote or with a local collaborator.',
        'Need an <a href="#devis-assurance">insurance quote</a>? Use the chatbot at the bottom or WhatsApp at the top. Emergencies in Phuket: <a href="/en/hopitaux-a-phuket/">hospitals</a> and <a href="/en/numeros-durgences/">1155 / 1669</a>.',
      ],
      links: [
        { href: '/en/assurance-sante-phuket/', label: 'Phuket Thailand health insurance' },
        { href: '/en/agence-surin/', label: 'Surin branch' },
        { href: '/en/interprete-thai-francais-anglais-a-phuket/', label: 'Thai French English interpreter in Thailand' },
        { href: '/en/expatriation-a-phuket-besoin-achat-immobilier-ou-locatif/', label: 'Real estate Phuket' },
        { href: '/en/category/adresses-utiles/', label: 'Useful addresses' },
        { href: '/en/contact/', label: 'Contact' },
      ],
    },
    emergency: {
      eyebrow: 'Available 7/7',
      title: 'Thai French English interpreter in Thailand, emergencies',
      description:
        'Surin: interpreter on site. Phuket: remote or with a collaborator. All of Thailand: phone and video. WhatsApp at the top.',
      tags: ['Medical emergency - Accident - Police'],
      cta: 'WhatsApp us',
      features: {
        urgent: {
          title: 'Medical emergency - Accident - Police',
          desc: 'Need a Thai French English interpreter in Thailand urgently!',
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
        role: 'AXA · Thai French English interpreter Surin · Admin',
        description:
          "\"Hi, I'm Tammy. In Surin, all services on site. In Phuket, remote or with a collaborator. All of Thailand, by phone and video. Site WhatsApp.\"",
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
          interpreter: 'Thai French English interpreter',
          emergency: 'Emergency',
          other: 'Other',
        },
        insuranceViaChatbot:
          'For health insurance, use the quote chat at the bottom right, not this form.',
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
    insuranceQuoteCta: {
      title: 'Health insurance request',
      lead: 'Answer the insurance quote questions: Tammy prepares your file and calls you back.',
    },
    footer: {
      tagline: 'Surin health insurance · Thailand health insurance · Thai French English interpreter in Thailand · Admin',
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
      title: 'ประกันสุขภาพไทย · กรุงเทพ ภูเก็ต เชียงใหม่ · แทมมี่ AXA',
      description:
        'ประกันสุขภาพในไทยสำหรับชาวต่างชาติ: โรงพยาบาล วีซ่า ใบเสนอราคาภาษาฝรั่งเศส กรุงเทพ เชียงใหม่ ภูเก็ต พัทยา หัวหิน เกาะสมุย สุรินทร์ แทมมี่ ตัวแทน KrungThai AXA หน้างานหรือวิดีโอ',
      ogTitle: 'ประกันสุขภาพไทย · ชาวต่างชาติ · กรุงเทพ ภูเก็ต เชียงใหม่',
      ogDescription:
        'ประกันสุขภาพไทยสำหรับชาวต่างชาติที่กรุงเทพ เชียงใหม่ ภูเก็ต พัทยา สุรินทร์ ใบเสนอราคาโรงพยาบาลภาษาฝรั่งเศส แทมมี่ (AXA) หน้างานหรือวิดีโอ',
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
          insurance: 'ประกันสุขภาพไทย',
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
      pageTitle: 'ติดต่อ อสังหาฯ ล่าม & ธุรการ',
      pageH1: 'ทักแทมมี่หรือโทมาส',
      metaDescription:
        'วอทส์แอปหรือแบบฟอร์มสำหรับอสังหาฯ ล่ามไทย ฝรั่งเศส อังกฤษในไทย และธุรการ สำหรับประกันสุขภาพใช้แชทใบเสนอราคาด้านล่าง',
    },
    regions: {
      eyebrow: 'พื้นที่ให้บริการ',
      title: 'สุรินทร์ ภูเก็ต & ทั่วไทย',
      lead: 'กำลังหาประกันสุขภาพในไทย? ที่สุรินทร์ แทมมี่รับหน้างานเพื่อเปรียบเทียบแผน AXA ที่ภูเก็ต ระยะไกลหรือผ่านผู้ร่วมงาน จากกรุงเทพ เชียงใหม่ พัทยา หัวหิน เกาะสมุย และที่อื่น: ใบเสนอราคาและสมัครทางโทรและวิดีโอ',
      surin: {
        badge: 'สุรินทร์, หน้างาน',
        title: 'บริการครบที่สุรินทร์',
        services: [
          'ประกันสุขภาพ (KrungThai AXA)',
          'ล่ามไทย ฝรั่งเศส อังกฤษ',
          'วีซ่าและช่วยเรื่องธุรการ',
        ],
        note: 'วีซ่า ประกัน ล่าม และธุรการ ทุกอย่างหน้างานกับแทมมี่ที่สุรินทร์',
        cta: 'สาขาสุรินทร์',
      },
      phuket: {
        badge: 'ภูเก็ต, ระยะไกล',
        title: 'บริการที่ภูเก็ต',
        services: [
          'ประกัน ล่าม วีซ่า: ระยะไกลหรือผ่านผู้ร่วมงาน',
          'อสังหากับโทมาสหน้างาน (ภูเก็ตและกระบี่)',
        ],
        note: 'ภูเก็ต: โทรศัพท์ วิดีโอ หรือผู้ร่วมงานในพื้นที่ตามเคส โทมาสดูแลอสังหาบนเกาะ',
        cta: 'ประกันสุขภาพภูเก็ตไทย',
      },
      thailand: {
        badge: 'ทั่วประเทศไทย',
        title: 'ระยะไกล โทรและวิดีโอ',
        services: [
          'ประกันสุขภาพในไทย',
          'ล่ามไทย ฝรั่งเศส อังกฤษในไทย',
          'วีซ่าและคำปรึกษาธุรการ',
        ],
        note: 'ประกันสุขภาพกรุงเทพ เชียงใหม่ พัทยา หัวหิน เกาะสมุย ระยอง: แทมมี่เปรียบเทียบวงเงินโรงพยาบาลทางวิดีโอ ไม่ว่าคุณอยู่จังหวัดไหน',
        cta: 'ติดต่อเรา',
      },
    },
    actualites: {
      pageTitle: 'ข่าวสาร, ภูเก็ตและไทย',
      metaDescription:
        'ข่าวและคู่มือสำหรับชาวต่างชาติที่ภูเก็ต: ประกันสุขภาพ อสังหาฯ ล่ามไทย ฝรั่งเศส อังกฤษในไทยและชีวิตในไทย',
      h1: 'ข่าวสาร',
      lead:
        'ข่าวจากเว็บและประสบการณ์บนเกาะ, ประกันสุขภาพไทย อสังหาฯ ล่ามไทย ฝรั่งเศส อังกฤษในไทย อัปเดตเมื่อมีเรื่องใหม่',
      empty: 'ยังไม่มีบทความ',
      home: 'หน้าแรก',
      breadcrumbLabel: 'เส้นทางนำทาง',
      relatedTitle: 'ข่าวอื่นๆ',
      backToList: '← ข่าวสารทั้งหมด',
    },
    homeSlider: {
      slide1: {
        h1: 'ล่ามไทย ฝรั่งเศส อังกฤษในไทย',
        title: 'ล่ามไทย ฝรั่งเศส อังกฤษในไทย',
        subtitle:
          'สุรินทร์หน้างาน · ภูเก็ตระยะไกลหรือผ่านผู้ร่วมงาน · ทั่วไทยโทรและวิดีโอ',
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
        title: 'ประกันสุขภาพในไทย',
        subtitle:
          'ประกันที่สุรินทร์หน้างาน · ที่ภูเก็ตระยะไกลหรือผู้ร่วมงาน · ทั่วไทยโทรและวิดีโอ',
        cta: 'ใบเสนอราคาประกัน',
      },
      slide4: {
        title: 'วีซ่า ล่าม และประกันสุขภาพที่สุรินทร์',
        alt: 'แทมมี่ที่สุรินทร์: วีซ่า ล่าม และประกัน บริการครบหน้างาน',
        subtitle:
          'วีซ่า ล่าม และประกันที่สุรินทร์: บริการทั้งหมดหน้างานกับแทมมี่',
        cta: 'ติดต่อแทมมี่!',
      },
      prev: 'สไลด์ก่อนหน้า',
      next: 'สไลด์ถัดไป',
    },
    hero: {
      eyebrow: 'สุรินทร์ & ภูเก็ต',
      seoH1: 'ประกันสุขภาพสุรินทร์ · ประกันสุขภาพไทย · ล่ามไทย ฝรั่งเศส อังกฤษในไทย · ธุรการ',
      seoH1Sub: 'อสังหาภูเก็ตกระบี่, โทมาส',
      titleLine1: 'ต้องการล่ามไทย ฝรั่งเศส อังกฤษในไทยใช่ไหม?',
      titleLine2: 'ฝรั่งเศส · อังกฤษ · ไทย',
      subtitle:
        'สุรินทร์: ครบหน้างาน ภูเก็ต: ระยะไกลหรือผู้ร่วมงาน กรุงเทพ เชียงใหม่ พัทยา หัวหิน เกาะสมุย: โทรและวิดีโอ โทมาสดูแลอสังหาภูเก็ตและกระบี่ วอทส์แอปด้านบน',
      ctaContact: 'ติดต่อเรา',
      ctaWhatsapp: 'วอทส์แอปทันที',
    },
    services: {
      title: 'บริการของเรา',
      subtitle: 'สุรินทร์หน้างาน · ภูเก็ตระยะไกล · ทั่วไทยวิดีโอ',
      realEstate: {
        title: 'อสังหาริมทรัพย์ภูเก็ตและกระบี่',
        tagline: 'ภูเก็ต & กระบี่',
        description:
          'โทมาสยังเป็นที่ปรึกษาอสังหาบนเกาะและกระบี่ แยกจากฐานที่สุรินทร์',
        cta: 'ถามโทมาส',
      },
      insurance: {
        title: 'ประกันสุขภาพสุรินทร์ & ประกันสุขภาพไทย',
        tagline: 'สุรินทร์ & ทุกที่ในไทย',
        description:
          'สุรินทร์: ประกันหน้างาน ภูเก็ต: ระยะไกลหรือผู้ร่วมงาน กรุงเทพ เชียงใหม่ พัทยา หัวหิน เกาะสมุย: ใบเสนอราคาและสมัครทางโทรและวิดีโอ (KrungThai AXA)',
        cta: 'ใบเสนอราคาประกัน',
      },
      interpreter: {
        title: 'ล่ามไทย ฝรั่งเศส อังกฤษในไทย',
        tagline: 'สุรินทร์ & ทุกที่ในไทย',
        description:
          'สุรินทร์: ล่ามหน้างาน (โรงพยาบาล ตำรวจ ตรวจคนเข้าเมือง) ภูเก็ต: ระยะไกลหรือผู้ร่วมงาน กรุงเทพ เชียงใหม่ พัทยา หัวหิน เกาะสมุย: โทร วอทส์แอป และวิดีโอ',
        cta: 'โทรแทมมี่',
      },
      administration: {
        title: 'ช่วยเรื่องธุรการ',
        tagline: 'สุรินทร์หน้างาน · ที่อื่นระยะไกล',
        description:
          'วีซ่า ตรวจคนเข้าเมือง แบบฟอร์ม: หน้างานที่สุรินทร์ ภูเก็ตระยะไกลหรือผู้ร่วมงาน ทั่วไทยโทรและวิดีโอ',
        cta: 'ติดต่อเรา',
      },
    },
    seoIntro: {
      eyebrow: 'ประกันสุขภาพชาวต่างชาติ',
      title: 'ประกันสุขภาพในไทย ไม่ว่าคุณอยู่เมืองไหน',
      paragraphs: [
        'หลายคนค้นหา<strong>ประกันสุขภาพไทย</strong>เพราะโรงพยาบาลเอกชนมักขอจ่ายหรือการันตีก่อนรักษา แทมมี่ ตัวแทน <strong>KrungThai AXA</strong> ช่วยเลือกแผนที่มีการนอนโรงพยาบาล ผู้ป่วยนอก และวงเงินที่เหมาะกับวีซ่า',
        'ที่<strong>กรุงเทพ</strong> <strong>เชียงใหม่</strong> <strong>พัทยา</strong> <strong>หัวหิน</strong> <strong>เกาะสมุย</strong> หรือจังหวัดอื่น คุยทางโทรหรือวิดีโอเพื่อเปรียบเทียบ iHealthy ความรับผิดชอบส่วนแรก และโรงพยาบาลในเครือ ที่<strong>สุรินทร์</strong> หน้างาน ที่<strong>ภูเก็ต</strong> ระยะไกลหรือผู้ร่วมงาน',
        'ต้องการ <a href="#devis-assurance">ใบเสนอราคาประกัน</a>? ใช้แชทด้านล่างหรือวอทส์แอปด้านบน ฉุกเฉินภูเก็ต: <a href="/th/hopitaux-a-phuket/">โรงพยาบาล</a> <a href="/th/numeros-durgences/">1155/1669</a>',
      ],
      links: [
        { href: '/th/assurance-sante-phuket/', label: 'ประกันสุขภาพภูเก็ตไทย' },
        { href: '/th/agence-surin/', label: 'สาขาสุรินทร์' },
        { href: '/th/interprete-thai-francais-anglais-a-phuket/', label: 'ล่ามไทย ฝรั่งเศส อังกฤษในไทย' },
        { href: '/th/expatriation-a-phuket-besoin-achat-immobilier-ou-locatif/', label: 'อสังหาภูเก็ต' },
        { href: '/th/category/adresses-utiles/', label: 'ที่อยู่ที่เป็นประโยชน์' },
        { href: '/th/contact/', label: 'ติดต่อ' },
      ],
    },
    emergency: {
      eyebrow: 'พร้อมบริการ 7 วัน',
      title: 'ล่ามไทย ฝรั่งเศส อังกฤษในไทย ฉุกเฉิน',
      description:
        'สุรินทร์: ล่ามหน้างาน ภูเก็ต: ระยะไกลหรือผู้ร่วมงาน ทั่วไทย: โทรและวิดีโอ วอทส์แอปที่หัวเว็บ',
      tags: ['เหตุฉุกเฉินทางการแพทย์ - อุบัติเหตุ - ตำรวจ'],
      cta: 'วอทส์แอป',
      features: {
        urgent: {
          title: 'เหตุฉุกเฉินทางการแพทย์ - อุบัติเหตุ - ตำรวจ',
          desc: 'ต้องการล่ามไทย ฝรั่งเศส อังกฤษในไทยด่วน!',
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
        role: 'AXA · ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ · ธุรการ',
        description:
          '"สวัสดีค่ะ ที่สุรินทร์ บริการครบหน้างาน ที่ภูเก็ต ระยะไกลหรือผู้ร่วมงาน ทั่วไทย โทรและวิดีโอ วอทส์แอปบนเว็บ"',
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
          interpreter: 'ล่ามไทย ฝรั่งเศส อังกฤษ',
          emergency: 'ฉุกเฉิน',
          other: 'อื่น ๆ',
        },
        insuranceViaChatbot:
          'สำหรับประกันสุขภาพ ใช้แชทใบเสนอราคามุมล่างขวา ไม่ใช่แบบฟอร์มนี้',
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
    insuranceQuoteCta: {
      title: 'ขอประกันสุขภาพ',
      lead: 'ตอบคำถามในแชทใบเสนอราคา แทมมี่จัดเตรียมข้อมูลและติดต่อกลับ',
    },
    footer: {
      tagline: 'ประกันสุขภาพสุรินทร์ · ประกันสุขภาพไทย · ล่ามไทย ฝรั่งเศส อังกฤษในไทย · ธุรการ',
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
