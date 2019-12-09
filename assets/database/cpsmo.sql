-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2018 at 04:36 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cpsmo`
--

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `dob` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`id`, `name`, `gender`, `address`, `dob`) VALUES
(1, 'Roger Pantil', 'male', '1343 Roxas Ext', '05/09/1994'),
(2, 'Gyuri Kim', 'female', 'Seoul ', '03/18/1993'),
(3, 'Avery Judicpa', 'male', 'Guam', '11/15/1995'),
(4, 'Naruto Uzumaki', 'male', 'Leaf villag', '05/05/1992'),
(5, 'Sakura blossom', 'female', 'Leaf Village', '01/19/1993');

-- --------------------------------------------------------

--
-- Table structure for table `wheelchair`
--

CREATE TABLE `wheelchair` (
  `id` int(11) NOT NULL,
  `person_id` varchar(255) NOT NULL,
  `disability` varchar(255) NOT NULL,
  `wheelchair` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wheelchair`
--

INSERT INTO `wheelchair` (`id`, `person_id`, `disability`, `wheelchair`) VALUES
(1, '2', 'retard', 'no'),
(2, '4', 'abnormal', 'yes');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wheelchair`
--
ALTER TABLE `wheelchair`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `wheelchair`
--
ALTER TABLE `wheelchair`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
