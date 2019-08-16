import { NotFound } from 'ts-httpexceptions';
import { IResponseError } from '@tsed/common';
import { ServerError } from '../../model/Server';

// 六位错误码，前三位为 HTTP Status Code，第四位表示模块，第五位和第六位表示错误
enum BadRequestErrorCode {
    // 1 表示装备模块错误
    EquipNotFound = 404101,
}

export class EquipNotFound extends NotFound implements IResponseError {
    public code: BadRequestErrorCode.EquipNotFound;

    public errors: ServerError[] = [];

    public constructor(equipId: string) {
        super('装备未找到');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: `数据库中未找到 ID:${equipId} 对应的装备`,
        });
    }
}
