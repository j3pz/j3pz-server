import {
    Controller, Get, QueryParams,
} from '@tsed/common';
import { Summary, Description, ReturnsArray } from '@tsed/swagger';
import { Resource } from '../model/Server';
import { TalentService } from '../services/TalentService';
import { KungFu } from '../model/Base';
import { TalentRecommendResource } from '../model/Talent';
import { KungFuNotExistError } from '../utils/errors/BadRequests';
import { ConfigService } from '../services/ConfigService';
import { TalentRecommend } from '../entities/resources/TalentRecommend';

@Controller('/talent-recommend')
export class TalentRecommendCtrl {
    public constructor(private talentService: TalentService, private configService: ConfigService) {}

    @Get()
    @Summary('获取奇穴推荐列表')
    @ReturnsArray(200, { description: 'OK', type: TalentRecommend })
    @ReturnsArray(400, { description: 'Bad Request' })
    public async list(
        @QueryParams('kungfu') @Description('心法名称') kungfu: KungFu,
    ): Promise<TalentRecommendResource[]> {
        if (!Object.values(KungFu).includes(kungfu)) {
            throw new KungFuNotExistError(kungfu);
        }
        const list = await this.talentService.findRecommends(kungfu);
        return list.map((talent): TalentRecommendResource => new Resource(talent.id, 'Talent', talent));
    }
}
