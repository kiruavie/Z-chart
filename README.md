# Z-chart

## Z-Chat – Mini API de messagerie temps réel

Type : Backend Node.js + Express + MongoDB + Socket.io

# Description :

Un backend d’application de messagerie :

Inscription / connexion des utilisateurs (JWT),

Création de conversations (1-to-1),

Envoi de messages (texte),

Messages en temps réel avec Socket.io,

Stockage des messages dans MongoDB (avec timestamps, état lu/non lu).

# Objectif GitHub :

Maîtrise de MongoDB pour des structures imbriquées (ex : messages dans une conversation),

Communication temps réel avec Socket.io,

Architecture propre (modèles, services, contrôleurs).

## Structure de base du projet

z-chat-api/
├── src/
│ ├── config/
│ │ └── db.ts # Connexion MongoDB
│ ├── controllers/
│ │ ├── auth.controller.ts
│ │ └── message.controller.ts
│ ├── models/
│ │ ├── user.model.ts
│ │ ├── conversation.model.ts
│ │ └── message.model.ts
│ ├── routes/
│ │ ├── auth.routes.ts
│ │ └── chat.routes.ts
│ ├── services/
│ │ ├── auth.service.ts
│ │ └── chat.service.ts
│ ├── middlewares/
│ │ └── auth.middleware.ts
│ ├── sockets/
│ │ └── chat.socket.ts # Gestion des connexions temps réel
│ ├── utils/
│ │ └── jwt.ts
│ ├── app.ts # Configuration de l'app Express
│ └── server.ts # Point d’entrée, setup Socket.io
├── .env
├── package.json
├── tsconfig.json
└── README.md

⚙️ Technologies
Node.js + Express

MongoDB avec Mongoose

Socket.io

JWT pour l’authentification

TypeScript

## Dépendances à installer

npm init -y

npm install express mongoose dotenv bcryptjs jsonwebtoken socket.io cors

npm install -D typescript ts-node-dev @types/express @types/node @types/bcryptjs @types/jsonwebtoken @types/cors
