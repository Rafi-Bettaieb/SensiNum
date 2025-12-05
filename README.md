# 🌐 SensiNum — Sensibilisation à la Fracture Numérique  
*Projet réalisé lors de la **Nuit de l’Info 2025***

---

## 🎯 Objectif du projet

**SensiNum** est une application web visant à **sensibiliser le public aux enjeux de la fracture numérique** : accessibilité, inclusion et cybersécurité.  
Notre plateforme propose :

- ⚡ **Démo choc** : Montrez tout ce qu’un site sait sur vous (IP, appareil, métadonnées…)
- 🧩 **Quiz interactif** : Testez vos connaissances sur la sécurité numérique
- 🔎 **Simulateur vulnérabilités** : Mettez-vous dans la peau d’un utilisateur exposé
- 🤖 **Chatbot pédagogique** : Obtenez des explications et conseils personnalisés
- ♿ **Interface accessible & inclusive** : Priorité à l’ergonomie et à l’éthique

---

## 👥 Équipe & rôles

### 🚀 Coordination
- **Marewane** — Leader, chef de projet

### 💻 Front-end (Vue.js, Vite, TailwindCSS)
- **Habib** — Maquettes, intégration & layout
- **Iliasse** — Logique UI, interactions & quiz
- **Yassine** — Accessibilité, expérience utilisateur

### ⚙️ Back-end (Node.js, Express)
- **Rafi** — APIs (IP, metadata, scoring)
- **Ayoub** — Chatbot intelligent

### 🔄 DevOps
- **Wajdi** — Mise en place GitHub, CI/CD, déploiement (Vercel / Render)

_Rôles ouverts : chaque membre peut contribuer dans tous domaines_

---

## ⚒️ Technologies

**Front-end**
- Vue.js 3, Vite, TailwindCSS, Vue Router

**Back-end**
- Node.js, Express, Helmet (sécurité), CORS

**DevOps / Services**
- GitHub Actions (CI/CD)
- Vercel (déploiement frontend)
- Render.com (déploiement backend)

---

## 📁 Arborescence simplifiée

```
frontend/
 ├─ src/
 │  ├─ components/
 │  ├─ pages/
 │  ├─ App.vue
 │  └─ main.js
 ├─ index.html
 └─ tailwind.config.js

backend/
 ├─ server.js
 ├─ routes/
 │  ├─ ip.js
 │  ├─ metadata.js
 │  └─ chatbot.js
 ├─ controllers/
 └─ package.json

README.md
```

---

## 🚀 Installation & utilisation

### 1️⃣ Pré-requis
- [Node.js 18+](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### 2️⃣ Mise en place

**Lancer le back-end :**

```sh
cd backend
npm install
npm run dev
# Le serveur démarre sur http://localhost:3000
```

**Lancer le front-end :**

```sh
cd frontend
npm install
npm run dev
# Le serveur démarre sur http://localhost:5173
```

### 🔌 API principales

- **GET /api/ip**  
  → Récupère l’IP publique de l’utilisateur
- **GET /api/metadata**  
  → Retourne les informations sur le navigateur/OS
- **POST /api/chatbot**  
  → Renvoie une réponse pédagogique selon l’entrée utilisateur

---

## 🗺️ Fonctionnalités clés

- Accueil avec explication & démonstration choc
- Quiz sur les bonnes pratiques cybersécurité
- Simulateur de vulnérabilité (IP + metadata + scoring)
- Chatbot interactif & pédagogique
- UI accessible (normes WCAG AA)
- Design moderne & éthique
- Portage mobile (si possible)

---

## ♿ Engagements responsables

- **Accessibilité** prioritaire (clavier, contrastes, ARIA)
- **Eco-responsable** : application légère & peu consommatrice
- **Respect de la vie privée** : aucune donnée personnelle stockée
- UI inclusive & simple

---

## 🧪 Commandes utiles

- Lint Tailwind :  
  `npm run lint`
- Production build (frontend) :  
  `npm run build`

---

## 🎤 Pitch du projet (30s)

> Dans le monde numérique, beaucoup sont laissés sur le bord de la route : manque de compétences, d’accès, de soutien.  
> **SensiNum** veut informer, accompagner et protéger.  
> Profitez d’une application interactive, accessible et responsable pour comprendre les dangers du numérique… et apprendre à s’en protéger, simplement !

---

## 💬 Contact

Projet réalisé lors de la **Nuit de l’Info 2025** — BUT Info  
**L’équipe SensiNum reste dispo pour toutes vos questions !**

