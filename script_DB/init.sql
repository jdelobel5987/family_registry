#######################################
-- EDIT ACCORDING TO ACTUAL PROJECT
#######################################

SET NAMES utf8mb4;

-- create database and grant privileges
CREATE DATABASE IF NOT EXISTS `FamilyRegistry_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

-- GRANT ALL ON `FamilyRegistry_db`.* TO 'jdelobel'@'mysql-con';
-- FLUSH PRIVILEGES;

USE `FamilyRegistry_db`;

-- create tables
CREATE TABLE sitb_roles(
   id_role INT AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   PRIMARY KEY(id_role),
   UNIQUE(name)
);

CREATE TABLE sitb_tagCategory(
   id_tagCategory INT AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   slug_category VARCHAR(50) NOT NULL,
   PRIMARY KEY(id_tagCategory),
   UNIQUE(name),
   UNIQUE(slug_category)
);

CREATE TABLE sitb_tags(
   id_tags INT AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   slug VARCHAR(50) NOT NULL,
   id_tagCategory INT NOT NULL,
   PRIMARY KEY(id_tags),
   UNIQUE(name),
   UNIQUE(slug),
   FOREIGN KEY(id_tagCategory) REFERENCES sitb_tagCategory(id_tagCategory)
);

CREATE TABLE sitb_users(
   id_user INT AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL,
   id_role INT NOT NULL,
   PRIMARY KEY(id_user),
   UNIQUE(email),
   FOREIGN KEY(id_role) REFERENCES sitb_roles(id_role)
);

CREATE TABLE sitb_family_members(
   id_member INT AUTO_INCREMENT,
   lastname VARCHAR(50) NOT NULL,
   firstname VARCHAR(50) NOT NULL,
   email VARCHAR(50),
   phone_fixed VARCHAR(50),
   phone_mobile VARCHAR(50),
   birthdate DATE,
   id_user INT NOT NULL,
   PRIMARY KEY(id_member),
   UNIQUE(id_user),
   UNIQUE(email),
   UNIQUE(phone_mobile),
   FOREIGN KEY(id_user) REFERENCES sitb_users(id_user)
);

CREATE TABLE sitb_address(
   id_address INT AUTO_INCREMENT,
   number VARCHAR(50),
   street VARCHAR(255),
   complement VARCHAR(255),
   zipcode VARCHAR(50),
   city VARCHAR(50),
   country VARCHAR(50),
   id_member INT NOT NULL,
   PRIMARY KEY(id_address),
   FOREIGN KEY(id_member) REFERENCES sitb_family_members(id_member)
);

CREATE TABLE sitb_relationship(
   id_member INT,
   id_tags INT,
   PRIMARY KEY(id_member, id_tags),
   FOREIGN KEY(id_member) REFERENCES sitb_family_members(id_member),
   FOREIGN KEY(id_tags) REFERENCES sitb_tags(id_tags)
);


-- fill static tables
INSERT INTO `sitb_roles` (id_role, name)
VALUES
    (1, "Administrateur"),
    (2, "Utilisateur");
    
INSERT INTO `sitb_tagCategory` (id_tagCategory, name, slug_category)
VALUES
  (1, "Familial", "familial"),
  (2, "Amical", "amical"),
  (3, "Professionnel", "professionnel");

INSERT INTO `sitb_tags` (id_tags, name, slug, id_tagCategory)
VALUES
  -- Relations familiales 👪
  (1, "Famille", "famille", 1),
  (2, "Parent", "parent", 1),
  (3, "Enfant", "enfant", 1),
  (4, "Frère", "frere", 1),
  (5, "Soeur", "soeur", 1),
  (6, "Conjoint(e)", "conjoint-e", 1),
  (7, "Grand-parent", "grand-parent", 1),
  (8, "Cousin(e)", "cousin-e", 1),
  (9, "Oncle", "oncle", 1),
  (10, "Tante", "tante", 1),
  (11, "Beau-parent", "beau-parent", 1),
  (12, "Beau-frère", "beau-frere", 1),
  (13, "Belle-soeur", "belle-soeur", 1),

  -- Relations amicales 🧑‍🤝‍🧑
  (14, "Ami(e)", "ami-e", 2),
  (15, "Proche", "proche", 2),
  (16, "Connaissance", "connaissance", 2),
  (17, "Voisin(e)", "voisin-e", 2),
  (18, "Ancien camarade", "ancien-camarade", 2),
  (19, "Partenaire sportif", "partenaire-sportif", 2),
  (20, "Ami(e) d’enfance", "ami-e-denfance", 2),
  (21, "Ami(e) virtuel(le)", "ami-e-virtuel-le", 2),

  -- Relations professionnelles 💼
  (22, "Collègue", "collegue", 3),
  (23, "Manager", "manager", 3),
  (24, "Client", "client", 3),
  (25, "Fournisseur", "fournisseur", 3),
  (26, "Partenaire", "partenaire", 3),
  (27, "Recruteur", "recruteur", 3),
  (28, "Stagiaire", "stagiaire", 3),
  (29, "Mentor", "mentor", 3),
  (30, "Professeur", "professeur", 3),
  (31, "Employé", "employe", 3),
  (32, "Responsable RH", "responsable-rh", 3),
  (33, "Contact événement", "contact-evenement", 3),
  (34, "Contact réseau professionnel", "contact-reseau-professionnel", 3),
  (35, "Ancien collègue", "ancien-collegue", 3);


-- create a test administrator and a test user
-- INSERT INTO `ijen_users` (`id_users`, `firstname`, `lastname`, `email`, `password`, `phone`, `communication`, `newsletter`, `id_roles`)
-- VALUES
--     (1, 'julien', 'delobel', 'delobel.julien@outlook.com', '$2y$12$5//XZlJdn4pqeEfact2RkOcaATrMqWrwdpKS7BPXRa3T1rg6VTmoW', '0786980034', 'email', 'true', 1),
--     (2, 'julien', 'delobel', 'delobel.julien@gmail.com', '$2y$12$.1saAOOMy6mNsuxW/TEhHuFayjaNE7hL/6semVP1s6a3/fO7vx9GK', '0786980034', 'both', 'true', 2);

-- INSERT INTO `ijen_addresses` (`id_addresses`, `address`, `complement`, `zipcode`, `city`, `id_users`)
-- VALUES
--     (1, 'Place du Général de Gaulle', 'Château de Compiègne', '60200', 'Compiègne', 1),
--     (2, 'virgile-rossel 14', NULL, '01012', 'Lausanne', 2);
