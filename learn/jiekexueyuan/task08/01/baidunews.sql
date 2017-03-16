-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 03 月 06 日 13:30
-- 服务器版本: 5.5.53
-- PHP 版本: 5.4.45

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=46 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(36, '百家', '中国民营企业500强发布，华为超联想夺第一', 'images/02.jpeg', '2017-03-06 00:00:00', '百度新闻'),
(35, '精选', '中国民营企业500强发布，华为超联想夺第一', 'images/01.jpeg', '2017-03-06 00:00:00', '百度新闻'),
(37, '百家', '中国民营企业500强发布，华为超联想夺第一', 'images/03.jpeg', '2017-03-06 00:00:00', '百度新闻'),
(38, '精选', '中国民营企业500强发布，华为超联想夺第一', 'images/03.jpeg', '2017-03-06 00:00:00', '百度新闻'),
(39, '精选', '中国民营企业500强发布，华为超联想夺第一', 'images/04.jpeg', '2017-03-06 00:00:00', '百度新闻'),
(40, '精选', '中国民营企业500强发布，华为超联想夺第一', 'images/05.jpeg', '2017-03-06 00:00:00', '百度新闻'),
(41, '百家', '中国民营企业500强发布，华为超联想夺第一', 'images/06.jpeg', '2017-03-06 00:00:00', '百度新闻'),
(42, '互联网', '中国民营企业500强发布，华为超联想夺第一', 'images/07.jpeg', '2017-03-06 00:00:00', '百度新闻'),
(43, '互联网', '中国民营企业500强发布，华为超联想夺第一', 'images/08.jpeg', '2017-03-06 00:00:00', '百度新闻'),
(44, '互联网', '中国民营企业500强发布，华为超联想夺第一', 'images/09.jpeg', '2017-03-06 00:00:00', '百度新闻'),
(45, '互联网', '中国民营企业500强发布，华为超联想夺第一', 'images/10.jpeg', '2017-03-06 00:00:00', '百度新闻');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
