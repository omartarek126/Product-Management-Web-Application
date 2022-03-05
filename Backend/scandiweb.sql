-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2022 at 08:21 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scandiweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `sku` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `special` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`sku`, `type`, `name`, `price`, `special`) VALUES
('JA0120', 'Furniture', 'Couch1', 23.1, 'Dimension: 21x24x4'),
('JA0121', 'Book', 'Paper1', 21.3, 'Weight: 7KG'),
('JA0122', 'DVD', 'DISC1', 29.5, 'Size: 600 MB'),
('JA0123', 'Furniture', 'Couch2', 11.4, 'Dimension: 11x5x2'),
('JA0124', 'Book', 'Paper2', 24.8, 'Weight: 4KG'),
('JA0125', 'DVD', 'DISC2', 9.3, 'Size: 400 MB'),
('JA0126', 'Furniture', 'Couch3', 63.5, 'Dimension: 5x3x1'),
('JA0127', 'Book', 'Paper3', 93.4, 'Weight: 1KG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`sku`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
