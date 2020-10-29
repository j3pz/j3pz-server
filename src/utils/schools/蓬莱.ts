import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 凌海诀: KungFuMeta = {
    name: 'penglai',
    primaryAttribute: 'agility',
    school: '蓬莱',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.PHYSICS],
        ['hit', AttributeDecorator.PHYSICS],
        ['crit', AttributeDecorator.PHYSICS],
        ['critEffect', AttributeDecorator.PHYSICS],
        ['overcome', AttributeDecorator.PHYSICS],
    ],
    base: {
        attack: 1602,
        crit: 986,
        magicShield: 400,
        physicsShield: 400,
        huajing: 1725,
    },
    factor: {
        attack: 1.55,
        crit: 0.36,
    },
    override: {
        health: 1.22,
    },
};
