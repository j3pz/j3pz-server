import { BadRequest } from 'ts-httpexceptions';
import { IResponseError } from '@tsed/common';
import { ServerError } from '../../model/Server';
import { generateReqId } from '../RequestId';

// 六位错误码，前三位为 HTTP Status Code，第四位表示模块，第五位和第六位表示错误
enum BadRequestErrorCode {
    // 1 表示装备模块错误
    KungFuNotExistError = 400101,
}

export class KungFuNotExistError extends BadRequest implements IResponseError {
    public code: BadRequestErrorCode.KungFuNotExistError;

    public errors: ServerError[] = [];

    public constructor(failedKungfu: string) {
        super('心法不存在');
        const id = generateReqId();
        this.errors.push({
            id,
            code: this.code,
            title: this.message,
            detail: `"${failedKungfu}" 不是一个正确的心法名`,
        });
    }
}
