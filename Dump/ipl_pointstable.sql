-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: ipl
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pointstable`
--

DROP TABLE IF EXISTS `pointstable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pointstable` (
  `sr_no` int(11) NOT NULL AUTO_INCREMENT,
  `unique_no` int(11) DEFAULT NULL,
  `season` int(11) DEFAULT NULL,
  `team` text,
  `pld` int(11) DEFAULT NULL,
  `won` int(11) DEFAULT NULL,
  `lost` int(11) DEFAULT NULL,
  `ties` int(11) DEFAULT NULL,
  `no_result` int(11) DEFAULT NULL,
  `net_rr` double DEFAULT NULL,
  `pts` int(11) DEFAULT NULL,
  `qulafied` text,
  PRIMARY KEY (`sr_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pointstable`
--

LOCK TABLES `pointstable` WRITE;
/*!40000 ALTER TABLE `pointstable` DISABLE KEYS */;
INSERT INTO `pointstable` VALUES (1,1,2019,'Mumbai Indians',14,9,5,0,0,0.421,18,'q'),(2,2,2019,'Chennai Super Kings',14,9,5,0,0,0.131,18,'q'),(3,3,2019,'Delhi Capitals',14,9,5,0,0,0.044,18,'q'),(4,4,2019,'Sunrisers Hyderabad',14,6,8,0,0,0.577,12,'q'),(5,5,2019,'Kolkata Knight Riders',14,6,8,0,0,0.028,12,'n'),(6,6,2019,'Kings XI Punjab',14,6,8,0,0,-0.251,12,'n'),(7,7,2019,'Rajasthan Royals',14,5,8,0,1,-0.449,11,'n'),(8,8,2019,'Royal Challengers Bangalore',14,5,8,0,1,-0.607,11,'n'),(9,4,2018,'Sunrisers Hyderabad',14,9,5,0,0,0.284,18,'q'),(10,2,2018,'Chennai Super Kings',14,9,5,0,0,0.253,18,'q'),(11,5,2018,'Kolkata Knight Riders',14,8,6,0,0,-0.07,16,'q'),(12,7,2018,'Rajasthan Royals',14,7,7,0,0,-0.25,14,'q'),(13,1,2018,'Mumbai Indians',14,6,8,0,0,0.317,12,'n'),(14,8,2018,'Royal Challengers Bangalore',14,6,8,0,0,0.129,12,'n'),(15,6,2018,'Kings XI Punjab',14,6,8,0,0,-0.502,12,'n'),(16,3,2018,'Delhi Capitals',14,5,9,0,0,-0.222,10,'n'),(17,1,2017,'Mumbai Indians',14,10,4,0,0,0.784,20,'q'),(18,9,2017,'Rising Pune Supergiant',14,9,5,0,0,0.176,18,'q'),(19,4,2017,'Sunrisers Hyderabad',14,8,5,0,1,0.599,17,'q'),(20,5,2017,'Kolkata Knight Riders',14,8,6,0,0,0.641,16,'q'),(21,6,2017,'Kings XI Punjab',14,7,7,0,0,-0.009,14,'n'),(22,3,2017,'Delhi Capitals',14,6,8,0,0,-0.512,12,'n'),(23,10,2017,'Gujarat Lions',14,4,10,0,0,-0.412,8,'n'),(24,8,2017,'Royal Challengers Bangalore',14,3,10,0,1,-1.299,7,'n'),(25,10,2016,'Gujarat Lions',14,9,5,0,0,-0.374,18,'q'),(26,8,2016,'Royal Challengers Bangalore',14,8,6,0,0,0.932,16,'q'),(27,4,2016,'Sunrisers Hyderabad',14,8,6,0,0,0.245,16,'q'),(28,5,2016,'Kolkata Knight Riders',14,8,6,0,0,0.106,16,'q'),(29,1,2016,'Mumbai Indians',14,7,7,0,0,-0.146,14,'n'),(30,3,2016,'Delhi Capitals',14,7,7,0,0,-0.155,14,'n'),(31,9,2016,'Rising Pune Supergiant',14,5,9,0,0,0.015,10,'n'),(32,6,2016,'Kings XI Punjab',14,4,10,0,0,-0.646,8,'n'),(33,2,2015,'Chennai Super Kings',14,9,5,0,0,0.709,18,'q'),(34,1,2015,'Mumbai Indians',14,8,6,0,0,-0.043,16,'q'),(35,8,2015,'Royal Challengers Bangalore',14,7,5,0,2,1.037,16,'q'),(36,7,2015,'Rajasthan Royals',14,7,5,0,2,0.062,16,'q'),(37,5,2015,'Kolkata Knight Riders',14,7,6,0,1,0.253,15,'n'),(38,4,2015,'Sunrisers Hyderabad',14,7,7,0,0,-0.239,14,'n'),(39,3,2015,'Delhi Capitals',14,5,8,0,1,-0.049,11,'n'),(40,6,2015,'Kings XI Punjab',14,3,11,0,0,-1.436,6,'n'),(41,6,2014,'Kings XI Punjab',14,11,3,0,0,0.968,22,'q'),(42,5,2014,'Kolkata Knight Riders',14,9,5,0,0,0.418,18,'q'),(43,2,2014,'Chennai Super Kings',14,9,5,0,0,0.385,18,'q'),(44,1,2014,'Mumbai Indians',14,7,7,0,0,0.095,14,'q'),(45,7,2014,'Rajasthan Royals',14,7,7,0,0,0.06,14,'n'),(46,4,2014,'Sunrisers Hyderabad',14,6,8,0,0,-0.399,12,'n'),(47,8,2014,'Royal Challengers Bangalore',14,5,9,0,0,-0.428,10,'n'),(48,3,2014,'Delhi Capitals',14,2,12,0,0,-1.182,4,'n'),(49,2,2013,'Chennai Super Kings',16,11,5,0,0,0.53,22,'q'),(50,1,2013,'Mumbai Indians',16,11,5,0,0,0.441,22,'q'),(51,7,2013,'Rajasthan Royals',16,10,6,0,0,0.322,20,'q'),(52,4,2013,'Sunrisers Hyderabad',16,10,6,0,0,0.003,20,'q'),(53,8,2013,'Royal Challengers Bangalore',16,9,7,0,0,0.457,18,'n'),(54,6,2013,'Kings XI Punjab',16,8,8,0,0,0.226,16,'n'),(55,5,2013,'Kolkata Knight Riders',16,6,10,0,0,-0.095,12,'n'),(56,11,2013,'Pune Warriors India',16,4,12,0,0,-1.006,8,'n'),(57,3,2013,'Delhi Capitals',16,3,13,0,0,-0.848,6,'n'),(58,3,2012,'Delhi Capitals',16,11,5,0,0,0.617,22,'q'),(59,5,2012,'Kolkata Knight Riders',16,10,5,0,1,0.561,21,'q'),(60,1,2012,'Mumbai Indians',16,10,6,0,0,-0.1,20,'q'),(61,2,2012,'Chennai Super Kings',16,8,7,0,1,0.1,17,'q'),(62,8,2012,'Royal Challengers Bangalore',16,8,7,0,1,-0.022,17,'n'),(63,6,2012,'Kings XI Punjab',16,8,8,0,0,-0.216,16,'n'),(64,7,2012,'Rajasthan Royals',16,7,9,0,0,0.201,14,'n'),(65,12,2012,'Deccan Chargers',16,4,11,0,1,-0.509,9,'n'),(66,11,2012,'Pune Warriors India',16,4,12,0,0,-0.551,8,'n'),(67,8,2011,'Royal Challengers Bangalore',14,9,4,0,1,0.326,19,'q'),(68,2,2011,'Chennai Super Kings',14,9,5,0,0,0.443,18,'q'),(69,1,2011,'Mumbai Indians',14,9,5,0,0,0.04,18,'q'),(70,5,2011,'Kolkata Knight Riders',14,8,6,0,0,0.433,16,'q'),(71,6,2011,'Kings XI Punjab',14,7,7,0,0,-0.051,14,'n'),(72,7,2011,'Rajasthan Royals',14,6,7,0,1,-0.691,13,'n'),(73,12,2011,'Deccan Chargers',14,6,8,0,0,0.222,12,'n'),(74,13,2011,'Kochi Tuskers Kerala',14,6,8,0,0,-0.214,12,'n'),(75,11,2011,'Pune Warriors India',14,4,9,0,1,-0.134,9,'n'),(76,3,2011,'Delhi Capitals',14,4,9,0,1,-0.448,9,'n'),(77,1,2010,'Mumbai Indians',14,10,4,0,0,1.084,20,'q'),(78,12,2010,'Deccan Chargers',14,8,6,0,0,-0.297,16,'q'),(79,2,2010,'Chennai Super Kings',14,7,7,0,0,0.274,14,'q'),(80,8,2010,'Royal Challengers Bangalore',14,7,7,0,0,0.219,14,'q'),(81,3,2010,'Delhi Capitals',14,7,7,0,0,0.021,14,'n'),(82,5,2010,'Kolkata Knight Riders',14,7,7,0,0,-0.341,14,'n'),(83,7,2010,'Rajasthan Royals',14,6,8,0,0,-0.514,12,'n'),(84,6,2010,'Kings XI Punjab',14,4,10,0,0,-0.478,8,'n'),(85,3,2009,'Delhi Capitals',14,10,4,0,0,0.311,20,'q'),(86,2,2009,'Chennai Super Kings',14,8,5,0,1,0.951,17,'q'),(87,8,2009,'Royal Challengers Bangalore',14,8,6,0,0,-0.191,16,'q'),(88,12,2009,'Deccan Chargers',14,7,7,0,0,0.203,14,'q'),(89,6,2009,'Kings XI Punjab',14,7,7,0,0,-0.483,14,'n'),(90,7,2009,'Rajasthan Royals',14,6,7,0,1,-0.352,13,'n'),(91,1,2009,'Mumbai Indians',14,5,8,0,1,0.297,11,'n'),(92,5,2009,'Kolkata Knight Riders',14,3,10,0,1,-0.789,7,'n'),(93,7,2008,'Rajasthan Royals',14,11,3,0,0,0.632,22,'q'),(94,6,2008,'Kings XI Punjab',14,10,4,0,0,0.509,20,'q'),(95,2,2008,'Chennai Super Kings',14,8,6,0,0,-0.192,16,'q'),(96,3,2008,'Delhi Capitals',14,7,6,0,1,0.342,15,'q'),(97,1,2008,'Mumbai Indians',14,7,7,0,0,0.57,14,'n'),(98,5,2008,'Kolkata Knight Riders',14,6,7,0,1,-0.147,13,'n'),(99,8,2008,'Royal Challengers Bangalore',14,4,10,0,0,-1.16,8,'n'),(100,12,2008,'Deccan Chargers',14,2,12,0,0,-0.467,4,'n');
/*!40000 ALTER TABLE `pointstable` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-21 15:38:40
