import {
    Controller, Get, PathParams, QueryParams,
} from '@tsed/common';
import {
    Summary, Description, ReturnsArray, Returns,
} from '@tsed/swagger';
import { Resource } from '../model/Server';
import { StoneService } from '../services/StoneService';
import { Attribute, AttributeDecorator, DecoratorTuple } from '../model/Base';
import { StoneResource, StoneCoreResource } from '../model/Stone';
import { Stone } from '../entities/resources/Stone';
import { StoneNotFound } from '../utils/errors/NotFound';
import { ConfigService } from '../services/ConfigService';
import { AttributeRequiredError, DecoratorRequiredError, AttributeDecoratorNotMatchError } from '../utils/errors/BadRequests';

@Controller('/stone')
export class StoneCtrl {
    public constructor(private stoneService: StoneService, private configService: ConfigService) {}

    @Get()
    @Summary('获取五彩石列表')
    @ReturnsArray(200, { description: 'OK', type: Stone })
    @ReturnsArray(400, { description: 'Bad Request' })
    public async list(
        // @QueryParams('kungfu') @Description('所属心法') kungfu: KungFu,
        @QueryParams('attribute') @Description('包含属性') attributes: Attribute[],
        @QueryParams('decorator') @Description('包含属性') decorators: AttributeDecorator[],
    ): Promise<StoneCoreResource[]> {
        if (attributes === undefined) {
            throw new AttributeRequiredError();
        }
        if (decorators === undefined) {
            throw new DecoratorRequiredError();
        }
        // if (!Object.values(KungFu).includes(kungfu)) {
        //     throw new KungFuNotExistError(kungfu);
        // }
        if (decorators.length !== attributes.length) {
            throw new AttributeDecoratorNotMatchError();
        }
        const decoratorTuple: DecoratorTuple[] = attributes.map((attribute, i) => [attribute, decorators[i]]);
        // 基于属性查找五彩石列表
        const stones = await this.stoneService.find(decoratorTuple);
        return stones.map(stone => new Resource(stone.id, 'Stone', stone));
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
