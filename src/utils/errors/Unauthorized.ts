import { Unauthorized } from 'ts-httpexceptions';
import { IResponseError } from '@tsed/common';
import { ServerError } from '../../model/Server';

// 六位错误码，前三位为 HTTP Status Code，第四位表示模块，第五位和第六位表示错误
enum UnauthorizedErrorCode {
    NotLoggedIn = 401000,
    NoSuchUser = 401001,
    PasswordNotCorrect = 401002,
    PrivilegeNotCorrect = 401003,
}

export class NotLoggedInError extends Unauthorized implements IResponseError {
    public code: UnauthorizedErrorCode = UnauthorizedErrorCode.NotLoggedIn;

    public errors: ServerError[] = [];

    public constructor() {
        super('未登录');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: '该操作需要登录',
        });
    }
}

export class NoSuchUserError extends Unauthorized implements IResponseError {
    public code: UnauthorizedErrorCode = UnauthorizedErrorCode.NoSuchUser;

    public errors: ServerError[] = [];

    public constructor(email: string) {
        super('无此用户');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: `登录用的邮箱: ${email} 未注册过配装器`,
        });
    }
}

export class PasswordVerifyError extends Unauthorized implements IResponseError {
    public code: UnauthorizedErrorCode = UnauthorizedErrorCode.PasswordNotCorrect;

    public errors: ServerError[] = [];

    public constructor() {
        super('密码不正确');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: '密码不正确',
        });
    }
}
