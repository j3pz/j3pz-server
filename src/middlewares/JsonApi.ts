import {
    OverrideProvider, Res, ResponseData, SendResponseMiddleware, Response, Req,
} from '@tsed/common';
import { Resource, Status } from '../model/Server';

@OverrideProvider(SendResponseMiddleware)
export class JsonApiResponseMiddleware extends SendResponseMiddleware {
    // @ts-ignore
    public use<T>(
        @ResponseData() data: T | T[],
        @Res() response: Res,
        @Req() request: Req,
    ): Response {
        if (data instanceof Array || data instanceof Resource || data instanceof Status) {
            return response.json({
                data,
                meta: {
                    id: request.log.id,
                    time: request.log.startDate,
                },
            });
        }
        request.ctx.data = data;
        return super.use(request, response);
    }
}
