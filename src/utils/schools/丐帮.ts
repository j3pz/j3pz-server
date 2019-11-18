import { KungFuMeta } from '../KungfuMeta';
import { AttributeDecorator } from '../../model/Base';

export const 笑尘诀: KungFuMeta = {
    primaryAttribute: 'strength',
    school: '丐帮',
    decorator: [
        ['attack', AttributeDecorator.PHYSICS],
        ['hit', AttributeDecorator.PHYSICS],
        ['crit', AttributeDecorator.PHYSICS],
        ['critEffect', AttributeDecorator.PHYSICS],
        ['overcome', AttributeDecorator.PHYSICS],
    ],
    base: {
        attack: 646,
        hit: 442,
        magicShield: 400,
        physicsShield: 559,
        huajing: 1078,
    },
    factor: {
        attack: 1.5,
        overcome: 0.47,
    },
    override: {
        health: 1.21,
    },
};
