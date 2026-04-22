# Platform de recrutement

Ce depot contient la base technique initiale du projet de plateforme de recrutement :

- `client/` : frontend React avec Vite
- `server/` : backend Node.js en architecture MVC pragmatique
- `server/database/` : scripts SQL de depart

## Stack

- Frontend : React + Vite + React Router
- Backend : Node.js + Express
- Base de donnees : MySQL
- Environnement local : Docker Compose pour MySQL

## Structure

```text
Platform_de_recrutment/
|-- client/
|-- server/
|-- .github/workflows/
|-- README.md
|-- package.json
|-- docker-compose.yml
```

## Demarrage local

1. Copier les fichiers d'exemple d'environnement :

```powershell
Copy-Item server/.env.example server/.env
Copy-Item client/.env.example client/.env
```

2. Demarrer MySQL :

```powershell
docker compose up -d
```

3. Installer les dependances :

```powershell
npm run install:server
npm run install:client
```

4. Lancer le backend :

```powershell
npm run dev:server
```

5. Lancer le frontend :

```powershell
npm run dev:client
```

## Scripts utiles

```powershell
npm run build:client
npm run check:server
```

## API de base

- `GET /api/health`
- `GET /api/auth/demo-accounts`
- `POST /api/auth/login`
- `GET /api/offres`
- `POST /api/offres`
- `POST /api/candidatures`

## Notes

- Les models backend sont scaffolds pour une architecture MVC claire.
- Certains traitements utilisent des donnees de demo pour permettre un demarrage rapide.
- Les scripts SQL dans `server/database/` servent de base pour passer ensuite a une vraie persistence MySQL.

