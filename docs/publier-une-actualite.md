# Publier une actualité

1. Créez un fichier `.md` dans `src/content/actualites/` (ex. `mon-article.md`).
2. L’URL sera : `https://thailande-services.fr/actualites/mon-article/`
3. Utilisez ce modèle :

```md
---
title: Titre de l’article
description: Résumé pour Google (max ~160 caractères)
pubDate: 2026-05-19
draft: false
image: /images/logo.png
---

Texte en **Markdown**…
```

`draft: true` masque l’article. Puis `npm run build` ou push sur GitHub.
