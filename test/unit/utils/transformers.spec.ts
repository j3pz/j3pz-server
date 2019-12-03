import { TestContext } from '@tsed/testing';
import { expect } from 'chai';
import { ColumnNumericTransformer } from '../../../src/utils/transformers';

describe('transformers', () => {
    before(TestContext.create);
    after(TestContext.reset);
    describe('ColumnNumericTransformer', () => {
        it('should be able to turn number to number', () => {
            const transformer = new ColumnNumericTransformer();
            expect(transformer.to(10)).is.a('number');
        });
        it('should be able to get number from string', () => {
            const transformer = new ColumnNumericTransformer();
            expect(transformer.from('10')).is.a('number');
        });
    });
});
