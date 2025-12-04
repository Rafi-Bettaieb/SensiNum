FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Vite utilise souvent le port 5173 par défaut
EXPOSE 5173

# On lance le serveur de dev en mode "host" pour qu'il soit accessible hors du conteneur
CMD ["npm", "run", "dev", "--", "--host"]