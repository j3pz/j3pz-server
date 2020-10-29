import { Attribute, AttributeDecorator } from '../../model/Base';

export class EmbedInfo {
    public constructor(public count: number, public attributes: [Attribute, AttributeDecorator][]) {

    }
}

const attributeTuples: [Attribute, AttributeDecorator][] = [
    ['spirit', AttributeDecorator.NONE],
    ['spunk', AttributeDecorator.NONE],
    ['strength', AttributeDecorator.NONE],
    ['vitality', AttributeDecorator.NONE],
    ['agility', AttributeDecorator.NONE],
    ['healthRecover', AttributeDecorator.NONE],
    ['crit', AttributeDecorator.PHYSICS],
    ['crit', AttributeDecorator.LUNAR],
    ['attack', AttributeDecorator.PHYSICS],
    ['hit', AttributeDecorator.PHYSICS],
    ['crit', AttributeDecorator.MAGIC],
    ['strain', AttributeDecorator.NONE],
    ['overcome', AttributeDecorator.SOLAR],
    ['overcome', AttributeDecorator.NEUTRAL],
    ['overcome', AttributeDecorator.LUNAR],
    ['attack', AttributeDecorator.LUNAR],
    ['attack', AttributeDecorator.NEUTRAL],
    ['crit', AttributeDecorator.SOLAR],
    ['overcome', AttributeDecorator.PHYSICS],
    ['attack', AttributeDecorator.SOLAR],
    ['hit', AttributeDecorator.MAGIC],
    ['critEffect', AttributeDecorator.PHYSICS],
    ['attack', AttributeDecorator.POISON],
    ['crit', AttributeDecorator.NEUTRAL],
    ['critEffect', AttributeDecorator.NEUTRAL],
    ['critEffect', AttributeDecorator.LUNAR],
    ['critEffect', AttributeDecorator.SOLAR],
    ['overcome', AttributeDecorator.MAGIC],
    ['overcome', AttributeDecorator.POISON],
    ['crit', AttributeDecorator.POISON],
    ['critEffect', AttributeDecorator.POISON],
    ['critEffect', AttributeDecorator.MAGIC],
    ['overcome', AttributeDecorator.SOLAR_LUNAR],
    ['attack', AttributeDecorator.SOLAR_LUNAR],
    ['critEffect', AttributeDecorator.SOLAR_LUNAR],
    ['crit', AttributeDecorator.SOLAR_LUNAR],
    ['hit', AttributeDecorator.ALL],
    ['crit', AttributeDecorator.ALL],
    ['critEffect', AttributeDecorator.ALL],
    ['health', AttributeDecorator.NONE],
    ['attack', AttributeDecorator.MAGIC],
    ['heal', AttributeDecorator.NONE],
    ['physicsShield', AttributeDecorator.NONE],
    ['magicShield', AttributeDecorator.NONE],
    ['parryValue', AttributeDecorator.NONE],
    ['dodge', AttributeDecorator.NONE],
    ['parryBase', AttributeDecorator.NONE],
    ['threat', AttributeDecorator.NONE],
    ['manaRecover', AttributeDecorator.NONE],
    ['mana', AttributeDecorator.NONE],
    ['hit', AttributeDecorator.NEUTRAL],
    ['haste', AttributeDecorator.NONE],
    ['huajing', AttributeDecorator.NONE],
    ['hit', AttributeDecorator.SOLAR],
    ['hit', AttributeDecorator.LUNAR],
    ['toughness', AttributeDecorator.NONE],
    ['hit', AttributeDecorator.SOLAR_LUNAR],
    ['hit', AttributeDecorator.POISON],
    ['surplus', AttributeDecorator.NONE],
];

export class EquipEmbedTransformer {
    public from(composed: string): EmbedInfo {
        if (!composed || composed === '') {
            return new EmbedInfo(0, []);
        }
        const count = parseInt(composed.substr(0, 1), 10);
        const attributes = Array.from({ length: count }).map((_, index) => {
            const idx = parseInt(composed.substr(2 + index * 3, 2), 10);
            return attributeTuples[idx];
        });
        return new EmbedInfo(count, attributes);
    }

    public to(info: EmbedInfo): string {
        if (info.count) {
            const composed = `${info.count}${info.attributes.map((tuple) => {
                const idx = attributeTuples.findIndex(([attribute, decorator]) => {
                    if (attribute === tuple[0] && decorator === tuple[1]) return true;
                    return false;
                });
                return `D${`${idx}`.padStart(2, '0')}`;
            })}`;
            return composed;
        }
        return '';
    }
}
