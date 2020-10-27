import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 焚影圣诀: KungFuMeta = {
    name: 'fenying',
    primaryAttribute: 'spunk',
    school: '明教',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.SOLAR_LUNAR],
        ['hit', AttributeDecorator.SOLAR_LUNAR],
        ['crit', AttributeDecorator.SOLAR_LUNAR],
        ['critEffect', AttributeDecorator.SOLAR_LUNAR],
        ['overcome', AttributeDecorator.SOLAR_LUNAR],
    ],
    base: {
        attack: 1923,
        hit: 397,
        magicShield: 400 + 493,
        physicsShield: 400,
        huajing: 1725,
    },
    factor: {
        attack: 1.9,
        crit: 0.29,
    },
    override: {
        health: 1.22,
    },
};

export const 明尊琉璃体: KungFuMeta = {
    name: 'mingzun',
    primaryAttribute: 'vitality',
    school: '明教',
    role: GamingRole.TANK,
    decorator: [
        ['hit', AttributeDecorator.SOLAR_LUNAR],
    ],
    base: {
        magicShield: 400 + 457,
        physicsShield: 400 + 457,
        dodge: 914,
    },
    factor: {
        health: 1.25,
        dodge: 0.225,
        attack: 0.05,
    },
    override: {
        health: 1.22,
    },
};
