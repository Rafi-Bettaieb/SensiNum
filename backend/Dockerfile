# On part d'une version légère de Node.js
FROM node:18-alpine

# On définit le dossier de travail dans le conteneur
WORKDIR /app

# On copie les fichiers de dépendances
COPY package*.json ./

# On installe les librairies
RUN npm install

# On copie tout le reste du code backend
COPY . .

# On dit à Docker que ce conteneur écoute sur le port 3000 (Vérifie ton server.js !)
EXPOSE 3000
