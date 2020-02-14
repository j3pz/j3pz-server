import { Converter, IConverter } from '@tsed/common';
import { CaseId } from '../model/CaseId';

@Converter(CaseId)
export class CaseIdConverter implements IConverter {
    public deserialize(data: string): CaseId {
        const id = CaseId.fromUrl(data);
        return id;
    }

    public serialize(data: CaseId): string {
        return data.url;
    }
}
