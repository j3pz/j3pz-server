import { ExpressApplication } from '@tsed/common';
import { TestContext } from '@tsed/testing';
import { expect } from 'chai';
import SuperTest from 'supertest';

describe('Enhance', () => {
    let request: SuperTest.SuperTest<SuperTest.Test>;
    before(TestContext.inject([ExpressApplication], (expressApplication: ExpressApplication) => {
        request = SuperTest(expressApplication);
    }));

    describe('GET /api/enhance', () => {
        it('should return 400001 error if no kungfu provided', async () => {
            const response = await request.get('/api/enhance').expect(400);
            expect(response.body.errors).to.be.an('array');
            expect(response.body.errors[0].code).equals(400001);
        });
        it('should return 400001 error if no valid kungfu provided', async () => {
            const kungfu = encodeURIComponent('花间');
            const response = await request.get(`/api/enhance?kungfu=${kungfu}`).expect(400);
            expect(response.body.errors).to.be.an('array');
            expect(response.body.errors[0].code).equals(400001);
        });
        it('should return 400002 error if no category provided', async () => {
            const kungfu = encodeURIComponent('花间游');
            const response = await request.get(`/api/enhance?kungfu=${kungfu}`).expect(400);
            expect(response.body.errors).to.be.an('array');
            expect(response.body.errors[0].code).equals(400002);
        });
        it('should return 400002 error if valid category provided', async () => {
            const kungfu = encodeURIComponent('花间游');
            const response = await request.get(`/api/enhance?kungfu=${kungfu}&category=ha`).expect(400);
            expect(response.body.errors).to.be.an('array');
            expect(response.body.errors[0].code).equals(400002);
        });
        it('should return all enhances', async () => {
            const kungfu = encodeURIComponent('花间游');
            const response = await request.get(`/api/enhance?kungfu=${kungfu}&category=hat`).expect(200);
            expect(response.body.data).to.be.an('array');
            expect(response.body.data.length).equals(0);
        });
    });

    // describe('GET /api/enhance/:id', () => {

    // });
});
