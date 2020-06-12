import { Service } from '@tsed/di';
import {
    Connection, FindConditions, LessThanOrEqual, MoreThanOrEqual, Like,
} from 'typeorm';
import { TypeORMService } from '@tsed/typeorm';
import { AfterRoutesInit } from '@tsed/common';
import { Furniture } from '../entities/resources/Furniture';

export interface FurnitureFilter {
    category: number;
    interactable?: number;
    limit?: number;
    source?: string;
    name?: string;
    environment?: number;
    beauty?: number;
    practicality?: number;
    robustness?: number;
    fun?: number;
    orderKey?: string;
    asc?: boolean;
    page?: number;
    size?: number;
}

@Service()
export class FurnitureService implements AfterRoutesInit {
    private connection: Connection;

    public constructor(private typeORMService: TypeORMService) {
        // nothing
    }

    public $afterRoutesInit(): void {
        this.connection = this.typeORMService.get('resources');
    }

    public async list(filter: FurnitureFilter): Promise<{ list: Furniture[]; total: number }> {
        const {
            category,
            interactable,
            limit,
            source,
            name,
            environment = 0,
            beauty = 0,
            practicality = 0,
            robustness = 0,
            fun = 0,
            orderKey = 'price',
            asc = 1,
            page = 1,
            size = 20,
        } = filter;
        const condition: FindConditions<Furniture> = { };
        if (name !== undefined && name !== '') condition.name = Like(`%${name}%`);
        if (source !== undefined) condition.source = Like(`%${source}%`);
        if (category !== undefined) condition.category = category;
        if (interactable !== undefined) condition.interact = !!interactable;
        if (limit !== undefined) condition.limit = LessThanOrEqual(limit);

        const [furnitures, total] = await this.connection.manager.findAndCount(Furniture, {
            where: {
                ...condition,
                environment: MoreThanOrEqual(environment),
                beauty: MoreThanOrEqual(beauty),
                practicality: MoreThanOrEqual(practicality),
                robustness: MoreThanOrEqual(robustness),
                fun: MoreThanOrEqual(fun),
            },
            order: {
                [orderKey]: asc ? 'ASC' : 'DESC',
            },
            take: size,
            skip: (page - 1) * size,
        });
        return { list: furnitures, total };
    }
}
