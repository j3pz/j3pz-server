import {
    Err, Req, Res, OverrideProvider, GlobalErrorHandlerMiddleware, IResponseError,
} from '@tsed/common';
import { HTTPException } from 'ts-httpexceptions';

@OverrideProvider(GlobalErrorHandlerMiddleware)
export class ErrorHandlerMiddleware extends GlobalErrorHandlerMiddleware {
    public use(
        @Err() error: HTTPException & IResponseError,
        @Req() request: Req,
        @Res() response: Res,
    ): void {
        response.status(error.status).json({
            errors: error.errors,
        });
    }
}
