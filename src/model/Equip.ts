import { MainAttribute, KungFu, School } from './Base';
import { Resource } from './Server';

interface EquipCore {
    category: string; // 装备类型
    name: string; // 装备名称
    tags: string[]; // 装备标签（破防、会心、命中、无双）
    quality: number; // 装备品级
    icon: number; // 图标 id
}

interface EquipAttribute extends EquipCore {
    // 基础属性
    basicMagicShield?: number;
    basicPhysicsShield?: number;
    body?: number;
    agility?: number;
    spirit?: number;
    strength?: number;
    spunk?: number;
    attackSpeed?: number;
    damageBase?: number;
    damageRange?: number;
    // 属性
    physicsShield?: number;
    magicShield?: number;
    dodge?: number;
    parryBase?: number;
    parryValue?: number;
    toughness?: number;
    attack?: number;
    heal?: number;
    crit?: number;
    critEffect?: number;
    overcome?: number;
    hit?: number;
    strain?: number;
    haste?: number;
    threat?: number;
    huajing?: number;
    // 其他信息
    // texiao?: any;
    score?: number;
    strengthen?: number;
    school?: School;
    embed?: string;
    kungFu?: KungFu;
    mainAttribute?: MainAttribute;
    dropSource?: string;
}


export interface Equip extends Resource {
    // id: number; // 装备 id
    // type: 'equip';
    attributes: EquipAttribute;
}
