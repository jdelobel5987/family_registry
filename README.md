# 📘 Family Registry - Application de registre familial

![React](https://img.shields.io/badge/frontend-React-blue) ![PHP](https://img.shields.io/badge/backend-PHP-green) ![MySQL](https://img.shields.io/badge/database-MySQL-orange) ![Docker](https://img.shields.io/badge/container-Docker-purple)

Projet fullstack pour gérer un répertoire familial, avec interface React, backend PHP et base MySQL, le tout orchestré via Docker.

---

## 🧱 Architecture

FAMILY_REGISTRY/
├── frontend/				→ Application React (UI)
├── backend/				→ API PHP (CRUD + authentification)
├── db/					→ Volume de données MySQL
├── docker-compose.yml

### Services Docker:

✅ **React** : interface utilisateur avec gestion des membres

✅ **PHP** : backend RESTful sécurisé via PDO

✅ **MySQL** : base relationnelle (conception Merise: MCD/MLD/MPD)

✅ **phpMyAdmin** : visualisation de la base

---

## 🚀 Lancer le projet (pas encore possible à ce stade)

1. Cloner le repo
2. Construire et lancer les services Docker

```
docker-compose up --build
```

3. Accéder aux interfaces

* [http://localhost:3000](http://localhost:3000) ➡ Frontend React
* [http://localhost:8000](http://localhost:8000) ➡ Backend PHP
* [http://localhost:8080](http://localhost:8080) ➡ phpMyAdmin (MySQL)

---

## 🔐 Fonctionnalités prévues

🔸 CRUD complet sur les membres du registre

🔸 Création de compte utilisateur + login sécurisé

🔸 API REST entre React et PHP (JSON)

🔸 Persistance des données en BDD MySQL

🔸 Export dynamique du registre en .json

---

## 🧠 Technologies utilisées

| Coté            | Outils principaux                       |
| ---------------- | --------------------------------------- |
| Frontend         | React, CSS Modules, Hooks, fetch        |
| Backend          | PHP, PDO, JSON, sessions/JWT            |
| Base de données | MySQL (via Docker)                      |
| DevOps & Docker  | Docker Compose, volumes, multi-services |

---

## ✍ Auteur

Conceptualisé et développé par **Julien Delobel**. Projet personnel visant à mettre en place un frontend React. L'utilisation potentielle élargie au cercle familial m'a décidé à mettre en place et permi d'expérimenter un environnement fullstack complet, avec gestion de données relationnelles, sécurisation des API et interface réactive.

---

## 📌 À faire

* [ ] Rendre fonctionnelle la barre de recherche

* filtrage des membres par nom, prénom ou relation
* gestion du champ vide et de la casse

* [ ] Connexion au backend PHP

* remplacer le `fetch()` du fichier json d'exemple par des appels à l'API PHP
* centraliser la logique de lecture dans des services (ex: `useMembers()`)

* [ ] Implémentation complète du CRUD

* ajout d'un formulaire contrôlé pour créer un membre
* mise à jour d'un membre via formulaire pré-rempli
* suppression confirmée via boite de dialogue

* [ ] Structure backend en PHP

* routes REST (GET, POST, PUT, DELETE)
* connexion sécurisée à MySQL avec PDO
* gestion des erreurs API et validation

* [ ] Création de comptes utilisateurs

* formulaire d'inscription/login
* hashage des mots de passe (`password_hash()`)
* sessions ou JWT pour l'authentification
* routes protégées côté backend

* [ ] Persistance de session côté frontend

* stockage des tokens/sessions
* affichage conditionnel selon connexion

* [X] Environnement Docker fonctionnel

* services PHP, React, MySQL, phpMyAdmin
* volumes pour persistance
* mise en place de scripts de démarrage initiaux

* [ ] Export dynamique du registre

* génération d'un fichier `.json` à partir du `useState`
* téléchargement ou envoi à l'API

* [ ] Améliorations UX/UI

* affichage responsive
* thème sombre et clair

* [ ] Tests

* tests unitaires (Jest, React testing library)
* tests d'intégration backend (PHPUnit)
