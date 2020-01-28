import { Forbidden } from 'ts-httpexceptions';
import { IResponseError } from '@tsed/common';
import { ServerError } from '../../model/Server';

// 六位错误码，前三位为 HTTP Status Code，第四位表示模块，第五位和第六位表示错误
enum ForbiddenErrorCode {
    DuplicateUser = 403001,
}

export class DuplicateUserError extends Forbidden implements IResponseError {
    public code: ForbiddenErrorCode = ForbiddenErrorCode.DuplicateUser;

    public errors: ServerError[] = [];

    public constructor(email: string) {
        super('该邮箱已被注册');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: `注册用的邮箱: ${email} 已注册过配装器`,
        });
    }
}
