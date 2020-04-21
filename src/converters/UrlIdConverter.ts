import { Converter, IConverter } from '@tsed/common';
import { UrlId } from '../model/UrlId';

@Converter(UrlId)
export class UrlIdConverter implements IConverter {
    public deserialize(data: string): UrlId {
        const id = UrlId.fromUrl(data);
        return id;
    }

    public serialize(data: UrlId): string {
        return data.url;
    }
}
