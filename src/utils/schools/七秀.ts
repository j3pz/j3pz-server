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
        attack: 1868,
        magicShield: 400 + 323,
        physicsShield: 400 + 254,
        huajing: 1175,
    },
    factor: {
        attack: 1.9,
        crit: 0.28,
    },
    override: {
        health: 1.22,
    },
};

export const 云裳心经: KungFuMeta = {
    name: 'yunchang',
    primaryAttribute: 'spirit',
    school: '七秀',
    role: GamingRole.HEALER,
    decorator: [
        ['attack', AttributeDecorator.LUNAR],
        ['hit', AttributeDecorator.LUNAR],
        ['crit', AttributeDecorator.LUNAR],
        ['critEffect', AttributeDecorator.LUNAR],
        ['overcome', AttributeDecorator.LUNAR],
    ],
    base: {
        heal: 2979,
        magicShield: 400 + 578,
        physicsShield: 400 + 578,
        huajing: 1725,
    },
    factor: {
        heal: 1.75,
        crit: 0.21,
    },
    override: {
        health: 1.22,
    },
};
