import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 天罗诡道: KungFuMeta = {
    name: 'tianluo',
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
        attack: 1648,
        crit: 572,
        magicShield: 400 + 462,
        physicsShield: 400,
        huajing: 1725,
    },
    factor: {
        attack: 1.75,
        crit: 0.57,
    },
    override: {
        health: 1.22,
    },
};

export const 惊羽诀: KungFuMeta = {
    name: 'jingyu',
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
        attack: 1450,
        overcome: 1327,
        magicShield: 400,
        physicsShield: 400,
        huajing: 1725,
    },
    factor: {
        attack: 1.45,
        crit: 0.59,
    },
    override: {
        health: 1.22,
    },
};
