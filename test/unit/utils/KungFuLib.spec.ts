import { TestContext } from '@tsed/testing';
import { expect } from 'chai';
import { kungFuLib } from '../../../src/utils/KungFuLib';

describe('KungFuLib', () => {
    before(TestContext.create);
    after(TestContext.reset);
    it('should have 26 kungfues', () => {
        expect(Object.keys(kungFuLib).length).equals(26);
    });
});
