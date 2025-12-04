# 🌐 SensiNum — Sensibilisation à la Fracture Numérique  
Projet réalisé dans le cadre de la **Nuit de l’Info 2024**

---

## 🎯 Objectif du projet  
SensiNum est une application web destinée à **sensibiliser les utilisateurs à la fracture numérique**, aux enjeux d’accessibilité, et aux bonnes pratiques de cybersécurité.  
Notre approche combine :

- Une **démonstration choc** de ce qu’un site peut savoir sur vous (IP, device, métadonnées…)
- Un **quiz ludique** sur les bonnes pratiques de sécurité numérique
- Un **simulateur de vulnérabilité**
- Un **chatbot pédagogique** pour guider les utilisateurs
- Une interface **accessible, inclusive et éthique**

---

# 👥 Équipe & Répartition

## 🔹 Leadership
- **Marewane** — Chef d’équipe, coordination globale

## 🔹 Front-end (Vue.js + Vite + TailwindCSS)
- **Habib** — Structure, layout, intégration  
- **Iliasse** — Interactivité, logique des composants  
- **Yassine** — Accessibilité, UX, responsive design  

*(Note : les rôles sont flexibles, chacun peut contribuer où il veut)*

## 🔹 Back-end (Node.js + Express)
- **Rafi** — API (IP, metadata, scoring sécurité)  
- **Ayoub** — Chatbot (logique + API)

## 🔹 DevOps
- **Wajdi** — GitHub, CI/CD, déploiement (Vercel + Render)

---

# 🛠️ Technologies utilisées

## Front-end
- **Vue.js 3**
- **Vite**
- **TailwindCSS**
- **Vue Router**

## Back-end
- **Node.js**
- **Express**
- **Helmet** (sécurité)
- **CORS**

## DevOps / Services
- **GitHub Actions** (CI/CD)
- **Vercel** (frontend)
- **Render.com** (backend)

---

# 📁 Structure du projet

/frontend
├── src/
│ ├── components/
│ ├── pages/
│ ├── App.vue
│ └── main.js
├── index.html
└── tailwind.config.js

/backend
├── server.js
├── routes/
│ ├── ip.js
│ ├── metadata.js
│ └── chatbot.js
├── controllers/
└── package.json

/README.md


---

# 🚀 Installation & lancement

## 🔧 Prérequis
- Node.js 18+
- npm

---

## ▶️ **Lancer le back-end (Express)**

```bash
cd backend
npm install
npm run dev

Serveur par défaut :
http://localhost:3000

💻 Lancer le front-end (Vue + Vite)
cd frontend
npm install
npm run dev

Serveur par défaut :
http://localhost:5173

🔌 API disponibles
GET /api/ip

Renvoie l’adresse IP publique de l’utilisateur.

GET /api/metadata

Renvoie des informations sur le navigateur (User-Agent, langue, OS, etc.)

POST /api/chatbot

Renvoie une réponse éducative du chatbot basée sur l’entrée utilisateur.

🧭 Features prévues

Page d’accueil avec explication + démonstration choc

Quiz éducatif sur la cybersécurité

Simulateur de vulnérabilité (IP + metadata + scoring)

Chatbot pédagogique interactif

Parcours utilisateur accessible (WCAG AA)

UI sobre, moderne, responsable

Portage mobile (si le temps le permet)

♿ Engagements éthiques & responsables

Accessibilité prioritaire (navigation clavier, contrastes, ARIA)

Application légère pour réduire l’impact écologique

Aucune donnée personnelle stockée

Design simple et inclusif

🧪 Commandes utiles
🧹 Lint Tailwind (optionnel)
npm run lint


🛠 Version de production (frontend)

npm run build

🎤 Pitch du projet (version courte)

Dans un monde de plus en plus numérique, une partie de la population reste exclue : manque de compétences, manque d’accès, manque d’accompagnement.
SensiNum a pour mission de sensibiliser, éduquer, et protéger.
Notre application propose une expérience simple, interactive et accessible pour comprendre les risques du numérique… et apprendre à mieux s'en protéger.

💬 Contact

Projet réalisé par l’équipe Nuit de l’Info 2025 — BUT Info.
