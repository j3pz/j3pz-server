import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator } from '../../model/Base';

export const 紫霞功: KungFuMeta = {
    primaryAttribute: 'spirit',
    school: '纯阳',
    decorator: [
        ['attack', AttributeDecorator.MAGIC],
        ['hit', AttributeDecorator.MAGIC],
        ['crit', AttributeDecorator.MAGIC],
        ['critEffect', AttributeDecorator.MAGIC],
        ['overcome', AttributeDecorator.MAGIC],
    ],
    base: {
        attack: 664,
        hit: 442,
        crit: 265,
        magicShield: 665,
        physicsShield: 400,
        huajing: 1078,
    },
    factor: {
        attack: 1.75,
        crit: 0.56,
        overcome: 0,
    },
    override: {
        health: 1.21,
    },
};

export const 太虚剑意: KungFuMeta = {
    primaryAttribute: 'agility',
    school: '纯阳',
    decorator: [
        ['attack', AttributeDecorator.PHYSICS],
        ['hit', AttributeDecorator.PHYSICS],
        ['crit', AttributeDecorator.PHYSICS],
        ['critEffect', AttributeDecorator.PHYSICS],
        ['overcome', AttributeDecorator.PHYSICS],
    ],
    base: {
        attack: 584,
        hit: 486,
        crit: 486,
        magicShield: 400,
        physicsShield: 400,
        huajing: 1078,
    },
    factor: {
        attack: 1.45,
        crit: 0.58,
    },
    override: {
        health: 1.21,
    },
};
