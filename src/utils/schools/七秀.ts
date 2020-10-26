import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 冰心诀: KungFuMeta = {
    name: 'bingxin',
    primaryAttribute: 'spirit',
    school: '七秀',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.LUNAR],
        ['hit', AttributeDecorator.LUNAR],
        ['crit', AttributeDecorator.LUNAR],
        ['critEffect', AttributeDecorator.LUNAR],
        ['overcome', AttributeDecorator.LUNAR],
    ],
    base: {
        attack: 738,
        hit: 265,
        magicShield: 753,
        physicsShield: 400,
        dodge: 265,
        huajing: 1078,
    },
    factor: {
        attack: 1.9,
        crit: 0.28,
    },
    override: {
        health: 1.21,
    },
};

export const 云裳心经: KungFuMeta = {
    name: 'yunchang',
    primaryAttribute: 'spirit',
    school: '七秀',
    role: GamingRole.HEALER,
    decorator: [
        ['hit', AttributeDecorator.LUNAR],
        ['crit', AttributeDecorator.LUNAR],
        ['critEffect', AttributeDecorator.LUNAR],
    ],
    base: {
        heal: 2144,
        magicShield: 621,
        physicsShield: 400,
        dodge: 243,
        huajing: 1078,
    },
    factor: {
        heal: 1.75,
        crit: 0.21,
    },
    override: {
        health: 1.21,
    },
};
