import {
    OverrideProvider, Res, ResponseData, SendResponseMiddleware, Response,
} from '@tsed/common';
import { Resource } from '../model/Server';

@OverrideProvider(SendResponseMiddleware)
export class JsonApiResponseMiddleware extends SendResponseMiddleware {
    public use<T>(@ResponseData() data: T, @Res() response: Res): Response {
        if (data instanceof Resource) {
            return super.use({ data }, response);
        }
        return super.use(data, response);
    }
}
