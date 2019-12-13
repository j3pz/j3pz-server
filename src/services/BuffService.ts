import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection, In, Like } from 'typeorm';
import { Buff } from '../entities/Buff';
import {
    KungFu, Attribute, AttributeDecorator, PrimaryAttribute,
} from '../model/Base';
import { BuffCore } from '../model/Buff';
import { kungFuLib } from '../utils/KungFuLib';
import { getDecoratorList } from '../utils/decorator';
import { BANNED_ATTRIBUTES_BY_ROLE } from '../utils/KungfuMeta';

interface BuffListFilter {
    kungfu: KungFu;
}

@Service()
export class BuffService implements AfterRoutesInit {
    private connection: Connection;

    public constructor(private typeORMService: TypeORMService) {
        // nothing
    }

    public $afterRoutesInit(): void {
        this.connection = this.typeORMService.get('resources');
    }

    private getFilterByKungfu(kungfu: KungFu): (buff: Buff) => boolean {
        const { decorator, primaryAttribute, role } = kungFuLib[kungfu];
        // 将修饰属性进行分组，获取每个修饰器所对应的属性列表
        const decoratorFilters = decorator.map(_ => _[1]).reduce((acc, val, i) => {
            acc[val] = (acc[val] || []).concat(decorator[i][0]);
            return acc;
        }, {});
        const queriedAttributes = []; // 保存被修饰过的属性列表
        // 生成修饰属性的请求条件
        const conditions = Object.entries<Attribute[]>(decoratorFilters)
            .map((decoratorEntry) => {
                queriedAttributes.push(...decoratorEntry[1]);
                return {
                    attribute: decoratorEntry[1],
                    decorator: getDecoratorList(decoratorEntry[0] as AttributeDecorator),
                };
            }).reduce((condition, entry) => {
                entry.attribute.forEach((attr) => {
                    if (condition[attr]) {
                        condition[attr].push(...entry.decorator);
                    } else {
                        condition[attr] = entry.decorator;
                    }
                });
                return condition;
            }, {});
        // 基于心法类型去除一些属性
        const bannedAttributes = BANNED_ATTRIBUTES_BY_ROLE[role]
            .concat(PrimaryAttribute.filter(_ => _ !== primaryAttribute));
        return (buff: Buff) => {
            const bannedLength = buff.effect.attribute.filter(attr => bannedAttributes.includes(attr)).length;
            if (bannedLength === buff.effect.attribute.length) return false;
            console.log(buff.effect, bannedLength);
            return true;
        };
    }

    public async find(filter: BuffListFilter): Promise<BuffCore[]> {
        const baseFilter = {
            version: '1.0.0',
        };
        const buffs = await this.connection.manager.find(Buff, {
            select: ['id', 'name', 'icon', 'type'],
            relations: ['effect'],
            where: [{
                ...baseFilter,
                kungfuLimit: null,
            }, {
                ...baseFilter,
                kungfuLimit: Like(`%${filter.kungfu}%`),
            }],
        });

        return buffs
            .filter(this.getFilterByKungfu(filter.kungfu))
            .map(buff => ({ ...buff, description: buff.effect.description, effect: undefined }));
    }

    public async findById(id: number): Promise<Buff> {
        const buff = await this.connection.manager.findOne(Buff, id, {
            relations: ['effect'],
        });
        return buff;
    }
}
