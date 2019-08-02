import { Controller, Get, PathParams } from '@tsed/common';
import { Equip } from '../model/Equip';
import { ServerResponse } from '../model/Server';

@Controller('/equip')
export class EquipCtrl {
    @Get()
    private list(): ServerResponse<Equip[]> {
        return {
            data: [],
        };
    }

    @Get('/:id')
    private detail(@PathParams('id') id: string): ServerResponse<Equip> {
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
