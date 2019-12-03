import { AttributeDecorator } from '../model/Base';

const decoratorMap = {
    [AttributeDecorator.NONE]: null,
    [AttributeDecorator.ALL]: AttributeDecorator.NONE,
    [AttributeDecorator.PHYSICS]: AttributeDecorator.ALL,
    [AttributeDecorator.MAGIC]: AttributeDecorator.ALL,
    [AttributeDecorator.NEUTRAL]: AttributeDecorator.MAGIC,
    [AttributeDecorator.SOLAR]: AttributeDecorator.MAGIC,
    [AttributeDecorator.LUNAR]: AttributeDecorator.MAGIC,
    [AttributeDecorator.POISON]: AttributeDecorator.MAGIC,
    [AttributeDecorator.SOLAR_LUNAR]: AttributeDecorator.MAGIC,
};

export function getDecoratorList(decorator: AttributeDecorator): AttributeDecorator[] {
    const parent = decoratorMap[decorator];
    if (parent) {
        return [decorator, ...getDecoratorList(parent)];
    }
    return [decorator];
}
