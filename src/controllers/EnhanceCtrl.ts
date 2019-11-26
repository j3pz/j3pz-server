import {
    Controller, Get, PathParams, QueryParams,
} from '@tsed/common';
import {
    Summary, Description, ReturnsArray, Returns,
} from '@tsed/swagger';
import { Resource } from '../model/Server';
import { EnhanceService } from '../services/EnhanceService';
import { Category, KungFu } from '../model/Base';
import { EnhanceCore, EnhanceResource, EnhanceCoreResource } from '../model/Enhance';
import { Enhance } from '../entities/Enhance';
import { KungFuNotExistError, CategoryNotExistError } from '../utils/errors/BadRequests';
import { EnhanceNotFound } from '../utils/errors/NotFound';
import { ConfigService } from '../services/ConfigService';

@Controller('/enhance')
export class EnhanceCtrl {
    public constructor(private enhanceService: EnhanceService, private configService: ConfigService) {}

    @Get()
    @Summary('获取附魔列表')
    @ReturnsArray(200, { description: 'OK', type: EnhanceCore })
    @ReturnsArray(400, { description: 'Bad Request' })
    public async list(
        @QueryParams('kungfu') @Description('心法名称') kungfu: KungFu,
        @QueryParams('category') @Description('附魔部位') category: Category,
    ): Promise<EnhanceCoreResource[]> {
        if (!Object.values(KungFu).includes(kungfu)) {
            throw new KungFuNotExistError(kungfu);
        }
        if (!Object.values(Category).includes(category)) {
            throw new CategoryNotExistError(category);
        }
        const list = await this.enhanceService.find({
            kungfu,
            category,
        }) as EnhanceCore[];
        return list.map((enhance): EnhanceCoreResource => new Resource(enhance.id, 'enhance', enhance));
    }

    @Get('/:id')
    @Summary('获取附魔详情')
    @Returns(200, { description: 'OK', type: Enhance })
    public async detail(@PathParams('id') id: string): Promise<EnhanceResource> {
        const enhance = await this.enhanceService.findById(parseInt(id, 10));
        if (enhance === undefined) {
            throw new EnhanceNotFound(id);
        }

        return new Resource(enhance.id, 'enhance', enhance);
    }
}
