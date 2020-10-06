import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import {
    Connection, In, FindConditions, Not,
} from 'typeorm';
import { Stone } from '../entities/resources/Stone';
import {
    KungFu, Attribute, AttributeDecorator, PrimaryAttribute, DecoratorTuple,
} from '../model/Base';
import { kungFuLib } from '../utils/KungFuLib';
import { BANNED_ATTRIBUTES_BY_ROLE } from '../utils/KungfuMeta';
import { StoneAttribute } from '../entities/resources/StoneAttribute';
import { StoneAttributeCore } from '../model/Stone';
import { getDecoratorList } from '../utils/decorator';

interface AttributeListFilter {
    kungfu: KungFu;
}

@Service()
export class StoneService implements AfterRoutesInit {
    private connection: Connection;

    public constructor(private typeORMService: TypeORMService) {
        // nothing
    }

    public $afterRoutesInit(): void {
        this.connection = this.typeORMService.get('resources');
    }

    private getAttributeFilterByKungfu(kungfu: KungFu): FindConditions<StoneAttribute>[] {
        const { decorator, primaryAttribute, role } = kungFuLib[kungfu];
        // 将修饰属性进行分组，获取每个修饰器所对应的属性列表
        const decoratorFilters = decorator.map(_ => _[1]).reduce((acc, val, i) => {
            acc[val] = (acc[val] || []).concat(decorator[i][0]);
            return acc;
        }, {});
        const queriedAttributes = []; // 保存被修饰过的属性列表
        const decorators: AttributeDecorator[] = [];
        // 生成修饰属性的请求条件
        const conditions = Object.entries<Attribute[]>(decoratorFilters)
            .map((decoratorEntry): FindConditions<StoneAttribute> => {
                queriedAttributes.push(...decoratorEntry[1]);
                decorators.push(...getDecoratorList(decoratorEntry[0] as AttributeDecorator));
                return {
                    key: In(decoratorEntry[1]),
                    decorator: In(getDecoratorList(decoratorEntry[0] as AttributeDecorator)),
                };
            });
        // 基于心法类型去除一些属性
        const bannedAttributes = BANNED_ATTRIBUTES_BY_ROLE[role]
            .concat(PrimaryAttribute.filter(_ => _ !== primaryAttribute))
            .concat(queriedAttributes);
        return [...conditions, {
            decorator: In([...new Set(decorators)]),
            key: Not(In(bannedAttributes)),
        }];
    }

    public async find(tuples: DecoratorTuple[]): Promise<Stone[]> {
        const stones = await this.connection.getRepository(Stone)
            .createQueryBuilder('stone')
            .innerJoin('stone.attributes', 'attribute')
            .where((qb) => {
                let subQuery = qb.subQuery()
                    .select('attribute.id')
                    .from(StoneAttribute, 'attribute')
                    .where('1 = 0');
                tuples.forEach(([attribute, decorator], i) => {
                    subQuery = subQuery.orWhere(`(attribute.key = :key${i} AND attribute.decorator = :decorator${i})`, {
                        [`key${i}`]: attribute,
                        [`decorator${i}`]: decorator,
                    });
                });
                return `attribute.id IN ${subQuery.getQuery()}`;
            })
            .groupBy('stone.id')
            .having('count(*) >= :count', { count: tuples.length })
            .getMany();

        stones.forEach(stone => stone.attributes.sort((a, b) => a.requiredQuantity - b.requiredQuantity));
        return stones;
    }

    public async findAttributes(filter: AttributeListFilter): Promise<StoneAttributeCore[]> {
        const kungfuFilter = this.getAttributeFilterByKungfu(filter.kungfu);
        const stoneAttributes = await this.connection.manager.find(StoneAttribute, {
            select: ['name', 'key', 'decorator'],
            where: kungfuFilter,
        });
        const unique = [];
        return stoneAttributes.filter((attribute) => {
            if (unique.indexOf(attribute.name) >= 0) return false;
            unique.push(attribute.name);
            return true;
        });
    }

    public async findById(id: number): Promise<Stone> {
        const stone = await this.connection.manager.findOne(Stone, id, {
            relations: ['attributes'],
        });
        return stone;
    }
}
