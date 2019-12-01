import { BadRequest } from 'ts-httpexceptions';
import { IResponseError } from '@tsed/common';
import { ServerError } from '../../model/Server';

// 六位错误码，前三位为 HTTP Status Code，第四位表示模块，第五位和第六位表示错误
enum BadRequestErrorCode {
    // 1 表示装备模块错误
    KungFuNotExistError = 400101,
    CategoryNotExistError = 400102,
    // 5 表示五彩石模块错误
    AttributeRequiredError = 400501,
    DecoratorRequiredError = 400502,
    AttributeDecoratorNotMatchError = 400503,
}

export class KungFuNotExistError extends BadRequest implements IResponseError {
    public code: BadRequestErrorCode.KungFuNotExistError;

    public errors: ServerError[] = [];

    public constructor(failedKungfu: string) {
        super('心法不存在');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: `"${failedKungfu}" 不是一个正确的心法名`,
        });
    }
}

export class CategoryNotExistError extends BadRequest implements IResponseError {
    public code: BadRequestErrorCode.CategoryNotExistError;

    public errors: ServerError[] = [];

    public constructor(failedCategory: string) {
        super('装备类型不存在');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: `"${failedCategory}" 不是一个正确的装备类型`,
        });
    }
}

export class AttributeRequiredError extends BadRequest implements IResponseError {
    public code: BadRequestErrorCode.AttributeRequiredError;

    public errors: ServerError[] = [];

    public constructor() {
        super('属性不能为空');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: '至少需要一个属性才能选取五彩石',
        });
    }
}
export class DecoratorRequiredError extends BadRequest implements IResponseError {
    public code: BadRequestErrorCode.DecoratorRequiredError;

    public errors: ServerError[] = [];

    public constructor() {
        super('属性装饰器不能为空');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: '至少需要一个属性装饰器才能选取五彩石',
        });
    }
}
export class AttributeDecoratorNotMatchError extends BadRequest implements IResponseError {
    public code: BadRequestErrorCode.AttributeDecoratorNotMatchError;

    public errors: ServerError[] = [];

    public constructor() {
        super('属性与装饰器不匹配');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: '属性和属性装饰器的数量不匹配',
        });
    }
}
