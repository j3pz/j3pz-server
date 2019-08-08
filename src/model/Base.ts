export type School = '万花' | '少林' | '明教' | '唐门' | '七秀' | '五毒' | '纯阳' | '天策' | '丐帮' | '藏剑' | '苍云' | '长歌' | '霸刀' | '蓬莱';
export type KungFu =
    '花间游' | '易筋经' | '焚影圣诀' | '天罗诡道' |
    '冰心诀' | '毒经' | '紫霞功' | '莫问' |
    '太虚剑意' | '藏剑' | '分山劲' | '凌海诀' |
    '惊羽诀' | '傲血战意' | '笑尘诀' | '北傲诀' |
    '离经易道' | '云裳心经' | '补天诀' | '相知' |
    '铁牢律' | '洗髓经' | '明尊琉璃体' | '铁骨衣';
export type PrimaryAttribute = 'vitality' | 'spunk' | 'spirit' | 'strength' | 'agility' | 'heal';
export type SecondaryAttribute =
    'physicsShield' | 'magicShield' | 'dodge' | 'parryBase' | 'parryValue' | 'toughness' |
    'attack' | 'heal' | 'crit' | 'critEffect' | 'overcome' |
    'hit' | 'strain' | 'haste' | 'threat' | 'huajing'
export type MinorAttribute = 'basicMagicShield' | 'basicPhysicsShield' | 'attackSpeed' | 'damageBase' | 'damageRange';
export type AttributeTag =
    'physicsShield' | 'magicShield' | 'dodge' | 'parryBase' | 'toughness' |
    'crit' | 'overcome' | 'hit' | 'strain' | 'haste';

export type Category = '0_hat' | '1_jacket' | '2_belt' | '3_wrist' | '4_bottoms' | '5_shoes' | '6_necklace' | '7_pendant' | '8_ring' | '9_ring' | 'a_secondaryWeapon' | 'b_primaryWeapon' | 'c_primaryWeapon';
