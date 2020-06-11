import {
    Controller, Get, QueryParams, RequestContext, Context,
} from '@tsed/common';
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
        @QueryParams('page') page: number,
        @QueryParams('size') size: number,
        @Context() context: RequestContext,
    ): Promise<FurnitureResource[]> {
        const { list, total } = await this.furnitureService.list({
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
            page,
            size,
        });
        context.set('total', total);
        context.set('page', page);
        return list.map(furniture => new Resource(furniture.id, 'Furniture', furniture));
    }
}
