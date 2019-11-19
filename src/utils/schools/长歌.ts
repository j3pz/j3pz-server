import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 相知: KungFuMeta = {
    primaryAttribute: 'spirit',
    school: '长歌',
    role: GamingRole.HEALER,
    decorator: [
        ['attack', AttributeDecorator.MAGIC],
        ['hit', AttributeDecorator.MAGIC],
        ['crit', AttributeDecorator.MAGIC],
        ['critEffect', AttributeDecorator.MAGIC],
        ['overcome', AttributeDecorator.MAGIC],
    ],
    base: {
        heal: 2215,
        magicShield: 621,
        physicsShield: 400,
        huajing: 1078,
    },
    factor: {
        heal: 1.7,
        crit: 0.31,
    },
    override: {
        health: 1.21,
    },
};

export const 莫问: KungFuMeta = {
    primaryAttribute: 'spirit',
    school: '长歌',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.MAGIC],
        ['hit', AttributeDecorator.MAGIC],
        ['crit', AttributeDecorator.MAGIC],
        ['critEffect', AttributeDecorator.MAGIC],
        ['overcome', AttributeDecorator.MAGIC],
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
        attack: 1.85,
        crit: 0.38,
    },
    override: {
        health: 1.21,
    },
};
