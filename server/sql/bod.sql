-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- 主机: 127.0.0.1
-- 生成日期: 2016 ?01 ?18 ?10:39
-- 服务器版本: 5.6.11
-- PHP 版本: 5.5.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `bod`
--
CREATE DATABASE IF NOT EXISTS `bod` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `bod`;

-- --------------------------------------------------------

--
-- 表的结构 `custom`
--

CREATE TABLE IF NOT EXISTS `custom` (
  `id` int(60) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id标识',
  `name` varchar(64) CHARACTER SET utf8 NOT NULL COMMENT '客户名称',
  `userId` int(60) NOT NULL COMMENT '关联用户id',
  `major` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '负责人',
  `portrait` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '客户logo',
  `phone` tinyint(12) NOT NULL COMMENT '客户联系方式',
  `tags` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '标签',
  `keyBusiness` tinyint(10) NOT NULL COMMENT '关键商机',
  `compete` varchar(64) CHARACTER SET utf8 NOT NULL COMMENT '竞争对手',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(60) unsigned NOT NULL AUTO_INCREMENT COMMENT '唯一标识',
  `username` varchar(64) CHARACTER SET utf8 NOT NULL COMMENT '用户名',
  `password` varchar(32) CHARACTER SET utf8 NOT NULL COMMENT '密码',
  `name` varchar(64) CHARACTER SET utf8 DEFAULT NULL COMMENT '姓名',
  `roles` tinyint(10) DEFAULT '2' COMMENT '角色:1:管理员、2:普通用户',
  `supervisor` varchar(64) CHARACTER SET utf8 DEFAULT NULL COMMENT '上级',
  `phone` tinyint(12) DEFAULT NULL COMMENT '手机号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `name`, `roles`, `supervisor`, `phone`) VALUES
(1, 'bod', '123', NULL, 2, NULL, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
