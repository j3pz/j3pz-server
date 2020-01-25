import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection, Like } from 'typeorm';
import { Buff } from '../entities/resources/Buff';
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

type BuffCondition = {
    [key in Attribute]?: AttributeDecorator[];
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
            }).reduce((acc: BuffCondition, entry) => {
                entry.attribute.forEach((attr) => {
                    if (acc[attr]) {
                        acc[attr].push(...entry.decorator);
                    } else {
                        acc[attr] = entry.decorator;
                    }
                });
                return acc;
            }, {});
        // 基于心法类型去除一些属性
        const bannedAttributes = BANNED_ATTRIBUTES_BY_ROLE[role]
            .concat(PrimaryAttribute.filter(_ => _ !== primaryAttribute));
        return (buff: Buff) => {
            const valid = buff.effect.attribute.filter((attr, i) => {
                if (bannedAttributes.includes(attr)) {
                    return false;
                }
                const attrDecorator = buff.effect.decorator[i] || buff.effect.decorator[0];
                const nomalizedAttributeName = attr.replace('Percent', '');
                if (conditions[nomalizedAttributeName] && !conditions[nomalizedAttributeName].includes(attrDecorator)) {
                    return false;
                }
                return true;
            });
            if (valid.length > 0) return true;
            return false;
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
