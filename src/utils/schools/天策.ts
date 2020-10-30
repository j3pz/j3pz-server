import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 傲血战意: KungFuMeta = {
    name: 'aoxue',
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
        attack: 1679,
        magicShield: 400,
        physicsShield: 400 + 408,
        huajing: 1725,
    },
    factor: {
        attack: 1.6,
        overcome: 0.25,
    },
    override: {
        health: 1.22,
    },
};

export const 铁牢律: KungFuMeta = {
    name: 'tielao',
    primaryAttribute: 'vitality',
    school: '天策',
    role: GamingRole.TANK,
    decorator: [
        ['attack', AttributeDecorator.PHYSICS],
        ['hit', AttributeDecorator.PHYSICS],
        ['crit', AttributeDecorator.PHYSICS],
        ['critEffect', AttributeDecorator.PHYSICS],
        ['overcome', AttributeDecorator.PHYSICS],
    ],
    base: {
        parryBase: 548,
        parryValue: 2114,
        physicsShield: 400 + 914,
        magicShield: 400,
    },
    factor: {
        health: 1.5,
        parryBase: 0.1,
        physicsShield: 0.1,
        attack: 0.04,
    },
    override: {
        health: 1.22,
    },
};
