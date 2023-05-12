-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 09, 2023 at 07:39 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rocketship`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_hero`
--

CREATE TABLE `about_hero` (
  `heroId` int(11) NOT NULL,
  `image` longtext DEFAULT NULL,
  `title` varchar(4000) DEFAULT NULL,
  `subtitle` varchar(4000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about_hero`
--

INSERT INTO `about_hero` (`heroId`, `image`, `title`, `subtitle`) VALUES
(1, 'https://res.cloudinary.com/dojyelgiz/image/upload/v1676806568/my-uploads/j0s1wpwijiqtuflizz4a.jpg', 'RocketShip is a premier college admission company for Bangladeshi Students.', 'All of our consultants have successfully attended a university in United States. We will work relentlessly to help you achieve you dream. Our Mission is to equip Bangladeshi students with right resources and be right beside them to get admission to their dream school.');

-- --------------------------------------------------------

--
-- Table structure for table `about_seo`
--

CREATE TABLE `about_seo` (
  `seoId` int(11) NOT NULL,
  `title` varchar(2000) NOT NULL,
  `description` varchar(4000) NOT NULL,
  `keywords` varchar(2000) DEFAULT NULL,
  `facebookApp` varchar(1000) DEFAULT NULL,
  `image` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about_seo`
--

INSERT INTO `about_seo` (`seoId`, `title`, `description`, `keywords`, `facebookApp`, `image`) VALUES
(1, 'About Us', 'We are the best in this service', 'about us', 'about us facebook', 'https://res.cloudinary.com/dojyelgiz/image/upload/v1674828099/my-uploads/qqck5atxtfhccdl9k1el.png');

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `blogId` int(11) NOT NULL,
  `title` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `permalink` varchar(1000) DEFAULT NULL,
  `keywords` varchar(2000) DEFAULT NULL,
  `seoDescription` varchar(4000) DEFAULT NULL,
  `img` longtext DEFAULT NULL,
  `date` date DEFAULT NULL,
  `isPublished` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`blogId`, `title`, `description`, `permalink`, `keywords`, `seoDescription`, `img`, `date`, `isPublished`) VALUES
(72, 'Add New Blog for my school', '<h2><strong>Add New Blog</strong></h2>', 'Add-New-Blog-for-my-school', 'Add New Blog', 'Add New Blog', 'https://res.cloudinary.com/dojyelgiz/image/upload/v1674887501/my-uploads/core0m0ndobheb8sgdrq.jpg', '2023-01-28', 1),
(76, 'Add New Blog Add New Blog', '<h2><strong>Add New Blog</strong></h2><p><br><strong>Add New Blog</strong></p><p><br><strong>Add New Blog</strong></p><p><br><strong>Add New Blog</strong></p><p><br><strong>Add New Blog</strong></p><p><br>&nbsp;</p>', 'sadfsjh-sdhsdafh-sahfsakdh-safhskadhf', 'Add New Blog', 'Add New Blog', 'https://res.cloudinary.com/dojyelgiz/image/upload/v1674896357/my-uploads/iktzhkdfrgsdjaokbr4r.png', '2023-01-28', 1);

-- --------------------------------------------------------

--
-- Table structure for table `consult`
--

CREATE TABLE `consult` (
  `consultId` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `consultdate` datetime DEFAULT NULL,
  `consulttime` time DEFAULT NULL,
  `details` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `consult`
--

INSERT INTO `consult` (`consultId`, `firstname`, `lastname`, `email`, `phone`, `consultdate`, `consulttime`, `details`) VALUES
(29, 'Kaushik', 'Baidya', 'kdiganto@gmail.com', '01624767207', '2023-01-26 00:00:00', '22:30:00', 'hello test'),
(30, 'Kaushik', 'Baidya', 'kdiganto@gmail.com', '01624767207', '2023-02-02 00:00:00', '12:30:00', 'If you have anything to say...'),
(31, 'Kaushik', 'Baidya', 'kdiganto@gmail.com', '01624767207', '2023-01-30 00:00:00', '17:00:00', 'hkhkljl'),
(32, 'Jhina', 'Hij', 'sadghs@gmail.com', '01624767207', '2023-02-02 00:00:00', '10:30:00', 'This is a test email. Please Ignore this.');

-- --------------------------------------------------------

--
-- Table structure for table `home_hero`
--

CREATE TABLE `home_hero` (
  `heroId` int(11) NOT NULL,
  `image` longtext DEFAULT NULL,
  `title` varchar(4000) DEFAULT NULL,
  `subtitle` varchar(4000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `home_hero`
--

INSERT INTO `home_hero` (`heroId`, `image`, `title`, `subtitle`) VALUES
(1, 'https://res.cloudinary.com/dojyelgiz/image/upload/v1676111850/my-uploads/rwyvvdzujegvs3mrdebe.png', 'Helping you through College Admissions in United States', 'Rocketship Education is a premier college admission guidance organization. We help talented Bangladeshi students attain higher education in United States of America');

-- --------------------------------------------------------

--
-- Table structure for table `home_seo`
--

CREATE TABLE `home_seo` (
  `seoId` int(11) NOT NULL,
  `title` varchar(2000) NOT NULL,
  `description` varchar(4000) NOT NULL,
  `keywords` varchar(2000) DEFAULT NULL,
  `facebookApp` varchar(1000) DEFAULT NULL,
  `googleId` varchar(50) NOT NULL,
  `image` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `home_seo`
--

INSERT INTO `home_seo` (`seoId`, `title`, `description`, `keywords`, `facebookApp`, `googleId`, `image`) VALUES
(1, 'Home', 'Helping you through College Admissions in United States', 'students, study, USA,', '106650162350664', 'G-M3WGPS24EN', 'https://res.cloudinary.com/dojyelgiz/image/upload/v1674820868/my-uploads/egzl5ocgqghrqj1ackun.png');

-- --------------------------------------------------------

--
-- Table structure for table `home_visa`
--

CREATE TABLE `home_visa` (
  `visaId` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `subtitle` varchar(500) NOT NULL,
  `subtitle2` varchar(500) NOT NULL,
  `image` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `home_visa`
--

INSERT INTO `home_visa` (`visaId`, `title`, `subtitle`, `subtitle2`, `image`) VALUES
(1, 'Are you looking forward to staying in the US ?? Don\'t worry. We will help you land the visa without any problem.', 'Our visa program offers personalized and one-to-one guidance to help you get the US visa easily. You will be pleased to know that we collaborate directly with a renowned agency to help Bangladeshi students get the US visa.', 'Our visa program attendees have successfully acquired the US visa.', 'https://res.cloudinary.com/dojyelgiz/image/upload/v1676091055/my-uploads/edmgjmgd66jvfoatfae4.png');

-- --------------------------------------------------------

--
-- Table structure for table `institution`
--

CREATE TABLE `institution` (
  `institutionId` int(11) NOT NULL,
  `image` longtext NOT NULL,
  `name` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `institution`
--

INSERT INTO `institution` (`institutionId`, `image`, `name`) VALUES
(19, 'https://res.cloudinary.com/dojyelgiz/image/upload/v1677039937/my-uploads/mqa5oa90gz1gxkj9p4oo.jpg', 'Northeastern University'),
(21, 'https://res.cloudinary.com/dojyelgiz/image/upload/v1677041862/my-uploads/vy37wleueomxt8elldmd.png', 'Universities of Georgia'),
(22, 'https://res.cloudinary.com/dojyelgiz/image/upload/v1677041933/my-uploads/xiiimwmdi6zonu1pbizp.png', 'University of South Florida'),
(24, 'https://res.cloudinary.com/dojyelgiz/image/upload/v1677064429/my-uploads/gb11lc54pczkf8emfrbx.png', 'MIT'),
(25, 'https://res.cloudinary.com/dojyelgiz/image/upload/v1677064449/my-uploads/zg9mqb65lhxl7wuue4ug.png', 'Geor'),
(26, 'https://res.cloudinary.com/dojyelgiz/image/upload/v1677064708/my-uploads/nafial4wn3swvqm8c0ee.png', 'Illiois'),
(27, 'https://res.cloudinary.com/dojyelgiz/image/upload/v1677064734/my-uploads/kyxjxjovq90pf3igdbfo.jpg', 'Washingtion');

-- --------------------------------------------------------

--
-- Table structure for table `service_hero`
--

CREATE TABLE `service_hero` (
  `heroId` int(11) NOT NULL,
  `image` longtext DEFAULT NULL,
  `title` varchar(4000) DEFAULT NULL,
  `subtitle` varchar(4000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service_hero`
--

INSERT INTO `service_hero` (`heroId`, `image`, `title`, `subtitle`) VALUES
(1, 'https://res.cloudinary.com/dojyelgiz/image/upload/v1677144215/my-uploads/brtcmltjdsw05enrsu4k.png', 'College Guidance and Counselling Services', 'Personalized and comprehensive college guidance and counseling to help you build a unique application to renowned US universities and colleges.');

-- --------------------------------------------------------

--
-- Table structure for table `service_seo`
--

CREATE TABLE `service_seo` (
  `seoId` int(11) NOT NULL,
  `title` varchar(2000) NOT NULL,
  `description` varchar(4000) NOT NULL,
  `keywords` varchar(2000) DEFAULT NULL,
  `facebookApp` varchar(1000) DEFAULT NULL,
  `image` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service_seo`
--

INSERT INTO `service_seo` (`seoId`, `title`, `description`, `keywords`, `facebookApp`, `image`) VALUES
(1, 'Edit SEO Section', 'Edit SEO Section', 'Edit SEO Section', 'a', 'https://res.cloudinary.com/dojyelgiz/image/upload/v1674821733/my-uploads/sq14g7thedcxzsuogjsb.png');

-- --------------------------------------------------------

--
-- Table structure for table `testimonial`
--

CREATE TABLE `testimonial` (
  `testimonialId` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `designation` varchar(500) NOT NULL,
  `img` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `testimonial`
--

INSERT INTO `testimonial` (`testimonialId`, `title`, `description`, `designation`, `img`) VALUES
(3, 'Nusrat Karim', 'I have had an excellent experience with Rocketship Education. As a Bangladeshi Student, I was unsure about how to navigate the college application process in the United States. The counselors at Rocketship Education were knowledgeable and patient, answering all of my questions and concerns with clarity and professionalism. They helped me research and apply to colleges that fit my goal of becoming an architect and went over my essay multiple times. Rocketship also assisted me with the financial aid process, ensuring that I was able to afford the cost of tuition. Thanks to them I will be able to attend New York Institute of Technology (NYIT). I highly recommend their services to anyone looking to pursue higher education in the United States.', 'Incoming Student in New York Institute of Technology', 'https://res.cloudinary.com/dojyelgiz/image/upload/v1674787818/my-uploads/z2hmshizpzc5pr9r1i8q.png'),
(5, 'Taiba Chowdhury', 'Rocketship Education is an outstanding college consulting company. Their team, led by Rafsun Bhaia, helped me navigate the college application process and ultimately led to my acceptance into UC Berkeley. Rafsun Bhaia was my personal consultant and he held my hand step by step throughout the entire process. He was extremely knowledgeable about the requirements for UC Berkeley and provided me with valuable guidance on how to make my application stand out. He also helped me to prepare for my interviews and provided me with feedback on my essays. I am extremely grateful for his help and would highly recommend Rocketship Education to any student looking for assistance with the college application process.', 'UC Berkeley Sophmore, Major Micro Biology', 'https://res.cloudinary.com/dojyelgiz/image/upload/v1674787839/my-uploads/brid3wnt2xrmxibav6zh.png');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `username` varchar(191) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `username`, `role`) VALUES
(21, 'example@email.com', '$2b$10$bZUCGrgAioIMX7uuLJ4CsOcmKVkb9S3JEvkXnPM821O9DxBwYmNi6', 'kaushik', 'admin'),
(22, 'user@email.com', '$2b$10$4XX/at0AIgVsOiiSwJvHk.8w4m8kfplHCAe4/FBl8l55lBTjVCzei', 'lemu', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_hero`
--
ALTER TABLE `about_hero`
  ADD PRIMARY KEY (`heroId`);

--
-- Indexes for table `about_seo`
--
ALTER TABLE `about_seo`
  ADD PRIMARY KEY (`seoId`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`blogId`);

--
-- Indexes for table `consult`
--
ALTER TABLE `consult`
  ADD PRIMARY KEY (`consultId`),
  ADD KEY `details` (`details`(768));

--
-- Indexes for table `home_hero`
--
ALTER TABLE `home_hero`
  ADD PRIMARY KEY (`heroId`);

--
-- Indexes for table `home_seo`
--
ALTER TABLE `home_seo`
  ADD PRIMARY KEY (`seoId`);

--
-- Indexes for table `home_visa`
--
ALTER TABLE `home_visa`
  ADD PRIMARY KEY (`visaId`);

--
-- Indexes for table `institution`
--
ALTER TABLE `institution`
  ADD PRIMARY KEY (`institutionId`);

--
-- Indexes for table `service_hero`
--
ALTER TABLE `service_hero`
  ADD PRIMARY KEY (`heroId`);

--
-- Indexes for table `service_seo`
--
ALTER TABLE `service_seo`
  ADD PRIMARY KEY (`seoId`);

--
-- Indexes for table `testimonial`
--
ALTER TABLE `testimonial`
  ADD PRIMARY KEY (`testimonialId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_email_key` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_hero`
--
ALTER TABLE `about_hero`
  MODIFY `heroId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `about_seo`
--
ALTER TABLE `about_seo`
  MODIFY `seoId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `blogId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `consult`
--
ALTER TABLE `consult`
  MODIFY `consultId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `home_hero`
--
ALTER TABLE `home_hero`
  MODIFY `heroId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `home_seo`
--
ALTER TABLE `home_seo`
  MODIFY `seoId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `home_visa`
--
ALTER TABLE `home_visa`
  MODIFY `visaId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `institution`
--
ALTER TABLE `institution`
  MODIFY `institutionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `service_hero`
--
ALTER TABLE `service_hero`
  MODIFY `heroId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `service_seo`
--
ALTER TABLE `service_seo`
  MODIFY `seoId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `testimonial`
--
ALTER TABLE `testimonial`
  MODIFY `testimonialId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
