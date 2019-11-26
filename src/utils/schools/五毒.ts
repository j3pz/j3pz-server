import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 毒经: KungFuMeta = {
    primaryAttribute: 'spirit',
    school: '五毒',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.MAGIC],
        ['hit', AttributeDecorator.MAGIC],
        ['crit', AttributeDecorator.MAGIC],
        ['critEffect', AttributeDecorator.MAGIC],
        ['overcome', AttributeDecorator.MAGIC],
    ],
    base: {
        attack: 775,
        hit: 397,
        magicShield: 621,
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

export const 补天诀: KungFuMeta = {
    primaryAttribute: 'spirit',
    school: '五毒',
    role: GamingRole.HEALER,
    decorator: [
        ['crit', AttributeDecorator.MAGIC],
        ['critEffect', AttributeDecorator.MAGIC],
    ],
    base: {
        heal: 2072,
        magicShield: 621,
        physicsShield: 400,
        huajing: 1078,
    },
    factor: {
        heal: 1.85,
    },
    override: {
        health: 1.21,
    },
};
