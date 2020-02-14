import {
    Controller, Get, Req, PathParams, Post, Put, QueryParams,
} from '@tsed/common';
import { Summary } from '@tsed/swagger';
import { Authenticate } from '@tsed/passport';
import { Status, Resource } from '../model/Server';
import { CaseInfoResource, CaseResource } from '../model/Case';
import { CaseService } from '../services/CaseService';
import { CaseId } from '../model/CaseId';

@Controller('/case')
export class CaseCtrl {
    public constructor(private caseService: CaseService) {}

    @Get()
    @Summary('获取方案列表')
    @Authenticate('jwt', { failWithError: true })
    public async list(@Req() req: Req, @QueryParams('detail', Number) detail: number): Promise<CaseInfoResource[]> {
        const detailMode = !!detail;
        const { cases } = req.user;
        if (detailMode) {
            // TODO: Case detail mode
            return [];
        }
        return cases.map(caseInfo => new Resource(caseInfo.id, 'Case', caseInfo));
    }

    @Get('/:id')
    @Summary('获取方案详情')
    @Authenticate(['jwt', 'anonymous'])
    public async find(@Req() req: Req, @PathParams('id', CaseId) caseId: CaseId): Promise<CaseResource> {
        const caseScheme = await this.caseService.findOne(caseId.objectId);
        const caseInfo = this.caseService.getCaseInfo(req.user.cases, caseId);
        const caseDetail = await this.caseService.getCaseDetail(caseInfo, caseScheme);
        return new Resource(caseDetail.id, 'Case', caseDetail);
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
