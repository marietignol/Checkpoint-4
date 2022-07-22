SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

-- 
-- Database tables :
-- `profil`
-- `skills`
-- `portfolio`
-- `comment`

-- ----------------------------------------------------------------------------

DROP TABLE IF EXISTS `comment`;
DROP TABLE IF EXISTS `portfolio`;
DROP TABLE IF EXISTS `skills`;
DROP TABLE IF EXISTS `profil`;

-- ----------------------------------------------------------------------------
--
-- Structure de la table `profil`
--

CREATE TABLE `profil` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `fisrtname` VARCHAR(100) NULL,
  `lastname` VARCHAR(100) NULL,
  `mail` VARCHAR(255) NOT NULL UNIQUE,
  `phone` VARCHAR(20) NULL,
  `description` VARCHAR(255) NULL
) ENGINE=InnoDB;

--
-- Contenu de la table `profil`
--

LOCK TABLES `profil` WRITE;
INSERT INTO `profil` (`fisrtname`, `lastname`, `mail`, `phone`, `description`) VALUES
("Marie", "Tignol", "marie@email.com", "07 07 09 87 87", "Actuellement en formation développeur web et après diverses expériences dans la communication graphique, le design et le marketing,  je suis aujourd'hui à la recherche d'une alternance pour venir compléter mon parcours d'études afin de me lancer et de m'implanter solidement dans le secteur professionnel du développement web.");
UNLOCK TABLES;

-- ----------------------------------------------------------------------------
--
-- Structure de la table `skills`
--

CREATE TABLE `skills` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NULL
  
) ENGINE=InnoDB;

--
-- Contenu de la table `skills`
--

LOCK TABLES `skills` WRITE;
INSERT INTO `skills` (`id`, `name`) VALUES
(1, "FrontEnd"),
(2, "BackEnd"),
(3, "Javascript"),
(4, "React"),
(5, "Express"),
(6, "Node.js"),
(7, "MySQL"),
(8, "TailwindCss"),
(9, "Html/Css"),
(10, "Github/Git"),
(11, "Postman");
UNLOCK TABLES;

-- ----------------------------------------------------------------------------
--
-- Structure de la table `portfolio`
--

CREATE TABLE `portfolio` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(100) NULL,
  `description` VARCHAR(255) NULL,
  `tech` VARCHAR(100) NULL,
  `website1` VARCHAR(255) NULL
  
) ENGINE=InnoDB;

--
-- Contenu de la table `portfolio`
--

LOCK TABLES `portfolio` WRITE;
INSERT INTO `portfolio` (`title`, `description`, `tech`, `website1`) VALUES
("Projet1", "description1", "Html & Css & Javascript", "https://kevinlavigne.github.io/projet1-error404/accueil.html"),
("Projet2", "description2", "Javascript & Html & Css", "https://3arthkeeper.netlify.app/"),
("Projet3", "description3", "Javascript & Node.js & Express § TailwindCss & MySQL & Postman", "https://3arthkeeper.netlify.app/"),
("Hackathon x Apside x Bunge", "description4", "Javascript & Node.js & Express § Css & MySQL", "https://3arthkeeper.netlify.app/");
UNLOCK TABLES;

-- ----------------------------------------------------------------------------
--
-- Structure de la table `comment`
--

CREATE TABLE `comment` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(100) NULL,
  `message` VARCHAR(255) NULL
) ENGINE=InnoDB;

--
-- Contenu de la table `comment`
--

LOCK TABLES `comment` WRITE;
INSERT INTO `comment` (`id`, `title`, `message`) VALUES
(1, "Commentaire 1", "commentaire test"),
(2, "Commentaire 2", "commentaire test");
UNLOCK TABLES;

-- ----------------------------------------------------------------------------
