import {
    Controller, Get, PathParams, QueryParams,
} from '@tsed/common';
import { EquipResource } from '../model/Equip';
import { ServerResponse } from '../model/Server';
import { EquipService } from '../services/EquipService';
import { Category, KungFu } from '../model/Base';

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
        console.log(list);
        return {
            data: [],
        };
    }

    @Get('/:id')
    public detail(@PathParams('id') id: string): ServerResponse<EquipResource> {
        return {
            data: {
                id: parseInt(id, 10),
                type: 'equip',
                attributes: {
                    category: 'hat',
                    name: 'test',
                    tags: [],
                    quality: 2000,
                    icon: 5656,
                },
            },
        };
    }
}
