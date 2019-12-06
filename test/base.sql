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

-- --------------------------------------------------------

--
-- 表的结构 `equip_set`
--

CREATE TABLE `equip_set` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `enhance`
--
ALTER TABLE `enhance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `equip`
--
ALTER TABLE `equip`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `equip_set`
--
ALTER TABLE `equip_set`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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

