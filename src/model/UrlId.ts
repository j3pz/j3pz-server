import { ObjectID } from 'mongodb';
import { encode, decode } from 'bs58';

export class UrlId {
    public objectId: ObjectID;

    public url: string;

    public static fromHex(hex: string): UrlId {
        const urlId = new UrlId();
        urlId.objectId = ObjectID.createFromHexString(hex);
        urlId.url = encode(Buffer.from(hex));
        return urlId;
    }

    public static fromUrl(id: string): UrlId {
        const urlId = new UrlId();
        urlId.url = id;
        urlId.objectId = ObjectID.createFromHexString(decode(id).toString());
        return urlId;
    }
}
