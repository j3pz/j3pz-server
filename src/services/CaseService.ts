import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { ObjectID } from 'mongodb';
import { Connection } from 'typeorm';
import { CaseScheme } from '../entities/users/CaseScheme';
import { EquipService } from './EquipService';
import { CaseInfo } from '../entities/users/CaseInfo';
import { UrlId } from '../model/UrlId';
import { CaseDetail, CaseModel, CaseInfoModel } from '../model/Case';
import { EnhanceService } from './EnhanceService';
import { UserInfo } from '../entities/users/User';
import { CaseNotFoundError } from '../utils/errors/NotFound';
import { TalentService } from './TalentService';

@Service()
export class CaseService implements AfterRoutesInit {
    private connection: Connection;

    public constructor(
        private typeORMService: TypeORMService,
        private equipService: EquipService,
        private enhanceService: EnhanceService,
        private talentService: TalentService,
    ) {}

    public $afterRoutesInit(): void {
        this.connection = this.typeORMService.get('users');
    }

    public async findOne(id: ObjectID): Promise<CaseScheme> {
        const caseScheme = await this.connection.manager.findOne(CaseScheme, {
            where: { _id: id },
        });
        return caseScheme;
    }

    public getCaseInfo(cases: CaseInfo[], id: UrlId): CaseInfo | undefined {
        const info = cases.find(caseInfo => caseInfo.id === id.objectId.toHexString());
        return info;
    }

    public async getCaseDetail(info: CaseInfo, scheme: CaseScheme): Promise<CaseDetail> {
        const detail = Object.assign(new CaseDetail(), info) as CaseDetail;
        detail.scheme = scheme;
        const equipIds = scheme.equip.map(equip => equip.id);
        const equips = await this.equipService.findByIds(equipIds);

        const enhanceIds = scheme.equip.map(equip => equip.enhance).filter(id => !!id);
        const enhances = await this.enhanceService.findByIds(enhanceIds);

        const talents = await this.talentService.findByIds(scheme.talent);
        detail.equip = equips;
        detail.enhance = enhances;
        detail.talent = talents;
        detail.id = UrlId.fromHex(detail.id).url;

        return detail;
    }

    public async create(caseModel: CaseModel, user: UserInfo): Promise<void> {
        const scheme = new CaseScheme();
        scheme.equip = caseModel.equip;
        scheme.effect = caseModel.effect;
        scheme.talent = caseModel.talent;
        const { id } = await this.connection.manager.save(scheme);
        const info = new CaseInfo();
        info.id = id;
        info.name = caseModel.name;
        info.kungfu = caseModel.kungfu;
        info.published = false;
        user.cases.push(info);
        await this.connection.manager.save(user);
    }

    public async update(caseModel: CaseModel, id: UrlId): Promise<void> {
        const scheme = await this.findOne(id.objectId);
        if (!scheme) {
            throw new CaseNotFoundError(id);
        }
        scheme.equip = caseModel.equip;
        scheme.effect = caseModel.effect;
        scheme.talent = caseModel.talent;
        await this.connection.manager.save(scheme);
    }

    public async updateCaseInfo(user: UserInfo, id: UrlId, patch: CaseInfoModel): Promise<CaseInfo> {
        const idx = user.cases.findIndex(caseInfo => caseInfo.id === id.objectId.toHexString());
        if (idx < 0) {
            return null;
        }
        const info = user.cases[idx];
        const newInfo = { ...info, ...patch };
        // eslint-disable-next-line no-param-reassign
        user.cases[idx] = newInfo;
        await this.connection.manager.save(user);
        return newInfo;
    }

    public async remove(user: UserInfo, urlId: UrlId): Promise<void> {
        await this.connection.manager.delete(CaseScheme, urlId.objectId);
        const cases = user.cases.filter(c => c.id !== urlId.objectId.toHexString());
        // eslint-disable-next-line no-param-reassign
        user.cases = cases;
        await this.connection.manager.save(user);
    }
}
