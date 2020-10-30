import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 易筋经: KungFuMeta = {
    name: 'yijin',
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
        attack: 1831,
        physicsShield: 400 + 265,
        magicShield: 400 + 312,
        huajing: 1725,
    },
    factor: {
        attack: 1.85,
        crit: 0.38,
    },
    override: {
        health: 1.34,
    },
};


export const 洗髓经: KungFuMeta = {
    name: 'xisui',
    primaryAttribute: 'vitality',
    school: '少林',
    role: GamingRole.TANK,
    decorator: [
        ['attack', AttributeDecorator.SOLAR],
        ['hit', AttributeDecorator.SOLAR],
        ['crit', AttributeDecorator.SOLAR],
        ['critEffect', AttributeDecorator.SOLAR],
        ['overcome', AttributeDecorator.SOLAR],
    ],
    base: {
        magicShield: 400 + 914,
        physicsShield: 400 + 548,
    },
    factor: {
        health: 2.5,
        magicShield: 0.1,
        attack: 0.05,
    },
    override: {
        health: 1.34,
    },
};
