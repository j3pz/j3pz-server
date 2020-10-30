import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 分山劲: KungFuMeta = {
    name: 'fenshan',
    primaryAttribute: 'agility',
    school: '苍云',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.PHYSICS],
        ['hit', AttributeDecorator.PHYSICS],
        ['crit', AttributeDecorator.PHYSICS],
        ['critEffect', AttributeDecorator.PHYSICS],
        ['overcome', AttributeDecorator.PHYSICS],
    ],
    base: {
        attack: 1526,
        overcome: 694,
        parryBase: 554,
        physicsShield: 400,
        magicShield: 400,
        huajing: 1725,
    },
    factor: {
        attack: 1.71,
        parryBase: 0.1,
        parryValue: 1,
    },
    override: {
        health: 1.22,
    },
};

export const 铁骨衣: KungFuMeta = {
    name: 'tiegu',
    primaryAttribute: 'vitality',
    school: '苍云',
    role: GamingRole.TANK,
    decorator: [
        ['attack', AttributeDecorator.PHYSICS],
        ['hit', AttributeDecorator.PHYSICS],
        ['crit', AttributeDecorator.PHYSICS],
        ['critEffect', AttributeDecorator.PHYSICS],
        ['overcome', AttributeDecorator.PHYSICS],
    ],
    base: {
        parryBase: 914,
        parryValue: 2114,
        physicsShield: 400 + 548,
        magicShield: 400,
    },
    factor: {
        health: 2.2,
        parryBase: 0.15,
        parryValue: 0.5,
        attack: 0.04,
    },
    override: {
        health: 1.22,
    },
};
