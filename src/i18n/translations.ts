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
      title: 'Assurance santé Thaïlande en ligne · Agence Surin',
      description:
        'Assurance santé Thaïlande à distance avec Tammy (visio, AXA par e-mail). Assurance santé Surin en agence, interprète thaï français anglais Surin en Thaïlande. Immo Phuket & Krabi avec Thomas.',
      /** Accueil FR uniquement : variantes OG plus courtes (réseaux sociaux). */
      ogTitle: 'Surin : assurance santé Surin · interprète thaï français anglais Surin | assurance santé Thaïlande',
      ogDescription:
        'Assurance santé Surin, interprète thaï français anglais Surin en Thaïlande. Assurance santé Thaïlande à distance. Immo avec Thomas.',
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
      pageTitle: 'Contact assurance santé, immo & interprète thaï français anglais',
      pageH1: 'Écrire à Tammy ou Thomas',
      metaDescription:
        'WhatsApp ou formulaire : assurance santé Surin, assurance santé Thaïlande à distance, interprète thaï français anglais en Thaïlande et admin. Immo Krabi. On répond dès qu’on peut.',
    },
    regions: {
      eyebrow: 'Où nous trouver',
      title: 'Surin & Phuket',
      lead: 'Tammy travaille à Surin (assurance santé Surin, interprète thaï français anglais Surin en Thaïlande, admin). L’assurance santé Thaïlande se souscrit aussi à distance, depuis n’importe où dans le pays.',
      surin: {
        badge: 'Surin, sur place',
        title: 'Services ouverts à Surin',
        services: [
          'Assurance santé Surin (AXA KrungThai)',
          'Interprète thaï français anglais Surin en Thaïlande',
          'Aide administrative (visa, immigration, démarches)',
        ],
        note: 'Tammy reçoit sur place dans la région de Surin pour ces trois services.',
        cta: 'Agence Surin',
      },
      phuket: {
        badge: 'Phuket, on continue',
        title: 'Francophones à Phuket',
        services: [
          'Assurance santé Thaïlande à distance (visio, e-mail)',
          'Interprète thaï français anglais en Thaïlande (WhatsApp)',
          'Immobilier avec Thomas (Phuket & Krabi)',
        ],
        note: 'Assurance santé Thaïlande à distance avec Tammy. Fiches utiles Phuket toujours en ligne.',
        cta: 'Assurance santé Phuket Thaïlande',
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
        title: 'Interprète thaï français anglais en Thaïlande',
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
        title: 'Assurance santé Surin & assurance santé Thaïlande',
        subtitle: 'Surin : assurance santé Surin sur place · assurance santé Thaïlande à distance avec Tammy',
        cta: 'Contactez Tammy!',
      },
      slide4: {
        title: 'Services à Surin : visas, assurance santé Surin, interprète thaï français anglais Surin',
        alt: 'Tammy, Thailande-services à Surin : visas, assurance santé Surin et interprète thaï français anglais Surin en Thaïlande',
        subtitle: '',
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
        'Tammy est basée à Surin (assurance santé Surin, interprète thaï français anglais Surin en Thaïlande, aide admin). L’assurance santé Thaïlande se souscrit à distance ; Thomas gère l’immo à Phuket et Krabi. WhatsApp en haut de page.',
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
        title: 'Assurance santé Surin & Thaïlande',
        tagline: 'Surin & toute la Thaïlande',
        description:
          'Agent AXA : assurance santé Thaïlande à distance avec Tammy (visio, e-mail), ou assurance santé Surin sur place (hospitalisation, visa, auto ou maison).',
        cta: 'Nous contacter',
      },
      interpreter: {
        title: 'Interprète thaï français anglais en Thaïlande',
        tagline: 'Surin & toute la Thaïlande',
        description:
          'Hôpital, police, immigration : interprète thaï français anglais Surin en Thaïlande sur place ; hors région Surin, interprète thaï français anglais en Thaïlande à distance (WhatsApp).',
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
        '<strong>Surin</strong> : Tammy y propose assurance santé Surin (AXA), interprète thaï français anglais Surin en Thaïlande et aide administrative sur place. <strong>Assurance santé Thaïlande</strong> : souscription à distance avec Tammy (visio, e-mail) ; <strong>Thomas</strong> gère l’immo à Phuket et Krabi.',
        'Hôpitaux, urgences, ostéo à Phuket : <a href="/hopitaux-a-phuket/">liste ici</a>, <a href="/numeros-durgences/">1155 / 1669</a>, <a href="/osteopathe-francais-a-phuket/">Dr Tur</a>. Une question ? WhatsApp en haut.',
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
        'Accidents, urgences médicales ou police : interprète thaï français anglais Surin en Thaïlande sur place ; hors région Surin, interprète thaï français anglais en Thaïlande à distance. WhatsApp en tête du site.',
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
          "« Bonjour, c’est Tammy. Je suis à Surin pour l’assurance santé Surin, l’interprète thaï français anglais Surin en Thaïlande et l’aide administrative. Assurance santé Thaïlande à distance. WhatsApp du site. »",
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
          insurance: 'Assurance santé',
          interpreter: 'Interprète thaï français anglais',
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
      title: 'Thailand Health Insurance Online & Surin Office',
      description:
        'Thailand health insurance remotely with Tammy (video, AXA e-mail). Surin health insurance on site, Thai French English interpreter Surin in Thailand. Real estate Phuket & Krabi with Thomas.',
      ogTitle: 'Surin: Surin health insurance · Thai French English interpreter Surin | Thailand health insurance',
      ogDescription:
        'Surin health insurance, Thai French English interpreter Surin in Thailand on site. Thailand health insurance remotely. Property with Thomas.',
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
      pageTitle: 'Contact health insurance, real estate & Thai French English interpreter',
      pageH1: 'Message Tammy or Thomas',
      metaDescription:
        'WhatsApp or form: Surin health insurance, Thailand health insurance remotely, Thai French English interpreter in Thailand and admin. Krabi property. We reply when we can.',
    },
    regions: {
      eyebrow: 'Where we work',
      title: 'Surin & Phuket',
      lead: 'We are based in Surin for Surin health insurance, Thai French English interpreter Surin in Thailand and admin. Thailand health insurance can also be subscribed remotely with Tammy.',
      surin: {
        badge: 'Surin, on site',
        title: 'Services in Surin',
        services: [
          'Surin health insurance (AXA KrungThai)',
          'Thai French English interpreter Surin in Thailand',
          'Administrative help (visa, immigration, paperwork)',
        ],
        note: 'Tammy meets you in the Surin region for these three services.',
        cta: 'Surin branch',
      },
      phuket: {
        badge: 'Phuket, still here',
        title: 'Francophones in Phuket',
        services: [
          'Thailand health insurance remotely (video, e-mail)',
          'Thai French English interpreter in Thailand (WhatsApp)',
          'Real estate with Thomas (Phuket & Krabi)',
        ],
        note: 'Thailand health insurance remotely with Tammy. Phuket guides stay online.',
        cta: 'Phuket Thailand health insurance',
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
        title: 'Thai French English interpreter in Thailand',
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
        title: 'Surin health insurance & Thailand health insurance',
        subtitle: 'Surin: on-site Surin health insurance · Thailand health insurance remotely with Tammy',
        cta: 'Contact Tammy!',
      },
      slide4: {
        title: 'Services in Surin: visas, Surin health insurance, Thai French English interpreter Surin',
        alt: 'Tammy, Thailande-services in Surin: visas, Surin health insurance and Thai French English interpreter Surin in Thailand',
        subtitle: '',
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
        'Tammy is based in Surin (Surin health insurance, Thai French English interpreter Surin in Thailand, admin help). Thailand health insurance remotely; Thomas handles property in Phuket and Krabi. WhatsApp at the top.',
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
        title: 'Surin & Thailand health insurance',
        tagline: 'Surin & all of Thailand',
        description:
          'AXA agent: Thailand health insurance remotely with Tammy (video, e-mail), or Surin health insurance on site (hospital cover, visa, car or home).',
        cta: 'Talk to Tammy',
      },
      interpreter: {
        title: 'Thai French English interpreter in Thailand',
        tagline: 'Surin & all of Thailand',
        description:
          'Hospital, police, immigration: Thai French English interpreter Surin in Thailand on site; outside Surin, Thai French English interpreter in Thailand remotely (WhatsApp).',
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
        '<strong>Surin</strong>: Tammy, Surin health insurance (AXA), Thai French English interpreter Surin in Thailand, admin help. <strong>Thailand health insurance</strong>: subscribe remotely with Tammy (video, e-mail); <strong>Thomas</strong> handles property in Phuket/Krabi.',
        'Phuket hospitals & emergencies: <a href="/en/hopitaux-a-phuket/">list</a>, <a href="/en/numeros-durgences/">1155 / 1669</a>, <a href="/en/osteopathe-francais-a-phuket/">Dr Tur</a>. Questions? WhatsApp at the top.',
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
        'Accidents, medical emergencies or police: Thai French English interpreter Surin in Thailand on site; outside Surin, Thai French English interpreter in Thailand remotely. WhatsApp at the top.',
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
          "\"Hi, I'm Tammy, based in Surin for Surin health insurance, Thai French English interpreter Surin in Thailand and admin help. Thailand health insurance remotely. Site WhatsApp.\"",
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
          insurance: 'Health insurance',
          interpreter: 'Thai French English interpreter',
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
      title: 'ประกันสุขภาพไทยออนไลน์ & สาขาสุรินทร์',
      description:
        'ประกันสุขภาพไทยระยะไกลกับแทมมี่ (วิดีโอ AXA ทางอีเมล) ประกันสุขภาพสุรินทร์หน้างาน ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ในไทย อสังหากระบี่กับโทมัส',
      ogTitle: 'สุรินทร์: ประกันสุขภาพสุรินทร์ · ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ | ประกันสุขภาพไทย',
      ogDescription:
        'ประกันสุขภาพสุรินทร์ ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ในไทยหน้างาน ประกันสุขภาพไทยระยะไกล อสังหากับโทมัส',
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
      pageTitle: 'ติดต่อ, ประกันสุขภาพ อสังหาฯ และล่ามไทย ฝรั่งเศส อังกฤษ',
      pageH1: 'ทักแทมมี่หรือโทมาส',
      metaDescription:
        'วอทส์แอปหรือแบบฟอร์ม: ประกันสุขภาพสุรินทร์ ประกันสุขภาพไทยระยะไกล ล่ามไทย ฝรั่งเศส อังกฤษในไทย และธุรการ อสังหากระบี่ ตอบเมื่อว่าง',
    },
    regions: {
      eyebrow: 'พื้นที่ให้บริการ',
      title: 'สุรินทร์ & ภูเก็ต',
      lead: 'แทมมี่อยู่สุรินทร์สำหรับประกันสุขภาพสุรินทร์ ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ในไทย และธุรการ ประกันสุขภาพไทยสมัครระยะไกลได้จากทุกที่ในประเทศ',
      surin: {
        badge: 'สุรินทร์, หน้างาน',
        title: 'บริการที่สุรินทร์',
        services: [
          'ประกันสุขภาพสุรินทร์ (AXA กรุงไทย)',
          'ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ในไทย',
          'ช่วยเรื่องธุรการ (วีซ่า ตรวจคนเข้าเมือง เอกสาร)',
        ],
        note: 'แทมมี่พบลูกค้าในพื้นที่สุรินทร์สำหรับบริการทั้งสาม',
        cta: 'สาขาสุรินทร์',
      },
      phuket: {
        badge: 'ภูเก็ต, ยังรับงาน',
        title: 'ชาวฝรั่งเศสที่ภูเก็ต',
        services: [
          'ประกันสุขภาพไทยระยะไกล (วิดีโอ อีเมล)',
          'ล่ามไทย ฝรั่งเศส อังกฤษในไทย (วอทส์แอป)',
          'อสังหากับโทมัส (ภูเก็ตและกระบี่)',
        ],
        note: 'ประกันสุขภาพไทยระยะไกลกับแทมมี่ หน้าที่อยู่ภูเก็ตยังอัปเดต',
        cta: 'ประกันสุขภาพภูเก็ตไทย',
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
        title: 'ล่ามไทย ฝรั่งเศส อังกฤษในไทย',
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
        title: 'ประกันสุขภาพสุรินทร์ & ประกันสุขภาพไทย',
        subtitle: 'สุรินทร์: ประกันสุขภาพสุรินทร์หน้างาน · ประกันสุขภาพไทยระยะไกลกับแทมมี่',
        cta: 'ติดต่อแทมมี่!',
      },
      slide4: {
        title: 'บริการที่สุรินทร์: วีซ่า ประกันสุขภาพสุรินทร์ ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์',
        alt: 'แทมมี่ Thailande-services ที่สุรินทร์: วีซ่า ประกันสุขภาพสุรินทร์ และล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ในไทย',
        subtitle: '',
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
        'แทมมี่อยู่สุรินทร์ (ประกันสุขภาพสุรินทร์ ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ในไทย ธุรการ) ประกันสุขภาพไทยสมัครระยะไกลได้ โทมาสดูแลอสังหาภูเก็ตและกระบี่, วอทส์แอปด้านบน',
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
        title: 'ประกันสุขภาพสุรินทร์ & ประกันสุขภาพไทย',
        tagline: 'สุรินทร์ & ทุกที่ในไทย',
        description:
          'ตัวแทน AXA: ประกันสุขภาพไทยระยะไกลกับแทมมี่ (วิดีโอ อีเมล) หรือประกันสุขภาพสุรินทร์หน้างาน (โรงพยาบาล วีซ่า รถ บ้าน)',
        cta: 'คุยกับแทมมี่',
      },
      interpreter: {
        title: 'ล่ามไทย ฝรั่งเศส อังกฤษในไทย',
        tagline: 'สุรินทร์ & ทุกที่ในไทย',
        description:
          'โรงพยาบาล ตำรวจ ตรวจคนเข้าเมือง: ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ในไทยหน้างาน นอกพื้นที่สุรินทร์ล่ามไทย ฝรั่งเศส อังกฤษในไทยระยะไกล (วอทส์แอป)',
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
        '<strong>สุรินทร์</strong>: แทมมี่ให้ประกันสุขภาพสุรินทร์ AXA ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ในไทย และช่วยธุรการ <strong>ประกันสุขภาพไทย</strong>: สมัครระยะไกลกับแทมมี่ (วิดีโอ อีเมล) <strong>โทมาส</strong> อสังหาภูเก็ต/กระบี่',
        'โรงพยาบาลภูเก็ต: <a href="/th/hopitaux-a-phuket/">รายชื่อ</a> <a href="/th/numeros-durgences/">1155/1669</a> <a href="/th/osteopathe-francais-a-phuket/">ดร. Tur</a> วอทส์แอปด้านบน',
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
        'อุบัติเหตุ ฉุกเฉิน ตำรวจ: ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ในไทยหน้างาน นอกพื้นที่สุรินทร์ล่ามไทย ฝรั่งเศส อังกฤษในไทยระยะไกล วอทส์แอปที่หัวเว็บ',
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
          '"สวัสดีค่ะ แทมมี่อยู่สุรินทร์ ประกันสุขภาพสุรินทร์ ล่ามไทย ฝรั่งเศส อังกฤษสุรินทร์ในไทย และช่วยธุรการ ประกันสุขภาพไทยระยะไกล วอทส์แอปบนเว็บ"',
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
          insurance: 'ประกันสุขภาพ',
          interpreter: 'ล่ามไทย ฝรั่งเศส อังกฤษ',
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
