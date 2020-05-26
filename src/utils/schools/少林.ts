import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 易筋经: KungFuMeta = {
    primaryAttribute: 'spunk',
    school: '少林',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.SOLAR],
        ['hit', AttributeDecorator.SOLAR],
        ['crit', AttributeDecorator.SOLAR],
        ['critEffect', AttributeDecorator.SOLAR],
        ['overcome', AttributeDecorator.SOLAR],
    ],
    base: {
        attack: 738,
        hit: 265,
        physicsShield: 541,
        magicShield: 567,
        huajing: 1078,
    },
    factor: {
        attack: 1.85,
        crit: 0.38,
    },
    override: {
        health: 1.32,
    },
};


export const 洗髓经: KungFuMeta = {
    primaryAttribute: 'vitality',
    school: '少林',
    role: GamingRole.TANK,
    decorator: [],
    base: {
        magicShield: 814,
        physicsShield: 649,
    },
    factor: {
        health: 2.5,
        magicShield: 0.1,
    },
    override: {
        health: 1.57,
    },
};
