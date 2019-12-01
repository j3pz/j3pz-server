import {
    Controller, Get, PathParams, QueryParams,
} from '@tsed/common';
import {
    Summary, Description, ReturnsArray, Returns,
} from '@tsed/swagger';
import { Resource } from '../model/Server';
import { StoneService } from '../services/StoneService';
import { KungFu, Attribute, AttributeDecorator } from '../model/Base';
import { StoneResource, StoneAttributeCoreResource, StoneAttributeCore } from '../model/Stone';
import { Stone } from '../entities/Stone';
import { KungFuNotExistError } from '../utils/errors/BadRequests';
import { StoneNotFound } from '../utils/errors/NotFound';
import { ConfigService } from '../services/ConfigService';

@Controller('/stone')
export class StoneCtrl {
    public constructor(private stoneService: StoneService, private configService: ConfigService) {}

    @Get()
    @Summary('获取五彩石列表')
    @ReturnsArray(200, { description: 'OK', type: Stone })
    @ReturnsArray(400, { description: 'Bad Request' })
    public async list(
        @QueryParams('kungfu') @Description('心法名称') kungfu: KungFu,
        @QueryParams('attribute') @Description('包含属性') attributes: Attribute[],
        @QueryParams('decorator') @Description('包含属性') decorators: AttributeDecorator[],
    ): Promise<StoneResource[] | StoneAttributeCoreResource[]> {
        if (attributes && attributes.length > 0 && decorators && decorators.length > 0) {
            // 基于属性查找五彩石列表
            console.log(attributes, decorators);
            return [];
        }
        // 基于心法查找五彩石属性列表
        if (!Object.values(KungFu).includes(kungfu)) {
            throw new KungFuNotExistError(kungfu);
        }
        const list = await this.stoneService.findAttributes({
            kungfu,
        }) as StoneAttributeCore[];
        return list.map((attribute): StoneAttributeCoreResource => new Resource(attribute.id, 'StoneAttribute', attribute));
    }

    @Get('/:id')
    @Summary('获取五彩石详情')
    @Returns(200, { description: 'OK', type: Stone })
    public async detail(@PathParams('id') id: string): Promise<StoneResource> {
        const stone = await this.stoneService.findById(parseInt(id, 10));
        if (stone === undefined) {
            throw new StoneNotFound(id);
        }

        return new Resource(stone.id, 'Stone', stone);
    }
}
