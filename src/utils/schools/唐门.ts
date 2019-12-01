import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 天罗诡道: KungFuMeta = {
    primaryAttribute: 'spunk',
    school: '唐门',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.POISON],
        ['hit', AttributeDecorator.PHYSICS],
        ['crit', AttributeDecorator.PHYSICS],
        ['critEffect', AttributeDecorator.PHYSICS],
        ['overcome', AttributeDecorator.POISON],
    ],
    base: {
        attack: 664,
        hit: 353,
        crit: 265,
        magicShield: 576,
        physicsShield: 400,
        huajing: 1078,
    },
    factor: {
        attack: 1.75,
        crit: 0.57,
    },
    override: {
        health: 1.21,
    },
};

export const 惊羽诀: KungFuMeta = {
    primaryAttribute: 'strength',
    school: '唐门',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.PHYSICS],
        ['hit', AttributeDecorator.PHYSICS],
        ['crit', AttributeDecorator.PHYSICS],
        ['critEffect', AttributeDecorator.PHYSICS],
        ['overcome', AttributeDecorator.PHYSICS],
    ],
    base: {
        attack: 584,
        hit: 442,
        overcome: 486,
        magicShield: 400,
        physicsShield: 400,
        huajing: 1078,
    },
    factor: {
        attack: 1.45,
        crit: 0.59,
    },
    override: {
        health: 1.21,
    },
};
