import {
    PrimaryAttribute, School, DecoratorTuple, ExtraAttribute, SecondaryAttribute, GamingRole, Attribute,
} from '../model/Base';

type AttributeBaseValue = Partial<Record<PrimaryAttribute | SecondaryAttribute | ExtraAttribute, number>>;
type AttributeFactor = Partial<Record<SecondaryAttribute | ExtraAttribute, number>>;

export interface KungFuInfo {
    // 主属性
    primaryAttribute: PrimaryAttribute;
    // 门派
    school: School;
    // 心法类型
    role: GamingRole;
}

export interface KungFuMeta extends KungFuInfo {
    // 属性修饰
    decorator: DecoratorTuple[];
    // 属性基础数值
    base: AttributeBaseValue;
    // 主属性提升比例
    factor: AttributeFactor;
    // 覆盖默认提升比例
    override: AttributeFactor;
}

export const BANNED_ATTRIBUTES_BY_ROLE: { [key in GamingRole]: Attribute[] } = {
    [GamingRole.DAMAGE_DEALER]: ['physicsShield', 'magicShield', 'dodge', 'parryBase', 'parryValue', 'heal', 'threat'],
    [GamingRole.HEALER]: ['physicsShield', 'magicShield', 'dodge', 'parryBase', 'parryValue', 'attack', 'overcome', 'threat', 'hit', 'surplus'],
    [GamingRole.TANK]: ['attack', 'crit', 'critEffect', 'damageBase', 'damageRange', 'heal', 'overcome', 'surplus'],
};
