import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import {
    Connection, Not, In, FindConditions,
} from 'typeorm';
import { Enhance } from '../entities/Enhance';
import {
    Category, KungFu, GamingRole, Attribute, PrimaryAttribute, AttributeDecorator,
} from '../model/Base';
import { kungFuLib } from '../utils/KungFuLib';

interface EnhanceListFilter {
    kungfu: KungFu;
    category: Category;
}

const BANNED_ATTRIBUTES_BY_ROLE: { [key in GamingRole]: Attribute[] } = {
    [GamingRole.DAMAGE_DEALER]: ['physicsShield', 'magicShield', 'dodge', 'parryBase', 'parryValue', 'heal', 'threat'],
    [GamingRole.HEALER]: ['physicsShield', 'magicShield', 'dodge', 'parryBase', 'parryValue', 'attack', 'overcome', 'threat'],
    [GamingRole.TANK]: ['attack', 'crit', 'critEffect', 'damageBase', 'damageRange', 'heal', 'huajing', 'overcome'],
};

@Service()
export class EnhanceService implements AfterRoutesInit {
    private connection: Connection;

    public constructor(private typeORMService: TypeORMService) {
        // nothing
    }

    public $afterRoutesInit(): void {
        this.connection = this.typeORMService.get('resources');
    }

    private getFilterByKungfu(kungfu: KungFu): FindConditions<Enhance>[] {
        const { decorator, primaryAttribute, role } = kungFuLib[kungfu];
        // 将修饰属性进行分组，获取每个修饰器所对应的属性列表
        const decoratorFilters = decorator.map(_ => _[1]).reduce((acc, val, i) => {
            acc[val] = (acc[val] || []).concat(decorator[i][0]);
            return acc;
        }, {});
        const queriedAttributes = []; // 保存被修饰过的属性列表
        // 生成修饰属性的请求条件
        const conditions = Object.entries<Attribute[]>(decoratorFilters)
            .map((decoratorEntry): FindConditions<Enhance> => {
                queriedAttributes.push(...decoratorEntry[1]);
                return {
                    attribute: In(decoratorEntry[1]),
                    decorator: In([decoratorEntry[0], AttributeDecorator.ALL]),
                };
            });
        // 基于心法类型去除一些属性
        const bannedAttributes = BANNED_ATTRIBUTES_BY_ROLE[role]
            .concat(PrimaryAttribute.filter(_ => _ !== primaryAttribute))
            .concat(queriedAttributes);
        return [...conditions, {
            attribute: Not(In(bannedAttributes)),
        }];
    }

    public async find(filter: EnhanceListFilter): Promise<Enhance[]> {
        const kungfuFilters = this.getFilterByKungfu(filter.kungfu);
        const baseFilter = {
            category: filter.category,
            deprecated: false,
        };
        const enhances = await this.connection.manager.find(Enhance, {
            select: ['id', 'name', 'description'],
            where: kungfuFilters.map(kungfuFilter => ({ ...baseFilter, ...kungfuFilter })),
        });

        return enhances;
    }

    public async findById(id: number): Promise<Enhance> {
        const enhance = await this.connection.manager.findOne(Enhance, id);
        return enhance;
    }
}