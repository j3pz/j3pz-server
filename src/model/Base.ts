import { lit } from '../utils/literal';

export const School = {
    通用: lit('通用'),
    精简: lit('精简'),
    万花: lit('万花'),
    少林: lit('少林'),
    明教: lit('明教'),
    唐门: lit('唐门'),
    七秀: lit('七秀'),
    五毒: lit('五毒'),
    纯阳: lit('纯阳'),
    天策: lit('天策'),
    丐帮: lit('丐帮'),
    藏剑: lit('藏剑'),
    苍云: lit('苍云'),
    长歌: lit('长歌'),
    霸刀: lit('霸刀'),
    蓬莱: lit('蓬莱'),
    凌雪: lit('凌雪'),
};
export type School = (typeof School)[keyof typeof School];

export const KungFu = {
    花间游: lit('花间游'),
    易筋经: lit('易筋经'),
    焚影圣诀: lit('焚影圣诀'),
    天罗诡道: lit('天罗诡道'),
    冰心诀: lit('冰心诀'),
    毒经: lit('毒经'),
    紫霞功: lit('紫霞功'),
    莫问: lit('莫问'),
    太虚剑意: lit('太虚剑意'),
    山居剑意: lit('山居剑意'),
    问水诀: lit('问水诀'),
    分山劲: lit('分山劲'),
    凌海诀: lit('凌海诀'),
    惊羽诀: lit('惊羽诀'),
    傲血战意: lit('傲血战意'),
    笑尘诀: lit('笑尘诀'),
    北傲诀: lit('北傲诀'),
    离经易道: lit('离经易道'),
    云裳心经: lit('云裳心经'),
    补天诀: lit('补天诀'),
    相知: lit('相知'),
    铁牢律: lit('铁牢律'),
    洗髓经: lit('洗髓经'),
    明尊琉璃体: lit('明尊琉璃体'),
    铁骨衣: lit('铁骨衣'),
    隐龙诀: lit('隐龙诀'),
};
export type KungFu = (typeof KungFu)[keyof typeof KungFu];

export type PrimaryAttribute = 'vitality' | 'spunk' | 'spirit' | 'strength' | 'agility' | 'heal';
export type SecondaryAttribute =
    'physicsShield' | 'magicShield' | 'dodge' | 'parryBase' | 'parryValue' | 'toughness' |
    'attack' | 'heal' | 'crit' | 'critEffect' | 'overcome' |
    'hit' | 'strain' | 'haste' | 'threat' | 'huajing'
export type MinorAttribute = 'basicMagicShield' | 'basicPhysicsShield' | 'attackSpeed' | 'damageBase' | 'damageRange';
export type ExtraAttribute = 'health' | 'healthRecover' | 'mana' | 'manaRecover';

export type Attribute = PrimaryAttribute | SecondaryAttribute | MinorAttribute | ExtraAttribute;
export type AttributeTag =
    'physicsShield' | 'magicShield' | 'dodge' | 'parryBase' | 'toughness' |
    'crit' | 'overcome' | 'hit' | 'strain' | 'haste';

export const AttributeDecorator = {
    PHYSICS: lit('PHYSICS'),
    MAGIC: lit('MAGIC'),
    ALL: lit('ALL'),
    NONE: lit('NONE'),
};
export type AttributeDecorator = (typeof AttributeDecorator)[keyof typeof AttributeDecorator];
export type DecoratorTuple = [Attribute, AttributeDecorator];

export const Category = {
    HAT: lit('hat'),
    JACKET: lit('jacket'),
    BELT: lit('belt'),
    WRIST: lit('wrist'),
    BOTTOMS: lit('bottoms'),
    SHOES: lit('shoes'),
    NECKLACE: lit('necklace'),
    PENDANT: lit('pendant'),
    RING: lit('ring'),
    SECONDARY_WEAPON: lit('secondaryWeapon'),
    PRIMARY_WEAPON: lit('primaryWeapon'),
    TERTIARY_WEAPON: lit('tertiaryWeapon'),
};
export type Category = (typeof Category)[keyof typeof Category];
