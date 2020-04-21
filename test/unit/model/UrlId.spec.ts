import { expect } from 'chai';
import { ObjectID } from 'mongodb';
import { UrlId } from '../../../src/model/UrlId';

describe('UrlId', () => {
    it('should be able to create', () => {
        const urlId = new UrlId();

        expect(urlId.url).is.a('string');
        expect(urlId.objectId).is.a.instanceOf(ObjectID);
    });
    it('should be able to create from hex', () => {
        const hex = '5e47f7aa9b8e260ea8f4d51c';
        const urlId = UrlId.fromHex(hex);
        expect(urlId.objectId.equals(ObjectID.createFromHexString(hex)));
        expect(urlId.url).equals('5sL3weNx3GkHEv7BrFJQ7AecRRNtFCSAW');
    });
    it('should be able to create from bs58', () => {
        const bs58 = '5sL3weNx3GkHEv7BrFJQ7AecRRNtFCSAW';
        const urlId = UrlId.fromUrl(bs58);
        expect(urlId.objectId.equals(ObjectID.createFromHexString('5e47f7aa9b8e260ea8f4d51c')));
        expect(urlId.url).equals(bs58);
    });
});
