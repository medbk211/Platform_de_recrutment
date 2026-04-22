# Configuration de la structure du projet - Architecture MVC

## 1. Objectif du document

Ce document propose une structure de projet adaptee a la plateforme de recrutement, en tenant compte de la pile technologique retenue :

- `React` pour le frontend ;
- `Node.js` pour le backend ;
- `MySQL` pour la base de donnees.

L'objectif est de definir une organisation claire, maintenable et evolutive du projet, en s'appuyant sur une architecture `MVC` cote backend, tout en gardant une structure par composants cote frontend.

## 2. Choix architectural retenu

Il est important de preciser que le projet ne doit pas etre force dans un `MVC` strict sur toute la pile.

Le choix le plus coherent est le suivant :

- `React` gere la couche interface utilisateur cote client ;
- `Node.js` applique une architecture `MVC` pour exposer les API et executer la logique metier ;
- `MySQL` assure la persistance relationnelle des donnees.

En pratique :

- le `frontend React` joue le role de couche de presentation ;
- le `backend Node.js` porte les `Model`, `Controller` et la logique applicative ;
- la `base MySQL` stocke les entites metier et leurs relations.

## 3. Structure globale recommandee

L'organisation suivante est recommandee pour le projet :

```text
Platform_de_recrutment/
|
+-- client/
|   +-- public/
|   +-- src/
|   |   +-- assets/
|   |   +-- components/
|   |   +-- pages/
|   |   +-- layouts/
|   |   +-- router/
|   |   +-- services/
|   |   +-- context/
|   |   +-- hooks/
|   |   +-- utils/
|   |   +-- styles/
|   |   +-- App.jsx
|   |   +-- main.jsx
|   +-- package.json
|   +-- .env
|
+-- server/
|   +-- src/
|   |   +-- config/
|   |   +-- models/
|   |   +-- controllers/
|   |   +-- routes/
|   |   +-- services/
|   |   +-- middlewares/
|   |   +-- validators/
|   |   +-- utils/
|   |   +-- app.js
|   |   +-- server.js
|   +-- database/
|   |   +-- schema.sql
|   |   +-- seeds.sql
|   |   +-- migrations/
|   +-- uploads/
|   +-- tests/
|   +-- package.json
|   +-- .env
|
+-- docs/
+-- .gitignore
+-- README.md
```

## 4. Description de la structure frontend

Le dossier `client/` contient l'application React.

### 4.1 Dossiers principaux du frontend

- `assets/` : images, icones, logos et ressources statiques.
- `components/` : composants reutilisables comme les boutons, formulaires, tableaux et cartes.
- `pages/` : pages principales de l'application, par exemple `Login`, `DashboardCandidat`, `DashboardRecruteur`, `ListeOffres`.
- `layouts/` : structures de page communes, par exemple `MainLayout`, `AdminLayout`.
- `router/` : configuration du routage et protection des routes.
- `services/` : appels API vers le backend, par exemple `authService`, `offreService`, `candidatureService`.
- `context/` : gestion de l'etat global, notamment l'utilisateur connecte et ses droits.
- `hooks/` : hooks React personnalises.
- `utils/` : fonctions utilitaires partagees.
- `styles/` : feuilles de style globales ou variables CSS.

### 4.2 Role du frontend dans l'architecture

Le frontend React ne doit pas contenir la logique metier critique.

Son role principal est :

- afficher les donnees ;
- collecter les informations saisies par l'utilisateur ;
- appeler les API du backend ;
- gerer l'etat de l'interface ;
- appliquer le controle d'acces cote interface.

## 5. Description de la structure backend MVC

Le dossier `server/` contient l'API Node.js.

L'architecture retenue est un `MVC` pragmatique, enrichi par une couche `service`. Ce point est important : dans un projet moderne, un `MVC` pur est souvent trop limite si toute la logique metier est concentree dans les controllers.

### 5.1 Dossiers principaux du backend

- `config/` : configuration de la base de donnees, variables d'environnement, securite, email.
- `models/` : classes ou modules d'acces aux donnees.
- `controllers/` : reception des requetes HTTP et construction des reponses.
- `routes/` : declaration des routes de l'API.
- `services/` : logique metier applicative.
- `middlewares/` : authentification, autorisation, gestion d'erreurs, upload, logs.
- `validators/` : validation des donnees entrantes.
- `utils/` : fonctions techniques partagees.
- `app.js` : configuration de l'application Express.
- `server.js` : point de demarrage du serveur.

## 6. Repartition des responsabilites MVC

### 6.1 Model

La couche `Model` represente les donnees et leur acces.

Elle doit gerer :

- les entites metier ;
- les interactions avec `MySQL` ;
- les requetes de lecture, insertion, mise a jour et suppression.

Exemples de models :

- `user.model.js`
- `candidate.model.js`
- `recruiter.model.js`
- `company.model.js`
- `jobOffer.model.js`
- `application.model.js`
- `interview.model.js`
- `message.model.js`
- `notification.model.js`

### 6.2 Controller

La couche `Controller` recoit les requetes HTTP depuis les routes.

Elle doit :

- lire les parametres de la requete ;
- appeler le service approprie ;
- retourner une reponse HTTP claire ;
- gerer les codes de statut et les messages d'erreur.

Exemples de controllers :

- `auth.controller.js`
- `user.controller.js`
- `jobOffer.controller.js`
- `application.controller.js`
- `interview.controller.js`
- `admin.controller.js`

### 6.3 Service

La couche `Service` contient la logique metier.

Elle permet de :

- eviter des controllers trop lourds ;
- centraliser les regles de gestion ;
- reutiliser les traitements metier.

Exemples de services :

- `auth.service.js`
- `jobOffer.service.js`
- `application.service.js`
- `interview.service.js`
- `notification.service.js`

### 6.4 Route

La couche `Route` associe une URL a un controller.

Exemples :

- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/offres`
- `POST /api/offres`
- `POST /api/candidatures`
- `PUT /api/candidatures/:id/statut`
- `POST /api/entretiens`

### 6.5 Middleware

Les `middlewares` prennent en charge les traitements transverses.

Exemples :

- verification du token ;
- controle des roles ;
- validation des donnees ;
- gestion centralisee des erreurs ;
- televersement de fichiers ;
- journalisation.

## 7. Exemple d'arborescence backend plus detaillee

```text
server/
|
+-- src/
|   +-- config/
|   |   +-- db.js
|   |   +-- env.js
|   |
|   +-- models/
|   |   +-- user.model.js
|   |   +-- candidate.model.js
|   |   +-- recruiter.model.js
|   |   +-- company.model.js
|   |   +-- jobOffer.model.js
|   |   +-- application.model.js
|   |   +-- interview.model.js
|   |   +-- message.model.js
|   |   +-- notification.model.js
|   |
|   +-- controllers/
|   |   +-- auth.controller.js
|   |   +-- user.controller.js
|   |   +-- jobOffer.controller.js
|   |   +-- application.controller.js
|   |   +-- interview.controller.js
|   |   +-- admin.controller.js
|   |
|   +-- routes/
|   |   +-- auth.routes.js
|   |   +-- user.routes.js
|   |   +-- jobOffer.routes.js
|   |   +-- application.routes.js
|   |   +-- interview.routes.js
|   |   +-- admin.routes.js
|   |
|   +-- services/
|   |   +-- auth.service.js
|   |   +-- jobOffer.service.js
|   |   +-- application.service.js
|   |   +-- interview.service.js
|   |   +-- notification.service.js
|   |
|   +-- middlewares/
|   |   +-- auth.middleware.js
|   |   +-- role.middleware.js
|   |   +-- error.middleware.js
|   |   +-- upload.middleware.js
|   |
|   +-- validators/
|   |   +-- auth.validator.js
|   |   +-- jobOffer.validator.js
|   |   +-- application.validator.js
|   |
|   +-- utils/
|   |   +-- hash.js
|   |   +-- token.js
|   |   +-- logger.js
|   |
|   +-- app.js
|   +-- server.js
|
+-- database/
|   +-- schema.sql
|   +-- seeds.sql
|   +-- migrations/
|
+-- uploads/
+-- tests/
```

## 8. Exemple d'organisation frontend plus detaillee

```text
client/
|
+-- public/
+-- src/
|   +-- assets/
|   +-- components/
|   |   +-- common/
|   |   +-- forms/
|   |   +-- tables/
|   |
|   +-- pages/
|   |   +-- auth/
|   |   +-- candidat/
|   |   +-- recruteur/
|   |   +-- admin/
|   |   +-- public/
|   |
|   +-- layouts/
|   |   +-- MainLayout.jsx
|   |   +-- DashboardLayout.jsx
|   |   +-- AdminLayout.jsx
|   |
|   +-- router/
|   |   +-- index.jsx
|   |   +-- ProtectedRoute.jsx
|   |
|   +-- services/
|   |   +-- api.js
|   |   +-- authService.js
|   |   +-- jobOfferService.js
|   |   +-- applicationService.js
|   |   +-- interviewService.js
|   |
|   +-- context/
|   |   +-- AuthContext.jsx
|   |
|   +-- hooks/
|   |   +-- useAuth.js
|   |   +-- useFetch.js
|   |
|   +-- utils/
|   |   +-- formatDate.js
|   |   +-- validators.js
|   |
|   +-- styles/
|   |   +-- globals.css
|   |
|   +-- App.jsx
|   +-- main.jsx
|
+-- package.json
```

## 9. Flux general de fonctionnement

La circulation d'une requete dans cette architecture suit generalement le schema suivant :

1. l'utilisateur agit depuis l'interface React ;
2. un service frontend appelle une route de l'API ;
3. la route backend transmet la requete au controller ;
4. le controller appelle le service metier ;
5. le service metier dialogue avec les models ;
6. les models interagissent avec la base `MySQL` ;
7. la reponse remonte vers le frontend ;
8. React met a jour l'affichage.

Exemple pour une postulation :

1. le candidat clique sur `Postuler` ;
2. `applicationService.js` envoie une requete `POST /api/candidatures` ;
3. `application.routes.js` redirige vers `application.controller.js` ;
4. `application.controller.js` appelle `application.service.js` ;
5. `application.service.js` verifie les regles de gestion ;
6. `application.model.js` enregistre la candidature en base ;
7. la reponse est renvoyee au frontend ;
8. l'interface affiche la confirmation.

## 10. Avantages de cette structure

Cette organisation presente plusieurs avantages :

- separation claire des responsabilites ;
- meilleure maintenabilite du code ;
- ajout plus simple de nouvelles fonctionnalites ;
- tests plus faciles a organiser ;
- meilleure lisibilite pour une equipe de developpement ;
- reduction du risque de melanger logique metier, acces aux donnees et presentation.

## 11. Points de vigilance

Quelques points doivent etre surveilles des le debut :

- ne pas placer toute la logique metier dans les controllers ;
- ne pas dupliquer les appels API dans plusieurs composants React ;
- ne pas melanger les responsabilites entre `model` et `service` ;
- centraliser la gestion des erreurs ;
- proteger les routes sensibles selon le role utilisateur ;
- definir une convention de nommage stable.

## 12. Recommendation finale

Pour ce projet, la meilleure option est :

- une architecture `MVC` cote backend `Node.js` ;
- une architecture par composants cote `React` ;
- une separation claire entre frontend, backend et base de donnees ;
- une couche `service` ajoutee au MVC pour gerer proprement la logique metier.

Cette structure est adaptee a une plateforme de recrutement car elle permet de faire evoluer facilement les modules suivants :

- authentification ;
- gestion des comptes ;
- gestion des offres ;
- candidatures ;
- entretiens ;
- messagerie ;
- administration.

## 13. Conclusion

La configuration proposee pour la structure du projet est coherente avec les choix technologiques retenus et avec les besoins fonctionnels de la plateforme.

Elle offre une base solide pour passer ensuite a :

- l'initialisation du projet ;
- la creation de l'API ;
- la mise en place de la base de donnees ;
- le developpement des interfaces React ;
- l'implementation progressive des modules metier.
