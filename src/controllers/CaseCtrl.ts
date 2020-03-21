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
import { UrlId } from '../model/UrlId';
import { SyncLimitReachedError } from '../utils/errors/Forbidden';
import { CaseNotFoundError } from '../utils/errors/NotFound';
import { UserService } from '../services/UserService';

@Controller('/case')
export class CaseCtrl {
    public constructor(private caseService: CaseService, private userService: UserService) {}

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
    @Authenticate('jwt', { failWithError: true })
    public async find(@Req() req: Req, @PathParams('id', UrlId) urlId: UrlId): Promise<CaseResource> {
        const caseScheme = await this.caseService.findOne(urlId.objectId);
        if (!caseScheme) {
            throw new CaseNotFoundError(urlId);
        }
        const caseInfo = this.caseService.getCaseInfo(req.user.cases, urlId);
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
        @PathParams('id', UrlId) urlId: UrlId,
    ): Promise<Status> {
        const caseInfo = this.caseService.getCaseInfo(req.user.cases, urlId);
        if (!caseInfo) {
            throw new CaseNotFoundError(urlId);
        }
        await this.caseService.update(caseModel, urlId);
        return new Status(true);
    }

    @Patch('/:id')
    @Summary('修改方案信息')
    @Authenticate('jwt', { failWithError: true })
    public async patch(
        @Req() req: Req,
        @BodyParams() patch: CaseInfoModel,
        @PathParams('id', UrlId) urlId: UrlId,
    ): Promise<CaseInfoResource> {
        const caseInfo = await this.caseService.updateCaseInfo(req.user, urlId, patch);
        if (!caseInfo) {
            throw new CaseNotFoundError(urlId);
        }
        return new Resource(caseInfo.id, 'Case', caseInfo);
    }

    @Delete('/:id')
    @Summary('Delete Case')
    @Authenticate('jwt', { failWithError: true })
    public async delete(@Req() req: Req, @PathParams('id', UrlId) urlId: UrlId): Promise<Status> {
        const caseInfo = this.caseService.getCaseInfo(req.user.cases, urlId);
        if (!caseInfo) {
            throw new CaseNotFoundError(urlId);
        }
        await this.caseService.remove(req.user, urlId);
        return new Status(true);
    }
}
