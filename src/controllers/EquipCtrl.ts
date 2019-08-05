import { Controller, Get, PathParams } from '@tsed/common';
import { Equip } from '../model/Equip';
import { ServerResponse } from '../model/Server';
import { EquipService } from '../services/EquipService';

@Controller('/equip')
export class EquipCtrl {
    public constructor(private equipService: EquipService) {}

    @Get()
    public async list(): Promise<ServerResponse<Equip[]>> {
        const list = await this.equipService.find();
        console.log(list);
        return {
            data: [],
        };
    }

    @Get('/:id')
    public detail(@PathParams('id') id: string): ServerResponse<Equip> {
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
