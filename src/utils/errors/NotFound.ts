import { NotFound } from 'ts-httpexceptions';
import { IResponseError } from '@tsed/common';
import { ServerError } from '../../model/Server';

// 六位错误码，前三位为 HTTP Status Code，第四位表示模块，第五位和第六位表示错误
enum BadRequestErrorCode {
    // 1 表示装备模块错误
    EquipNotFound = 404101,
    // 2 表示附魔模块错误
    EnhanceNotFound = 404201,
    // 4 表示奇穴模块错误
    TalentNotFound = 404401,
    // 5 表示五彩石模块错误
    StoneNotFound = 404501,
    // 6 表示增益气劲模块错误
    BuffNotFound = 404601,
}

export class EquipNotFound extends NotFound implements IResponseError {
    public code: BadRequestErrorCode = BadRequestErrorCode.EquipNotFound;

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

export class EnhanceNotFound extends NotFound implements IResponseError {
    public code: BadRequestErrorCode = BadRequestErrorCode.EnhanceNotFound;

    public errors: ServerError[] = [];

    public constructor(enhanceId: string) {
        super('附魔未找到');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: `数据库中未找到 ID:${enhanceId} 对应的附魔`,
        });
    }
}

export class TalentNotFound extends NotFound implements IResponseError {
    public code: BadRequestErrorCode = BadRequestErrorCode.TalentNotFound;

    public errors: ServerError[] = [];

    public constructor(talentId: string) {
        super('奇穴未找到');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: `数据库中未找到 ID:${talentId} 对应的奇穴`,
        });
    }
}

export class StoneNotFound extends NotFound implements IResponseError {
    public code: BadRequestErrorCode = BadRequestErrorCode.StoneNotFound;

    public errors: ServerError[] = [];

    public constructor(stoneId: string) {
        super('五彩石未找到');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: `数据库中未找到 ID:${stoneId} 对应的五彩石`,
        });
    }
}

export class BuffNotFound extends NotFound implements IResponseError {
    public code: BadRequestErrorCode = BadRequestErrorCode.BuffNotFound;

    public errors: ServerError[] = [];

    public constructor(stoneId: string) {
        super('增益气劲未找到');
        this.errors.push({
            code: this.code,
            title: this.message,
            detail: `数据库中未找到 ID:${stoneId} 对应的增益气劲`,
        });
    }
}
