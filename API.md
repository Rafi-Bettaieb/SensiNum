# 📄 Documentation API – SensiNum

**Version 1.0 — Mise à jour par Marewane**  
L’API SensiNum vise à sensibiliser à la cybersécurité via des quiz, des cours, et des interactions pédagogiques.

- **Backend** : Node.js + Express
- **DB** : Sans base de données, stateless
- **Réponses** : JSON exclusivement

---

## 🗂 Table des matières
1. [Routes générales](#routes-générales)
2. [Cookie piège (cookie trap)](#cookie-piège-cookie-trap)
3. [Chatbot pédagogique](#chatbot-pédagogique)
4. [Quiz](#quiz)
5. [Cours](#cours)
6. [Gestion des sessions](#gestion-des-sessions)
7. [Codes de statut](#codes-de-statut-http)
8. [Notes techniques](#notes-techniques)
9. [Planning des routes](#planning-des-routes-à-implémenter)

---

## 🚀 Routes générales

### 🟦 `GET /api/ip`
Renvoie l'[adresse IP](https://expressjs.com/en/4x/api.html#req.ip) publique de l'utilisateur.
```json
{
  "ip": "192.168.1.25"
}
```

### 🟦 `GET /api/metadata`
Renvoie des métadonnées client non sensibles (sans tracking).
```json
{
  "userAgent": "Mozilla/5.0...",
  "language": "fr-FR",
  "platform": "Linux x86_64"
}
```

---

## 🎭 Cookie piège (cookie trap)

Objectif : Sensibilisation au consentement des cookies.

### 🟥 `POST /api/cookie-trap/accept`
- Pose un cookie `sensinum_cookie_trap=accepted` (cookie non persistant et non sensible).
- Réponse :
  ```json
  {
    "choice": "accept",
    "message": "Cookie piégé posé (sensinum_cookie_trap=accepted)"
  }
  ```
- Après : Redirection vers la page « Attention ».

### 🟩 `POST /api/cookie-trap/refuse`
- Supprime le cookie si présent.
- Réponse :
  ```json
  {
    "choice": "refuse",
    "message": "Aucun cookie posé, bien joué 👏"
  }
  ```
- Après : Redirection vers la page « Félicitations ».

---

## 🤖 Chatbot pédagogique

Permet de répondre à une question utilisateur, via LLM ou logique interne.

### 🟧 `POST /api/chatbot`
- **Body attendu** :
    ```json
    {
      "question": "C'est quoi l'authentification à deux facteurs ?"
    }
    ```
- **Réponse** :
    ```json
    {
      "answer": "La double authentification ajoute une seconde étape de vérification..."
    }
    ```

---

## 🎮 Quiz (parcours de sensibilisation)

3 niveaux disponibles : facile, intermédiaire, difficile.

### ⭐ `GET /api/quiz/easy|medium|hard`
- Retourne 5 questions du niveau demandé.
- **Exemple de structure** :
    ```json
    {
      "questions": [
        {
          "question": "Qu'est-ce qu'un mot de passe fort ?",
          "choices": ["simple", "court", "complexe"],
          "answer": 2  // Index de la bonne réponse
        }
      ]
    }
    ```

---

## 📚 Cours

Propose des leçons par niveau.

### 🟦 `GET /api/course/easy|medium|hard`
- Contenu des cours du niveau demandé.
- **Exemple** :
    ```json
    {
      "title": "Bases de la cybersécurité",
      "sections": [
        {
          "title": "Mot de passe",
          "content": "Un mot de passe fort doit..."
        }
      ]
    }
    ```

---

## 🔐 Gestion des sessions (localStorage, côté front)
> *Note : aucune route backend, pour information équipe front.*

- Structure suggérée :
    ```json
    {
      "level_easy": true,
      "level_medium": false,
      "level_hard": false,
      "history_chatbot": []
    }
    ```

---

## 🧩 Codes de statut HTTP

| Code | Signification                           |
|------|-----------------------------------------|
| 200  | OK                                      |
| 400  | Mauvaise requête (question vide, etc.)  |
| 500  | Erreur interne serveur                  |

---

## 🛠 Notes techniques

- **API stateless :** aucune base de données utilisée.
- **Cookies :** non sensibles, non persistants, juste démonstration.
- **LLM :** Clé d’API dans `.env` (**jamais** commitée), attention à la sécurité.
- **Tests :** chaque route doit renvoyer des erreurs explicites (code HTTP + message).

---

## 🎯 Planning des routes à implémenter

| Route                   | Statut       | Responsable |
|-------------------------|--------------|-------------|
| `GET /api/ip`           | OK           | Rafi        |
| `GET /api/metadata`     | OK           | Rafi        |
| `POST /api/cookie-trap/accept` | À coder      | Marewane    |
| `POST /api/cookie-trap/refuse` | À coder      | Marewane    |
| `POST /api/chatbot`     | Squelette OK | Ayoub       |
| `GET /api/quiz/*`       | À remplir    | Marewane    |
| `GET /api/course/*`     | Débuté       | Rafi        |


---

**Contact pour coordination technique :**  
- Marewane (cookie, quiz)  
- Rafi (IP, metadata, cours)  
- Ayoub (chatbot)

---

> **FAQ :**
> - Les routes /ip et /metadata ne sont pas /api/cookie-trap-dependent.
> - Toute nouvelle route doit respecter le format JSON, le stateless, et l’esprit pédagogique du projet.
