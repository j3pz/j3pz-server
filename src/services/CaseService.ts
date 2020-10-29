import { Service, AfterRoutesInit, $log } from '@tsed/common';
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
import { StoneService } from './StoneService';
import { kungFuLib } from '../utils/KungFuLib';

@Service()
export class CaseService implements AfterRoutesInit {
    private connection: Connection;

    public constructor(
        private typeORMService: TypeORMService,
        private equipService: EquipService,
        private enhanceService: EnhanceService,
        private talentService: TalentService,
        private stoneService: StoneService,
    ) {}

    public $afterRoutesInit(): void {
        this.connection = this.typeORMService.get('users');
    }

    public async findOne(id: ObjectID): Promise<CaseScheme> {
        const caseScheme = await this.connection.manager.findOne(CaseScheme, {
            where: { _id: id },
        });
        if (caseScheme.version < 2) {
            await this.upgradeScheme(caseScheme);
        }
        return caseScheme;
    }

    public getCaseInfo(cases: CaseInfo[], id: UrlId): CaseInfo | undefined {
        const info = cases.find(caseInfo => caseInfo.id === id.objectId.toHexString());
        return info;
    }

    public async getCaseDetail(info: CaseInfo, scheme: CaseScheme): Promise<CaseDetail> {
        const detail = Object.assign(new CaseDetail(), info) as CaseDetail;
        detail.scheme = scheme.versionAdapter();
        const stoneIds = [];
        const equipIds = scheme.equip.map((equip) => {
            if (equip.stone) {
                stoneIds.push(equip.stone);
            }
            return equip.id;
        });
        const equips = await this.equipService.findByIds(equipIds);

        const enhanceIds = scheme.equip.map(equip => equip.enhance).filter(id => !!id);
        const enhances = await this.enhanceService.findByIds(enhanceIds);

        const talents = await this.talentService.findByIds(scheme.talent);
        const stones = await this.stoneService.findByIds(stoneIds);

        detail.equip = equips;
        detail.enhance = enhances;
        detail.talent = talents;
        detail.stone = stones;
        detail.kungfuMeta = kungFuLib[detail.kungfu];
        detail.id = UrlId.fromHex(detail.id).url;

        delete detail.school;
        return detail;
    }

    public async create(caseModel: CaseModel, user: UserInfo): Promise<CaseInfo> {
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
        info.lastUpdate = new Date();
        user.cases.push(info);
        await this.connection.manager.save(user);
        return info;
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
        // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
        const newInfo = { ...info, ...patch } as CaseInfo;
        // eslint-disable-next-line no-param-reassign
        user.cases[idx] = newInfo;
        await this.connection.manager.save(user);
        return newInfo;
    }

    public async remove(user: UserInfo, urlId: UrlId): Promise<void> {
        $log.info(`User ${user.uid} delete case ${urlId.objectId}`);
        // await this.connection.manager.delete(CaseScheme, urlId.objectId);
        const scheme = await this.findOne(urlId.objectId);
        if (scheme) {
            scheme.deleted = true;
            scheme.deletedAt = new Date();
            await this.connection.manager.save(scheme);
        }
        const cases = user.cases.filter(c => c.id !== urlId.objectId.toHexString());
        // eslint-disable-next-line no-param-reassign
        user.cases = cases;
        await this.connection.manager.save(user);
    }

    private async upgradeScheme(old: CaseScheme): Promise<void> {
        const scheme = old;
        scheme.version = 2;
        delete scheme.save;
        await this.connection.getMongoRepository(CaseScheme).updateOne(
            { _id: ObjectID.createFromHexString(scheme.id) },
            {
                $unset: {
                    save: '',
                    attribute: '',
                    name: '',
                    school: '',
                },
            },
        );
        await this.connection.manager.save(scheme);
    }
}
