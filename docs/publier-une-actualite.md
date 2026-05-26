# Publier une actualité (3 langues)

Chaque article est un **dossier** avec **3 fichiers Markdown** :

```
src/content/actualites/mon-article/
  fr.md
  en.md
  th.md
```

## URLs générées

| Langue | Liste | Article |
|--------|--------|---------|
| FR | `/actualites/` | `/actualites/mon-article/` |
| EN | `/en/actualites/` | `/en/actualites/mon-article/` |
| TH | `/th/actualites/` | `/th/actualites/mon-article/` |

## Modèle (à copier dans chaque fichier)

**`fr.md`**

```md
---
title: Titre en français
description: Résumé pour Google (max ~160 caractères)
pubDate: 2026-05-19
draft: false
image: /images/logo.png
---

Contenu en français…
```

**`en.md`** et **`th.md`** : même en-tête (`pubDate` identique recommandé), titre et texte traduits.

`draft: true` sur un fichier → cette langue n’est pas publiée.

## Exemple existant

`src/content/actualites/bienvenue-actualites-phuket/` (fr, en, th).

Puis `npm run build` ou push sur GitHub pour déployer.
