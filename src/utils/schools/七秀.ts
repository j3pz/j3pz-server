import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator } from '../../model/Base';

export const 冰心诀: KungFuMeta = {
    primaryAttribute: 'spirit',
    school: '七秀',
    decorator: [
        ['attack', AttributeDecorator.MAGIC],
        ['hit', AttributeDecorator.MAGIC],
        ['crit', AttributeDecorator.MAGIC],
        ['critEffect', AttributeDecorator.MAGIC],
        ['overcome', AttributeDecorator.MAGIC],
    ],
    base: {
        attack: 738,
        hit: 265,
        magicShield: 753,
        physicsShield: 400,
        dodge: 265,
        huajing: 1078,
    },
    factor: {
        attack: 1.9,
        crit: 0.28,
    },
    override: {
        health: 1.21,
    },
};

export const 云裳心经: KungFuMeta = {
    primaryAttribute: 'heal',
    school: '七秀',
    decorator: [
        ['crit', AttributeDecorator.MAGIC],
        ['critEffect', AttributeDecorator.MAGIC],
    ],
    base: {
        heal: 2144,
        magicShield: 621,
        physicsShield: 400,
        dodge: 243,
        huajing: 1078,
    },
    factor: {
        heal: 1.75,
        crit: 0.21,
    },
    override: {
        health: 1.21,
    },
};
