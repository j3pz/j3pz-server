import { TestContext } from '@tsed/testing';
import { expect } from 'chai';
import { generateReqId } from '../../../src/utils/RequestId';

describe('Request ids', () => {
    before(TestContext.create);
    after(TestContext.reset);
    it('should be a string and have length of at least 10', () => {
        Array.from({ length: 50 }).map(() => generateReqId()).forEach((id) => {
            expect(id).to.be.a('string').and.satisfy((_: string) => _.startsWith('_'));
            expect(id.length).to.be.gte(10);
        });
    });
    it('should be unique for a while', () => {
        const size = 50;
        const ids = new Set(Array.from({ length: size }).map(() => generateReqId()));
        expect(ids.size).equals(size);
    });
});
