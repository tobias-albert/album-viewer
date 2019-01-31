-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: first
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `album`
--

DROP TABLE IF EXISTS `album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `album` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artist_id` int(11) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `album_artist_id` (`artist_id`),
  CONSTRAINT `album_artist_id` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album`
--

LOCK TABLES `album` WRITE;
/*!40000 ALTER TABLE `album` DISABLE KEYS */;
INSERT INTO `album` VALUES (1,1,'Don\'t Forget','dont_forget.png'),(2,1,'Here We Go Again','here_we_go_again.png'),(3,2,'Reputation','reputation.png'),(4,1,'Unbroken','unbroken.png'),(5,1,'Demi','demi.png'),(6,1,'Confident','confident.png'),(7,1,'Tell Me You Love Me','tell_me_you_love_me.png');
/*!40000 ALTER TABLE `album` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artist`
--

DROP TABLE IF EXISTS `artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `artist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artist`
--

LOCK TABLES `artist` WRITE;
/*!40000 ALTER TABLE `artist` DISABLE KEYS */;
INSERT INTO `artist` VALUES (1,'Demi Lovato',26,'United States'),(2,'Taylor Swift',29,'United States'),(3,'Christina Aguilera',38,'United States');
/*!40000 ALTER TABLE `artist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `song`
--

DROP TABLE IF EXISTS `song`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `song` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artist_id` int(11) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `album_id` int(11) DEFAULT NULL,
  `duration` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `song_artist_id` (`artist_id`),
  KEY `song_album_id` (`album_id`),
  CONSTRAINT `song_album_id` FOREIGN KEY (`album_id`) REFERENCES `album` (`id`),
  CONSTRAINT `song_artist_id` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `song`
--

LOCK TABLES `song` WRITE;
/*!40000 ALTER TABLE `song` DISABLE KEYS */;
INSERT INTO `song` VALUES (1,1,'La La Land',1,'3:16'),(2,1,'Party',1,'3:53'),(3,1,'Solo',2,'3:15'),(4,1,'Get Back',1,'3:20'),(5,1,'Trainwreck',1,'3:17'),(6,1,'On the Line',1,'3:26'),(7,1,'Don\'t Forget',1,'3:43'),(8,1,'Gonna Get Caught',1,'3:11'),(9,1,'Two Worlds Collide',1,'3:18'),(10,1,'The Middle',1,'3:05'),(11,1,'Until You\'re Mine',1,'3:31'),(12,1,'Believe In Me',1,'3:42'),(13,1,'Here We Go Again',2,'3:46'),(14,1,'U Got Nothin\' On Me',2,'3:38'),(15,1,'Falling Over Me',2,'4:06'),(16,1,'Quiet',2,'2:45'),(17,1,'Catch Me',2,'3:10'),(18,1,'Every Time You Lie',2,'3:49'),(19,1,'Got Dynamite',2,'3:25'),(20,1,'Stop the World',2,'3:34'),(21,1,'World of Chances',2,'2:52'),(22,1,'Remember December',2,'3:12'),(23,1,'Everything You\'re Not',2,'3:43'),(36,1,'All Night Long',4,'3:14'),(37,1,'Who\'s That Boy',4,'3:12'),(38,1,'You\'re My Only Shorty',4,'3:06'),(39,1,'Heart Attack',5,'3:30'),(40,1,'Made in the USA',5,'3:16'),(41,1,'Without the Love',5,'3:55'),(42,1,'Confident',6,'3:25'),(43,1,'Cool for the Summer',6,'3:34'),(44,1,'Old Ways',6,'3:24'),(45,1,'Sorry Not Sorry',7,'3:23'),(46,1,'Tell Me You Love Me',7,'3:56'),(47,1,'Sexy Dirty Love',7,'3:33'),(48,2,'...Ready for It?',3,'3:28'),(49,2,'End Game',3,'4:04'),(50,2,'I Did Something Bad',3,'3:58');
/*!40000 ALTER TABLE `song` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `songsonalbum`
--

DROP TABLE IF EXISTS `songsonalbum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `songsonalbum` (
  `album_id` int(11) NOT NULL,
  `song_id` int(11) NOT NULL,
  PRIMARY KEY (`album_id`,`song_id`),
  KEY `soa_song_id` (`song_id`),
  CONSTRAINT `soa_album_id` FOREIGN KEY (`album_id`) REFERENCES `album` (`id`),
  CONSTRAINT `soa_song_id` FOREIGN KEY (`song_id`) REFERENCES `song` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songsonalbum`
--

LOCK TABLES `songsonalbum` WRITE;
/*!40000 ALTER TABLE `songsonalbum` DISABLE KEYS */;
INSERT INTO `songsonalbum` VALUES (1,1),(1,2),(2,3);
/*!40000 ALTER TABLE `songsonalbum` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-31 18:36:38
