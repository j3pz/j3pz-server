import { Controller, Get, QueryParams } from '@tsed/common';
import { Summary } from '@tsed/swagger';
import { FurnitureService } from '../services/FurnitureService';
import { Resource } from '../model/Server';
import { FurnitureResource } from '../model/Furniture';

@Controller('/furniture')
export class FurnitureCtrl {
    public constructor(private furnitureService: FurnitureService) {}

    @Get()
    @Summary('获取家具列表')
    public async list(
        @QueryParams('category') category: number,
        @QueryParams('source') source: string,
        @QueryParams('interactable') interactable: number,
        @QueryParams('limit') limit: number,
        @QueryParams('environment') environment: number,
        @QueryParams('beauty') beauty: number,
        @QueryParams('practicality') practicality: number,
        @QueryParams('robustness') robustness: number,
        @QueryParams('fun') fun: number,
        @QueryParams('orderBy') orderKey: string,
        @QueryParams('order') asc: boolean,
    ): Promise<FurnitureResource[]> {
        const list = await this.furnitureService.list({
            category,
            source,
            interactable,
            limit,
            environment,
            beauty,
            practicality,
            robustness,
            fun,
            orderKey,
            asc,
        });
        return list.map(furniture => new Resource(furniture.id, 'Furniture', furniture));
    }
}
