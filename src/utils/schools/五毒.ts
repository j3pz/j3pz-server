import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 毒经: KungFuMeta = {
    name: 'dujing',
    primaryAttribute: 'spirit',
    school: '五毒',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.POISON],
        ['hit', AttributeDecorator.POISON],
        ['crit', AttributeDecorator.POISON],
        ['critEffect', AttributeDecorator.POISON],
        ['overcome', AttributeDecorator.POISON],
    ],
    base: {
        attack: 1831,
        magicShield: 400 + 578,
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

export const 补天诀: KungFuMeta = {
    name: 'butian',
    primaryAttribute: 'spirit',
    school: '五毒',
    role: GamingRole.HEALER,
    decorator: [
        ['attack', AttributeDecorator.POISON],
        ['hit', AttributeDecorator.POISON],
        ['crit', AttributeDecorator.POISON],
        ['critEffect', AttributeDecorator.POISON],
        ['overcome', AttributeDecorator.POISON],
    ],
    base: {
        heal: 2880,
        magicShield: 400 + 578,
        physicsShield: 400,
        huajing: 1725,
    },
    factor: {
        heal: 1.85,
    },
    override: {
        health: 1.22,
    },
};
