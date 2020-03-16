import {
    Controller, Get, Req, PathParams, Post, Put, QueryParams, BodyParams, Patch, Delete,
} from '@tsed/common';
import { Summary } from '@tsed/swagger';
import { Authenticate } from '@tsed/passport';
import { Status, Resource } from '../model/Server';
import {
    CaseInfoResource, CaseResource, CaseModel, CaseInfoModel,
} from '../model/Case';
import { CaseService } from '../services/CaseService';
import { CaseId } from '../model/CaseId';
import { SyncLimitReachedError } from '../utils/errors/Forbidden';
import { CaseNotFoundError } from '../utils/errors/NotFound';

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
        if (!caseScheme) {
            throw new CaseNotFoundError(caseId);
        }
        const caseInfo = this.caseService.getCaseInfo(req.user.cases, caseId);
        const caseDetail = await this.caseService.getCaseDetail(caseInfo, caseScheme);
        return new Resource(caseDetail.id, 'Case', caseDetail);
    }

    @Post()
    @Summary('新建方案')
    @Authenticate('jwt', { failWithError: true })
    public async create(@Req() req: Req, @BodyParams() caseModel: CaseModel): Promise<CaseInfoResource[]> {
        if (req.user.syncLimit <= req.user.cases.length) {
            throw new SyncLimitReachedError(req.user.email);
        }
        await this.caseService.create(caseModel, req.user);
        const list = await this.list(req, 0);
        return list;
    }

    @Put('/:id')
    @Summary('更新方案')
    @Authenticate('jwt', { failWithError: true })
    public async update(
        @Req() req: Req,
        @BodyParams() caseModel: CaseModel,
        @PathParams('id', CaseId) caseId: CaseId,
    ): Promise<Status> {
        const caseInfo = this.caseService.getCaseInfo(req.user.cases, caseId);
        if (!caseInfo) {
            throw new CaseNotFoundError(caseId);
        }
        await this.caseService.update(caseModel, caseId);
        return new Status(true);
    }

    @Patch('/:id')
    @Summary('修改方案信息')
    @Authenticate('jwt', { failWithError: true })
    public async patch(
        @Req() req: Req,
        @BodyParams() patch: CaseInfoModel,
        @PathParams('id', CaseId) caseId: CaseId,
    ): Promise<CaseInfoResource> {
        const caseInfo = await this.caseService.updateCaseInfo(req.user, caseId, patch);
        if (!caseInfo) {
            throw new CaseNotFoundError(caseId);
        }
        return new Resource(caseInfo.id, 'Case', caseInfo);
    }

    @Delete('/:id')
    @Summary('Delete Case')
    @Authenticate('jwt', { failWithError: true })
    public async delete(@Req() req: Req, @PathParams('id', CaseId) caseId: CaseId): Promise<Status> {
        const caseInfo = this.caseService.getCaseInfo(req.user.cases, caseId);
        if (!caseInfo) {
            throw new CaseNotFoundError(caseId);
        }
        await this.caseService.remove(req.user, caseId);
        return new Status(true);
    }
}
