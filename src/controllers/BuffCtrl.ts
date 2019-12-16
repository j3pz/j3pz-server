import {
    Controller, Get, PathParams, QueryParams,
} from '@tsed/common';
import {
    Summary, Description, ReturnsArray, Returns,
} from '@tsed/swagger';
import { Resource } from '../model/Server';
import { BuffService } from '../services/BuffService';
import { KungFu } from '../model/Base';
import { BuffCore, BuffResource, BuffCoreResource } from '../model/Buff';
import { Buff } from '../entities/Buff';
import { KungFuNotExistError } from '../utils/errors/BadRequests';
import { BuffNotFound } from '../utils/errors/NotFound';
import { ConfigService } from '../services/ConfigService';

@Controller('/buff')
export class BuffCtrl {
    public constructor(private buffService: BuffService, private configService: ConfigService) {}

    @Get()
    @Summary('获取增益气劲列表')
    @ReturnsArray(200, { description: 'OK', type: BuffCore })
    @ReturnsArray(400, { description: 'Bad Request' })
    public async list(
        @QueryParams('kungfu') @Description('心法名称') kungfu: KungFu,
    ): Promise<BuffCoreResource[]> {
        if (!Object.values(KungFu).includes(kungfu)) {
            throw new KungFuNotExistError(kungfu);
        }
        const list = await this.buffService.find({ kungfu }) as BuffCore[];
        return list.map((buff): BuffCoreResource => new Resource(buff.id, 'Buff', buff));
    }

    @Get('/:id')
    @Summary('获取增益气劲详情')
    @Returns(200, { description: 'OK', type: Buff })
    public async detail(@PathParams('id') id: string): Promise<BuffResource> {
        const buff = await this.buffService.findById(parseInt(id, 10));
        if (buff === undefined) {
            throw new BuffNotFound(id);
        }

        return new Resource(buff.id, 'Buff', buff);
    }
}
