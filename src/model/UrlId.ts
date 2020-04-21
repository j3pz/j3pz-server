import { ObjectID } from 'mongodb';
import { encode, decode } from 'bs58';

export class UrlId {
    public objectId: ObjectID;

    public url: string;

    public constructor() {
        this.objectId = new ObjectID();
        this.url = encode(Buffer.from(this.objectId.toHexString()));
    }

    public static fromHex(hex: string): UrlId {
        const urlId = Object.create(this.prototype);
        urlId.objectId = ObjectID.createFromHexString(hex);
        urlId.url = encode(Buffer.from(hex));
        return urlId;
    }

    public static fromUrl(id: string): UrlId {
        const urlId = Object.create(this.prototype);
        urlId.url = id;
        urlId.objectId = ObjectID.createFromHexString(decode(id).toString());
        return urlId;
    }
}
