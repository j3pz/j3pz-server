import {
    Controller, Get, PathParams, QueryParams,
} from '@tsed/common';
import {
    Summary, Description, ReturnsArray, Returns,
} from '@tsed/swagger';
import { Resource } from '../model/Server';
import { EquipService } from '../services/EquipService';
import { Category, KungFu } from '../model/Base';
import { EquipResource, EquipCoreResource, EquipCore } from '../model/Equip';
import { Equip } from '../entities/Equip';
import { KungFuNotExistError, CategoryNotExistError } from '../utils/errors/BadRequests';

@Controller('/equip')
export class EquipCtrl {
    public constructor(private equipService: EquipService) {}

    @Get()
    @Summary('获取装备列表')
    @ReturnsArray(200, { description: 'OK', type: EquipCore })
    public async list(
        @QueryParams('kungfu') @Description('心法名称') kungfu: KungFu,
        @QueryParams('category') @Description('装备部位') category: Category,
    ): Promise<EquipCoreResource[]> {
        if (!Object.values(KungFu).includes(kungfu)) {
            throw new KungFuNotExistError(kungfu);
        }
        if (!Object.values(Category).includes(category)) {
            throw new CategoryNotExistError(category);
        }
        const list = await this.equipService.find({
            kungfu,
            category,
            quality: [1800, 2800],
        }) as EquipCore[];
        return list.map((equip): EquipCoreResource => new Resource(equip.id, 'equip', equip));
    }

    @Get('/:id')
    @Summary('获取装备详情')
    @Returns(200, { description: 'OK', type: Equip })
    public async detail(@PathParams('id') id: string): Promise<EquipResource> {
        const equip = await this.equipService.findById(parseInt(id, 10));
        return new Resource(equip.id, 'equip', equip);
    }
}
