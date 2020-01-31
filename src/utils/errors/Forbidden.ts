import { Forbidden } from 'ts-httpexceptions';
import { IResponseError } from '@tsed/common';
import { ServerError } from '../../model/Server';

// 六位错误码，前三位为 HTTP Status Code，第四位表示模块，第五位和第六位表示错误
enum ForbiddenErrorCode {
    DuplicateUser = 403001,
    IncorrectToken = 403002,
    ExpiredToken = 403003,
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

export class IncorrectTokenError extends Forbidden implements IResponseError {
    public code: ForbiddenErrorCode = ForbiddenErrorCode.IncorrectToken;

    public errors: ServerError[] = [];

    public constructor(type: 'token' | 'permalink', token: string) {
        super('验证链接不正确');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: `${type}: ${token} is not correct`,
        });
    }
}

export class ExpiredTokenError extends Forbidden implements IResponseError {
    public code: ForbiddenErrorCode = ForbiddenErrorCode.ExpiredToken;

    public errors: ServerError[] = [];

    public constructor(link: string) {
        super('验证链接不正确');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: `该链接: ${link} 已过期`,
        });
    }
}
