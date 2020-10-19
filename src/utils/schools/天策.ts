import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 傲血战意: KungFuMeta = {
    primaryAttribute: 'strength',
    school: '天策',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.PHYSICS],
        ['hit', AttributeDecorator.PHYSICS],
        ['crit', AttributeDecorator.PHYSICS],
        ['critEffect', AttributeDecorator.PHYSICS],
        ['overcome', AttributeDecorator.PHYSICS],
    ],
    base: {
        attack: 677,
        hit: 397,

        magicShield: 400,
        physicsShield: 598,
        huajing: 1078,
    },
    factor: {
        attack: 1.6,
        overcome: 0.25,
    },
    override: {
        health: 1.21,
    },
};

export const 铁牢律: KungFuMeta = {
    primaryAttribute: 'vitality',
    school: '天策',
    role: GamingRole.TANK,
    decorator: [
        ['hit', AttributeDecorator.PHYSICS],
    ],
    base: {
        parryValue: 958,
        physicsShield: 814,
        parryBase: 249,
    },
    factor: {
        health: 1.5,
        parryBase: 0.1,
        physicsShield: 0.1,
    },
    override: {
        health: 1.47,
    },
};
