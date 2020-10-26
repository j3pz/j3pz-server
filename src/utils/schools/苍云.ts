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
        attack: 627,
        hit: 256,
        overcome: 353,
        parryBase: 318,
        physicsShield: 400,
        magicShield: 400,
        huajing: 1078,
    },
    factor: {
        attack: 1.71,
        parryValue: 1,
    },
    override: {
        health: 1.21,
    },
};

export const 铁骨衣: KungFuMeta = {
    name: 'tiegu',
    primaryAttribute: 'vitality',
    school: '苍云',
    role: GamingRole.TANK,
    decorator: [
        ['hit', AttributeDecorator.PHYSICS],
    ],
    base: {
        parryBase: 414,
        parryValue: 958,
        physicsShield: 6494,
        magicShield: 400,
    },
    factor: {
        health: 2.2,
        parryBase: 0.15,
        parryValue: 0.5,
    },
    override: {
        health: 1.47,
    },
};
