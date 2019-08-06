import {
    Controller, Get, PathParams, QueryParams,
} from '@tsed/common';
import { ServerResponse, Resource } from '../model/Server';
import { EquipService } from '../services/EquipService';
import { Category, KungFu } from '../model/Base';
import { EquipResource } from '../model/Equip';

@Controller('/equip')
export class EquipCtrl {
    public constructor(private equipService: EquipService) {}

    @Get()
    public async list(
        @QueryParams('kungfu') kungfu: KungFu,
        @QueryParams('category') category: Category,
    ): Promise<ServerResponse<EquipResource[]>> {
        const list = await this.equipService.find({
            kungfu,
            category,
            quality: [1800, 2800],
        });
        return {
            data: list.map((equip): EquipResource => new Resource(equip.id, 'equip', equip)),
        };
    }

    @Get('/:id')
    public async detail(@PathParams('id') id: string): Promise<ServerResponse<EquipResource>> {
        const equip = await this.equipService.findById(parseInt(id, 10));
        return {
            data: new Resource(equip.id, 'equip', equip),
        };
    }
}
