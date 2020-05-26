import { Service } from '@tsed/di';
import {
    Connection, FindConditions, LessThanOrEqual, MoreThanOrEqual,
} from 'typeorm';
import { TypeORMService } from '@tsed/typeorm';
import { AfterRoutesInit } from '@tsed/common';
import { Furniture } from '../entities/resources/Furniture';

export interface FurnitureFilter {
    category: number;
    interactable?: number;
    limit?: number;
    source?: string;
    environment?: number;
    beauty?: number;
    practicality?: number;
    robustness?: number;
    fun?: number;
    orderKey?: string;
    asc?: boolean;
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

    public async list(filter: FurnitureFilter): Promise<Furniture[]> {
        const {
            category,
            interactable,
            limit,
            source,
            environment = 0,
            beauty = 0,
            practicality = 0,
            robustness = 0,
            fun = 0,
            orderKey = 'price',
            asc = 1,
        } = filter;
        const condition: FindConditions<Furniture> = { category };
        if (interactable !== undefined) condition.interact = !!interactable;
        if (limit !== undefined) condition.limit = LessThanOrEqual(limit);
        if (source !== undefined) condition.source = source;
        const furnitures = await this.connection.manager.find(Furniture, {
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
        });
        return furnitures;
    }
}