import { ExpressApplication } from '@tsed/common';
import { TestContext } from '@tsed/testing';
import { expect } from 'chai';
import SuperTest from 'supertest';
import { Server } from '../../../src/Server';

describe('Equip', () => {
    let request: SuperTest.SuperTest<SuperTest.Test>;
    before(TestContext.bootstrap(Server));
    before(TestContext.inject([ExpressApplication], (expressApplication: ExpressApplication) => {
        request = SuperTest(expressApplication);
    }));
    after(TestContext.reset);

    describe('GET /api/equip', () => {
        it('should return 400001 error if no kungfu provided', async () => {
            const response = await request.get('/api/equip').expect(400);
            expect(response.body.errors).to.be.an('array');
            expect(response.body.errors[0].code).equals(400001);
        });
        it('should return 400001 error if no valid kungfu provided', async () => {
            const kungfu = encodeURIComponent('花间');
            const response = await request.get(`/api/equip?kungfu=${kungfu}`).expect(400);
            expect(response.body.errors).to.be.an('array');
            expect(response.body.errors[0].code).equals(400001);
        });
        it('should return 400002 error if no category provided', async () => {
            const kungfu = encodeURIComponent('花间游');
            const response = await request.get(`/api/equip?kungfu=${kungfu}`).expect(400);
            expect(response.body.errors).to.be.an('array');
            expect(response.body.errors[0].code).equals(400002);
        });
        it('should return 400002 error if valid category provided', async () => {
            const kungfu = encodeURIComponent('花间游');
            const response = await request.get(`/api/equip?kungfu=${kungfu}&category=ha`).expect(400);
            expect(response.body.errors).to.be.an('array');
            expect(response.body.errors[0].code).equals(400002);
        });
        it('should return all equips', async () => {
            const kungfu = encodeURIComponent('花间游');
            const response = await request.get(`/api/equip?kungfu=${kungfu}&category=hat`).expect(200);
            expect(response.body.data).to.be.an('array');
            expect(response.body.data.length).equals(34);
        });
        it('should return all equip match "房"', async () => {
            const kungfu = encodeURIComponent('花间游');
            const name = encodeURIComponent('房');
            const response = await request.get(`/api/equip?kungfu=${kungfu}&category=hat&name=${name}`).expect(200);
            expect(response.body.data).to.be.an('array').has.lengthOf(2);
        });
    });

    describe('GET /api/equip/:id', () => {
        it('should return 404 for non-exist equip', async () => {
            const response = await request.get('/api/equip/100000000').expect(404);
            expect(response.body.errors).to.be.an('array');
            expect(response.body.errors[0].code).equals(404101);
        });
        it('should return a normal equip', async () => {
            const response = await request.get('/api/equip/40471').expect(200);
            expect(response.body.data).to.deep.equals({
                id: 40471,
                type: 'equip',
                attributes: {
                    id: 40471,
                    name: '倦花冠',
                    icon: 11598,
                    category: 'hat',
                    quality: 2100,
                    school: '通用',
                    primaryAttribute: 'spunk',
                    score: 3402,
                    vitality: 471,
                    spirit: 0,
                    strength: 0,
                    agility: 0,
                    spunk: 172,
                    basicPhysicsShield: 55,
                    basicMagicShield: 69,
                    damageBase: 0,
                    damageRange: 0,
                    attackSpeed: 0,
                    physicsShield: 0,
                    magicShield: 0,
                    dodge: 0,
                    parryBase: 0,
                    parryValue: 0,
                    toughness: 0,
                    attack: 375,
                    heal: 0,
                    crit: 733,
                    critEffect: 0,
                    overcome: 0,
                    haste: 0,
                    hit: 349,
                    strain: 0,
                    huajing: 0,
                    threat: 0,
                    embed: '2D39D27',
                    strengthen: 6,
                    deprecated: false,
                    effect: null,
                    set: null,
                    source: [
                        {
                            id: 160,
                            comment: null,
                            type: 'raid',
                            boss: {
                                id: 24,
                                name: '沙叱博',
                                map: {
                                    id: 100,
                                    name: '血战天策',
                                },
                            },
                        },
                        {
                            id: 173,
                            comment: null,
                            type: 'raid',
                            boss: {
                                id: 37,
                                name: '固守天策府',
                                map: {
                                    id: 100,
                                    name: '血战天策',
                                },
                            },
                        },
                        {
                            id: 392,
                            comment: null,
                            type: 'raid',
                            boss: {
                                id: 256,
                                name: '哥舒翰',
                                map: {
                                    id: 70,
                                    name: '上阳宫·双曜亭',
                                },
                            },
                        },
                        {
                            id: 877,
                            comment: null,
                            type: 'raid',
                            boss: {
                                id: 741,
                                name: '提坦德亚罗',
                                map: {
                                    id: 36,
                                    name: '荻花宫后山',
                                },
                            },
                        },
                        {
                            id: 883,
                            comment: null,
                            type: 'raid',
                            boss: {
                                id: 747,
                                name: '伊玛目',
                                map: {
                                    id: 42,
                                    name: '风雷刀谷·千雷殿',
                                },
                            },
                        },
                        {
                            id: 884,
                            comment: null,
                            type: 'raid',
                            boss: {
                                id: 748,
                                name: '慕容野狐、殷青丝',
                                map: {
                                    id: 58,
                                    name: '龙渊泽',
                                },
                            },
                        },
                    ],
                },
            });
        });
        it('should return a equip with effect', async () => {
            const response = await request.get('/api/equip/39479').expect(200);
            expect(response.body.data.id).to.equals(39479);
            expect(response.body.data.attributes.name).to.equals('沧海间');
            expect(response.body.data.attributes.effect).to.deep.equals({
                id: 269,
                attribute: null,
                value: null,
                trigger: 'Usage',
                description: '使用：获得风特效',
            });
        });
        it('should return a equip with set', async () => {
            const response = await request.get('/api/equip/40580').expect(200);
            expect(response.body.data.id).to.equals(40580);
            expect(response.body.data.attributes.name).to.equals('凌绝·溪行袖');
            expect(response.body.data.attributes.set).to.deep.equals({
                id: 1996,
                name: '凌绝·溪行',
                setEffect: [
                    {
                        id: 1973,
                        requirement: 2,
                        effect: {
                            id: 453,
                            attribute: null,
                            value: null,
                            trigger: 'Passive',
                            description: '“阳明指”伤害提高10%, “快雪时晴”伤害提高10%',
                        },
                    },
                    {
                        id: 4069,
                        requirement: 4,
                        effect: {
                            id: 281,
                            attribute: null,
                            value: null,
                            trigger: 'Passive',
                            description: '施展混元性伤害招式，一定几率提高自身混元性内功基础攻击力10%，持续6秒',
                        },
                    },
                ],
                equips: {
                    wrist: [
                        {
                            id: 40580,
                            name: '凌绝·溪行袖',
                            icon: 11620,
                            quality: 2560,
                            category: 'wrist',
                        },
                    ],
                    hat: [
                        {
                            id: 40652,
                            name: '凌绝·溪行帽',
                            icon: 11616,
                            quality: 2560,
                            category: 'hat',
                        },
                    ],
                },
            });
        });
    });
});
