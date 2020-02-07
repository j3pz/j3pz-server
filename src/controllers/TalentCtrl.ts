import {
    Controller, Get, PathParams, QueryParams,
} from '@tsed/common';
import {
    Summary, Description, ReturnsArray, Returns,
} from '@tsed/swagger';
import { Resource } from '../model/Server';
import { TalentService } from '../services/TalentService';
import { KungFu } from '../model/Base';
import { TalentResource } from '../model/Talent';
import { Talent } from '../entities/resources/Talent';
import { KungFuNotExistError } from '../utils/errors/BadRequests';
import { TalentNotFound } from '../utils/errors/NotFound';
import { ConfigService } from '../services/ConfigService';

@Controller('/talent')
export class TalentCtrl {
    public constructor(private talentService: TalentService, private configService: ConfigService) {}

    @Get()
    @Summary('获取奇穴列表')
    @ReturnsArray(200, { description: 'OK', type: Talent })
    @ReturnsArray(400, { description: 'Bad Request' })
    public async list(
        @QueryParams('kungfu') @Description('心法名称') kungfu: KungFu,
    ): Promise<TalentResource[]> {
        if (!Object.values(KungFu).includes(kungfu)) {
            throw new KungFuNotExistError(kungfu);
        }
        const list = await this.talentService.find({
            kungfu,
            version: '1.0.0',
        }) as Talent[];
        return list.map((talent): TalentResource => new Resource(talent.id, 'Talent', talent));
    }

    @Get('/:id')
    @Summary('获取奇穴详情')
    @Returns(200, { description: 'OK', type: Talent })
    public async detail(@PathParams('id') id: string): Promise<TalentResource> {
        const talent = await this.talentService.findById(parseInt(id, 10));
        if (talent === undefined) {
            throw new TalentNotFound(id);
        }

        return new Resource(talent.id, 'Talent', talent);
    }
}
