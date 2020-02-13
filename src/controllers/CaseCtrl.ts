import {
    Controller, Get, Req, PathParams, Post, Put, QueryParams,
} from '@tsed/common';
import { Summary } from '@tsed/swagger';
import { Authenticate } from '@tsed/passport';
import { Status, Resource } from '../model/Server';
import { CaseInfoResource } from '../model/Case';
import { CaseService } from '../services/CaseService';

@Controller('/case')
export class CaseCtrl {
    public constructor(private caseService: CaseService) {}

    @Get()
    @Summary('获取方案列表')
    @Authenticate('jwt', { failWithError: true })
    public async list(@Req() req: Req, @QueryParams('detail', Number) detail: number): Promise<CaseInfoResource[]> {
        const detailMode = !!detail;
        const { cases } = req.user;
        if (!detailMode) {
            return cases.map(caseInfo => new Resource(caseInfo.id, 'Case', caseInfo));
        }
        return [];
    }

    @Get('/:id')
    @Summary('获取方案详情')
    @Authenticate(['jwt', 'anonymous'])
    public async find(@Req() req: Req, @PathParams('id') caseId: string): Promise<Status> {
        console.log(caseId);
        return new Status(true);
    }

    @Post()
    @Summary('新建方案')
    @Authenticate('jwt', { failWithError: true })
    public async create(@Req() req: Req): Promise<Status> {
        return new Status(true);
    }

    @Put()
    @Summary('更新方案')
    @Authenticate('jwt', { failWithError: true })
    public async update(@Req() req: Req): Promise<Status> {
        return new Status(true);
    }
}
