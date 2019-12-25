-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 25, 2019 at 03:17 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.23

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
-- Table structure for table `bio-data_contact`
--

CREATE TABLE `bio-data_contact` (
  `id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `street_address` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `zip_code` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email_address` varchar(50) NOT NULL,
  `emergency_contact_first_name` varchar(50) NOT NULL,
  `emergency_contact_middle_name` varchar(50) NOT NULL,
  `emergency_contact_last_name` varchar(50) NOT NULL,
  `emergency_contact_address` varchar(50) NOT NULL,
  `emergencry_contact_phone` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `bio-data_education_background`
--

CREATE TABLE `bio-data_education_background` (
  `id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `elementary` varchar(50) NOT NULL,
  `elementary_year_graduated` varchar(50) NOT NULL,
  `high_school` varchar(50) NOT NULL,
  `high_school_year_graduated` varchar(50) NOT NULL,
  `college` varchar(50) NOT NULL,
  `college_year_graduated` varchar(50) NOT NULL,
  `degree_received` varchar(50) NOT NULL,
  `special_skills` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `bio-data_family`
--

CREATE TABLE `bio-data_family` (
  `id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `spouse_first_name` varchar(255) NOT NULL,
  `spouse_middle_name` varchar(255) NOT NULL,
  `spouse_last_name` varchar(255) NOT NULL,
  `father_first_name` varchar(50) NOT NULL,
  `father_middle_name` varchar(50) NOT NULL,
  `father_last_name` varchar(50) NOT NULL,
  `mother_first_name` varchar(50) NOT NULL,
  `mother_middle_name` varchar(50) NOT NULL,
  `mother_last_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `bio-data_personal`
--

CREATE TABLE `bio-data_personal` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `date_of_birth` date NOT NULL,
  `civil_status` varchar(50) NOT NULL,
  `height` varchar(50) NOT NULL,
  `religion` varchar(50) NOT NULL,
  `language` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `gender` varchar(6) NOT NULL,
  `place_of_birth` varchar(50) NOT NULL,
  `citizenship` varchar(50) NOT NULL,
  `weight` varchar(10) NOT NULL,
  `occupation` text NOT NULL,
  `ethnicity` varchar(50) NOT NULL,
  `race` varchar(50) NOT NULL,
  `pos` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bio-data_personal`
--

INSERT INTO `bio-data_personal` (`id`, `first_name`, `middle_name`, `last_name`, `date_of_birth`, `civil_status`, `height`, `religion`, `language`, `date`, `gender`, `place_of_birth`, `citizenship`, `weight`, `occupation`, `ethnicity`, `race`, `pos`) VALUES
(1, 'Roger', 'Cadungog', '', '0000-00-00', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', ''),
(2, 'Roger', 'Cadungog', '', '1994-05-09', 'Single', '5''11 in', 'Pokemon', 'Filipino', '2019-09-24', '', '', '', '75kg', '', 'filipino', '', 'Janitor'),
(3, 'Jake', 'B', '', '0000-00-00', 'Single', '5''11 in', 'Digimon', 'Filipino', '2019-09-24', '', '', '', '76', '', 'filipino', '', 'Tig Coffee'),
(4, 'sdaf', 'sdfaadsf', '', '0000-00-00', 'Single', '', '', '', '0000-00-00', '', '', '', '', '', 'filipino', '', ''),
(5, 'Harold', 'Noval', 'Laingo', '1998-01-10', 'Single', '50', 'Christian', 'Filipino', '2019-09-24', '', '', '', '50', '', 'filipino', '', '69 '),
(6, 'Harold', '', 'Digos City', '1998-01-10', 'Single', '50', 'Christian', 'Filipino', '2019-09-24', '', '', '', '50', '', 'filipino', '', '69 '),
(7, 'Harold', '', 'Digos City', '1998-01-10', 'Single', '50', 'Christian', 'Filipino', '2019-09-24', '', '', '', '50', '', 'filipino', '', '69 '),
(8, 'Harold', '', 'Digos City', '1998-01-10', 'Single', '50', 'Christian', 'Filipino', '2019-09-24', '', '', '', '50', '', 'filipino', '', '69 ');

-- --------------------------------------------------------

--
-- Table structure for table `bio-data_record`
--

CREATE TABLE `bio-data_record` (
  `id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `bio-data_reference`
--

CREATE TABLE `bio-data_reference` (
  `id` int(11) NOT NULL,
  `member_id` int(1) NOT NULL,
  `ref_first_name` varchar(50) NOT NULL,
  `ref_middle_name` varchar(50) NOT NULL,
  `ref_last_name` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `contact` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `bio_sample`
--

CREATE TABLE `bio_sample` (
  `bio_id` int(3) NOT NULL,
  `bio_name` varchar(100) NOT NULL,
  `bio_address` varchar(100) NOT NULL,
  `bio_gender` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bio_sample`
--

INSERT INTO `bio_sample` (`bio_id`, `bio_name`, `bio_address`, `bio_gender`) VALUES
(1, 'ssss', 'ssss', 'ssss'),
(2, 'aaaaa', 'aaaa', 'aaaa');

-- --------------------------------------------------------

--
-- Table structure for table `ci_sessions`
--

CREATE TABLE `ci_sessions` (
  `id` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timestamp` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `data` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ci_sessions`
--

INSERT INTO `ci_sessions` (`id`, `ip_address`, `timestamp`, `data`) VALUES
('ctf4bstrfc75j5liraap0846br7l8jnj', '127.0.0.1', 1570579685, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303537393638353b),
('q4f35edcbfio1qmoupkofgvg2ob91tss', '::1', 1570579695, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303537393639353b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353139303636223b6c6173745f636865636b7c693a313537303537393639353b),
('9gplp9bsfsvo8h3u813moutvgkvmr0kr', '::1', 1570580082, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538303038323b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353139303636223b6c6173745f636865636b7c693a313537303537393639353b),
('8h2cl94m6b7mgc59520sro3v26venmu2', '::1', 1570579724, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303537393732343b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739363935223b6c6173745f636865636b7c693a313537303537393732333b),
('c6spgn9spbaobmfiq3kl2qb1o3kpogns', '::1', 1570580042, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538303034323b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739363935223b6c6173745f636865636b7c693a313537303537393732333b),
('haera13har9fi4rfgojvmsqtd7pqtu5o', '::1', 1570580483, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538303438333b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739363935223b6c6173745f636865636b7c693a313537303537393732333b),
('d3j8vlh35v9am84s9qv952ul34vj9em1', '::1', 1570580591, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538303539313b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353139303636223b6c6173745f636865636b7c693a313537303537393639353b),
('9b8815ttm36rl8hv2sr0rku379pjqqpq', '::1', 1570584634, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538343633333b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739363935223b6c6173745f636865636b7c693a313537303537393732333b),
('eqahibsidbud7g62jshdmqvhtacif96v', '::1', 1570580974, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538303937343b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353139303636223b6c6173745f636865636b7c693a313537303537393639353b),
('sr7r8bphco4sbnq9iebtd1er7pgsrpsh', '::1', 1570581313, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538313331333b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353139303636223b6c6173745f636865636b7c693a313537303537393639353b),
('urg6b0quv2i4rjj9rj5q920ucmmcvnmd', '::1', 1570581619, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538313631393b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353139303636223b6c6173745f636865636b7c693a313537303537393639353b),
('24f76j6s9h5hon527rg9d3u93fkql7h7', '::1', 1570582036, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538323033363b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353139303636223b6c6173745f636865636b7c693a313537303537393639353b),
('j1j0r83vvt72ca8is02992qg7sq6e9kl', '::1', 1570582574, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538323537343b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353139303636223b6c6173745f636865636b7c693a313537303537393639353b),
('45nn66hos2j3rp9r7ibhsimk52jur1d0', '::1', 1570582911, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538323931313b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353139303636223b6c6173745f636865636b7c693a313537303537393639353b),
('btlblei382ffnvm0i3b1jh8iesmjbr7u', '::1', 1570583249, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538333234393b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353139303636223b6c6173745f636865636b7c693a313537303537393639353b),
('a4aof1v100tocpdmohk55j59mpoh7amr', '::1', 1570583600, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538333630303b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353139303636223b6c6173745f636865636b7c693a313537303537393639353b),
('ctt7o3eq094m7bo40j0fdkqs8m2fvs81', '::1', 1570583611, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538333630303b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353139303636223b6c6173745f636865636b7c693a313537303537393639353b),
('9ukevp3s5lq390cmepr0i6ub0otpmqdv', '::1', 1570583671, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538333637313b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739373233223b6c6173745f636865636b7c693a313537303538333637313b),
('o5hbut1q6hg7tpvsm0bnte5s7crava3s', '::1', 1570584099, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538343039393b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739373233223b6c6173745f636865636b7c693a313537303538333637313b),
('a6n0l3l1pm4lv94jmp6nc2mhrmf4u6db', '::1', 1570584429, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538343432393b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739373233223b6c6173745f636865636b7c693a313537303538333637313b),
('54jd732cs5p8qtiuvnno12m9abpk00em', '::1', 1570585361, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538353336313b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739373233223b6c6173745f636865636b7c693a313537303538333637313b),
('3mm3mf11ltar8mrthf3vrk34v6c6o3r4', '::1', 1570587164, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538373136343b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739363935223b6c6173745f636865636b7c693a313537303537393732333b),
('g6eqtog8043u5j07l4043dj75dn25v7s', '::1', 1570585682, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538353638323b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739373233223b6c6173745f636865636b7c693a313537303538333637313b),
('o0i1g2dvdj22qaa3h3mqfviip599jbja', '::1', 1570586036, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538363033363b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739373233223b6c6173745f636865636b7c693a313537303538333637313b),
('klhldve3opdn4n53i3usm84a03uog6js', '::1', 1570586487, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538363438373b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739373233223b6c6173745f636865636b7c693a313537303538333637313b),
('0t1etq0m18k6cl590dh9quq6re1upiqs', '::1', 1570586823, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538363832333b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739373233223b6c6173745f636865636b7c693a313537303538333637313b),
('9oias9igedl6mrkfpa23uv3vu3qpoq8h', '::1', 1570587205, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538373230353b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739373233223b6c6173745f636865636b7c693a313537303538333637313b),
('r98r2vjk1qa8osgqfdi0ileabknn72ee', '::1', 1570587643, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538373634333b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739363935223b6c6173745f636865636b7c693a313537303537393732333b),
('rero00bi79hqc3ve3iklvu0dotqbiokr', '::1', 1570587547, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538373534373b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739373233223b6c6173745f636865636b7c693a313537303538333637313b),
('jol6eusm677vebl63tvkavh77lsgmh96', '::1', 1570587646, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538373534373b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739373233223b6c6173745f636865636b7c693a313537303538333637313b),
('44p4rn1kpr5424g66g0iu4cg7tqk0jiu', '::1', 1570587644, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537303538373634333b6964656e746974797c733a353a2261646d696e223b757365726e616d657c733a353a2261646d696e223b656d61696c7c733a31373a2261646d696e4061646d696e2e61646d696e223b757365725f69647c733a323a223433223b6f6c645f6c6173745f6c6f67696e7c733a31303a2231353730353739363935223b6c6173745f636865636b7c693a313537303537393732333b),
('irilkq7er6f3s768pm2f425229nh86u1', '::1', 1571160708, 0x5f5f63695f6c6173745f726567656e65726174657c693a313537313136303730383b);

-- --------------------------------------------------------

--
-- Table structure for table `disability_assist`
--

CREATE TABLE `disability_assist` (
  `assist_id` int(11) NOT NULL,
  `person_id` int(11) NOT NULL,
  `assist_name` varchar(255) NOT NULL,
  `assist_date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `disability_cause`
--

CREATE TABLE `disability_cause` (
  `cause_id` int(11) NOT NULL,
  `cause_desc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `disability_cause`
--

INSERT INTO `disability_cause` (`cause_id`, `cause_desc`) VALUES
(1, 'Cognition/inbord'),
(2, 'Illness'),
(3, 'Injury');

-- --------------------------------------------------------

--
-- Table structure for table `disability_list`
--

CREATE TABLE `disability_list` (
  `person_id` int(11) NOT NULL,
  `date_issued` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `disability_list`
--

INSERT INTO `disability_list` (`person_id`, `date_issued`) VALUES
(1, '11-10-2019'),
(2, '11-14-2019'),
(5, '11-17-2019');

-- --------------------------------------------------------

--
-- Table structure for table `disability_person_cause`
--

CREATE TABLE `disability_person_cause` (
  `person_id` int(11) NOT NULL,
  `disability_cause` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `disability_person_cause`
--

INSERT INTO `disability_person_cause` (`person_id`, `disability_cause`) VALUES
(1, 1),
(2, 2),
(2, 3),
(5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `disability_person_type`
--

CREATE TABLE `disability_person_type` (
  `person_id` int(11) NOT NULL,
  `disability_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `disability_person_type`
--

INSERT INTO `disability_person_type` (`person_id`, `disability_type`) VALUES
(1, 1),
(2, 2),
(2, 3),
(2, 5),
(2, 8),
(2, 9),
(5, 1),
(5, 3),
(5, 7);

-- --------------------------------------------------------

--
-- Table structure for table `disability_type`
--

CREATE TABLE `disability_type` (
  `type_id` int(11) NOT NULL,
  `type_desc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `disability_type`
--

INSERT INTO `disability_type` (`type_id`, `type_desc`) VALUES
(1, 'Psychosocial Disability'),
(2, 'Disability Due to Chronic Illness'),
(3, 'Learning Disability'),
(4, 'Mental/Intellectual'),
(5, 'Visual Disabilty'),
(6, 'Orthopedic (Musculoskeletal) Disabilty'),
(7, 'Hearing/Disability'),
(8, 'Speech Impairment'),
(9, 'Multiple Disabilities');

-- --------------------------------------------------------

--
-- Table structure for table `educ_applicants`
--

CREATE TABLE `educ_applicants` (
  `auto_id` int(3) NOT NULL,
  `bio_id` int(3) NOT NULL,
  `bio_name` varchar(100) NOT NULL,
  `bio_address` varchar(100) NOT NULL,
  `bio_gender` varchar(100) NOT NULL,
  `img_grade` varchar(100) NOT NULL,
  `img_cert_indigency` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`, `description`) VALUES
(1, 'admin', 'Administrator'),
(20, 'member', 'General User'),
(24, 'encoder', 'Staffs That Encodes PDS'),
(0, 'developer', 'Develop Websites');

-- --------------------------------------------------------

--
-- Table structure for table `login_attempts`
--

CREATE TABLE `login_attempts` (
  `id` int(11) UNSIGNED NOT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `login` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time` int(11) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `login_attempts`
--

INSERT INTO `login_attempts` (`id`, `ip_address`, `login`, `time`) VALUES
(1, '127.0.0.1', 'asdasd', 1563614822),
(2, '127.0.0.1', 'asdasd', 1563614823),
(3, '127.0.0.1', 'asdasd', 1563614824),
(4, '127.0.0.1', 'admin', 1563614827),
(5, '127.0.0.1', 'admin', 1563614831),
(6, '127.0.0.1', 'joowdx', 1563614835),
(7, '127.0.0.1', 'joowdx@pm.me', 1563614841),
(8, '127.0.0.1', 'joowdx@pm.me', 1563614842),
(9, '127.0.0.1', 'joowdx@pm.me', 1563614842),
(10, '127.0.0.1', 'admin', 1563614939);

-- --------------------------------------------------------

--
-- Table structure for table `notify`
--

CREATE TABLE `notify` (
  `PK_NotifyId` int(11) NOT NULL,
  `NotifyDateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `NotifyMessage` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NotifyAction` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NotifyType` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NotifyData` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notifyuser`
--

CREATE TABLE `notifyuser` (
  `PK_NotifyUserId` int(11) NOT NULL,
  `FK_NotifyId` int(11) DEFAULT NULL,
  `FK_UserId` int(11) DEFAULT NULL,
  `Dismissed` tinyint(1) NOT NULL DEFAULT '0',
  `DismissedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pds_children`
--

CREATE TABLE `pds_children` (
  `id` int(11) NOT NULL,
  `pds_personal_id` varchar(255) NOT NULL,
  `child_fname` varchar(255) NOT NULL,
  `child_mname` varchar(255) NOT NULL,
  `child_lname` varchar(255) NOT NULL,
  `child_date_birth` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pds_educational_background`
--

CREATE TABLE `pds_educational_background` (
  `id` int(11) NOT NULL,
  `pds_personal_id` varchar(255) NOT NULL,
  `level` varchar(255) NOT NULL,
  `school_name` varchar(255) NOT NULL,
  `basic_education` varchar(255) NOT NULL,
  `date_from` varchar(255) NOT NULL,
  `date_to` varchar(255) NOT NULL,
  `highest_level_earned` varchar(255) NOT NULL,
  `year_graduated` varchar(255) NOT NULL,
  `scholarship` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pds_family_background`
--

CREATE TABLE `pds_family_background` (
  `id` int(11) NOT NULL,
  `pds_personal_id` varchar(255) NOT NULL,
  `spouse_fname` varchar(255) NOT NULL,
  `spouse_mname` varchar(255) NOT NULL,
  `spouse_lname` varchar(255) NOT NULL,
  `spouse_ext` varchar(255) NOT NULL,
  `spouse_occupation` varchar(255) NOT NULL,
  `employer_or_business_name` varchar(255) NOT NULL,
  `business_address` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `father_fname` varchar(255) NOT NULL,
  `father_mname` varchar(255) NOT NULL,
  `father_lname` varchar(255) NOT NULL,
  `mother_fname` varchar(255) NOT NULL,
  `mother_mname` varchar(255) NOT NULL,
  `mother_lname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pds_family_background`
--

INSERT INTO `pds_family_background` (`id`, `pds_personal_id`, `spouse_fname`, `spouse_mname`, `spouse_lname`, `spouse_ext`, `spouse_occupation`, `employer_or_business_name`, `business_address`, `telephone`, `father_fname`, `father_mname`, `father_lname`, `mother_fname`, `mother_mname`, `mother_lname`) VALUES
(1, '1', 'Gyuri', 'Kim', '', '', 'Janitor', 'Tacobell', 'tacobell st.', '09193952213', 'Jake', '', 'Aboyot', 'Rosemarie', '', 'Solatorio');

-- --------------------------------------------------------

--
-- Table structure for table `pds_personal`
--

CREATE TABLE `pds_personal` (
  `id` int(11) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) NOT NULL,
  `name_ext` varchar(255) NOT NULL,
  `date_of_birth` varchar(255) NOT NULL,
  `place_of_birth` varchar(255) NOT NULL,
  `sex` varchar(255) NOT NULL,
  `civil_status` varchar(255) NOT NULL,
  `height` varchar(255) NOT NULL,
  `weight` varchar(255) NOT NULL,
  `blood_type` varchar(255) NOT NULL,
  `gsis_id` varchar(255) NOT NULL,
  `pag_ibig_id` varchar(255) NOT NULL,
  `phil_health_id` varchar(255) NOT NULL,
  `sss_id` varchar(255) NOT NULL,
  `tin_id` varchar(255) NOT NULL,
  `agency_employee_id` varchar(255) NOT NULL,
  `citizenship` varchar(255) NOT NULL,
  `if_dual` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `res_house` varchar(255) NOT NULL,
  `res_street` varchar(255) NOT NULL,
  `res_subdivision` varchar(255) NOT NULL,
  `res_barangay` varchar(255) NOT NULL,
  `res_city` varchar(255) NOT NULL,
  `res_province` varchar(255) NOT NULL,
  `perm_house` varchar(255) NOT NULL,
  `perm_street` varchar(255) NOT NULL,
  `perm_subdivision` varchar(255) NOT NULL,
  `perm_barangay` varchar(255) NOT NULL,
  `perm_city` varchar(255) NOT NULL,
  `perm_province` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `email_adrress` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pds_personal`
--

INSERT INTO `pds_personal` (`id`, `surname`, `first_name`, `middle_name`, `name_ext`, `date_of_birth`, `place_of_birth`, `sex`, `civil_status`, `height`, `weight`, `blood_type`, `gsis_id`, `pag_ibig_id`, `phil_health_id`, `sss_id`, `tin_id`, `agency_employee_id`, `citizenship`, `if_dual`, `country`, `res_house`, `res_street`, `res_subdivision`, `res_barangay`, `res_city`, `res_province`, `perm_house`, `perm_street`, `perm_subdivision`, `perm_barangay`, `perm_city`, `perm_province`, `telephone`, `mobile`, `email_adrress`) VALUES
(2, 'Gyuri', 'Kim', 'Kimberly', '', '10/02/1994', 'Digos City', 'male', 'Single', '5''11\r\n\r\n', '77', 'A', '110', '210', '351', '3451', '124', '1948', 'American', 'Yes', 'United States', '1343', 'Roxas Ext', '', 'Barangay Zone 3', 'Digos City', 'Davao Del Sur', '', '', '', '', '', '', '5555555555', '09193952213', 'rogerpantilyow@gmail.com'),
(3, 'Harold', 'Kumar', '', '', '10/02/1994', 'Digos City', 'male', 'Single', '5''11\r\n\r\n', '77', 'A', '110', '210', '351', '3451', '124', '1948', 'American', 'Yes', 'United States', '1343', 'Roxas Ext', '', 'Barangay Zone 3', 'Digos City', 'Davao Del Sur', '', '', '', '', '', '', '5555555555', '09193952213', 'rogerpantilyow@gmail.com'),
(4, 'Avery', 'Judicpa', '', '', '10/02/1994', 'Digos City', 'male', 'Single', '5''11\r\n\r\n', '77', 'A', '110', '210', '351', '3451', '124', '1948', 'American', 'Yes', 'United States', '1343', 'Roxas Ext', '', 'Barangay Zone 3', 'Digos City', 'Davao Del Sur', '', '', '', '', '', '', '5555555555', '09193952213', 'rogerpantilyow@gmail.com'),
(5, 'Uzumaki', 'Naruto', 'Cool', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(6, 'ghgfhfgh', 'fgh', 'sdfsdf', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(7, 'Sasuke', 'Uchiha', 'Killa', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(8, 'sdd', 'sdssd', 'd', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(9, 'Burotoa', 'Uzumakic', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(13, 'looop', 'yvv', 'tfygv', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(14, 'aaaasss', 'aaa', 'aaa', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(15, 'safgdhdh', 'dfgdgdfh', 'jdhdfhdfhdfhdh', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(16, 'Uzumaki', 'Naruto', 'hi', '', '10/09/1998', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(17, 'aa', 'bb', 'cc', '', '10/09/2019', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(18, 'xxxx', 'xxxx', 'xxxx', '', '10/10/2019', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(19, 'asdasfhi', 'asfafasf', 'asasfasf', '', '', 'asfasfassfasfasf', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(20, 'y', 'u', 'do', '', '10/10/2019', 'this', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(21, 'y', 'y', 'y', '', '10/07/2019', 'y', 'female', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(22, 'x', 'x', 'x', '', '10/15/2019', 'x', 'female', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(23, 'a', 'a', 'a', '', '10/18/2019', 'asdasd', 'male', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(24, 'b', 'b', 'b', '', '10/15/2019', 'b', 'male', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(25, 'qwer', 'qwe', 'qwe', '', '10/08/2019', 'qweqweqwe', 'male', 'Windowed', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(26, 'asdagasdads', 'asdgasdasd', 'asdasdasdasd', '', '10/08/2019', 'asasfagd', 'male', 'seperated', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `permission_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `dob` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`id`, `name`, `gender`, `address`, `dob`) VALUES
(1, 'Roger Pantil', 'male', '1343 Roxas Ext', '1994-05-09'),
(2, 'Gyuri Kim', 'female', 'Seoul ', '2018-11-20'),
(3, 'Avery Judicpa', 'male', 'Guam', '0000-00-00'),
(4, 'Naruto Uzumaki', 'male', 'Leaf villag', '0000-00-00'),
(5, 'Sakura blossom', 'female', 'Leaf Village', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `profiling_household_character`
--

CREATE TABLE `profiling_household_character` (
  `id` int(11) NOT NULL,
  `HC_identification_number` int(11) NOT NULL,
  `number_overseas` int(11) NOT NULL DEFAULT '0',
  `number_nuclear_families` int(11) NOT NULL DEFAULT '0',
  `has_disabled` int(11) NOT NULL DEFAULT '0',
  `has_pregnant` int(11) NOT NULL DEFAULT '0',
  `has_solo_parent` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profiling_household_character`
--

INSERT INTO `profiling_household_character` (`id`, `HC_identification_number`, `number_overseas`, `number_nuclear_families`, `has_disabled`, `has_pregnant`, `has_solo_parent`) VALUES
(2, 15, 0, 0, 0, 0, 0),
(3, 16, 0, 0, 0, 0, 0),
(4, 17, 0, 0, 0, 0, 0),
(5, 18, 0, 0, 0, 0, 0),
(6, 19, 0, 0, 0, 0, 0),
(7, 20, 0, 0, 3, 0, 2),
(8, 21, 0, 0, 0, 0, 0),
(9, 22, 0, 0, 0, 0, 0),
(10, 23, 0, 0, 0, 0, 0),
(11, 26, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `profiling_housing_character`
--

CREATE TABLE `profiling_housing_character` (
  `id` int(11) NOT NULL,
  `identification_number` int(11) NOT NULL,
  `type_building` int(11) NOT NULL DEFAULT '0',
  `bedrooms_number` int(11) NOT NULL DEFAULT '0',
  `type_construction_roof` int(11) NOT NULL DEFAULT '0',
  `type_construction_outerwalls` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profiling_housing_character`
--

INSERT INTO `profiling_housing_character` (`id`, `identification_number`, `type_building`, `bedrooms_number`, `type_construction_roof`, `type_construction_outerwalls`) VALUES
(7, 14, 0, 0, 6, 6),
(8, 15, 0, 0, 6, 6),
(9, 16, 0, 0, 6, 6),
(10, 17, 0, 0, 6, 6),
(11, 18, 0, 0, 6, 6),
(12, 19, 0, 0, 6, 6),
(13, 20, 0, 0, 6, 6),
(14, 21, 0, 0, 6, 6),
(15, 22, 0, 0, 6, 6),
(16, 23, 0, 0, 6, 6),
(17, 26, 0, 0, 6, 6);

-- --------------------------------------------------------

--
-- Table structure for table `profiling_identification`
--

CREATE TABLE `profiling_identification` (
  `id` int(11) NOT NULL,
  `province` varchar(45) NOT NULL,
  `city_municipality` varchar(45) NOT NULL,
  `zone` varchar(45) NOT NULL,
  `barangay` varchar(45) NOT NULL,
  `purok_sitio` varchar(45) NOT NULL,
  `house_number` int(11) NOT NULL,
  `street` varchar(45) NOT NULL,
  `respondent_name` varchar(45) NOT NULL,
  `time_start` time NOT NULL,
  `time_end` time NOT NULL,
  `latitude` varchar(45) NOT NULL,
  `longtitude` varchar(45) NOT NULL,
  `date_interview` datetime NOT NULL,
  `household_number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profiling_identification`
--

INSERT INTO `profiling_identification` (`id`, `province`, `city_municipality`, `zone`, `barangay`, `purok_sitio`, `house_number`, `street`, `respondent_name`, `time_start`, `time_end`, `latitude`, `longtitude`, `date_interview`, `household_number`) VALUES
(14, 'davao', '', '', '', '', 0, '', 'Waseem Brennan', '02:10:18', '00:00:00', '', '', '2019-10-16 02:25:18', 0),
(15, 'davao', '', '', '', '', 0, '', 'Lyndsey Wilkes', '02:10:37', '00:00:00', '', '', '2019-10-16 02:25:38', 45545454),
(16, '', '', '', '', '', 0, '', 'Pierre Parsons', '02:10:02', '00:00:00', '', '', '2019-10-16 02:29:03', 0),
(17, 'davao', '', '', '', '', 0, '', 'Chantal Howe', '02:10:16', '00:00:00', '', '', '2019-10-16 02:35:18', 0),
(18, 'davao', '', '', '', '', 0, '', 'Beau Leigh', '02:10:42', '00:00:00', '', '', '2019-10-16 02:35:43', 0),
(19, 'davao', '', '', '', '', 0, '', 'Tobias Bautista', '02:10:57', '00:00:00', '', '', '2019-10-16 02:35:58', 0),
(20, '', '', '', '', '', 0, '', 'Bobbi Aguirre', '05:10:08', '00:00:00', '', '', '2019-10-16 05:45:09', 0),
(21, '', '', '', '', '', 0, '', 'Ernest Frame', '12:10:24', '00:00:00', '', '', '2019-10-16 12:28:24', 0),
(22, '', '', '', '', '', 0, '', 'Colette Guevara', '10:10:39', '00:00:00', '', '', '2019-10-18 10:10:39', 0),
(23, '', '', '', '', '', 0, '', 'Ridwan Major', '07:10:10', '00:00:00', '', '', '2019-10-20 07:07:11', 0),
(24, '', '', '', '', '', 0, '', 'Saoirse Cullen', '00:00:00', '00:00:00', '', '', '0000-00-00 00:00:00', 0),
(25, '', '', '', '', '', 0, '', 'Ritik Worthington', '00:00:00', '00:00:00', '', '', '0000-00-00 00:00:00', 0),
(26, '', '', '', '', '', 0, '', 'Rabia Schofield', '09:10:01', '00:00:00', '', '', '2019-10-21 09:42:01', 0),
(27, '', '', '', '', '', 0, '', 'Angelika Blaese', '00:00:00', '00:00:00', '', '', '0000-00-00 00:00:00', 0),
(28, 'fdf', '', '', '', '', 0, '', 'Casper Rodgers', '00:00:00', '00:00:00', '', '', '0000-00-00 00:00:00', 0),
(29, '', '', '', '', '', 0, '', 'Mollie Long', '00:00:00', '00:00:00', '', '', '0000-00-00 00:00:00', 0),
(30, '', '', '', '', '', 0, '', 'Milton Cameron', '00:00:00', '00:00:00', '', '', '0000-00-00 00:00:00', 0),
(31, '', '', '', '', '', 0, '', 'Tasha Bate', '00:00:00', '00:00:00', '', '', '0000-00-00 00:00:00', 0),
(32, '', '', '', '', '', 0, '', 'Pranav Cook', '00:00:00', '00:00:00', '', '', '0000-00-00 00:00:00', 0),
(33, '', '', '', '', '', 0, '', 'Macsen Farrow', '00:00:00', '00:00:00', '', '', '0000-00-00 00:00:00', 0),
(34, '', '', '', '', '', 0, '', 'Rocco Hyde', '00:00:00', '00:00:00', '', '', '0000-00-00 00:00:00', 0),
(35, '', '', '', '', '', 0, '', 'Xavier Prince', '00:00:00', '00:00:00', '', '', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `refbrgy`
--

CREATE TABLE `refbrgy` (
  `id` int(11) NOT NULL,
  `brgyCode` varchar(255) DEFAULT NULL,
  `brgyDesc` text,
  `regCode` varchar(255) DEFAULT NULL,
  `provCode` varchar(255) DEFAULT NULL,
  `citymunCode` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `refcitymun`
--

CREATE TABLE `refcitymun` (
  `id` int(255) NOT NULL,
  `psgcCode` varchar(255) DEFAULT NULL,
  `citymunDesc` text,
  `regDesc` varchar(255) DEFAULT NULL,
  `provCode` varchar(255) DEFAULT NULL,
  `citymunCode` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `refprovince`
--

CREATE TABLE `refprovince` (
  `id` int(11) NOT NULL,
  `psgcCode` varchar(255) DEFAULT NULL,
  `provDesc` text,
  `regCode` varchar(255) DEFAULT NULL,
  `provCode` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `refregion`
--

CREATE TABLE `refregion` (
  `id` int(11) NOT NULL,
  `psgcCode` varchar(255) DEFAULT NULL,
  `regDesc` text,
  `regCode` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role_name`) VALUES
(1, 'admin'),
(2, 'cashier'),
(3, 'manager'),
(4, 'tenant');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `setting_id` int(11) NOT NULL,
  `set_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `set_val` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `set_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`setting_id`, `set_name`, `set_val`, `set_type`) VALUES
(1, 'short_date_format', 'm/d/y', 'text'),
(2, 'long_date_format', 'M j, Y', 'text'),
(3, 'logo_file', 'templogo.png', 'text'),
(4, 'company_name', 'Online Keygen', 'text'),
(5, 'company_address', 'Digos City, Davao del Sur', 'textarea'),
(6, 'company_contact', '', 'text'),
(7, 'disp_page', '10', 'text'),
(8, 'peak_mem_limit', '24', 'text');

-- --------------------------------------------------------

--
-- Table structure for table `social_services_requirements_table`
--

CREATE TABLE `social_services_requirements_table` (
  `id` int(11) NOT NULL,
  `social_service_id` int(11) NOT NULL,
  `indigency_cert` varchar(255) NOT NULL,
  `billing_statement` varchar(255) DEFAULT NULL,
  `prescription` varchar(255) DEFAULT NULL,
  `valid_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `userlog`
--

CREATE TABLE `userlog` (
  `userid` int(10) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `userlog`
--

INSERT INTO `userlog` (`userid`, `username`, `password`, `user_type`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 1),
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(254) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activation_selector` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activation_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `forgotten_password_selector` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `forgotten_password_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `forgotten_password_time` int(11) UNSIGNED DEFAULT NULL,
  `remember_selector` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_on` int(11) UNSIGNED NOT NULL,
  `last_login` int(11) UNSIGNED DEFAULT NULL,
  `active` tinyint(1) UNSIGNED DEFAULT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `ip_address`, `username`, `password`, `email`, `activation_selector`, `activation_code`, `forgotten_password_selector`, `forgotten_password_code`, `forgotten_password_time`, `remember_selector`, `remember_code`, `created_on`, `last_login`, `active`, `first_name`, `last_name`, `company`, `phone`) VALUES
(43, '127.0.0.1', 'admin', '$2y$10$lpFAEOKLxPPeSCQ1bMMuNOSm9RRx7brS4daITXOKw.rQugwNmcKgO', 'admin@admin.admin', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1563625675, 1570583671, 1, 'Admin', 'Admin', NULL, NULL),
(89, '::1', 'herlyann', '$2y$10$xTRxfd6gFctcbdPtgzG2UuWbJV5Z7S5tbimh93vqNGCSD.p0txlz2', 'ahnne.anne@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1566945662, NULL, 1, 'Herly Ann', 'Lantoy', NULL, NULL),
(90, '::1', 'angel', '$2y$10$TwECAR1PBJHUZJukAHVuf.V7ftamjKCL2mIzF72T.Ww21uoHc5qZW', 'angel04@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1566945725, NULL, 1, 'Angel Anne Camille', 'Feniquito', NULL, NULL),
(91, '::1', 'nemesio', '$2y$10$TPSQAtfOiy2HPd.nopK2mOT3J7BnuBLpkQgmiFVo7V6SzTHgIqZFe', 'legaspinemesionzola@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1566945792, NULL, 1, 'Nemesio Jr', 'Legaspi', NULL, NULL),
(92, '::1', 'izzy', '$2y$10$NOD4AKussRzE/5iLfOy2O.5QWha.b6hmY.8Vr06ejbPSFWWsGIM5O', 'izzymayanticamara@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1566945899, 1567200886, 1, 'Izzy May', 'Anticamara', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users_groups`
--

CREATE TABLE `users_groups` (
  `id` int(11) UNSIGNED NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL,
  `group_id` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users_groups`
--

INSERT INTO `users_groups` (`id`, `user_id`, `group_id`) VALUES
(100, 43, 1),
(129, 89, 24),
(130, 90, 24),
(131, 91, 24),
(132, 92, 24);

-- --------------------------------------------------------

--
-- Table structure for table `user_type`
--

CREATE TABLE `user_type` (
  `usertype_id` int(11) NOT NULL,
  `usertype_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_disability_list`
--
CREATE TABLE `vw_disability_list` (
`id` int(11)
,`name` varchar(255)
);

-- --------------------------------------------------------

--
-- Table structure for table `wheelchair`
--

CREATE TABLE `wheelchair` (
  `id` int(11) NOT NULL,
  `person_id` varchar(255) NOT NULL,
  `disability_type` varchar(255) NOT NULL,
  `disability_cause` varchar(255) NOT NULL,
  `date_issued` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wheelchair`
--

INSERT INTO `wheelchair` (`id`, `person_id`, `disability_type`, `disability_cause`, `date_issued`) VALUES
(10, '1', '1, 2, 4, 5, 6, 8', '1, 3', '11-10-2019'),
(12, '4', '2, 3, 5, 6, 9', '1, 2', '11-10-2019');

-- --------------------------------------------------------

--
-- Structure for view `vw_disability_list`
--
DROP TABLE IF EXISTS `vw_disability_list`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_disability_list`  AS  select `profile`.`id` AS `id`,`profile`.`name` AS `name` from (`disability_list` join `profile`) where (`disability_list`.`person_id` = `profile`.`id`) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `disability_assist`
--
ALTER TABLE `disability_assist`
  ADD PRIMARY KEY (`assist_id`);

--
-- Indexes for table `disability_cause`
--
ALTER TABLE `disability_cause`
  ADD PRIMARY KEY (`cause_id`);

--
-- Indexes for table `disability_type`
--
ALTER TABLE `disability_type`
  ADD PRIMARY KEY (`type_id`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profiling_household_character`
--
ALTER TABLE `profiling_household_character`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profiling_housing_character`
--
ALTER TABLE `profiling_housing_character`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profiling_identification`
--
ALTER TABLE `profiling_identification`
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
-- AUTO_INCREMENT for table `disability_assist`
--
ALTER TABLE `disability_assist`
  MODIFY `assist_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `disability_cause`
--
ALTER TABLE `disability_cause`
  MODIFY `cause_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `disability_type`
--
ALTER TABLE `disability_type`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `profiling_household_character`
--
ALTER TABLE `profiling_household_character`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `profiling_housing_character`
--
ALTER TABLE `profiling_housing_character`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `profiling_identification`
--
ALTER TABLE `profiling_identification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT for table `wheelchair`
--
ALTER TABLE `wheelchair`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
