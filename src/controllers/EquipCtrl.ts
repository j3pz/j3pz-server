import { Controller, Get } from '@tsed/common';
import { Equip } from '../declarations/Equip';
import { ServerResponse } from '../declarations/Server';

@Controller('/equip')
export class EquipCtrl {
    @Get()
    private list(): ServerResponse<Equip[]> {
        return {
            data: [],
        };
    }
}
