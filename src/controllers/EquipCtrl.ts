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
import { EquipNotFound } from '../utils/errors/NotFound';
import { ConfigService } from '../services/ConfigService';

@Controller('/equip')
export class EquipCtrl {
    public constructor(private equipService: EquipService, private configService: ConfigService) {}

    @Get()
    @Summary('获取装备列表')
    @ReturnsArray(200, { description: 'OK', type: EquipCore })
    @ReturnsArray(400, { description: 'Bad Request' })
    public async list(
        @QueryParams('kungfu') @Description('心法名称') kungfu: KungFu,
        @QueryParams('category') @Description('装备部位') category: Category,
        @QueryParams('name') @Description('名称筛选') name?: string,
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
            name,
            quality: [
                this.configService.getConfig().minQuality,
                this.configService.getConfig().maxQaulity,
            ],
        }) as EquipCore[];
        return list.map((equip): EquipCoreResource => new Resource(equip.id, 'equip', equip));
    }

    @Get('/:id')
    @Summary('获取装备详情')
    @Returns(200, { description: 'OK', type: Equip })
    public async detail(@PathParams('id') id: string): Promise<EquipResource> {
        const equip = await this.equipService.findById(parseInt(id, 10));
        if (equip === undefined) {
            throw new EquipNotFound(id);
        }

        if (equip.set) {
            const collection = equip.set.equip.map((e: Equip): EquipCore => ({
                id: e.id,
                name: e.name,
                icon: e.icon,
                quality: e.quality,
                category: e.category,
            })).reduce((acc, cur) => {
                if (acc[cur.category]) {
                    acc[cur.category].push(cur);
                } else {
                    acc[cur.category] = [cur];
                }
                return acc;
            }, {});
            delete equip.set.equip;
            equip.set.equips = collection;
        }
        return new Resource(equip.id, 'equip', equip);
    }
}
