import {
    OverrideProvider, Res, ResponseData, SendResponseMiddleware, Response, Req,
} from '@tsed/common';
import { Resource } from '../model/Server';

@OverrideProvider(SendResponseMiddleware)
export class JsonApiResponseMiddleware extends SendResponseMiddleware {
    // @ts-ignore
    public use<T>(
        @ResponseData() data: T | T[],
        @Res() response: Res,
        @Req() request: Req,
    ): Response {
        if (data instanceof Array || data instanceof Resource) {
            return super.use({
                data,
                meta: {
                    id: request.log.id,
                    time: request.log.startDate,
                },
            }, response);
        }
        return super.use(data, response);
    }
}
