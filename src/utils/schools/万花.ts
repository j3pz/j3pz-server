import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 花间游: KungFuMeta = {
    name: 'huajian',
    primaryAttribute: 'spunk',
    school: '万花',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.NEUTRAL],
        ['hit', AttributeDecorator.NEUTRAL],
        ['crit', AttributeDecorator.NEUTRAL],
        ['critEffect', AttributeDecorator.NEUTRAL],
        ['overcome', AttributeDecorator.NEUTRAL],
    ],
    base: {
        attack: 1831,
        magicShield: 400 + 231,
        physicsShield: 400,
        huajing: 1725,
    },
    factor: {
        attack: 1.95,
        overcome: 0.19,
    },
    override: {
        health: 1.22,
    },
};

export const 离经易道: KungFuMeta = {
    name: 'lijing',
    primaryAttribute: 'spirit',
    school: '万花',
    role: GamingRole.HEALER,
    decorator: [
        ['attack', AttributeDecorator.NEUTRAL],
        ['hit', AttributeDecorator.NEUTRAL],
        ['crit', AttributeDecorator.NEUTRAL],
        ['critEffect', AttributeDecorator.NEUTRAL],
        ['overcome', AttributeDecorator.NEUTRAL],
    ],
    base: {
        heal: 2780,
        magicShield: 400 + 578,
        physicsShield: 400,
        huajing: 1725,
    },
    factor: {
        heal: 1.65,
        crit: 0.41,
    },
    override: {
        health: 1.22,
    },
};
