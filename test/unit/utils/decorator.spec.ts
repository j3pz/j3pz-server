import { TestContext } from '@tsed/testing';
import { expect } from 'chai';
import { AttributeDecorator } from '../../../src/model/Base';
import { getDecoratorList } from '../../../src/utils/decorator';

describe('decorator', () => {
    before(TestContext.create);
    after(TestContext.reset);
    it('should get parent decorator correctly', () => {
        const inputs = [
            AttributeDecorator.NONE,
            AttributeDecorator.ALL,
            AttributeDecorator.PHYSICS,
            AttributeDecorator.MAGIC,
            AttributeDecorator.NEUTRAL,
        ];
        const outputs = [
            [AttributeDecorator.NONE],
            [AttributeDecorator.ALL, AttributeDecorator.NONE],
            [AttributeDecorator.PHYSICS, AttributeDecorator.ALL, AttributeDecorator.NONE],
            [AttributeDecorator.MAGIC, AttributeDecorator.ALL, AttributeDecorator.NONE],
            [AttributeDecorator.NEUTRAL, AttributeDecorator.MAGIC, AttributeDecorator.ALL, AttributeDecorator.NONE],
        ];
        inputs.forEach((input, i) => {
            expect(getDecoratorList(input)).to.deep.equal(outputs[i]);
        });
    });
});
