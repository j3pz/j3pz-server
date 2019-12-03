import { Controller, Get, QueryParams } from '@tsed/common';
import { Summary, Description, ReturnsArray } from '@tsed/swagger';
import { Resource } from '../model/Server';
import { StoneService } from '../services/StoneService';
import { KungFu } from '../model/Base';
import { StoneAttributeCoreResource, StoneAttributeCore } from '../model/Stone';
import { Stone } from '../entities/Stone';
import { KungFuNotExistError } from '../utils/errors/BadRequests';
import { ConfigService } from '../services/ConfigService';

@Controller('/stone-attribute')
export class StoneCtrl {
    public constructor(private stoneService: StoneService, private configService: ConfigService) {}

    @Get()
    @Summary('获取五彩石属性列表')
    @ReturnsArray(200, { description: 'OK', type: Stone })
    @ReturnsArray(400, { description: 'Bad Request' })
    public async list(
        @QueryParams('kungfu') @Description('心法名称') kungfu: KungFu,
    ): Promise<StoneAttributeCoreResource[]> {
        // 基于心法查找五彩石属性列表
        if (!Object.values(KungFu).includes(kungfu)) {
            throw new KungFuNotExistError(kungfu);
        }
        const list = await this.stoneService.findAttributes({
            kungfu,
        }) as StoneAttributeCore[];
        return list.map((attribute): StoneAttributeCoreResource => new Resource(attribute.id, 'StoneAttribute', attribute));
    }
}
