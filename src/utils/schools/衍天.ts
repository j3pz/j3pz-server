import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 太玄经: KungFuMeta = {
    name: 'taixuan',
    primaryAttribute: 'spunk',
    school: '衍天',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.NEUTRAL],
        ['hit', AttributeDecorator.NEUTRAL],
        ['crit', AttributeDecorator.NEUTRAL],
        ['critEffect', AttributeDecorator.NEUTRAL],
        ['overcome', AttributeDecorator.NEUTRAL],
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
