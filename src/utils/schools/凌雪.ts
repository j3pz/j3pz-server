import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 隐龙诀: KungFuMeta = {
    name: 'yinlong',
    primaryAttribute: 'agility',
    school: '凌雪',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.PHYSICS],
        ['hit', AttributeDecorator.PHYSICS],
        ['crit', AttributeDecorator.PHYSICS],
        ['critEffect', AttributeDecorator.PHYSICS],
        ['overcome', AttributeDecorator.PHYSICS],
    ],
    base: {
        attack: 1618,
        overcome: 952,
        magicShield: 400,
        physicsShield: 400,
        huajing: 1725,
    },
    factor: {
        attack: 1.5,
        overcome: 0.47,
    },
    override: {
        health: 1.22,
    },
};
