-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 13, 2020 at 07:45 AM
-- Server version: 5.7.23
-- PHP Version: 7.0.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sp_cart_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mobile_no` bigint(10) NOT NULL,
  `email` varchar(60) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(10) NOT NULL,
  `active` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mobile_no` (`mobile_no`),
  KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `mobile_no`, `email`, `name`, `password`, `active`) VALUES
(1, 9899659986, 'mk_kirar@rediffmail.com', 'Mohan', 'test', 1),
(2, 9899659911, 'manav@test.com', 'Manav Kumar Singh', '123@123', 1),
(3, 9899659922, 'rakesh@a.com', 'Rakesh', 'r@123', 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(40) NOT NULL,
  `prod_description` varchar(500) NOT NULL,
  `qty` int(5) NOT NULL,
  `price` float NOT NULL,
  `make` int(4) NOT NULL,
  `image` varchar(50) NOT NULL,
  `status` enum('1','0') NOT NULL DEFAULT '0',
  `date_added` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `prod_description`, `qty`, `price`, `make`, `image`, `status`, `date_added`) VALUES
(1, 'OnePlus 8 5G', '48MP rear camera with 4k video at 30/60 fps, 1080p video at 30/60 fps, super slow motion: 720p video at 480 fps, 1080p video at 240fps, time-lapse: 1080p 30fps, 4k 30fps, cine aspect ratio video recording, ultrashot hdr, nightscape, micro, portrait, pro mode, panorama, cat&dog face detection&focus, ai scene detection, raw image | 16MP front facing camera\r\n\r\n16.637 centimeters (6.55-inch) 90Hz fluid display with 2400 x 1080 pixels resolution, 402 ppi pixel density\r\n', 5, 25000, 2019, 'img-9191902.jpg', '1', '2020-07-11 18:30:00'),
(2, 'Oppo X2', '12 MP rear camera with 4k video at 30/60 fps, 1080p video at 30/60 fps, super slow motion: 720p video at 480 fps, 1080p video at 240fps, time-lapse: 1080p 30fps, 4k 30fps, cine aspect ratio video recording, ultrashot hdr, nightscape, micro, portrait, pro mode, panorama, cat&dog face detection&focus, ai scene detection, raw image | 16MP front facing camera\r\n\r\n16.637 centimeters (6.55-inch) 90Hz fluid display with 2400 x 1080 pixels resolution, 402 ppi pixel density\r\n', 10, 14000, 2020, 'img-9191911.jpg', '1', '2020-07-11 18:30:00'),
(3, 'Samsung Galaxy', '56MP rear camera with 4k video at 30/60 fps, 1080p video at 30/60 fps, super slow motion: 720p video at 480 fps, 1080p video at 240fps, time-lapse: 1080p 30fps, 4k 30fps, cine aspect ratio video recording, ultrashot hdr, nightscape, micro, portrait, pro mode, panorama, cat&dog face detection&focus, ai scene detection, raw image | 16MP front facing camera\r\n\r\n16.637 centimeters (6.55-inch) 90Hz fluid display with 2400 x 1080 pixels resolution, 402 ppi pixel density\r\n', 15, 30000, 2018, 'img-9191944.jpg', '1', '2020-07-11 18:30:00'),
(4, 'Mi Y1', '16 MP rear camera with 4k video at 30/60 fps, 1080p video at 30/60 fps, super slow motion: 720p video at 480 fps, 1080p video at 240fps, time-lapse: 1080p 30fps, 4k 30fps, cine aspect ratio video recording, ultrashot hdr, nightscape, micro, portrait, pro mode, panorama, cat&dog face detection&focus, ai scene detection, raw image | 16MP front facing camera\r\n\r\n16.637 centimeters (6.55-inch) 90Hz fluid display with 2400 x 1080 pixels resolution, 402 ppi pixel density\r\n', 10, 11500, 2020, 'img-9191966.jpg', '1', '2020-07-11 18:30:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
