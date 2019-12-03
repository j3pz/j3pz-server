import { ExpressApplication } from '@tsed/common';
import { TestContext } from '@tsed/testing';
import { expect } from 'chai';
import SuperTest from 'supertest';
import { Server } from '../../../src/Server';

describe('Equip', () => {
    let request: SuperTest.SuperTest<SuperTest.Test>;
    // bootstrap your expressApplication in first
    before(TestContext.bootstrap(Server));
    before(TestContext.inject([ExpressApplication], (expressApplication: ExpressApplication) => {
        request = SuperTest(expressApplication);
    }));
    after(TestContext.reset);

    // then run your test
    describe('GET /api/equip', () => {
        it('should return all equip', async () => {
            const response = await request.get('/api/equip').expect(200);

            expect(response.body.data).to.be.an('array');
        });
    });
});
