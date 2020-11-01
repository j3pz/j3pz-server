import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator, GamingRole } from '../../model/Base';

export const 相知: KungFuMeta = {
    name: 'xiangzhi',
    primaryAttribute: 'spirit',
    school: '长歌',
    role: GamingRole.HEALER,
    decorator: [
        ['attack', AttributeDecorator.LUNAR],
        ['hit', AttributeDecorator.LUNAR],
        ['crit', AttributeDecorator.LUNAR],
        ['critEffect', AttributeDecorator.LUNAR],
        ['overcome', AttributeDecorator.LUNAR],
    ],
    base: {
        heal: 3078,
        magicShield: 400 + 578,
        physicsShield: 400,
        huajing: 1725,
    },
    factor: {
        heal: 1.7,
        crit: 0.31,
    },
    override: {
        health: 1.22,
    },
};

export const 莫问: KungFuMeta = {
    name: 'mowen',
    primaryAttribute: 'spirit',
    school: '长歌',
    role: GamingRole.DAMAGE_DEALER,
    decorator: [
        ['attack', AttributeDecorator.LUNAR],
        ['hit', AttributeDecorator.LUNAR],
        ['crit', AttributeDecorator.LUNAR],
        ['critEffect', AttributeDecorator.LUNAR],
        ['overcome', AttributeDecorator.LUNAR],
    ],
    base: {
        attack: 1648,
        crit: 572,
        magicShield: 400 + 462,
        physicsShield: 400,
        huajing: 1725,
    },
    factor: {
        attack: 1.85,
        crit: 0.38,
    },
    override: {
        health: 1.22,
    },
};
