import {
    OverrideProvider, Res, ResponseData, SendResponseMiddleware, Response, Req, Context, RequestContext,
} from '@tsed/common';
import { Resource, Status } from '../model/Server';

interface Pagination {
    page?: number;
    total?: number;
}

@OverrideProvider(SendResponseMiddleware)
export class JsonApiResponseMiddleware extends SendResponseMiddleware {
    // @ts-ignore
    public use<T>(
        @ResponseData() data: T | T[],
        @Res() response: Res,
        @Req() request: Req,
        @Context() context: RequestContext,
    ): Response {
        if (data instanceof Array || data instanceof Resource || data instanceof Status) {
            const pagination: Pagination = {};
            if (context.get('total')) pagination.total = context.get('total');
            if (context.get('page')) pagination.page = context.get('page');
            return response.json({
                data,
                meta: {
                    id: request.log.id,
                    time: request.log.startDate,
                    ...pagination,
                },
            });
        }
        request.ctx.data = data;
        return super.use(request, response);
    }
}
