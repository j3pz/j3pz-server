import {
    Err, Req, Res, OverrideProvider, GlobalErrorHandlerMiddleware, IResponseError, Response, $log, ParseExpressionError,
} from '@tsed/common';
import { Exception } from 'ts-httpexceptions';
import { NotLoggedInError } from '../utils/errors/Unauthorized';

@OverrideProvider(GlobalErrorHandlerMiddleware)
export class ErrorHandlerMiddleware extends GlobalErrorHandlerMiddleware {
    public use(
        @Err() error: Exception & IResponseError,
        @Req() request: Req,
        @Res() response: Res,
    ): Response {
        if (error instanceof ParseExpressionError) {
            return response.status(error.status).json({
                // @ts-ignore
                errors: error.origin.errors || [{
                    code: 400000,
                    title: '请求解析错误',
                    detail: error.origin.message,
                }],
                meta: {
                    id: request.log.id,
                    time: request.log.startDate,
                },
            });
        }
        if (error.name === 'AuthenticationError') {
            return response.status(error.status).json({
                errors: (new NotLoggedInError()).errors,
                meta: {
                    id: request.log.id,
                    time: request.log.startDate,
                },
            });
        }
        if (error instanceof Exception) {
            return response.status(error.status).json({
                errors: error.errors,
                meta: {
                    id: request.log.id,
                    time: request.log.startDate,
                },
            });
        }
        $log.fatal({
            id: request.log.id,
            code: 500000,
            title: '服务器未知错误',
            origin: error,
        });
        return response.status(500).json({
            errors: [{
                code: 500000,
                title: '服务器未知错误',
                detail: '发生了一些奇怪的问题',
            }],
        });
    }
}
