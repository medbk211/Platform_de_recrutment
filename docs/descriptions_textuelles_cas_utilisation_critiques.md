# Descriptions textuelles des cas d'utilisation critiques

## 1. Objectif du document

Ce document presente la redaction textuelle de deux cas d'utilisation critiques de la plateforme de recrutement :

- `Postulation a une offre` ;
- `Publication d'une offre`.

Ces deux cas d'utilisation sont consideres comme critiques car ils representent le coeur de la mise en relation entre les candidats et les recruteurs.

## 2. Cas d'utilisation critique n°1 : Postulation a une offre

### 2.1 Identification

- **Nom** : Postulation a une offre
- **Acteur principal** : Candidat
- **Acteurs secondaires** : Systeme, Recruteur
- **Objectif** : permettre a un candidat de soumettre sa candidature a une offre d'emploi.
- **Declencheur** : le candidat clique sur le bouton `Postuler` depuis une offre consultee.

### 2.2 Preconditions

- le candidat possede un compte ;
- le candidat est authentifie ;
- l'offre est disponible et ouverte aux candidatures ;
- le candidat a complete au minimum les informations obligatoires de son profil ;
- le candidat dispose d'un CV ou d'un profil exploitable pour la candidature.

### 2.3 Postconditions

#### En cas de succes

- la candidature est enregistree dans le systeme ;
- la candidature est liee au candidat et a l'offre concernee ;
- un statut initial est attribue a la candidature, par exemple `envoyee` ;
- le recruteur peut consulter la candidature ;
- le candidat peut suivre sa candidature depuis son espace personnel.

#### En cas d'echec

- aucune candidature n'est enregistree ;
- un message d'erreur ou d'information est affiche au candidat.

### 2.4 Scenario nominal

1. Le candidat se connecte a la plateforme.
2. Le candidat recherche une offre d'emploi.
3. Le candidat consulte le detail d'une offre.
4. Le candidat clique sur `Postuler`.
5. Le systeme verifie que le candidat est authentifie.
6. Le systeme affiche le formulaire de candidature ou les informations pre-remplies du profil.
7. Le candidat verifie ses informations, ajoute si necessaire son CV, sa lettre de motivation ou d'autres documents.
8. Le candidat valide l'envoi de sa candidature.
9. Le systeme controle la presence des informations obligatoires.
10. Le systeme enregistre la candidature.
11. Le systeme attribue un statut initial a la candidature.
12. Le systeme affiche un message de confirmation.
13. Le recruteur peut desormais consulter la candidature depuis son espace.

### 2.5 Scenarios alternatifs

#### A1. Candidat non connecte

1. Le candidat clique sur `Postuler`.
2. Le systeme detecte que l'utilisateur n'est pas authentifie.
3. Le systeme redirige le candidat vers la page de connexion ou d'inscription.
4. Apres authentification, le candidat peut reprendre le processus de candidature.

#### A2. Profil incomplet

1. Le candidat clique sur `Postuler`.
2. Le systeme detecte que certaines informations obligatoires manquent.
3. Le systeme demande au candidat de completer son profil ou d'ajouter les documents requis.
4. Une fois les informations completees, le candidat peut soumettre sa candidature.

#### A3. Candidature deja envoyee

1. Le candidat tente de postuler a une offre pour laquelle il a deja depose une candidature.
2. Le systeme detecte l'existence de cette candidature.
3. Le systeme bloque le doublon et affiche un message d'information.

### 2.6 Scenarios d'exception

#### E1. Offre fermee ou expiree

1. Le candidat tente de postuler.
2. Le systeme constate que l'offre n'est plus disponible.
3. Le systeme refuse la postulation et affiche un message indiquant que l'offre est fermee ou expiree.

#### E2. Erreur technique lors de l'enregistrement

1. Le candidat valide sa candidature.
2. Une erreur technique survient pendant l'enregistrement.
3. Le systeme informe le candidat de l'echec de l'operation.
4. Aucune candidature incomplete ne doit etre validee comme succes.

### 2.7 Regles de gestion associees

- un candidat ne peut pas postuler plusieurs fois a la meme offre ;
- une candidature doit etre associee a une offre existante ;
- une candidature doit contenir les informations minimales definies par la plateforme ;
- chaque candidature doit posseder un statut de suivi ;
- l'historique des candidatures doit etre conserve.

## 3. Cas d'utilisation critique n°2 : Publication d'une offre

### 3.1 Identification

- **Nom** : Publication d'une offre
- **Acteur principal** : Recruteur
- **Acteurs secondaires** : Systeme, Administrateur
- **Objectif** : permettre a un recruteur de publier une offre d'emploi sur la plateforme.
- **Declencheur** : le recruteur clique sur `Publier une offre` depuis son tableau de bord.

### 3.2 Preconditions

- le recruteur possede un compte ;
- le recruteur est authentifie ;
- le compte recruteur est autorise a publier des offres ;
- le profil entreprise ou les informations minimales de l'employeur sont disponibles.

### 3.3 Postconditions

#### En cas de succes

- l'offre est enregistree dans le systeme ;
- l'offre devient visible selon son etat, par exemple `publiee` ou `en attente de validation` ;
- l'offre peut etre consultee par les candidats ;
- le recruteur peut suivre les candidatures liees a cette offre.

#### En cas d'echec

- aucune offre valide n'est publiee ;
- le recruteur est informe des champs manquants ou de l'erreur rencontree.

### 3.4 Scenario nominal

1. Le recruteur se connecte a la plateforme.
2. Le recruteur accede a son tableau de bord.
3. Le recruteur clique sur `Publier une offre`.
4. Le systeme affiche le formulaire de creation d'offre.
5. Le recruteur renseigne les informations demandees : titre, description, profil recherche, localisation, type de contrat, salaire eventuel, date limite.
6. Le recruteur valide le formulaire.
7. Le systeme verifie les informations obligatoires.
8. Le systeme enregistre l'offre.
9. Le systeme attribue a l'offre un etat de publication.
10. Le systeme confirme la prise en compte de l'offre.
11. L'offre devient consultable par les candidats, immediatement ou apres validation selon la regle retenue.

### 3.5 Scenarios alternatifs

#### A1. Offre en attente de validation

1. Le recruteur soumet l'offre.
2. Le systeme applique une regle de moderation.
3. L'offre est enregistree avec le statut `en attente`.
4. L'administrateur devra la valider avant publication definitive.

#### A2. Sauvegarde en brouillon

1. Le recruteur commence a saisir l'offre.
2. Le recruteur choisit de ne pas publier immediatement.
3. Le systeme enregistre l'offre en `brouillon`.
4. Le recruteur pourra la completer et la publier plus tard.

### 3.6 Scenarios d'exception

#### E1. Champs obligatoires manquants

1. Le recruteur valide le formulaire.
2. Le systeme detecte que certaines informations sont absentes ou invalides.
3. Le systeme affiche les erreurs et demande la correction avant enregistrement.

#### E2. Compte recruteur non valide

1. Le recruteur tente de publier une offre.
2. Le systeme detecte que son compte n'est pas encore valide ou autorise.
3. Le systeme bloque la publication.
4. Un message d'information est affiche.

#### E3. Erreur technique lors de l'enregistrement

1. Le recruteur valide le formulaire.
2. Une erreur technique survient.
3. Le systeme informe le recruteur que l'offre n'a pas pu etre publiee.

### 3.7 Regles de gestion associees

- une offre doit etre rattachee a un recruteur ou a une entreprise identifiee ;
- une offre doit contenir un minimum d'informations obligatoires ;
- un recruteur ne peut publier que s'il dispose des droits adequats ;
- une offre peut passer par les etats `brouillon`, `en attente`, `publiee`, `archivee` ou `expiree` ;
- une offre publiee doit rester modifiable ou archivable par son auteur selon les regles de la plateforme.

## 4. Synthese

Les deux cas d'utilisation decrits sont essentiels au fonctionnement global du systeme :

- `Postulation a une offre` represente le processus central cote candidat ;
- `Publication d'une offre` represente le processus central cote recruteur.

Leur description textuelle permet de preciser :

- les interactions attendues ;
- les controles a effectuer ;
- les erreurs a gerer ;
- les regles de gestion a respecter.

## 5. Conclusion

La formalisation textuelle des cas d'utilisation critiques constitue une base importante pour la suite du projet. Elle facilite :

- la modelisation UML detaillee ;
- la redaction des specifications fonctionnelles ;
- la conception de l'interface ;
- l'implementation des traitements backend ;
- la preparation des tests fonctionnels.
