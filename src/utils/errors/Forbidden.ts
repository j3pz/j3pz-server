import { Forbidden } from 'ts-httpexceptions';
import { IResponseError } from '@tsed/common';
import { ServerError } from '../../model/Server';
import { UrlId } from '../../model/UrlId';

// 六位错误码，前三位为 HTTP Status Code，第四位表示模块，第五位和第六位表示错误
enum ForbiddenErrorCode {
    DuplicateUser = 403001,
    IncorrectToken = 403002,
    ExpiredToken = 403003,
    AlreadyActivated = 403004,
    CaseNotPublished = 403005,
    UserNotActivated = 403006,
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

    public constructor(type: 'token' | 'permalink', token: string, category: 'activation' | 'reset') {
        super('验证链接不正确');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: `${type}: ${token} is not correct for ${category}`,
        });
    }
}

export class ExpiredTokenError extends Forbidden implements IResponseError {
    public code: ForbiddenErrorCode = ForbiddenErrorCode.ExpiredToken;

    public errors: ServerError[] = [];

    public constructor(link: string, category: 'activation' | 'reset') {
        super('验证链接不正确');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: `${category} link: ${link} is expired`,
        });
    }
}

export class ActivatedError extends Forbidden implements IResponseError {
    public code: ForbiddenErrorCode = ForbiddenErrorCode.AlreadyActivated;

    public errors: ServerError[] = [];

    public constructor(email: string) {
        super('用户已经验证过邮箱');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: `用户: ${email} 已激活，无需重发激活邮件`,
        });
    }
}

export class CaseNotPublishedError extends Forbidden implements IResponseError {
    public code: ForbiddenErrorCode = ForbiddenErrorCode.CaseNotPublished;

    public errors: ServerError[] = [];

    public constructor(domain: string, urlId: UrlId) {
        super('该方案未被公开');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: `ID:${urlId.url} 对应的方案未被 ${domain} 公开`,
        });
    }
}

export class UserNotActivatedError extends Forbidden implements IResponseError {
    public code: ForbiddenErrorCode = ForbiddenErrorCode.UserNotActivated;

    public errors: ServerError[] = [];

    public constructor(email: string) {
        super('邮箱尚未通过验证，仅能创建一套方案');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: `用户: ${email} 尚未通过验证`,
        });
    }
}
