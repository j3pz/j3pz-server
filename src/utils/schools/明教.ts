import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator } from '../../model/Base';

export const 焚影圣诀: KungFuMeta = {
    primaryAttribute: 'spunk',
    school: '明教',
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
        attack: 1.9,
        crit: 0.29,
    },
    override: {
        health: 1.21,
    },
};

export const 明尊琉璃体: KungFuMeta = {
    primaryAttribute: 'vitality',
    school: '明教',
    decorator: [],
    base: {
        magicShield: 607,
        physicsShield: 607,
        dodge: 414,
    },
    factor: {
        health: 1.25,
        dodge: 0.225,
    },
    override: {
        health: 1.47,
    },
};
