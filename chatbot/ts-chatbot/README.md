# Plugin WordPress — Assistant assurance (chatbot)

Extension prête à copier dans `wp-content/plugins/thailande-services-assurance-chatbot/`.

## Installation

1. Copiez tout le dossier `thailande-services-assurance-chatbot` dans `wp-content/plugins/`.
2. **Extensions** → activer **Thailande Services — Assistant assurance (chatbot)**.
3. **Réglages → Assistant assurance** : renseignez la **clé Web3Forms** (souvent la même que le formulaire contact).
4. Placez le shortcode où vous voulez le widget (souvent pied de page ou widget « HTML personnalisé ») :

```text
[ts_assurance_chatbot]
```

Un conteneur vide `#ts-assurance-chatbot` est rendu ; le script monte l’interface (panneau + bouton réduit).

## Web3Forms

- L’envoi se fait en **POST** direct vers `https://api.web3forms.com/submit` (pas de hCaptcha dans l’UI du chat, comme sur le site Astro).
- Vous pouvez utiliser une **deuxième** clé Web3Forms dédiée au bot (sans activer hCaptcha sur cette clé dans le tableau Web3Forms), pour séparer les messages « contact » et « chatbot ».

## Fichiers

| Fichier | Rôle |
|--------|------|
| `thailande-services-assurance-chatbot.php` | Plugin, réglages, shortcode, `wp_localize_script` |
| `assets/chatbot.js` | Logique du flux (ménage, questions, `localStorage`, envoi) |
| `assets/chatbot.css` | Panneau flottant, bulles, boutons |

## Réglages optionnels

- **Lien WhatsApp** : utilisé dans les messages si la clé manque ou en secours (texte d’aide).
- **From name** : champ Web3Forms `from_name` pour l’e-mail généré.

## Désactiver le chargement des assets

```php
add_filter('ts_assurance_chatbot_enqueue_assets', '__return_false');
```

Dans ce cas, enregistrez vous-même `chatbot.css` / `chatbot.js` et passez la config JS `tsAssuranceChatbot` (`accessKey`, `waMeUrl`, `fromName`).

## Repli clé (optionnel)

Le script lit aussi `meta[name="web3forms-access-key"]` ou un champ `input[name="access_key"]` dans `#ts-contact-form` / `.ts-contact-form` (utile si vous dupliquez la clé côté thème).
