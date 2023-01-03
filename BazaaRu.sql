-- MariaDB dump 10.19  Distrib 10.6.11-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: BazaaRu
-- ------------------------------------------------------
-- Server version	10.6.11-MariaDB-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accounts` (
  `username` varchar(64) NOT NULL,
  `password` varchar(64) DEFAULT NULL,
  `userID` int(255) DEFAULT NULL,
  `permID` int(11) DEFAULT NULL,
  `acc_balance` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES ('ac1','pi',1,3,55.00),('ac1942','pi',10,1,0.00),('ac2','phi',2,3,20841.00),('Andy','password',5,3,3920.00),('Justyn C.','password',6,1,2500.00),('proton','pass',11,1,0.00),('shajia1985','password',7,3,1300.00),('ss22','abc',3,3,170.00),('testacc1','test',9,2,0.00),('testing_platform','pass',12,1,0.00),('tobi457','password',8,3,388750.00),('user','userpw',0,1,0.00),('yousof7984','password',4,3,1170.00);
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `complaints`
--

DROP TABLE IF EXISTS `complaints`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `complaints` (
  `username` varchar(64) DEFAULT NULL,
  `complaintID` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(64) DEFAULT NULL,
  `description` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`complaintID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complaints`
--

LOCK TABLES `complaints` WRITE;
/*!40000 ALTER TABLE `complaints` DISABLE KEYS */;
INSERT INTO `complaints` VALUES ('ac1',1,'Request','This project needs more sparkle (potatoes)'),('ac1',2,'Complaint','I keep getting ripped off by fake potato listings!'),('ac1',7,'Complaint','a new complaint');
/*!40000 ALTER TABLE `complaints` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_catalog`
--

DROP TABLE IF EXISTS `item_catalog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_catalog` (
  `post_id` bigint(20) NOT NULL,
  `been_purchased` tinyint(1) DEFAULT 0,
  `createdat` datetime DEFAULT NULL,
  `username` varchar(64) DEFAULT NULL,
  `product` varchar(64) DEFAULT NULL,
  `image_url` varchar(4096) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `category` varchar(64) DEFAULT NULL,
  `description` varchar(280) DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `username` (`username`),
  CONSTRAINT `item_catalog_ibfk_1` FOREIGN KEY (`username`) REFERENCES `accounts` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_catalog`
--

LOCK TABLES `item_catalog` WRITE;
/*!40000 ALTER TABLE `item_catalog` DISABLE KEYS */;
INSERT INTO `item_catalog` VALUES (1,0,'2022-09-30 00:00:00','yousof7984','Brown Suede Sofa','http://www.eventsourcesolutions.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/r/brown_leather_and_microsuede_sectional.jpg',45.00,'furniture, delivery','Used for one year. Has normal wear and tear'),(2,0,'2022-11-28 12:00:00','shajia1985','Groceries for Fiesta!','https://static.vecteezy.com/system/resources/previews/000/273/542/original/online-food-order-concept-vector.jpg',50.00,'delivery','Need 50 corn tortillas, 20 cans of black beans, and bag of rice before May 5th, 2022 for a party I\'m throwing'),(3,0,'2022-09-30 00:00:00','tobi457','HP Dev One','https://betanews.com/wp-content/uploads/2022/06/HP_Dev_One-2-1200x900.jpg',350.00,'electronics,delivery','Selling because not a fan of the OS. Good condition.'),(4,0,'2022-10-31 00:00:00','Andy','Ergonomic mouse','https://media.cnn.com/api/v1/images/stellar/prod/new-project-37.jpg?c=16x9&q=h_720,w_1280,c_fill',140.00,'electronics,delivery','Don\'t Need it anymore. Great for students.'),(5,0,'2022-10-31 00:00:00','Justyn C.','Gutter Cleaning Needed on Hamilton St.!','https://t4.ftcdn.net/jpg/03/32/31/79/240_F_332317976_u6Adr5ppAiqOVTKrO3olr9rQ7AJDKzs4.jpg',100.00,'service','Gutters are really dirty. Need someone with experience to clean them for me.'),(6,0,'2022-11-03 00:37:01','ac1','ac','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',10.00,'Miscellaneous','ac'),(7,0,'2022-11-03 00:41:11','tobi457','potato','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',20000.00,'shoes','this is a potato. '),(8,0,'2022-11-03 02:15:00','ac1','potato2','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',2.00,'Miscellaneous','potato'),(9,0,'2022-11-09 21:59:08','ac1','New post','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',459.00,'Miscellaneous','459'),(10,0,'2022-11-12 23:06:54','ac1 ','Potato 3','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',30.00,'household','potato the third'),(11,0,'2022-11-12 23:22:17','ac1','4th one!','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',444.00,'Miscellaneous','potato number 4'),(12,0,'2022-11-15 02:26:59','ac1','Test post','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',100.00,'household','Test desc'),(13,0,'2022-11-15 02:42:03','ac1','New test post','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',100.00,'Miscellaneous','New post desc'),(14,0,'2022-11-16 16:40:07','ac1','test1','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',2.00,'service','test2'),(15,1,'2022-11-27 23:06:09','ac2','Potato1','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',100.00,'Miscellaneous','Potato1'),(16,1,'2022-11-27 23:06:19','ac2','Potato2','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',100.00,'household','Potato2'),(17,1,'2022-11-27 23:06:29','ac2','Potato3','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',100.00,'clothing','Potato3'),(18,1,'2022-11-27 23:06:40','ac2','Potato4','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',100.00,'Miscellaneous','Potato4'),(19,0,'2022-12-08 01:07:52','ac2','aaaa','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',1002.00,'Miscellaneous','blaaaa'),(20,0,'2022-12-09 01:23:25','ac2','pie','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',100.00,'Miscellaneous','pie'),(21,0,'2022-12-09 01:23:44','ac2','pie2','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',14.00,'shoes','pie2'),(22,0,'2022-12-09 05:48:37','ac1','Assorted Amiibo','https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/amiibo/amiibo-lineup-img',75.00,'Miscellaneous','A random selection of 3 Amiibo Figurines that are compatible with the Nintendo Wii U, New Nintendo 3DS, and Nintendo Switch'),(23,0,'2022-12-09 05:54:02','user','Assorted Amiibo','https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/amiibo/amiibo-lineup-img',75.00,'Miscellaneous','A random selection of 3 Amiibo Figurines that are compatible with the Nintendo Wii U, New Nintendo 3DS, and Nintendo Switch'),(24,0,'2022-12-09 05:54:20','Justyn C.','Assorted Amiibo','https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/amiibo/amiibo-lineup-img',75.00,'Miscellaneous','A random selection of 3 Amiibo Figurines that are compatible with the Nintendo Wii U, New Nintendo 3DS, and Nintendo Switch'),(25,0,'2022-12-09 05:56:03','Andy','Assorted Amiibo','https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/amiibo/amiibo-lineup-img',75.00,'Miscellaneous','A random selection of 3 Amiibo Figurines that are compatible with the Nintendo Wii U, New Nintendo 3DS, and Nintendo Switch'),(26,0,'2022-12-09 06:03:03','ss22','Assorted Amiibo','https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/amiibo/amiibo-lineup-img',75.00,'Miscellaneous','A random selection of 3 Amiibo Figurines that are compatible with the Nintendo Wii U, New Nintendo 3DS, and Nintendo Switch'),(27,0,'2022-12-09 06:19:01','ac1','Assorted Amiibo','https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/amiibo/amiibo-lineup-img',75.00,'Miscellaneous','A random selection of 3 Amiibo Figurines that are compatible with the Nintendo Wii U, New Nintendo 3DS, and Nintendo Switch'),(28,0,'2022-12-09 06:20:50','ac2','Assorted Amiibo','https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/amiibo/amiibo-lineup-img',75.00,'Miscellaneous','A random selection of 3 Amiibo Figurines that are compatible with the Nintendo Wii U, New Nintendo 3DS, and Nintendo Switch'),(29,0,'2022-12-09 06:23:10','tobi457','Assorted Amiibo','https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/amiibo/amiibo-lineup-img',75.00,'Miscellaneous','A random selection of 3 Amiibo Figurines that are compatible with the Nintendo Wii U, New Nintendo 3DS, and Nintendo Switch'),(30,0,'2022-12-09 06:23:10','ac2','Lego Bionicle','https://www.brickfanatics.com/wp-content/uploads/2022/07/LEGO-BIONICLE-Toa-2001-featured-800x445.jpg',1.00,'Miscellaneous','an army of tiny mechanical men, at your service'),(31,0,'2022-12-09 06:23:10','ac1','Pikachu','https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png',22.00,'Miscellaneous','A singular Live Pikachu, grass fed'),(32,0,'2022-12-09 06:23:10','shajia1985','Bean Bag Chair','https://secure.img1-cg.wfcdn.com/im/5828275/compr-r85/8538/85385886/large-bean-bag-chair-lounger.jpg',159.00,'Miscellaneous','A chair made of a bag and beans. One size fits most'),(33,0,'2022-12-09 06:23:10','ss22','fruit hammock','https://hearthandvine.com/wp-content/uploads/2021/02/hanging-fruit-hammock-apples-735x735.jpg',55.00,'Miscellaneous','a hammock for your fruit. they enjoy the swaying'),(34,0,'2022-12-09 06:23:10','Justyn C.','brontosaurus stuffed animal','http://prodimage.images-bn.com/pimages/0810407030049_p0_v1_s1200x630.jpg',3.00,'Miscellaneous','a very scary dinosaur'),(35,0,'2022-12-09 06:23:10','tobi457','lAmp','https://target.scene7.com/is/image/Target/GUEST_9baad3f4-e6b5-4f77-97d9-b1e5d4d57d6a?wid=488&hei=488&fmt=pjpeg',19.00,'Miscellaneous','Brother, do you have, lAmp'),(36,0,'2022-12-09 06:23:10','tobi457','Microphone','https://cdn.dpamicrophones.com/media/images/microphones/dfacto/large/2028-vocal-microphone-1-lightgrey-bg.jpg?ext=.jpg',77.00,'Miscellaneous','a piece of technology to radiate or amplify your voice'),(38,0,'2022-12-09 06:23:10','Andy','Pikachu','https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png',22.00,'Miscellaneous','A singular Live Pikachu, grass fed'),(39,0,'2022-12-09 06:26:39','Andy','Assorted Amiibo','https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/amiibo/amiibo-lineup-img',75.00,'Miscellaneous','A random selection of 3 Amiibo Figurines that are compatible with the Nintendo Wii U, New Nintendo 3DS, and Nintendo Switch'),(40,0,'2022-12-09 06:26:39','yousof7984','Lego Bionicle','https://www.brickfanatics.com/wp-content/uploads/2022/07/LEGO-BIONICLE-Toa-2001-featured-800x445.jpg',1.00,'Miscellaneous','an army of tiny mechanical men, at your service'),(41,0,'2022-12-09 06:26:39','yousof7984','Pikachu','https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png',22.00,'Miscellaneous','A singular Live Pikachu, grass fed'),(42,0,'2022-12-09 06:26:39','ac1','Bean Bag Chair','https://secure.img1-cg.wfcdn.com/im/5828275/compr-r85/8538/85385886/large-bean-bag-chair-lounger.jpg',159.00,'Miscellaneous','A chair made of a bag and beans. One size fits most'),(43,0,'2022-12-09 06:26:39','Andy','fruit hammock','https://hearthandvine.com/wp-content/uploads/2021/02/hanging-fruit-hammock-apples-735x735.jpg',55.00,'Miscellaneous','a hammock for your fruit. they enjoy the swaying'),(44,0,'2022-12-09 06:26:39','Justyn C.','brontosaurus stuffed animal','http://prodimage.images-bn.com/pimages/0810407030049_p0_v1_s1200x630.jpg',3.00,'Miscellaneous','a very scary dinosaur'),(45,0,'2022-12-09 06:26:39','user','lAmp','https://target.scene7.com/is/image/Target/GUEST_9baad3f4-e6b5-4f77-97d9-b1e5d4d57d6a?wid=488&hei=488&fmt=pjpeg',19.00,'Miscellaneous','Brother, do you have, lAmp'),(46,0,'2022-12-09 06:26:39','Justyn C.','Microphone','https://cdn.dpamicrophones.com/media/images/microphones/dfacto/large/2028-vocal-microphone-1-lightgrey-bg.jpg?ext=.jpg',77.00,'Miscellaneous','a piece of technology to radiate or amplify your voice'),(47,0,'2022-12-09 06:26:39','ss22','Lucifer Morningstars Hell Coin','https://sc04.alicdn.com/kf/Hdc382288bcff408daca8351dfe0c63c7A/231845644/Hdc382288bcff408daca8351dfe0c63c7A.jpg',666.00,'Miscellaneous','A coin that lets you escape hell. A get out of hell free coin.'),(48,0,'2022-12-09 06:26:39','ss22','Pikachu','https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png',22.00,'Miscellaneous','A singular Live Pikachu, grass fed'),(49,0,'2022-12-09 06:26:39','ac1','Shadow Ranger Patrol Morpher','https://static.wikia.nocookie.net/powerrangers/images/9/91/Spd-arsenal-patrolmorpher.png/revision/latest?cb=20190818191914',100.00,'Miscellaneous','A marvelous piece of technology originally owned by Anubis Doggie Cruger. The item turns your into a power ranger'),(50,0,'2022-12-09 06:39:03','Justyn C.','Notepads','https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2F25245749%2Fstock-photo-notepad-on-wood.html&psig=AOvVaw1Wqss1-s8cRa6mpR0FJ6YX&ust=1670639239266000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCICTxqW-6_sCFQAAAAAdAAAAABAE',10.00,'Miscellaneous','Selling untouched notepads. price negotiable.'),(51,0,'2022-12-09 06:39:03','shajia1985','Plush','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kawaiies.com%2Fproducts%2Fsleepy-panda&psig=AOvVaw2B8PPOWe3Tn6v7b7fIszzW&ust=1670639434717000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMC2soK_6_sCFQAAAAAdAAAAABAE',50.00,'Miscellaneous','It’s fluffy.'),(52,0,'2022-12-09 06:39:03','user','Apple Headphones','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fshop%2Fproduct%2FMMTN2AM%2FA%2Fearpods-with-lightning-connector&psig=AOvVaw1tz7XOhzQFLkUIZOzq6PYg&ust=1670639269396000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDk6bO-6_sCFQAAAAAdAAAAABAE',50.00,'Miscellaneous','Selling old apple headphones. Hit me up if interested'),(53,0,'2022-12-09 06:39:03','shajia1985','Basketball','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwritingillini.com%2F2022%2F10%2F30%2Fillinois-basketball-2024-target-takes-illini-unofficial-visit%2F&psig=AOvVaw3bZnKxK6CCbafIAhVAr07u&ust=1670639288902000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOCp7Ly-6_sCFQAAAAAdAAAAABAJ',5.00,'Miscellaneous','Selling basketball. 5$ per basket'),(54,0,'2022-12-09 06:39:03','yousof7984','Homework','https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AQuestion_Mark.svg&psig=AOvVaw1ay5y78z6LxH9tajpEiz9l&ust=1670639320266000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMi85cu-6_sCFQAAAAAdAAAAABAE',20.00,'Miscellaneous','Selling homework help for Calc I and II. price negotiable.'),(55,0,'2022-12-09 06:39:03','Justyn C.','Apple Pie','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.inspiredtaste.net%2F43362%2Fapple-pie%2F&psig=AOvVaw1M3wwlwmzK92idt5aHv5BK&ust=1670639336348000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMDUuNO-6_sCFQAAAAAdAAAAABAE',10.00,'Miscellaneous','Freshly baked apple pie. 10$ per pie'),(56,0,'2022-12-09 06:39:03','shajia1985','Water bottles','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lowes.com%2Fpd%2FNiagara-32-Pack-16-9-fl-oz-Purified-Bottled-Water%2F1000109077&psig=AOvVaw2moDnHSat6SroSpdMZBZLl&ust=1670639361805000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNiG1d--6_sCFQAAAAAdAAAAABAE',5.00,'Miscellaneous','5$ per pack of water bottles. Don’t message me about price.'),(57,0,'2022-12-09 06:39:03','Andy','Napkins','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lowes.com%2Fpd%2FNiagara-32-Pack-16-9-fl-oz-Purified-Bottled-Water%2F1000109077&psig=AOvVaw2moDnHSat6SroSpdMZBZLl&ust=1670639361805000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNiG1d--6_sCFQAAAAAdAAAAABAE',10.00,'Miscellaneous','Anyone in need of napkins? I also have toilet paper for sale if ya’ll don’t wanna go shopping :^) '),(58,0,'2022-12-09 06:39:03','ss22','Crayons','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.target.com%2Fp%2Fcrayola-non-peggable-crayons-assorted-colors-24-per-box-52-0024-520024%2F-%2FA-82581219&psig=AOvVaw08D-x6PHqipwesbZGC-moM&ust=1670639400457000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiulPK-6_sCFQAAAAAdAAAAABAJ',10.00,'Miscellaneous','Crayons'),(59,0,'2022-12-09 06:39:03','Andy','Face masks','https://www.google.com/url?sa=i&url=https%3A%2F%2Fhdsupplysolutions.com%2Fp%2Fdisposable-protective-face-mask-%252850-pack%2529-p133040&psig=AOvVaw0qCJRExESnnweLBXmAXbGv&ust=1670639421352000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIDEgfy-6_sCFQAAAAAdAAAAABAE',100.00,'Miscellaneous','100$ per container of 50'),(60,0,'2022-12-09 06:39:03','ss22','Assorted Amiibo','https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/amiibo/amiibo-lineup-img',75.00,'Miscellaneous','A random selection of 3 Amiibo Figurines that are compatible with the Nintendo Wii U, New Nintendo 3DS, and Nintendo Switch'),(61,0,'2022-12-09 06:39:03','ac1','Lego Bionicle','https://www.brickfanatics.com/wp-content/uploads/2022/07/LEGO-BIONICLE-Toa-2001-featured-800x445.jpg',1.00,'Miscellaneous','an army of tiny mechanical men, at your service'),(62,1,'2022-12-09 06:39:03','Justyn C.','Pikachu','https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png',22.00,'Miscellaneous','A singular Live Pikachu, grass fed'),(63,0,'2022-12-09 06:39:03','ss22','Bean Bag Chair','https://secure.img1-cg.wfcdn.com/im/5828275/compr-r85/8538/85385886/large-bean-bag-chair-lounger.jpg',159.00,'Miscellaneous','A chair made of a bag and beans. One size fits most'),(64,0,'2022-12-09 06:39:03','Justyn C.','fruit hammock','https://hearthandvine.com/wp-content/uploads/2021/02/hanging-fruit-hammock-apples-735x735.jpg',55.00,'Miscellaneous','a hammock for your fruit. they enjoy the swaying'),(65,0,'2022-12-09 06:39:03','user','brontosaurus stuffed animal','http://prodimage.images-bn.com/pimages/0810407030049_p0_v1_s1200x630.jpg',3.00,'Miscellaneous','a very scary dinosaur'),(66,0,'2022-12-09 06:39:03','ac1','lAmp','https://target.scene7.com/is/image/Target/GUEST_9baad3f4-e6b5-4f77-97d9-b1e5d4d57d6a?wid=488&hei=488&fmt=pjpeg',19.00,'Miscellaneous','Brother, do you have, lAmp'),(67,0,'2022-12-09 06:39:03','Andy','Microphone','https://cdn.dpamicrophones.com/media/images/microphones/dfacto/large/2028-vocal-microphone-1-lightgrey-bg.jpg?ext=.jpg',77.00,'Miscellaneous','a piece of technology to radiate or amplify your voice'),(68,0,'2022-12-09 06:39:03','yousof7984','Lucifer Morningstars Hell Coin','https://sc04.alicdn.com/kf/Hdc382288bcff408daca8351dfe0c63c7A/231845644/Hdc382288bcff408daca8351dfe0c63c7A.jpg',666.00,'Miscellaneous','A coin that lets you escape hell. A get out of hell free coin.'),(69,0,'2022-12-09 06:39:03','Justyn C.','Pikachu','https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png',22.00,'Miscellaneous','A singular Live Pikachu, grass fed'),(70,0,'2022-12-09 06:39:03','Andy','Shadow Ranger Patrol Morpher','https://static.wikia.nocookie.net/powerrangers/images/9/91/Spd-arsenal-patrolmorpher.png/revision/latest?cb=20190818191914',100.00,'Miscellaneous','A marvelous piece of technology originally owned by Anubis Doggie Cruger. The item turns your into a power ranger'),(71,0,'2022-12-09 06:41:35','yousof7984','Notepads','https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2F25245749%2Fstock-photo-notepad-on-wood.html&psig=AOvVaw1Wqss1-s8cRa6mpR0FJ6YX&ust=1670639239266000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCICTxqW-6_sCFQAAAAAdAAAAABAE',10.00,'Miscellaneous','Selling untouched notepads. price negotiable.'),(72,0,'2022-12-09 06:41:35','ss22','Plush','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kawaiies.com%2Fproducts%2Fsleepy-panda&psig=AOvVaw2B8PPOWe3Tn6v7b7fIszzW&ust=1670639434717000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMC2soK_6_sCFQAAAAAdAAAAABAE',50.00,'Miscellaneous','It’s fluffy.'),(73,0,'2022-12-09 06:41:35','yousof7984','Apple Headphones','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fshop%2Fproduct%2FMMTN2AM%2FA%2Fearpods-with-lightning-connector&psig=AOvVaw1tz7XOhzQFLkUIZOzq6PYg&ust=1670639269396000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDk6bO-6_sCFQAAAAAdAAAAABAE',50.00,'Miscellaneous','Selling old apple headphones. Hit me up if interested'),(74,0,'2022-12-09 06:41:35','Justyn C.','Basketball','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwritingillini.com%2F2022%2F10%2F30%2Fillinois-basketball-2024-target-takes-illini-unofficial-visit%2F&psig=AOvVaw3bZnKxK6CCbafIAhVAr07u&ust=1670639288902000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOCp7Ly-6_sCFQAAAAAdAAAAABAJ',5.00,'Miscellaneous','Selling basketball. 5$ per basket'),(75,0,'2022-12-09 06:41:35','ac2','Homework','https://commons.wikimedia.org/wiki/File:Question_Mark.svg',20.00,'Miscellaneous','Selling homework help for Calc I and II. price negotiable.'),(76,0,'2022-12-09 06:41:35','ac2','Apple Pie','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.inspiredtaste.net%2F43362%2Fapple-pie%2F&psig=AOvVaw1M3wwlwmzK92idt5aHv5BK&ust=1670639336348000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMDUuNO-6_sCFQAAAAAdAAAAABAE',10.00,'Miscellaneous','Freshly baked apple pie. 10$ per pie'),(77,0,'2022-12-09 06:41:35','shajia1985','Water bottles','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lowes.com%2Fpd%2FNiagara-32-Pack-16-9-fl-oz-Purified-Bottled-Water%2F1000109077&psig=AOvVaw2moDnHSat6SroSpdMZBZLl&ust=1670639361805000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNiG1d--6_sCFQAAAAAdAAAAABAE',5.00,'Miscellaneous','5$ per pack of water bottles. Don’t message me about price.'),(78,0,'2022-12-09 06:41:35','shajia1985','Napkins','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lowes.com%2Fpd%2FNiagara-32-Pack-16-9-fl-oz-Purified-Bottled-Water%2F1000109077&psig=AOvVaw2moDnHSat6SroSpdMZBZLl&ust=1670639361805000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNiG1d--6_sCFQAAAAAdAAAAABAE',10.00,'Miscellaneous','Anyone in need of napkins? I also have toilet paper for sale if ya’ll don’t wanna go shopping :^) '),(79,0,'2022-12-09 06:41:35','shajia1985','Crayons','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.target.com%2Fp%2Fcrayola-non-peggable-crayons-assorted-colors-24-per-box-52-0024-520024%2F-%2FA-82581219&psig=AOvVaw08D-x6PHqipwesbZGC-moM&ust=1670639400457000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiulPK-6_sCFQAAAAAdAAAAABAJ',10.00,'Miscellaneous','Crayons'),(80,0,'2022-12-09 06:41:35','ac1','Face masks','https://www.google.com/url?sa=i&url=https%3A%2F%2Fhdsupplysolutions.com%2Fp%2Fdisposable-protective-face-mask-%252850-pack%2529-p133040&psig=AOvVaw0qCJRExESnnweLBXmAXbGv&ust=1670639421352000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIDEgfy-6_sCFQAAAAAdAAAAABAE',100.00,'Miscellaneous','100$ per container of 50'),(81,0,'2022-12-09 06:41:35','ac1','Assorted Amiibo','https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/amiibo/amiibo-lineup-img',75.00,'Miscellaneous','A random selection of 3 Amiibo Figurines that are compatible with the Nintendo Wii U, New Nintendo 3DS, and Nintendo Switch'),(82,0,'2022-12-09 06:41:35','user','Lego Bionicle','https://www.brickfanatics.com/wp-content/uploads/2022/07/LEGO-BIONICLE-Toa-2001-featured-800x445.jpg',1.00,'Miscellaneous','an army of tiny mechanical men, at your service'),(83,0,'2022-12-09 06:41:35','shajia1985','Pikachu','https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png',22.00,'Miscellaneous','A singular Live Pikachu, grass fed'),(84,0,'2022-12-09 06:41:35','ss22','Bean Bag Chair','https://secure.img1-cg.wfcdn.com/im/5828275/compr-r85/8538/85385886/large-bean-bag-chair-lounger.jpg',159.00,'Miscellaneous','A chair made of a bag and beans. One size fits most'),(85,0,'2022-12-09 06:41:35','yousof7984','fruit hammock','https://hearthandvine.com/wp-content/uploads/2021/02/hanging-fruit-hammock-apples-735x735.jpg',55.00,'Miscellaneous','a hammock for your fruit. they enjoy the swaying'),(86,0,'2022-12-09 06:41:35','tobi457','brontosaurus stuffed animal','http://prodimage.images-bn.com/pimages/0810407030049_p0_v1_s1200x630.jpg',3.00,'Miscellaneous','a very scary dinosaur'),(87,1,'2022-12-09 06:41:35','Justyn C.','lAmp','https://target.scene7.com/is/image/Target/GUEST_9baad3f4-e6b5-4f77-97d9-b1e5d4d57d6a?wid=488&hei=488&fmt=pjpeg',19.00,'Miscellaneous','Brother, do you have, lAmp'),(88,0,'2022-12-09 06:41:35','shajia1985','Microphone','https://cdn.dpamicrophones.com/media/images/microphones/dfacto/large/2028-vocal-microphone-1-lightgrey-bg.jpg?ext=.jpg',77.00,'Miscellaneous','a piece of technology to radiate or amplify your voice'),(89,0,'2022-12-09 06:41:35','Justyn C.','Lucifer Morningstars Hell Coin','https://sc04.alicdn.com/kf/Hdc382288bcff408daca8351dfe0c63c7A/231845644/Hdc382288bcff408daca8351dfe0c63c7A.jpg',666.00,'Miscellaneous','A coin that lets you escape hell. A get out of hell free coin.'),(90,0,'2022-12-09 06:41:35','ss22','Pikachu','https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png',22.00,'Miscellaneous','A singular Live Pikachu, grass fed'),(91,1,'2022-12-09 06:41:35','shajia1985','Shadow Ranger Patrol Morpher','https://static.wikia.nocookie.net/powerrangers/images/9/91/Spd-arsenal-patrolmorpher.png/revision/latest?cb=20190818191914',100.00,'Miscellaneous','A marvelous piece of technology originally owned by Anubis Doggie Cruger. The item turns your into a power ranger'),(92,0,'2022-12-09 09:50:45','ac1','mush','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',10.00,'Miscellaneous','mush'),(93,0,'2022-12-09 09:53:33','ac1','mush','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',10.00,'Miscellaneous','mush'),(94,0,'2022-12-09 09:58:00','ac1','mush','http://cs431-05.cs.rutgers.edu:5000/image/94',10.00,'Miscellaneous','mush'),(95,0,'2022-12-09 10:03:38','ac1','mush','http://cs431-05.cs.rutgers.edu:5000/image/95',10.00,'Miscellaneous','mush'),(96,0,'2022-12-09 10:08:08','ac1','ma','http://cs431-05.cs.rutgers.edu:5000/image/96',10.00,'Miscellaneous','ma'),(97,0,'2022-12-09 10:09:36','ac1','ma','http://cs431-05.cs.rutgers.edu:5000/image/97',1.00,'Miscellaneous','ma'),(98,0,'2022-12-09 17:10:57','ac1','poke','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',20.00,'Miscellaneous','mon'),(99,0,'2022-12-11 23:17:57','ac1','New Post','https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg',10000000.00,'Miscellaneous','Post description');
/*!40000 ALTER TABLE `item_catalog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `message_id` bigint(20) NOT NULL,
  `users` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`message_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (2,'ac1,shajia1985'),(3,'ac1,Andy'),(4,'ac1,ac2');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages_streams`
--

DROP TABLE IF EXISTS `messages_streams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages_streams` (
  `message` varchar(256) DEFAULT NULL,
  `message_id` bigint(20) DEFAULT NULL,
  `sender` varchar(64) DEFAULT NULL,
  `time_sent` datetime DEFAULT NULL,
  KEY `message_id` (`message_id`),
  KEY `sender` (`sender`),
  CONSTRAINT `messages_streams_ibfk_1` FOREIGN KEY (`message_id`) REFERENCES `messages` (`message_id`),
  CONSTRAINT `messages_streams_ibfk_2` FOREIGN KEY (`sender`) REFERENCES `accounts` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages_streams`
--

LOCK TABLES `messages_streams` WRITE;
/*!40000 ALTER TABLE `messages_streams` DISABLE KEYS */;
INSERT INTO `messages_streams` VALUES ('I like your listing! price negotiable?',4,'ac1','2022-12-09 19:57:20'),('I liked your listing!',2,'shajia1985','2022-12-09 19:58:11'),('Thank you! Are you interested?',2,'ac1','2022-12-09 19:58:36'),('Hello! New message ',4,'ac1','2022-12-11 23:23:39');
/*!40000 ALTER TABLE `messages_streams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pending_accounts`
--

DROP TABLE IF EXISTS `pending_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pending_accounts` (
  `rand_string` varchar(10) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rand_string`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pending_accounts`
--

LOCK TABLES `pending_accounts` WRITE;
/*!40000 ALTER TABLE `pending_accounts` DISABLE KEYS */;
INSERT INTO `pending_accounts` VALUES ('0czJPg','wh319','123456','wh319@rutgers.edu'),('3bAGMP','potato','potato','ac1890@scarletmail.rutgers.edu'),('4K0uEN','potato','potato','ac1890@scarletmail.rutgers.edu'),('6Mquub','potato','potato','ac1890@scarletmail.rutgers.edu'),('9VC3mX','wh319','123456','wh319@rutgers.edu'),('bP7bob','testacc1','test','ctc111@rutgers.edu'),('bqpwSb','testacc1','test','ctc111@rutgers.edu'),('BsWrX3','wh319','123456','wh319@rutgers.edu'),('fgokoC','potato','potato','ac1890@scarletmail.rutgers.edu'),('fqkKid','slorbo','pass','ctc111@rutgers.edu'),('H4Zcxy','wh319','123456','wh319@rutgers.edu'),('HjHXKs','potato','potato','ac1890@scarletmail.rutgers.edu'),('j17KPq','potato','potato','ac1890@scarletmail.rutgers.edu'),('jiaDZ8','wh319','123456','wh319@rutgers.edu'),('lmHkNo','potato','potato','ac1890@scarletmail.rutgers.edu'),('lmKxXr','potato','potato','ac1890@scarletmail.rutgers.edu'),('Pdv8ms','gorbo','gorbo','ctc111@rutgers.edu'),('Q3JRep','potato','potato','ac1890@scarletmail.rutgers.edu'),('sakY50','wh319','123456','wh319@rutgers.edu'),('vaLOB6','potato','potato','ac1890@scarletmail.rutgers.edu'),('WBDGR9','testacc','test','ctc111@rutgers.edu'),('yL6blF','potato','potato','ac1890@scarletmail.rutgers.edu');
/*!40000 ALTER TABLE `pending_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `writer_usnm` varchar(64) DEFAULT NULL,
  `subject_usnm` varchar(64) DEFAULT NULL,
  `acc_review` varchar(550) DEFAULT NULL,
  `num_rating` tinyint(3) unsigned NOT NULL CHECK (`num_rating` > 0 and `num_rating` <= 5),
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,'ac1','ss22','This is a trustworthy seller, test 1',4),(2,'ss22','ac1','This is a trustworthy seller, test 2',5),(3,'ac1','Andy','Rating test 1',4),(4,'ac1','ss22','Review test 2',3),(5,'ac1','ss22','Review test 3, this should not be showing up ',4),(6,'ac1','ss22','Review test 4, this should not be happening',3),(7,'ac1','shajia1985','bob',2),(8,'ac1','shajia1985','Making a review now Test 5',3),(9,'ac1','shajia1985','Test 6 ',3),(10,'ac1','shajia1985','Test 7',3),(11,'ac1','ss22','Review test 5, this should not work',3),(12,'ac1','shajia1985','Make the review test 8 ',3),(13,'ac1','ac1','Test 3, should change rating',3),(14,'ac1','shajia1985','Test #9 This should go through and refresh the page',5),(15,'ac1','shajia1985','Test #10 This should go through and refresh the page',5),(16,'ac1','tobi457','Tobi is evil \nTest 1\nThis should go through and update the rating',1),(17,'ac1','Justyn C.','Bob the builder Test 1',5),(18,'ac1','yousof7984','Yousof had a little lamb\nThey ate all my potatoes\nI am angry test 1',5),(19,'ac1','yousof7984','Test 2',3),(20,'ac1','yousof7984','test 3',3),(21,'ac1','shajia1985','Test 11 This should go through',4);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transactions` (
  `transaction_id` bigint(20) NOT NULL,
  `post_id` bigint(20) DEFAULT NULL,
  `buyer_username` varchar(64) DEFAULT NULL,
  `seller_username` varchar(64) DEFAULT NULL,
  `date_purchased` datetime DEFAULT NULL,
  PRIMARY KEY (`transaction_id`),
  KEY `post_id` (`post_id`),
  KEY `buyer_username` (`buyer_username`),
  KEY `seller_username` (`seller_username`),
  CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `item_catalog` (`post_id`),
  CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`buyer_username`) REFERENCES `accounts` (`username`),
  CONSTRAINT `transactions_ibfk_3` FOREIGN KEY (`seller_username`) REFERENCES `accounts` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (1,8,'ac1','ac1','2022-11-05 21:23:29'),(2,4,'ac1','Andy','2022-11-05 21:28:27'),(3,4,'ac1','Andy','2022-11-05 21:34:54'),(4,4,'ac1','Andy','2022-11-05 21:35:02'),(5,4,'ac1','Andy','2022-11-05 21:37:00'),(6,8,'ac1','ac1','2022-11-05 21:37:11'),(7,1,'ac1','yousof7984','2022-11-05 21:46:20'),(8,2,'ac1','shajia1985','2022-11-06 00:44:52'),(9,3,'ac1','tobi457','2022-11-06 00:48:22'),(10,5,'ac1','Justyn C.','2022-11-06 00:50:46'),(11,6,'ac1','ac1','2022-11-06 00:51:06'),(12,7,'ac1','tobi457','2022-11-06 00:51:15'),(13,1,'ac1','yousof7984','2022-11-06 01:12:59'),(14,2,'ac1','shajia1985','2022-11-06 01:13:15'),(15,3,'ac1','tobi457','2022-11-06 01:13:24'),(16,7,'ac1','tobi457','2022-11-06 01:13:57'),(17,5,'ac1','Justyn C.','2022-11-13 01:59:35'),(18,5,'ac1','Justyn C.','2022-11-13 02:01:05'),(19,5,'ac1','Justyn C.','2022-11-13 02:01:39'),(20,5,'ac1','Justyn C.','2022-11-13 02:04:14'),(21,4,'ac1','Andy','2022-11-13 02:04:52'),(22,4,'ac1','Andy','2022-11-13 02:15:32'),(23,10,'ac1','ac1 ','2022-11-13 02:18:55'),(24,11,'ac1','ac1','2022-11-13 02:19:20'),(25,9,'ac1','ac1','2022-11-13 02:19:26'),(26,6,'ac1','ac1','2022-11-13 02:19:40'),(27,8,'ac1','ac1','2022-11-13 02:19:45'),(28,2,'ac1','shajia1985','2022-11-13 02:23:02'),(29,1,'ac1','yousof7984','2022-11-13 02:23:11'),(30,3,'ac1','tobi457','2022-11-13 02:23:14'),(31,4,'ac1','Andy','2022-11-13 02:23:18'),(32,5,'ac1','Justyn C.','2022-11-13 02:23:22'),(33,6,'ac1','ac1','2022-11-13 02:24:30'),(34,7,'ac1','tobi457','2022-11-13 02:24:36'),(35,8,'ac1','ac1','2022-11-13 02:24:41'),(36,9,'ac1','ac1','2022-11-13 02:24:47'),(37,10,'ac1','ac1 ','2022-11-13 02:24:53'),(38,11,'ac1','ac1','2022-11-13 02:24:58'),(39,5,'ac1','Justyn C.','2022-11-13 02:25:45'),(40,1,'ac1','yousof7984','2022-11-13 02:25:48'),(41,2,'ac1','shajia1985','2022-11-13 02:25:55'),(42,3,'ac1','tobi457','2022-11-13 02:26:02'),(43,4,'ac1','Andy','2022-11-13 02:26:07'),(44,6,'ac1','ac1','2022-11-13 02:32:27'),(45,1,'ac1','yousof7984','2022-11-13 02:32:31'),(46,2,'ac1','shajia1985','2022-11-13 02:32:36'),(47,4,'ac1','Andy','2022-11-13 02:32:44'),(48,3,'ac1','tobi457','2022-11-13 02:32:48'),(49,5,'ac1','Justyn C.','2022-11-13 02:32:51'),(50,7,'ac1','tobi457','2022-11-13 02:33:47'),(51,11,'ac1','ac1','2022-11-13 02:33:52'),(52,8,'ac1','ac1','2022-11-13 02:33:55'),(53,9,'ac1','ac1','2022-11-13 02:33:58'),(54,10,'ac1','ac1 ','2022-11-13 02:34:02'),(55,5,'ac1','Justyn C.','2022-11-13 02:34:26'),(56,2,'ac1','shajia1985','2022-11-13 02:34:31'),(57,6,'ac1','ac1','2022-11-13 02:34:36'),(58,10,'ac1','ac1 ','2022-11-13 02:34:45'),(59,1,'ac1','yousof7984','2022-11-13 02:55:09'),(60,3,'ac1','tobi457','2022-11-13 02:55:12'),(61,4,'ac1','Andy','2022-11-13 02:55:15'),(62,7,'ac1','tobi457','2022-11-13 02:55:31'),(63,1,'ac1','yousof7984','2022-11-13 02:55:52'),(64,2,'ac1','shajia1985','2022-11-13 02:55:55'),(65,3,'ac1','tobi457','2022-11-13 02:55:59'),(66,4,'ac1','Andy','2022-11-13 02:56:02'),(67,5,'ac1','Justyn C.','2022-11-13 02:56:06'),(68,8,'ac1','ac1','2022-11-13 15:55:02'),(69,1,'ac1','yousof7984','2022-11-13 15:55:06'),(70,4,'ac1','Andy','2022-11-13 15:55:09'),(71,3,'ac1','tobi457','2022-11-13 15:55:12'),(72,2,'ac1','shajia1985','2022-11-13 15:55:16'),(73,7,'ac1','tobi457','2022-11-13 15:55:20'),(74,6,'ac1','ac1','2022-11-13 15:55:30'),(75,10,'ac1','ac1 ','2022-11-13 15:55:35'),(76,9,'ac1','ac1','2022-11-13 15:55:38'),(77,11,'ac1','ac1','2022-11-13 15:55:42'),(78,5,'ac1','Justyn C.','2022-11-13 15:55:49'),(79,11,'ac1','ac1','2022-11-13 15:56:42'),(80,2,'ac1','shajia1985','2022-11-13 15:56:46'),(81,4,'ac1','Andy','2022-11-13 15:56:51'),(82,3,'ac1','tobi457','2022-11-13 15:56:54'),(83,6,'ac1','ac1','2022-11-13 15:56:59'),(84,10,'ac1','ac1 ','2022-11-13 15:57:06'),(85,1,'ac1','yousof7984','2022-11-13 15:58:23'),(86,2,'ac1','shajia1985','2022-11-13 15:58:31'),(87,3,'ac1','tobi457','2022-11-13 15:58:37'),(88,4,'ac1','Andy','2022-11-13 15:58:41'),(89,5,'ac1','Justyn C.','2022-11-13 15:58:46'),(90,6,'ac1','ac1','2022-11-13 15:58:51'),(91,9,'ac1','ac1','2022-11-13 16:01:13'),(92,11,'ac1','ac1','2022-11-13 16:01:20'),(93,8,'ac1','ac1','2022-11-13 16:01:25'),(94,1,'ac1','yousof7984','2022-11-13 16:03:09'),(95,2,'ac1','shajia1985','2022-11-13 16:06:19'),(96,4,'ac1','Andy','2022-11-13 16:07:08'),(97,3,'ac1','tobi457','2022-11-13 16:07:17'),(98,5,'ac1','Justyn C.','2022-11-13 16:07:33'),(99,6,'ac1','ac1','2022-11-13 16:07:44'),(100,9,'ac1','ac1','2022-11-13 16:07:54'),(101,11,'ac1','ac1','2022-11-13 16:07:59'),(102,1,'ac1','yousof7984','2022-11-13 16:18:15'),(103,2,'ac1','shajia1985','2022-11-13 16:18:20'),(104,3,'ac1','tobi457','2022-11-13 16:18:24'),(105,4,'ac1','Andy','2022-11-13 16:18:29'),(106,5,'ac1','Justyn C.','2022-11-13 16:18:32'),(107,6,'ac1','ac1','2022-11-13 16:18:35'),(108,11,'ac1','ac1','2022-11-13 16:29:31'),(109,10,'ac1','ac1 ','2022-11-13 16:29:34'),(110,9,'ac1','ac1','2022-11-13 16:29:37'),(111,8,'ac1','ac1','2022-11-13 16:29:40'),(112,6,'ac1','ac1','2022-11-13 16:29:45'),(113,5,'ac1','Justyn C.','2022-11-13 16:29:49'),(114,4,'ac1','Andy','2022-11-13 16:37:01'),(115,3,'ac1','tobi457','2022-11-13 16:37:04'),(116,2,'ac1','shajia1985','2022-11-13 16:37:07'),(117,1,'ac1','yousof7984','2022-11-13 16:37:10'),(118,11,'ac1','ac1','2022-11-13 16:37:26'),(119,10,'ac1','ac1 ','2022-11-13 16:37:29'),(120,9,'ac1','ac1','2022-11-13 16:51:54'),(121,8,'ac1','ac1','2022-11-13 16:51:57'),(122,6,'ac1','ac1','2022-11-13 16:52:06'),(123,5,'ac1','Justyn C.','2022-11-13 16:52:09'),(124,4,'ac1','Andy','2022-11-13 16:52:13'),(125,3,'ac1','tobi457','2022-11-13 16:52:16'),(126,2,'ac1','shajia1985','2022-11-13 16:57:18'),(127,1,'ac1','yousof7984','2022-11-13 16:57:21'),(128,7,'ac1','tobi457','2022-11-13 16:58:24'),(129,11,'ac1','ac1','2022-11-13 17:05:55'),(130,10,'ac1','ac1 ','2022-11-13 17:05:58'),(131,9,'ac1','ac1','2022-11-13 17:06:00'),(132,8,'ac1','ac1','2022-11-13 17:06:03'),(133,7,'ac1','tobi457','2022-11-13 17:06:06'),(134,6,'ac1','ac1','2022-11-13 17:06:09'),(135,1,'ac1','yousof7984','2022-11-13 17:12:12'),(136,11,'ac1','ac1','2022-11-13 17:13:18'),(137,10,'ac1','ac1 ','2022-11-13 17:14:59'),(138,6,'ac1','ac1','2022-11-13 17:15:15'),(139,9,'ac1','ac1','2022-11-13 17:15:21'),(140,7,'ac1','tobi457','2022-11-13 17:15:29'),(141,7,'ac1','tobi457','2022-11-13 17:16:09'),(142,1,'ac1','yousof7984','2022-11-13 17:17:06'),(143,11,'ac1','ac1','2022-11-13 17:17:15'),(144,10,'ac1','ac1 ','2022-11-13 17:17:45'),(145,9,'ac1','ac1','2022-11-13 17:17:54'),(146,8,'ac1','ac1','2022-11-13 17:18:01'),(147,6,'ac1','ac1','2022-11-13 17:18:43'),(148,5,'ac1','Justyn C.','2022-11-13 17:18:53'),(149,4,'ac1','Andy','2022-11-13 17:19:02'),(150,3,'ac1','tobi457','2022-11-13 17:19:11'),(151,2,'ac1','shajia1985','2022-11-13 17:19:22'),(152,11,'ac1','ac1','2022-11-13 17:19:54'),(153,10,'ac1','ac1 ','2022-11-13 17:20:29'),(154,9,'ac1','ac1','2022-11-13 17:20:41'),(155,8,'ac1','ac1','2022-11-13 17:21:01'),(156,7,'ac1','tobi457','2022-11-13 17:21:07'),(157,6,'ac1','ac1','2022-11-13 17:21:14'),(158,7,'ac1','tobi457','2022-11-13 17:30:10'),(159,5,'ac1','Justyn C.','2022-11-13 17:30:17'),(160,4,'ac1','Andy','2022-11-13 17:30:29'),(161,3,'ac1','tobi457','2022-11-13 17:30:38'),(162,2,'ac1','shajia1985','2022-11-13 17:30:56'),(163,1,'ac1','yousof7984','2022-11-13 17:31:03'),(164,7,'ac1','tobi457','2022-11-13 17:31:24'),(165,5,'ac1','Justyn C.','2022-11-13 17:31:31'),(166,4,'ac1','Andy','2022-11-13 17:31:34'),(167,3,'ac1','tobi457','2022-11-13 17:31:36'),(168,2,'ac1','shajia1985','2022-11-13 17:31:38'),(169,1,'ac1','yousof7984','2022-11-13 17:31:41'),(170,7,'ac1','tobi457','2022-11-13 17:33:11'),(171,5,'ac1','Justyn C.','2022-11-13 17:33:14'),(172,1,'ac1','yousof7984','2022-11-13 17:34:17'),(173,4,'ac1','Andy','2022-11-13 17:34:20'),(174,3,'ac1','tobi457','2022-11-13 17:34:22'),(175,2,'ac1','shajia1985','2022-11-13 17:34:24'),(176,11,'ac1','ac1','2022-11-13 18:00:15'),(177,10,'ac1','ac1 ','2022-11-13 18:00:20'),(178,9,'ac1','ac1','2022-11-13 18:00:23'),(179,8,'ac1','ac1','2022-11-13 18:00:25'),(180,7,'ac1','tobi457','2022-11-13 18:00:28'),(181,6,'ac1','ac1','2022-11-13 18:00:30'),(182,5,'ac1','Justyn C.','2022-11-13 18:01:10'),(183,4,'ac1','Andy','2022-11-13 18:01:12'),(184,3,'ac1','tobi457','2022-11-13 18:01:15'),(185,2,'ac1','shajia1985','2022-11-13 18:01:18'),(186,1,'ac1','yousof7984','2022-11-13 18:01:21'),(187,5,'ac1','Justyn C.','2022-11-13 18:01:35'),(188,4,'ac1','Andy','2022-11-13 18:01:38'),(189,3,'ac1','tobi457','2022-11-13 18:01:42'),(190,2,'ac1','shajia1985','2022-11-13 18:01:47'),(191,1,'ac1','yousof7984','2022-11-13 18:01:50'),(192,11,'ac1','ac1','2022-11-13 18:01:55'),(193,11,'ac1','ac1','2022-11-13 18:02:31'),(194,10,'ac1','ac1 ','2022-11-13 18:02:34'),(195,9,'ac1','ac1','2022-11-13 18:02:37'),(196,8,'ac1','ac1','2022-11-13 18:02:39'),(197,7,'ac1','tobi457','2022-11-13 18:02:42'),(198,6,'ac1','ac1','2022-11-13 18:02:45'),(199,10,'ac1','ac1 ','2022-11-13 18:03:07'),(200,8,'ac1','ac1','2022-11-13 18:03:15'),(201,6,'ac1','ac1','2022-11-13 18:03:20'),(202,4,'ac1','Andy','2022-11-13 18:03:25'),(203,2,'ac1','shajia1985','2022-11-13 18:03:29'),(204,1,'ac1','yousof7984','2022-11-13 18:03:33'),(205,1,'ac1','yousof7984','2022-11-13 18:04:49'),(206,2,'ac1','shajia1985','2022-11-13 18:04:55'),(207,3,'ac1','tobi457','2022-11-13 18:04:59'),(208,4,'ac1','Andy','2022-11-13 18:05:04'),(209,5,'ac1','Justyn C.','2022-11-13 18:05:08'),(210,6,'ac1','ac1','2022-11-13 18:05:15'),(211,7,'ac1','tobi457','2022-11-13 18:05:25'),(212,8,'ac1','ac1','2022-11-13 18:05:29'),(213,9,'ac1','ac1','2022-11-13 18:05:33'),(214,10,'ac1','ac1 ','2022-11-13 18:05:37'),(215,1,'ac1','yousof7984','2022-11-13 22:07:00'),(216,2,'ac1','shajia1985','2022-11-13 22:10:47'),(217,2,'ac1','shajia1985','2022-11-13 22:12:12'),(218,11,'ac1','ac1','2022-11-13 22:13:58'),(219,5,'ac1','Justyn C.','2022-11-13 22:17:23'),(220,10,'ac1','ac1 ','2022-11-13 22:21:21'),(221,9,'ac1','ac1','2022-11-13 22:22:44'),(222,8,'ac1','ac1','2022-11-13 22:23:28'),(223,7,'ac1','tobi457','2022-11-13 22:25:08'),(224,6,'ac1','ac1','2022-11-13 22:25:59'),(225,4,'ac1','Andy','2022-11-13 22:26:06'),(226,3,'ac1','tobi457','2022-11-13 22:26:08'),(227,11,'ac1','ac1','2022-11-13 22:26:40'),(228,10,'ac1','ac1 ','2022-11-13 22:26:42'),(229,9,'ac1','ac1','2022-11-13 22:26:44'),(230,8,'ac1','ac1','2022-11-13 22:26:46'),(231,7,'ac1','tobi457','2022-11-13 22:26:47'),(232,6,'ac1','ac1','2022-11-13 22:26:49'),(233,5,'ac1','Justyn C.','2022-11-13 22:26:51'),(234,4,'ac1','Andy','2022-11-13 22:26:53'),(235,3,'ac1','tobi457','2022-11-13 22:26:55'),(236,2,'ac1','shajia1985','2022-11-13 22:26:57'),(237,1,'ac1','yousof7984','2022-11-13 22:26:59'),(238,11,'ac1','ac1','2022-11-14 00:10:03'),(239,10,'ac1','ac1 ','2022-11-14 00:10:05'),(240,1,'ac1','yousof7984','2022-11-14 00:10:08'),(241,8,'ac1','ac1','2022-11-14 00:11:51'),(242,4,'ac1','Andy','2022-11-14 00:11:56'),(243,6,'ac1','ac1','2022-11-14 00:13:03'),(244,9,'ac1','ac1','2022-11-14 14:57:19'),(245,7,'ac1','tobi457','2022-11-14 14:57:48'),(246,5,'ac1','Justyn C.','2022-11-14 14:58:28'),(247,3,'ac1','tobi457','2022-11-14 14:58:38'),(248,2,'ac1','shajia1985','2022-11-14 14:58:48'),(249,7,'ac1','tobi457','2022-11-14 15:04:49'),(250,9,'ac2','ac1','2022-11-15 02:38:51'),(251,12,'ac2','ac1','2022-11-15 02:43:14'),(252,2,'ac1','shajia1985','2022-11-24 00:33:15'),(253,5,'ac1','Justyn C.','2022-11-25 00:10:58'),(254,4,'ac1','Andy','2022-11-25 00:11:02'),(255,3,'ac1','tobi457','2022-11-25 00:11:06'),(256,1,'ac1','yousof7984','2022-11-25 00:11:11'),(257,5,'ac1','Justyn C.','2022-11-25 03:35:39'),(258,4,'ac1','Andy','2022-11-25 03:35:43'),(259,3,'ac1','tobi457','2022-11-25 03:36:02'),(260,1,'ac1','yousof7984','2022-11-25 03:36:55'),(261,2,'ac1','shajia1985','2022-11-27 00:15:02'),(262,7,'ac1','tobi457','2022-11-27 17:05:36'),(263,5,'ac1','Justyn C.','2022-11-27 17:06:56'),(264,4,'ac1','Andy','2022-11-27 17:07:11'),(265,3,'ac1','tobi457','2022-11-27 17:07:16'),(266,1,'ac1','yousof7984','2022-11-27 17:07:21'),(267,15,'ac1','ac2','2022-11-27 23:07:07'),(268,16,'ac1','ac2','2022-11-27 23:07:19'),(269,17,'ac1','ac2','2022-11-27 23:07:25'),(270,18,'ac1','ac2','2022-11-27 23:07:30');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-11 19:06:26
