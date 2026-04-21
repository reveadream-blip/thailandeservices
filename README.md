# Thaïlande Services — site statique

Site vitrine trilingue (FR / EN / TH) pour Thaïlande Services, basé à Phuket.

Stack : [Astro 5](https://astro.build) + HTML/CSS pur. Aucune BDD, aucun backend.

## Démarrage local

```bash
npm install
npm run dev
```

Puis ouvre http://localhost:4321 dans ton navigateur.

- FR : http://localhost:4321/
- EN : http://localhost:4321/en/
- TH : http://localhost:4321/th/

## Structure

```
thailandeservices/
├── public/
│   ├── favicon.svg
│   └── images/           ← mets tes photos ici (tammy.jpg, thomas.jpg…)
├── src/
│   ├── components/       ← Header, Footer, Hero, Services, Emergency, Partners, Contact
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro       ← version FR (par défaut)
│   │   ├── en/index.astro
│   │   └── th/index.astro
│   ├── styles/
│   │   └── global.css
│   ├── i18n/
│   │   └── translations.ts   ← textes des 3 langues (à retoucher librement)
│   └── config.ts             ← WhatsApp, email, clé Web3Forms
├── astro.config.mjs
└── package.json
```

## À personnaliser

### 1. Coordonnées dans `src/config.ts`

```ts
export const CONTACT = {
  whatsappNumber: '+66000000000',        // remplace par ton vrai numéro
  whatsappLink: 'https://wa.me/66000000000',
  email: 'contact@thailande-services.fr',
  phoneDisplay: '+66 00 000 000',
  facebook: '',
  instagram: '',
}
```

Formats :
- **whatsappLink** : `https://wa.me/` suivi du numéro **sans le +** ni espaces (ex. `+66 81 234 5678` → `https://wa.me/66812345678`)
- **phoneDisplay** : format affiché librement (ex. `+66 81 234 5678`)

### 2. Clé Web3Forms pour le formulaire de contact

Va sur https://web3forms.com → entre ton email → tu reçois une `access_key` (UUID). Colle-la dans `src/config.ts` :

```ts
export const WEB3FORMS_ACCESS_KEY = 'ton-uuid-ici'
```

Gratuit, 250 soumissions/mois sans inscription.

### 3. Photos des partenaires

Mets dans `public/images/` :
- `tammy.jpg` — photo de Tammy
- `thomas.jpg` — photo de Thomas
- `consulate.jpg` — logo ou visuel du Consulat (optionnel)

Format JPG ou WebP, ratio 4:3 recommandé, 800×600 px minimum. Si un fichier manque, un emoji s'affiche à la place.

### 4. Textes

Tout le contenu texte est dans `src/i18n/translations.ts` — modifie librement les 3 blocs `fr`, `en`, `th`.

La traduction **thaï** a été rédigée mais **fais-la vérifier par Tammy** avant mise en ligne pour ajuster le ton et la terminologie locale.

## Build de production

```bash
npm run build
```

Génère le dossier `dist/` avec tout le site statique prêt à déployer (Cloudflare Pages, Netlify, GitHub Pages, serveur web classique…).

```bash
npm run preview
```

Sert le build localement pour vérification.

## Déploiement Cloudflare Pages

1. Push le projet sur GitHub
2. dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git
3. Build command : `npm run build` · Output : `dist` · Node : `20`
4. Ajoute le custom domain `thailande-services.fr`

Au DNS OVH : changer les nameservers pour pointer sur Cloudflare (la zone `thailande-services.fr` doit être dans ton compte Cloudflare).
