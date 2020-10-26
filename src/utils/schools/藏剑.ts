import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 山居剑意: KungFuMeta = {
    name: 'cangjian',
    primaryAttribute: 'agility',
    school: '藏剑',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.PHYSICS],
        ['hit', AttributeDecorator.PHYSICS],
        ['crit', AttributeDecorator.PHYSICS],
        ['critEffect', AttributeDecorator.PHYSICS],
        ['overcome', AttributeDecorator.PHYSICS],
    ],
    base: {
        attack: 615,
        hit: 265,
        crit: 176,
        dodge: 221,
        physicsShield: 400,
        magicShield: 400,
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

export const 问水诀: KungFuMeta = 山居剑意;
