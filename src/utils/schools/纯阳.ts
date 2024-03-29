import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 紫霞功: KungFuMeta = {
    name: 'zixia',
    primaryAttribute: 'spirit',
    school: '纯阳',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.NEUTRAL],
        ['hit', AttributeDecorator.NEUTRAL],
        ['crit', AttributeDecorator.NEUTRAL],
        ['critEffect', AttributeDecorator.NEUTRAL],
        ['overcome', AttributeDecorator.NEUTRAL],
    ],
    base: {
        attack: 1648,
        crit: 803,
        magicShield: 400 + 346,
        physicsShield: 400,
        huajing: 1725,
    },
    factor: {
        attack: 1.75,
        crit: 0.56,
    },
    override: {
        health: 1.22,
    },
};

export const 太虚剑意: KungFuMeta = {
    name: 'taixu',
    primaryAttribute: 'agility',
    school: '纯阳',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.PHYSICS],
        ['hit', AttributeDecorator.PHYSICS],
        ['crit', AttributeDecorator.PHYSICS],
        ['critEffect', AttributeDecorator.PHYSICS],
        ['overcome', AttributeDecorator.PHYSICS],
    ],
    base: {
        attack: 1450,
        crit: 1327,
        magicShield: 400,
        physicsShield: 400,
        huajing: 1725,
    },
    factor: {
        attack: 1.45,
        crit: 0.58,
    },
    override: {
        health: 1.22,
    },
};
