import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 花间游: KungFuMeta = {
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
        attack: 738,
        hit: 265,
        magicShield: 576,
        physicsShield: 400,
        huajing: 1078,
    },
    factor: {
        attack: 1.95,
        overcome: 0.19,
    },
    override: {
        health: 1.21,
    },
};

export const 离经易道: KungFuMeta = {
    primaryAttribute: 'spirit',
    school: '万花',
    role: GamingRole.HEALER,
    decorator: [
        ['hit', AttributeDecorator.NEUTRAL],
        ['crit', AttributeDecorator.NEUTRAL],
        ['critEffect', AttributeDecorator.NEUTRAL],
    ],
    base: {
        heal: 2001,
        magicShield: 621,
        physicsShield: 400,
        huajing: 1078,
    },
    factor: {
        heal: 1.65,
        crit: 0.41,
    },
    override: {
        health: 1.21,
    },
};
