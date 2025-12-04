# Structure Frontend - SensiNum

La structure frontend a été reorganisée selon l'architecture demandée.

## 📁 Structure des dossiers

```
frontend/
├── public/
│   ├── favicon.ico
│   └── icons/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── styles/
│   │       ├── base.css          # Tailwind + Global styles
│   │       └── utilities.css     # Classes personnalisées
│   │
│   ├── components/
│   │   ├── ui/                    # Composants génériques réutilisables
│   │   │   ├── Button.vue
│   │   │   ├── Card.vue
│   │   │   ├── Input.vue
│   │   │   └── SectionTitle.vue
│   │   │
│   │   ├── layout/                # Structure globale
│   │   │   ├── Header.vue
│   │   │   ├── Footer.vue
│   │   │   └── NavBar.vue
│   │   │
│   │   ├── awareness/             # Page de sensibilisation
│   │   │   ├── IpDisplay.vue
│   │   │   ├── MetadataCard.vue
│   │   │   └── RiskBanner.vue
│   │   │
│   │   ├── phishing/
│   │   │   ├── EmailPreview.vue
│   │   │   ├── PhishingOptions.vue
│   │   │   └── ResultModal.vue
│   │   │
│   │   ├── chatbot/
│   │   │   ├── ChatWindow.vue
│   │   │   ├── ChatMessage.vue
│   │   │   └── ChatInput.vue
│   │   │
│   │   └── quiz/
│   │       ├── Question.vue
│   │       └── QuizProgress.vue
│   │
│   ├── layouts/
│   │   └── DefaultLayout.vue      # Layout principal (header, footer)
│   │
│   ├── pages/
│   │   ├── Home.vue
│   │   ├── Awareness.vue
│   │   ├── PhishingSimulator.vue
│   │   ├── Quiz.vue
│   │   ├── Chatbot.vue
│   │   └── About.vue
│   │
│   ├── router/
│   │   └── index.js               # Routes claires + layout
│   │
│   ├── services/
│   │   ├── api.js                 # API Express (IP, metadata)
│   │   └── chatbot.js             # Requêtes chatbot
│   │
│   ├── utils/
│   │   └── format.js              # Fonctions utilitaires
│   │
│   ├── App.vue
│   └── main.js
│
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🚀 Installation

```bash
cd frontend
npm install
```

## 📦 Dépendances ajoutées

- `vue-router` : Gestion du routing

## 🎯 Prochaines étapes

1. Installer les dépendances : `npm install`
2. Lancer le serveur de développement : `npm run dev`
3. Connecter le backend avec les services dans `src/services/`
4. Ajouter des images/icônes dans `src/assets/images/` et `src/assets/icons/`

## 📝 Notes

- Tous les composants sont créés et fonctionnels
- Le routing est configuré avec Vue Router
- Les styles Tailwind sont configurés
- Les services API sont prêts à être connectés au backend
