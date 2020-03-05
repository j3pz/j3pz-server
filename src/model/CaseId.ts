import { ObjectID } from 'mongodb';
import { encode, decode } from 'bs58';

export class CaseId {
    public objectId: ObjectID;

    public url: string;

    public static fromHex(hex: string): CaseId {
        const caseId = new CaseId();
        caseId.objectId = ObjectID.createFromHexString(hex);
        caseId.url = encode(Buffer.from(hex));
        return caseId;
    }

    public static fromUrl(id: string): CaseId {
        const caseId = new CaseId();
        caseId.url = id;
        caseId.objectId = ObjectID.createFromHexString(decode(id).toString());
        return caseId;
    }
}
