GRANT ALL PRIVILEGES ON `test`.* TO 'j3pz_test'@'%' WITH GRANT OPTION;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- 数据库： `j3pz_test`
--

-- --------------------------------------------------------

--
-- 表的结构 `boss`
--

CREATE TABLE `boss` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `mapId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `effect`
--

CREATE TABLE `effect` (
  `id` int(11) NOT NULL,
  `attribute` text,
  `value` text,
  `description` varchar(255) NOT NULL,
  `trigger` enum('Usage','Passive','Condition') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `effect`
--

INSERT INTO `effect` (`id`, `attribute`, `value`, `description`, `trigger`) VALUES
(269, NULL, NULL, '使用：获得风特效', 'Usage'),
(270, NULL, NULL, '使用：获得风特效', 'Usage'),
(281, NULL, NULL, '施展混元性伤害招式，一定几率提高自身混元性内功基础攻击力10%，持续6秒', 'Passive'),
(285, NULL, NULL, '施展外功伤害招式，一定几率提高自身毒性内功基础攻击力10%，持续6秒', 'Passive'),
(287, NULL, NULL, '施展外功伤害招式，一定几率提高自身外功基础攻击力10%，持续6秒', 'Passive'),
(315, NULL, NULL, '气力值上限提高100点', 'Passive'),
(453, NULL, NULL, '“阳明指”伤害提高10%, “快雪时晴”伤害提高10%', 'Passive'),
(455, NULL, NULL, '“蚀肌弹”伤害提高10%, “暴雨梨花针”伤害提高10%', 'Passive'),
(456, NULL, NULL, '“夺魄箭”伤害提高10%, “暴雨梨花针”伤害提高10%', 'Passive'),
(471, 'crit', '160', '全会心等级提高160点', 'Passive'),
(501, 'sprint', '100', '气力值上限提高100', 'Passive'),
(526, 'crit', '190', '全会心等级提高190', 'Passive'),
(536, NULL, NULL, '马术气力值上限提高100点', 'Passive'),
(556, NULL, NULL, '在寻宝时，遭遇特殊事件概率提高5%', 'Passive'),
(605, 'strain', '160', '无双等级提高160点', 'Passive'),
(610, NULL, NULL, '在寻宝时，遭遇特殊事件概率提升5%', 'Passive'),
(626, 'strain', '190', '无双等级提高190', 'Passive');

-- --------------------------------------------------------

--
-- 表的结构 `enhance`
--

CREATE TABLE `enhance` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` enum('hat','jacket','belt','wrist','bottoms','shoes','necklace','pendant','ring','secondaryWeapon','primaryWeapon','tertiaryWeapon') NOT NULL,
  `description` varchar(255) NOT NULL,
  `attribute` text NOT NULL,
  `value` text NOT NULL,
  `decorator` varchar(255) NOT NULL,
  `deprecated` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `equip`
--

CREATE TABLE `equip` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `icon` int(11) NOT NULL,
  `category` enum('hat','jacket','belt','wrist','bottoms','shoes','necklace','pendant','ring','secondaryWeapon','primaryWeapon','tertiaryWeapon') NOT NULL,
  `quality` int(11) NOT NULL,
  `school` enum('通用','精简','万花','少林','明教','唐门','七秀','五毒','纯阳','天策','丐帮','藏剑','苍云','长歌','霸刀','蓬莱','凌雪') NOT NULL,
  `primaryAttribute` varchar(255) NOT NULL,
  `score` int(11) NOT NULL,
  `vitality` int(11) NOT NULL,
  `spirit` int(11) NOT NULL,
  `strength` int(11) NOT NULL,
  `agility` int(11) NOT NULL,
  `spunk` int(11) NOT NULL,
  `basicPhysicsShield` int(11) NOT NULL,
  `basicMagicShield` int(11) NOT NULL,
  `damageBase` int(11) NOT NULL,
  `damageRange` int(11) NOT NULL,
  `attackSpeed` int(11) NOT NULL,
  `physicsShield` int(11) NOT NULL,
  `magicShield` int(11) NOT NULL,
  `dodge` int(11) NOT NULL,
  `parryBase` int(11) NOT NULL,
  `parryValue` int(11) NOT NULL,
  `toughness` int(11) NOT NULL,
  `attack` int(11) NOT NULL,
  `heal` int(11) NOT NULL,
  `crit` int(11) NOT NULL,
  `critEffect` int(11) NOT NULL,
  `overcome` int(11) NOT NULL,
  `haste` int(11) NOT NULL,
  `hit` int(11) NOT NULL,
  `strain` int(11) NOT NULL,
  `huajing` int(11) NOT NULL,
  `threat` int(11) NOT NULL,
  `embed` varchar(255) DEFAULT NULL,
  `strengthen` int(11) NOT NULL,
  `deprecated` tinyint(4) NOT NULL,
  `effectId` int(11) DEFAULT NULL,
  `setId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `equip`
--

INSERT INTO `equip` (`id`, `name`, `icon`, `category`, `quality`, `school`, `primaryAttribute`, `score`, `vitality`, `spirit`, `strength`, `agility`, `spunk`, `basicPhysicsShield`, `basicMagicShield`, `damageBase`, `damageRange`, `attackSpeed`, `physicsShield`, `magicShield`, `dodge`, `parryBase`, `parryValue`, `toughness`, `attack`, `heal`, `crit`, `critEffect`, `overcome`, `haste`, `hit`, `strain`, `huajing`, `threat`, `embed`, `strengthen`, `deprecated`, `effectId`, `setId`) VALUES
(32824, '游绛护手', 1981, 'wrist', 2100, '通用', 'spunk', 2646, 366, 0, 0, 0, 134, 48, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 570, 0, 0, 0, 0, 271, 0, 0, '2D37D05', 6, 0, NULL, NULL),
(32825, '倦清护手', 1981, 'wrist', 2100, '通用', 'strength', 2646, 366, 0, 134, 0, 0, 60, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 243, 0, 570, 0, 0, 0, 0, 271, 0, 0, '2D06D05', 6, 0, NULL, NULL),
(32842, '影临帽', 1136, 'hat', 2100, '通用', 'spunk', 3402, 471, 0, 0, 0, 172, 55, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 0, 0, 0, 733, 0, 0, 349, 0, 0, '2D01D39', 6, 0, NULL, NULL),
(32843, '非儒帽', 1136, 'hat', 2100, '通用', 'strength', 3402, 471, 0, 172, 0, 0, 69, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 312, 0, 0, 0, 733, 0, 0, 349, 0, 0, '2D02D39', 6, 0, NULL, NULL),
(32849, '鹤梦·凝清护手', 10961, 'wrist', 2100, '万花', 'spunk', 2646, 366, 0, 0, 0, 134, 48, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 570, 0, 0, 0, 271, 0, 0, 0, '2D01D05', 6, 0, NULL, 1675),
(32859, '鹤梦·风影护手', 10977, 'wrist', 2100, '唐门', 'spunk', 2646, 366, 0, 0, 0, 134, 48, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 570, 0, 0, 0, 271, 0, 0, 0, '2D01D05', 6, 0, NULL, 1685),
(32860, '鹤梦·星魂护手', 10977, 'wrist', 2100, '唐门', 'strength', 2646, 366, 0, 134, 0, 0, 60, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 243, 0, 570, 0, 0, 0, 271, 0, 0, 0, '2D02D05', 6, 0, NULL, 1686),
(32921, '鹤梦·凝清冠', 10957, 'hat', 2100, '万花', 'spunk', 3402, 471, 0, 0, 0, 172, 55, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 0, 0, 0, 733, 0, 349, 0, 0, 0, '2D01D39', 6, 0, NULL, 1675),
(32931, '鹤梦·风影冠', 10975, 'hat', 2100, '唐门', 'spunk', 3402, 471, 0, 0, 0, 172, 55, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 0, 0, 0, 733, 0, 349, 0, 0, 0, '2D01D39', 6, 0, NULL, 1685),
(32932, '鹤梦·星魂冠', 10975, 'hat', 2100, '唐门', 'strength', 3402, 471, 0, 172, 0, 0, 69, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 312, 0, 0, 0, 733, 0, 349, 0, 0, 0, '2D02D39', 6, 0, NULL, 1686),
(32968, '知微通玄·怀冤袖', 8293, 'wrist', 2100, '通用', 'spunk', 2646, 366, 0, 0, 0, 134, 48, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 0, 570, 0, 0, 271, 0, 0, '2D11D01', 6, 0, NULL, NULL),
(32969, '知微通玄·五仓袖', 8293, 'wrist', 2100, '通用', 'strength', 2646, 366, 0, 134, 0, 0, 60, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 243, 0, 0, 0, 570, 0, 0, 271, 0, 0, '2D11D02', 6, 0, NULL, NULL),
(32992, '知微通玄·怀冤帽', 8286, 'hat', 2100, '通用', 'spunk', 3402, 471, 0, 0, 0, 172, 55, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 0, 0, 0, 733, 0, 349, 0, 0, 0, '2D01D39', 6, 0, NULL, NULL),
(32993, '知微通玄·五仓帽', 8286, 'hat', 2100, '通用', 'strength', 3402, 471, 0, 172, 0, 0, 69, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 312, 0, 0, 0, 733, 0, 349, 0, 0, 0, '2D02D39', 6, 0, NULL, NULL),
(33004, '寻踪觅宝·五气袖', 7987, 'wrist', 2100, '通用', 'spunk', 2646, 366, 0, 0, 0, 134, 48, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 0, 570, 0, 271, 0, 0, 0, '2D39D27', 6, 0, NULL, 1698),
(33005, '寻踪觅宝·制化袖', 7987, 'wrist', 2100, '通用', 'strength', 2646, 366, 0, 134, 0, 0, 60, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 243, 0, 0, 0, 570, 0, 271, 0, 0, 0, '2D39D18', 6, 0, NULL, 1699),
(33022, '寻踪觅宝·五气帽', 7986, 'hat', 2100, '通用', 'spunk', 3402, 471, 0, 0, 0, 172, 55, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 0, 733, 0, 0, 0, 0, 349, 0, 0, '2D03D11', 6, 0, NULL, 1698),
(33023, '寻踪觅宝·制化帽', 7986, 'hat', 2100, '通用', 'strength', 3402, 471, 0, 172, 0, 0, 69, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 312, 0, 733, 0, 0, 0, 0, 349, 0, 0, '2D03D11', 6, 0, NULL, 1699),
(33034, '获旷袖', 9238, 'wrist', 2130, '通用', 'spunk', 2683, 372, 0, 0, 0, 136, 49, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 296, 0, 578, 0, 0, 0, 275, 0, 0, 0, '2D01D05', 6, 0, NULL, NULL),
(33035, '获旌袖', 9238, 'wrist', 2130, '通用', 'strength', 2683, 372, 0, 136, 0, 0, 61, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 247, 0, 578, 0, 0, 0, 275, 0, 0, 0, '2D02D05', 6, 0, NULL, NULL),
(33058, '获旷帽', 9234, 'hat', 2130, '通用', 'spunk', 3450, 478, 0, 0, 0, 175, 56, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 380, 0, 743, 0, 0, 0, 354, 0, 0, 0, '2D39D27', 6, 0, NULL, NULL),
(33059, '获旌帽', 9234, 'hat', 2130, '通用', 'strength', 3450, 478, 0, 175, 0, 0, 70, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 317, 0, 743, 0, 0, 0, 354, 0, 0, 0, '2D39D18', 6, 0, NULL, NULL),
(33100, '肃澹袖', 11045, 'wrist', 2130, '通用', 'spunk', 2683, 372, 0, 0, 0, 136, 49, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 296, 0, 578, 0, 0, 0, 0, 275, 0, 0, '2D37D05', 6, 0, NULL, NULL),
(33101, '肃杀袖', 11045, 'wrist', 2130, '通用', 'strength', 2683, 372, 0, 136, 0, 0, 61, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 247, 0, 578, 0, 0, 0, 0, 275, 0, 0, '2D06D05', 6, 0, NULL, NULL),
(33124, '肃澹冠', 11041, 'hat', 2130, '通用', 'spunk', 3450, 478, 0, 0, 0, 175, 56, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 380, 0, 743, 0, 0, 0, 0, 354, 0, 0, '2D03D11', 6, 0, NULL, NULL),
(33125, '肃杀冠', 11041, 'hat', 2130, '通用', 'strength', 3450, 478, 0, 175, 0, 0, 70, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 317, 0, 743, 0, 0, 0, 0, 354, 0, 0, '2D03D11', 6, 0, NULL, NULL),
(33137, '天韶·孤怀护手', 10961, 'wrist', 2300, '万花', 'spunk', 2898, 401, 0, 0, 0, 147, 53, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 319, 0, 624, 0, 0, 0, 297, 0, 0, 0, '2D01D05', 6, 0, NULL, 1705),
(33147, '天韶·羽魂护手', 10977, 'wrist', 2300, '唐门', 'spunk', 2898, 401, 0, 0, 0, 147, 53, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 319, 0, 624, 0, 0, 0, 297, 0, 0, 0, '2D01D05', 6, 0, NULL, 1715),
(33148, '天韶·雾渺护手', 10977, 'wrist', 2300, '唐门', 'strength', 2898, 401, 0, 147, 0, 0, 66, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 266, 0, 624, 0, 0, 0, 297, 0, 0, 0, '2D02D05', 6, 0, NULL, 1716),
(33209, '天韶·孤怀冠', 10957, 'hat', 2300, '万花', 'spunk', 3726, 516, 0, 0, 0, 189, 60, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 411, 0, 0, 0, 803, 0, 382, 0, 0, 0, '2D01D39', 6, 0, NULL, 1705),
(33219, '天韶·羽魂冠', 10975, 'hat', 2300, '唐门', 'spunk', 3726, 516, 0, 0, 0, 189, 60, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 411, 0, 0, 0, 803, 0, 382, 0, 0, 0, '2D01D39', 6, 0, NULL, 1715),
(33220, '天韶·雾渺冠', 10975, 'hat', 2300, '唐门', 'strength', 3726, 516, 0, 189, 0, 0, 75, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 342, 0, 0, 0, 803, 0, 382, 0, 0, 0, '2D02D39', 6, 0, NULL, 1716),
(33256, '刻廉袖', 9238, 'wrist', 2330, '通用', 'spunk', 2935, 407, 0, 0, 0, 149, 53, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 324, 0, 632, 0, 0, 0, 301, 0, 0, 0, '2D01D05', 6, 0, NULL, NULL),
(33257, '刻深袖', 9238, 'wrist', 2330, '通用', 'strength', 2935, 407, 0, 149, 0, 0, 67, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 270, 0, 632, 0, 0, 0, 301, 0, 0, 0, '2D02D05', 6, 0, NULL, NULL),
(33280, '刻廉帽', 9234, 'hat', 2330, '通用', 'spunk', 3774, 523, 0, 0, 0, 191, 61, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 416, 0, 813, 0, 0, 0, 387, 0, 0, 0, '2D39D27', 6, 0, NULL, NULL),
(33281, '刻深帽', 9234, 'hat', 2330, '通用', 'strength', 3774, 523, 0, 191, 0, 0, 76, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 347, 0, 813, 0, 0, 0, 387, 0, 0, 0, '2D39D18', 6, 0, NULL, NULL),
(33322, '玄虚袖', 11045, 'wrist', 2330, '通用', 'spunk', 2935, 407, 0, 0, 0, 149, 53, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 324, 0, 632, 0, 0, 0, 0, 301, 0, 0, '2D37D05', 6, 0, NULL, NULL),
(33323, '玄戈袖', 11045, 'wrist', 2330, '通用', 'strength', 2935, 407, 0, 149, 0, 0, 67, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 270, 0, 632, 0, 0, 0, 0, 301, 0, 0, '2D06D05', 6, 0, NULL, NULL),
(33346, '玄虚冠', 11041, 'hat', 2330, '通用', 'spunk', 3774, 523, 0, 0, 0, 191, 61, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 416, 0, 813, 0, 0, 0, 0, 387, 0, 0, '2D03D11', 6, 0, NULL, NULL),
(33347, '玄戈冠', 11041, 'hat', 2330, '通用', 'strength', 3774, 523, 0, 191, 0, 0, 76, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 347, 0, 813, 0, 0, 0, 0, 387, 0, 0, '2D03D11', 6, 0, NULL, NULL),
(33358, '寒川缠', 10948, 'wrist', 2360, '通用', 'spunk', 2973, 412, 0, 0, 0, 150, 54, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 328, 0, 0, 0, 641, 0, 305, 0, 0, 0, '2D39D27', 6, 0, NULL, 1728),
(33359, '寒山缠', 10948, 'wrist', 2360, '通用', 'strength', 2973, 412, 0, 150, 0, 0, 68, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 273, 0, 0, 0, 641, 0, 305, 0, 0, 0, '2D39D18', 6, 0, NULL, 1729),
(33382, '寒川冠', 10945, 'hat', 2360, '通用', 'spunk', 3823, 530, 0, 0, 0, 193, 62, 77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 421, 0, 824, 0, 0, 0, 392, 0, 0, 0, '2D39D27', 6, 0, NULL, 1728),
(33383, '寒山冠', 10945, 'hat', 2360, '通用', 'strength', 3823, 530, 0, 193, 0, 0, 77, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 351, 0, 824, 0, 0, 0, 392, 0, 0, 0, '2D39D18', 6, 0, NULL, 1729),
(34114, '月冷长河·殇风护手', 6478, 'wrist', 2100, '通用', 'spunk', 2646, 366, 0, 0, 0, 134, 48, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 570, 0, 0, 0, 271, 0, 0, 0, '2D01D05', 6, 0, NULL, NULL),
(34115, '月冷长河·殇恸护手', 6478, 'wrist', 2100, '通用', 'strength', 2646, 366, 0, 134, 0, 0, 60, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 243, 0, 570, 0, 0, 0, 271, 0, 0, 0, '2D02D05', 6, 0, NULL, NULL),
(34138, '月冷长河·魄精帽', 6480, 'hat', 2100, '通用', 'spunk', 3402, 471, 0, 0, 0, 172, 55, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 0, 733, 0, 0, 0, 0, 349, 0, 0, '2D03D11', 6, 0, NULL, NULL),
(34139, '月冷长河·魄萦帽', 6480, 'hat', 2100, '通用', 'strength', 3402, 471, 0, 172, 0, 0, 69, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 312, 0, 733, 0, 0, 0, 0, 349, 0, 0, '2D03D11', 6, 0, NULL, NULL),
(34636, '昭清袖', 11045, 'wrist', 2130, '通用', 'spunk', 2683, 372, 0, 0, 0, 136, 49, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 296, 0, 0, 0, 578, 0, 0, 275, 0, 0, '2D11D01', 6, 0, NULL, NULL),
(34637, '昭武袖', 11045, 'wrist', 2130, '通用', 'strength', 2683, 372, 0, 136, 0, 0, 61, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 247, 0, 0, 0, 578, 0, 0, 275, 0, 0, '2D11D02', 6, 0, NULL, NULL),
(34660, '昭清冠', 11041, 'hat', 2130, '通用', 'spunk', 3450, 478, 0, 0, 0, 175, 56, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 380, 0, 0, 0, 0, 743, 354, 0, 0, 0, '2D39D01', 6, 0, NULL, NULL),
(34661, '昭武冠', 11041, 'hat', 2130, '通用', 'strength', 3450, 478, 0, 175, 0, 0, 70, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 317, 0, 0, 0, 0, 743, 354, 0, 0, 0, '2D39D02', 6, 0, NULL, NULL),
(34672, '折心袖', 11045, 'wrist', 2330, '通用', 'spunk', 2935, 407, 0, 0, 0, 149, 53, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 324, 0, 0, 0, 632, 0, 0, 301, 0, 0, '2D11D01', 6, 0, NULL, NULL),
(34673, '碎山袖', 11045, 'wrist', 2330, '通用', 'strength', 2935, 407, 0, 149, 0, 0, 67, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 270, 0, 0, 0, 632, 0, 0, 301, 0, 0, '2D11D02', 6, 0, NULL, NULL),
(34696, '折心冠', 11041, 'hat', 2330, '通用', 'spunk', 3774, 523, 0, 0, 0, 191, 61, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 416, 0, 0, 0, 0, 813, 387, 0, 0, 0, '2D39D01', 6, 0, NULL, NULL),
(34697, '碎山冠', 11041, 'hat', 2330, '通用', 'strength', 3774, 523, 0, 191, 0, 0, 76, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 347, 0, 0, 0, 0, 813, 387, 0, 0, 0, '2D39D02', 6, 0, NULL, NULL),
(39479, '沧海间', 1223, 'pendant', 2310, '通用', 'spunk', 2079, 288, 0, 0, 0, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 229, 0, 448, 0, 0, 0, 0, 213, 0, 0, '1D11', 4, 0, 269, NULL),
(39480, '断潮澜', 1217, 'pendant', 2310, '通用', 'strength', 2079, 288, 0, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 191, 0, 448, 0, 0, 0, 0, 213, 0, 0, '1D11', 4, 0, 270, NULL),
(40375, '观鱼袖', 11599, 'wrist', 2100, '通用', 'spunk', 2646, 366, 0, 0, 0, 134, 48, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 570, 0, 271, 0, 0, '2D39D01', 6, 0, NULL, NULL),
(40376, '望月护腕', 11599, 'wrist', 2100, '通用', 'strength', 2646, 366, 0, 134, 0, 0, 60, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 243, 0, 0, 0, 0, 570, 0, 271, 0, 0, '2D39D02', 6, 0, NULL, NULL),
(40399, '观鱼冠', 11598, 'hat', 2100, '通用', 'spunk', 3402, 471, 0, 0, 0, 172, 55, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 0, 733, 0, 0, 0, 0, 349, 0, 0, '2D03D11', 6, 0, NULL, NULL),
(40400, '望月冠', 11598, 'hat', 2100, '通用', 'strength', 3402, 471, 0, 172, 0, 0, 69, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 312, 0, 733, 0, 0, 0, 0, 349, 0, 0, '2D03D11', 6, 0, NULL, NULL),
(40411, '青苍袖', 11599, 'wrist', 2100, '通用', 'spunk', 2646, 366, 0, 0, 0, 134, 48, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 0, 570, 0, 271, 0, 0, 0, '2D39D27', 6, 0, NULL, NULL),
(40412, '朱颜护腕', 11599, 'wrist', 2100, '通用', 'strength', 2646, 366, 0, 134, 0, 0, 60, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 243, 0, 0, 0, 570, 0, 271, 0, 0, 0, '2D39D18', 6, 0, NULL, NULL),
(40435, '青苍冠', 11598, 'hat', 2100, '通用', 'spunk', 3402, 471, 0, 0, 0, 172, 55, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 0, 0, 0, 0, 733, 349, 0, 0, 0, '2D39D01', 6, 0, NULL, NULL),
(40436, '朱颜冠', 11598, 'hat', 2100, '通用', 'strength', 3402, 471, 0, 172, 0, 0, 69, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 312, 0, 0, 0, 0, 733, 349, 0, 0, 0, '2D39D02', 6, 0, NULL, NULL),
(40447, '倦花袖', 11599, 'wrist', 2100, '通用', 'spunk', 2646, 366, 0, 0, 0, 134, 48, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 570, 0, 0, 0, 0, 271, 0, 0, '2D37D05', 6, 0, NULL, NULL),
(40448, '醉云护腕', 11599, 'wrist', 2100, '通用', 'strength', 2646, 366, 0, 134, 0, 0, 60, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 243, 0, 570, 0, 0, 0, 0, 271, 0, 0, '2D06D05', 6, 0, NULL, NULL),
(40471, '倦花冠', 11598, 'hat', 2100, '通用', 'spunk', 3402, 471, 0, 0, 0, 172, 55, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 0, 733, 0, 0, 0, 349, 0, 0, 0, '2D39D27', 6, 0, NULL, NULL),
(40472, '醉云冠', 11598, 'hat', 2100, '通用', 'strength', 3402, 471, 0, 172, 0, 0, 69, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 312, 0, 733, 0, 0, 0, 349, 0, 0, 0, '2D39D18', 6, 0, NULL, NULL),
(40501, '房幽帽', 11598, 'hat', 2100, '通用', 'spunk', 3402, 471, 0, 0, 0, 172, 55, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 0, 0, 0, 733, 0, 349, 0, 0, 0, '2D01D39', 6, 0, NULL, NULL),
(40502, '房玄帽', 11598, 'hat', 2100, '通用', 'strength', 3402, 471, 0, 172, 0, 0, 69, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 312, 0, 0, 0, 733, 0, 349, 0, 0, 0, '2D02D39', 6, 0, NULL, NULL),
(40513, '知微通玄·去恒袖', 8293, 'wrist', 2300, '通用', 'spunk', 2898, 401, 0, 0, 0, 147, 53, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 319, 0, 0, 0, 624, 0, 0, 297, 0, 0, '2D11D01', 6, 0, NULL, NULL),
(40514, '知微通玄·入渊袖', 8293, 'wrist', 2300, '通用', 'strength', 2898, 401, 0, 147, 0, 0, 66, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 266, 0, 0, 0, 624, 0, 0, 297, 0, 0, '2D11D02', 6, 0, NULL, NULL),
(40537, '知微通玄·去恒帽', 8286, 'hat', 2300, '通用', 'spunk', 3726, 516, 0, 0, 0, 189, 60, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 411, 0, 0, 0, 803, 0, 382, 0, 0, 0, '2D01D39', 6, 0, NULL, NULL),
(40538, '知微通玄·入渊帽', 8286, 'hat', 2300, '通用', 'strength', 3726, 516, 0, 189, 0, 0, 75, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 342, 0, 0, 0, 803, 0, 382, 0, 0, 0, '2D02D39', 6, 0, NULL, NULL),
(40549, '寻踪觅宝·亘绝袖', 8889, 'wrist', 2300, '通用', 'spunk', 2898, 401, 0, 0, 0, 147, 53, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 319, 0, 0, 0, 624, 0, 297, 0, 0, 0, '2D39D27', 6, 0, NULL, 1989),
(40550, '寻踪觅宝·宿世袖', 8889, 'wrist', 2300, '通用', 'strength', 2898, 401, 0, 147, 0, 0, 66, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 266, 0, 0, 0, 624, 0, 297, 0, 0, 0, '2D39D18', 6, 0, NULL, 1990),
(40567, '寻踪觅宝·亘绝帽', 8888, 'hat', 2300, '通用', 'spunk', 3726, 516, 0, 0, 0, 189, 60, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 411, 0, 803, 0, 0, 0, 0, 382, 0, 0, '2D03D11', 6, 0, NULL, 1989),
(40568, '寻踪觅宝·宿世帽', 8888, 'hat', 2300, '通用', 'strength', 3726, 516, 0, 189, 0, 0, 75, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 342, 0, 803, 0, 0, 0, 0, 382, 0, 0, '2D03D11', 6, 0, NULL, 1990),
(40580, '凌绝·溪行袖', 11620, 'wrist', 2560, '万花', 'spunk', 3225, 447, 0, 0, 0, 163, 59, 73, 0, 0, 0, 0, 0, 0, 0, 0, 0, 356, 0, 695, 0, 0, 0, 331, 0, 0, 0, '2D01D05', 6, 0, NULL, 1996),
(40590, '凌绝·威灵护手', 11638, 'wrist', 2560, '唐门', 'spunk', 3225, 447, 0, 0, 0, 163, 59, 73, 0, 0, 0, 0, 0, 0, 0, 0, 0, 356, 0, 695, 0, 0, 0, 331, 0, 0, 0, '2D01D05', 6, 0, NULL, 2006),
(40591, '凌绝·鸣竹护手', 11638, 'wrist', 2560, '唐门', 'strength', 3225, 447, 0, 163, 0, 0, 73, 59, 0, 0, 0, 0, 0, 0, 0, 0, 0, 296, 0, 695, 0, 0, 0, 331, 0, 0, 0, '2D02D05', 6, 0, NULL, 2007),
(40652, '凌绝·溪行帽', 11616, 'hat', 2560, '万花', 'spunk', 4147, 574, 0, 0, 0, 210, 67, 84, 0, 0, 0, 0, 0, 0, 0, 0, 0, 457, 0, 0, 0, 893, 0, 425, 0, 0, 0, '2D01D39', 6, 0, NULL, 1996),
(40662, '凌绝·威灵冠', 11634, 'hat', 2560, '唐门', 'spunk', 4147, 574, 0, 0, 0, 210, 67, 84, 0, 0, 0, 0, 0, 0, 0, 0, 0, 457, 0, 0, 0, 893, 0, 425, 0, 0, 0, '2D01D39', 6, 0, NULL, 2006),
(40663, '凌绝·鸣竹冠', 11634, 'hat', 2560, '唐门', 'strength', 4147, 574, 0, 210, 0, 0, 84, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 381, 0, 0, 0, 893, 0, 425, 0, 0, 0, '2D02D39', 6, 0, NULL, 2007),
(40699, '生茅护手', 11599, 'wrist', 2600, '通用', 'spunk', 3276, 454, 0, 0, 0, 166, 60, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 361, 0, 706, 0, 0, 0, 0, 336, 0, 0, '2D37D05', 6, 0, NULL, NULL),
(40700, '伐檀护手', 11599, 'wrist', 2600, '通用', 'strength', 3276, 454, 0, 166, 0, 0, 74, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 301, 0, 706, 0, 0, 0, 0, 336, 0, 0, '2D06D05', 6, 0, NULL, NULL),
(40723, '生茅冠', 11598, 'hat', 2600, '通用', 'spunk', 4212, 583, 0, 0, 0, 213, 68, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 464, 0, 907, 0, 0, 0, 0, 432, 0, 0, '2D03D11', 6, 0, NULL, NULL),
(40724, '伐檀冠', 11598, 'hat', 2600, '通用', 'strength', 4212, 583, 0, 213, 0, 0, 85, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 387, 0, 907, 0, 0, 0, 0, 432, 0, 0, '2D03D11', 6, 0, NULL, NULL),
(40735, '渡沔护手', 11599, 'wrist', 2600, '通用', 'spunk', 3276, 454, 0, 0, 0, 166, 60, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 361, 0, 0, 0, 706, 0, 0, 336, 0, 0, '2D11D01', 6, 0, NULL, NULL),
(40736, '戍远护手', 11599, 'wrist', 2600, '通用', 'strength', 3276, 454, 0, 166, 0, 0, 74, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 301, 0, 0, 0, 706, 0, 0, 336, 0, 0, '2D11D02', 6, 0, NULL, NULL),
(40759, '渡沔帽', 11598, 'hat', 2600, '通用', 'spunk', 4212, 583, 0, 0, 0, 213, 68, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 464, 0, 0, 0, 0, 907, 432, 0, 0, 0, '2D39D01', 6, 0, NULL, NULL),
(40760, '戍远帽', 11598, 'hat', 2600, '通用', 'strength', 4212, 583, 0, 213, 0, 0, 85, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 387, 0, 0, 0, 0, 907, 432, 0, 0, 0, '2D39D02', 6, 0, NULL, NULL),
(40795, '听元护手', 9686, 'wrist', 2600, '通用', 'spunk', 3276, 454, 0, 0, 0, 166, 60, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 361, 0, 706, 0, 0, 0, 336, 0, 0, 0, '2D01D05', 6, 0, NULL, NULL),
(40796, '听角护手', 9686, 'wrist', 2600, '通用', 'strength', 3276, 454, 0, 166, 0, 0, 74, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 301, 0, 706, 0, 0, 0, 336, 0, 0, 0, '2D02D05', 6, 0, NULL, NULL),
(40819, '听元冠', 9684, 'hat', 2600, '通用', 'spunk', 4212, 583, 0, 0, 0, 213, 68, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 464, 0, 907, 0, 0, 0, 432, 0, 0, 0, '2D39D27', 6, 0, NULL, NULL),
(40820, '听角冠', 9684, 'hat', 2600, '通用', 'strength', 4212, 583, 0, 213, 0, 0, 85, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 387, 0, 907, 0, 0, 0, 432, 0, 0, 0, '2D39D18', 6, 0, NULL, NULL),
(40861, '兹杨袖', 11605, 'wrist', 2640, '通用', 'spunk', 3326, 461, 0, 0, 0, 168, 60, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 367, 0, 0, 0, 717, 0, 341, 0, 0, 0, '2D39D27', 6, 0, NULL, 2019),
(40862, '兹松袖', 11605, 'wrist', 2640, '通用', 'strength', 3326, 461, 0, 168, 0, 0, 76, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 306, 0, 0, 0, 717, 0, 341, 0, 0, 0, '2D39D18', 6, 0, NULL, 2020),
(40885, '兹杨冠', 11604, 'hat', 2640, '通用', 'spunk', 4276, 592, 0, 0, 0, 216, 69, 86, 0, 0, 0, 0, 0, 0, 0, 0, 0, 471, 0, 921, 0, 0, 0, 439, 0, 0, 0, '2D39D27', 6, 0, NULL, 2019),
(40886, '兹松冠', 11604, 'hat', 2640, '通用', 'strength', 4276, 592, 0, 216, 0, 0, 86, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 393, 0, 921, 0, 0, 0, 439, 0, 0, 0, '2D39D18', 6, 0, NULL, 2020),
(40897, '回风送客·流火护手', 5882, 'wrist', 2300, '通用', 'spunk', 2898, 401, 0, 0, 0, 147, 53, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 319, 0, 624, 0, 0, 0, 297, 0, 0, 0, '2D01D05', 6, 0, NULL, NULL),
(40898, '回风送客·业火护手', 5882, 'wrist', 2300, '通用', 'strength', 2898, 401, 0, 147, 0, 0, 66, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 266, 0, 624, 0, 0, 0, 297, 0, 0, 0, '2D02D05', 6, 0, NULL, NULL),
(40921, '回风送客·青月冠', 5881, 'hat', 2300, '通用', 'spunk', 3726, 516, 0, 0, 0, 189, 60, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 411, 0, 803, 0, 0, 0, 0, 382, 0, 0, '2D03D11', 6, 0, NULL, NULL),
(40922, '回风送客·白月冠', 5881, 'hat', 2300, '通用', 'strength', 3726, 516, 0, 189, 0, 0, 75, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 342, 0, 803, 0, 0, 0, 0, 382, 0, 0, '2D03D11', 6, 0, NULL, NULL),
(41412, '无界头饰', 8894, 'hat', 2400, '精简', 'magic', 3888, 0, 0, 0, 0, 0, 63, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1029, 0, 1197, 0, 0, 0, 0, 0, 0, 0, '2D38D03', 3, 0, NULL, NULL),
(41413, '无界头饰', 8894, 'hat', 2400, '精简', 'magic', 3888, 0, 0, 0, 0, 0, 63, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 921, 0, 479, 0, 0, 0, 917, 0, 0, 0, '2D38D05', 3, 0, NULL, NULL),
(41414, '无界头饰', 8894, 'hat', 2400, '精简', 'magic', 3888, 0, 0, 0, 0, 0, 63, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 964, 0, 459, 0, 459, 0, 0, 399, 0, 0, '2D38D03', 3, 0, NULL, NULL),
(41415, '无界头饰', 8894, 'hat', 2400, '精简', 'physics', 3888, 0, 0, 0, 0, 0, 79, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 857, 0, 1197, 0, 0, 0, 0, 0, 0, 0, '2D21D03', 3, 0, NULL, NULL),
(41416, '无界头饰', 8894, 'hat', 2400, '精简', 'physics', 3888, 0, 0, 0, 0, 0, 79, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768, 0, 479, 0, 0, 0, 917, 0, 0, 0, '2D21D05', 3, 0, NULL, NULL),
(41417, '无界头饰', 8894, 'hat', 2400, '精简', 'physics', 3888, 0, 0, 0, 0, 0, 79, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 804, 0, 459, 0, 459, 0, 0, 399, 0, 0, '2D21D03', 3, 0, NULL, NULL),
(41420, '无界护臂', 8895, 'wrist', 2400, '精简', 'magic', 3024, 0, 0, 0, 0, 0, 55, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 0, 0, 0, 0, 0, 931, 0, 0, 0, '2D37D05', 3, 0, NULL, NULL),
(41421, '无界护臂', 8895, 'wrist', 2400, '精简', 'magic', 3024, 0, 0, 0, 0, 0, 55, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 717, 0, 620, 465, 0, 0, 0, 0, 0, 0, '2D27D05', 3, 0, NULL, NULL),
(41422, '无界护臂', 8895, 'wrist', 2400, '精简', 'magic', 3024, 0, 0, 0, 0, 0, 55, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 717, 0, 465, 310, 0, 0, 310, 0, 0, 0, '2D27D03', 3, 0, NULL, NULL),
(41423, '无界护臂', 8895, 'wrist', 2400, '精简', 'physics', 3024, 0, 0, 0, 0, 0, 69, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 667, 0, 0, 0, 0, 0, 931, 0, 0, 0, '2D06D05', 3, 0, NULL, NULL),
(41424, '无界护臂', 8895, 'wrist', 2400, '精简', 'physics', 3024, 0, 0, 0, 0, 0, 69, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 597, 0, 620, 465, 0, 0, 0, 0, 0, 0, '2D18D05', 3, 0, NULL, NULL),
(41425, '无界护臂', 8895, 'wrist', 2400, '精简', 'physics', 3024, 0, 0, 0, 0, 0, 69, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 597, 0, 465, 310, 0, 0, 310, 0, 0, 0, '2D18D03', 3, 0, NULL, NULL),
(41444, '无界头饰', 8894, 'hat', 2520, '精简', 'magic', 4082, 0, 0, 0, 0, 0, 66, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1080, 0, 0, 0, 1256, 0, 0, 0, 0, 0, '2D36D03', 3, 0, NULL, NULL),
(41445, '无界头饰', 8894, 'hat', 2520, '精简', 'magic', 4082, 0, 0, 0, 0, 0, 66, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 967, 0, 838, 628, 0, 0, 0, 0, 0, 0, '2D27D05', 3, 0, NULL, NULL),
(41446, '无界头饰', 8894, 'hat', 2520, '精简', 'magic', 4082, 0, 0, 0, 0, 0, 66, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1012, 0, 544, 0, 0, 0, 419, 419, 0, 0, '2D27D39', 3, 0, NULL, NULL),
(41447, '无界头饰', 8894, 'hat', 2520, '精简', 'physics', 4082, 0, 0, 0, 0, 0, 82, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 900, 0, 0, 0, 1256, 0, 0, 0, 0, 0, '2D09D03', 3, 0, NULL, NULL),
(41448, '无界头饰', 8894, 'hat', 2520, '精简', 'physics', 4082, 0, 0, 0, 0, 0, 82, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 806, 0, 838, 628, 0, 0, 0, 0, 0, 0, '2D18D05', 3, 0, NULL, NULL),
(41449, '无界头饰', 8894, 'hat', 2520, '精简', 'physics', 4082, 0, 0, 0, 0, 0, 82, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 844, 0, 544, 0, 0, 0, 419, 419, 0, 0, '2D18D39', 3, 0, NULL, NULL),
(41452, '无界护臂', 8895, 'wrist', 2520, '精简', 'magic', 3175, 0, 0, 0, 0, 0, 58, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 840, 0, 0, 0, 0, 0, 0, 977, 0, 0, '2D37D39', 3, 0, NULL, NULL),
(41453, '无界护臂', 8895, 'wrist', 2520, '精简', 'magic', 3175, 0, 0, 0, 0, 0, 58, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 787, 0, 0, 0, 684, 0, 391, 0, 0, 0, '2D37D05', 3, 0, NULL, NULL),
(41454, '无界护臂', 8895, 'wrist', 2520, '精简', 'magic', 3175, 0, 0, 0, 0, 0, 58, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 752, 0, 489, 326, 0, 0, 0, 326, 0, 0, '2D27D39', 3, 0, NULL, NULL),
(41455, '无界护臂', 8895, 'wrist', 2520, '精简', 'physics', 3175, 0, 0, 0, 0, 0, 72, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 700, 0, 0, 0, 0, 0, 0, 977, 0, 0, '2D18D39', 3, 0, NULL, NULL),
(41456, '无界护臂', 8895, 'wrist', 2520, '精简', 'physics', 3175, 0, 0, 0, 0, 0, 72, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 656, 0, 0, 0, 684, 0, 391, 0, 0, 0, '2D06D05', 3, 0, NULL, NULL),
(41457, '无界护臂', 8895, 'wrist', 2520, '精简', 'physics', 3175, 0, 0, 0, 0, 0, 72, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 627, 0, 489, 326, 0, 0, 0, 326, 0, 0, '2D18D39', 3, 0, NULL, NULL),
(41477, '佩兰袖', 11599, 'wrist', 2100, '通用', 'spunk', 2646, 366, 0, 0, 0, 134, 48, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 0, 570, 0, 0, 271, 0, 0, '2D11D01', 6, 0, NULL, NULL),
(41478, '宿莽袖', 11599, 'wrist', 2100, '通用', 'strength', 2646, 366, 0, 134, 0, 0, 60, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 243, 0, 0, 0, 570, 0, 0, 271, 0, 0, '2D11D02', 6, 0, NULL, NULL),
(41501, '佩兰冠', 11598, 'hat', 2100, '通用', 'spunk', 3402, 471, 0, 0, 0, 172, 55, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 0, 0, 0, 733, 0, 0, 349, 0, 0, '2D01D39', 6, 0, NULL, NULL),
(41502, '宿莽冠', 11598, 'hat', 2100, '通用', 'strength', 3402, 471, 0, 172, 0, 0, 69, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 312, 0, 0, 0, 733, 0, 0, 349, 0, 0, '2D02D39', 6, 0, NULL, NULL),
(41513, '忘光护手', 11045, 'wrist', 2330, '通用', 'spunk', 2935, 407, 0, 0, 0, 149, 53, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 324, 0, 0, 0, 0, 632, 0, 301, 0, 0, '2D39D01', 6, 0, NULL, NULL),
(41514, '剪云护手', 11045, 'wrist', 2330, '通用', 'strength', 2935, 407, 0, 149, 0, 0, 67, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 270, 0, 0, 0, 0, 632, 0, 301, 0, 0, '2D39D02', 6, 0, NULL, NULL),
(41537, '忘光冠', 11041, 'hat', 2330, '通用', 'spunk', 3774, 523, 0, 0, 0, 191, 61, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 416, 0, 0, 0, 813, 0, 0, 387, 0, 0, '2D01D39', 6, 0, NULL, NULL),
(41538, '剪云冠', 11041, 'hat', 2330, '通用', 'strength', 3774, 523, 0, 191, 0, 0, 76, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 347, 0, 0, 0, 813, 0, 0, 387, 0, 0, '2D02D39', 6, 0, NULL, NULL),
(41549, '逢采护手', 11599, 'wrist', 2600, '通用', 'spunk', 3276, 454, 0, 0, 0, 166, 60, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 361, 0, 0, 0, 0, 706, 0, 336, 0, 0, '2D39D01', 6, 0, NULL, NULL),
(41550, '临歧护手', 11599, 'wrist', 2600, '通用', 'strength', 3276, 454, 0, 166, 0, 0, 74, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 301, 0, 0, 0, 0, 706, 0, 336, 0, 0, '2D39D02', 6, 0, NULL, NULL),
(41573, '逢采帽', 11598, 'hat', 2600, '通用', 'spunk', 4212, 583, 0, 0, 0, 213, 68, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 464, 0, 0, 0, 907, 0, 0, 432, 0, 0, '2D01D39', 6, 0, NULL, NULL),
(41574, '临歧帽', 11598, 'hat', 2600, '通用', 'strength', 4212, 583, 0, 213, 0, 0, 85, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 387, 0, 0, 0, 907, 0, 0, 432, 0, 0, '2D02D39', 6, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `equip_set`
--

CREATE TABLE `equip_set` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `equip_set`
--

INSERT INTO `equip_set` (`id`, `name`) VALUES
(1675, '鹤梦·凝清'),
(1685, '鹤梦·风影'),
(1686, '鹤梦·星魂'),
(1698, '寻踪觅宝·五气'),
(1699, '寻踪觅宝·制化'),
(1705, '天韶·孤怀'),
(1715, '天韶·羽魂'),
(1716, '天韶·雾渺'),
(1728, '寒川'),
(1729, '寒山'),
(1989, '寻踪觅宝·亘绝'),
(1990, '寻踪觅宝·宿世'),
(1996, '凌绝·溪行'),
(2006, '凌绝·威灵'),
(2007, '凌绝·鸣竹'),
(2019, '兹杨'),
(2020, '兹松');

-- --------------------------------------------------------

--
-- 表的结构 `equip_source_source`
--

CREATE TABLE `equip_source_source` (
  `equipId` int(11) NOT NULL,
  `sourceId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `game_map`
--

CREATE TABLE `game_map` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `reputation`
--

CREATE TABLE `reputation` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `level` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `set_effect`
--

CREATE TABLE `set_effect` (
  `id` int(11) NOT NULL,
  `requirement` int(11) NOT NULL,
  `effectId` int(11) DEFAULT NULL,
  `setId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `set_effect`
--

INSERT INTO `set_effect` (`id`, `requirement`, `effectId`, `setId`) VALUES
(1652, 2, 453, 1675),
(1662, 2, 455, 1685),
(1663, 2, 456, 1686),
(1675, 2, 315, 1698),
(1676, 2, 315, 1699),
(1682, 2, 281, 1705),
(1692, 2, 285, 1715),
(1693, 2, 287, 1716),
(1705, 2, 471, 1728),
(1706, 2, 471, 1729),
(1966, 2, 501, 1989),
(1967, 2, 501, 1990),
(1973, 2, 453, 1996),
(1983, 2, 455, 2006),
(1984, 2, 456, 2007),
(1996, 2, 526, 2019),
(1997, 2, 526, 2020),
(2674, 3, 536, 1698),
(2675, 3, 536, 1699),
(3857, 4, 281, 1675),
(3867, 4, 285, 1685),
(3868, 4, 287, 1686),
(3880, 4, 556, 1698),
(3881, 4, 556, 1699),
(3887, 4, 453, 1705),
(3897, 4, 455, 1715),
(3898, 4, 456, 1716),
(3910, 4, 605, 1728),
(3911, 4, 605, 1729),
(4062, 4, 610, 1989),
(4063, 4, 610, 1990),
(4069, 4, 281, 1996),
(4079, 4, 285, 2006),
(4080, 4, 287, 2007),
(4092, 4, 626, 2019),
(4093, 4, 626, 2020);

-- --------------------------------------------------------

--
-- 表的结构 `source`
--

CREATE TABLE `source` (
  `id` int(11) NOT NULL,
  `redeem` enum('contribution','chivalry','prestige_fiend','prestige_virtue','arena','store') DEFAULT NULL,
  `activity` varchar(255) DEFAULT NULL,
  `limitedTime` tinyint(4) DEFAULT NULL,
  `type` enum('raid','reputation','redeem','activity','other') NOT NULL,
  `bossId` int(11) DEFAULT NULL,
  `reputationId` int(11) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `stone`
--

CREATE TABLE `stone` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `stone_attribute`
--

CREATE TABLE `stone_attribute` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `decorator` varchar(255) NOT NULL,
  `key` varchar(255) NOT NULL,
  `value` decimal(5,2) NOT NULL,
  `requiredQuantity` int(11) NOT NULL,
  `requiredLevel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `stone_attributes_stone_attribute`
--

CREATE TABLE `stone_attributes_stone_attribute` (
  `stoneId` int(11) NOT NULL,
  `stoneAttributeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `talent`
--

CREATE TABLE `talent` (
  `id` int(11) NOT NULL,
  `kungfu` varchar(255) NOT NULL,
  `index` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `icon` int(11) NOT NULL,
  `version` varchar(255) NOT NULL,
  `effectId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转储表的索引
--

--
-- 表的索引 `boss`
--
ALTER TABLE `boss`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_832d386064fe561a4e90c3e6adf` (`mapId`);

--
-- 表的索引 `effect`
--
ALTER TABLE `effect`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `enhance`
--
ALTER TABLE `enhance`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `equip`
--
ALTER TABLE `equip`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_b43fdc7007a3c98b236fe4466c0` (`effectId`),
  ADD KEY `FK_ca1eb506505133942504af5ede7` (`setId`);

--
-- 表的索引 `equip_set`
--
ALTER TABLE `equip_set`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `equip_source_source`
--
ALTER TABLE `equip_source_source`
  ADD PRIMARY KEY (`equipId`,`sourceId`),
  ADD KEY `IDX_2276f78612fbb92aa4973bb8a9` (`equipId`),
  ADD KEY `IDX_427a357c70fc9feb9108307486` (`sourceId`);

--
-- 表的索引 `game_map`
--
ALTER TABLE `game_map`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `reputation`
--
ALTER TABLE `reputation`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `set_effect`
--
ALTER TABLE `set_effect`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_cbedb5eaa9ac2d186bf17aa7353` (`effectId`),
  ADD KEY `FK_f44573805de88c3ee1f14fc1237` (`setId`);

--
-- 表的索引 `source`
--
ALTER TABLE `source`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_c531f31e06cfbdf6d42d5eb30b` (`type`),
  ADD KEY `FK_18da894412dc024daa62456e18d` (`bossId`),
  ADD KEY `FK_ddd622b27403c5dac3969f4c894` (`reputationId`);

--
-- 表的索引 `stone`
--
ALTER TABLE `stone`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `stone_attribute`
--
ALTER TABLE `stone_attribute`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `stone_attributes_stone_attribute`
--
ALTER TABLE `stone_attributes_stone_attribute`
  ADD PRIMARY KEY (`stoneId`,`stoneAttributeId`),
  ADD KEY `IDX_78555566b61a44435ac96aec3b` (`stoneId`),
  ADD KEY `IDX_7e44cd16d37c1700e4946b3afa` (`stoneAttributeId`);

--
-- 表的索引 `talent`
--
ALTER TABLE `talent`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ee902383f6629b0b3e2a27c5fd6` (`effectId`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `boss`
--
ALTER TABLE `boss`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `effect`
--
ALTER TABLE `effect`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=627;

--
-- 使用表AUTO_INCREMENT `enhance`
--
ALTER TABLE `enhance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `equip`
--
ALTER TABLE `equip`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41575;

--
-- 使用表AUTO_INCREMENT `equip_set`
--
ALTER TABLE `equip_set`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2021;

--
-- 使用表AUTO_INCREMENT `game_map`
--
ALTER TABLE `game_map`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `reputation`
--
ALTER TABLE `reputation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `set_effect`
--
ALTER TABLE `set_effect`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4094;

--
-- 使用表AUTO_INCREMENT `source`
--
ALTER TABLE `source`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `stone`
--
ALTER TABLE `stone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `stone_attribute`
--
ALTER TABLE `stone_attribute`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `talent`
--
ALTER TABLE `talent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 限制导出的表
--

--
-- 限制表 `boss`
--
ALTER TABLE `boss`
  ADD CONSTRAINT `FK_832d386064fe561a4e90c3e6adf` FOREIGN KEY (`mapId`) REFERENCES `game_map` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- 限制表 `equip`
--
ALTER TABLE `equip`
  ADD CONSTRAINT `FK_b43fdc7007a3c98b236fe4466c0` FOREIGN KEY (`effectId`) REFERENCES `effect` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_ca1eb506505133942504af5ede7` FOREIGN KEY (`setId`) REFERENCES `equip_set` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- 限制表 `equip_source_source`
--
ALTER TABLE `equip_source_source`
  ADD CONSTRAINT `FK_2276f78612fbb92aa4973bb8a90` FOREIGN KEY (`equipId`) REFERENCES `equip` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_427a357c70fc9feb9108307486e` FOREIGN KEY (`sourceId`) REFERENCES `source` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- 限制表 `set_effect`
--
ALTER TABLE `set_effect`
  ADD CONSTRAINT `FK_cbedb5eaa9ac2d186bf17aa7353` FOREIGN KEY (`effectId`) REFERENCES `effect` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_f44573805de88c3ee1f14fc1237` FOREIGN KEY (`setId`) REFERENCES `equip_set` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- 限制表 `source`
--
ALTER TABLE `source`
  ADD CONSTRAINT `FK_18da894412dc024daa62456e18d` FOREIGN KEY (`bossId`) REFERENCES `boss` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_ddd622b27403c5dac3969f4c894` FOREIGN KEY (`reputationId`) REFERENCES `reputation` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- 限制表 `stone_attributes_stone_attribute`
--
ALTER TABLE `stone_attributes_stone_attribute`
  ADD CONSTRAINT `FK_78555566b61a44435ac96aec3bf` FOREIGN KEY (`stoneId`) REFERENCES `stone` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_7e44cd16d37c1700e4946b3afa0` FOREIGN KEY (`stoneAttributeId`) REFERENCES `stone_attribute` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- 限制表 `talent`
--
ALTER TABLE `talent`
  ADD CONSTRAINT `FK_ee902383f6629b0b3e2a27c5fd6` FOREIGN KEY (`effectId`) REFERENCES `effect` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;
