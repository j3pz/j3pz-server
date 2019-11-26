import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 北傲诀: KungFuMeta = {
    primaryAttribute: 'strength',
    school: '霸刀',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.PHYSICS],
        ['hit', AttributeDecorator.PHYSICS],
        ['crit', AttributeDecorator.PHYSICS],
        ['critEffect', AttributeDecorator.PHYSICS],
        ['overcome', AttributeDecorator.PHYSICS],
    ],
    base: {
        attack: 664,
        hit: 442,
        physicsShield: 400,
        magicShield: 400,
        huajing: 1078,
    },
    factor: {
        attack: 1.55,
        overcome: 0.36,
    },
    override: {
        health: 1.21,
    },
};
