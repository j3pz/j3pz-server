import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { ObjectID } from 'mongodb';
import { Connection } from 'typeorm';
import { CaseScheme } from '../entities/users/CaseScheme';
import { EquipService } from './EquipService';
import { CaseInfo } from '../entities/users/CaseInfo';
import { CaseId } from '../model/CaseId';
import { CaseDetail } from '../model/Case';
import { EnhanceService } from './EnhanceService';

@Service()
export class CaseService implements AfterRoutesInit {
    private connection: Connection;

    public constructor(
        private typeORMService: TypeORMService,
        private equipService: EquipService,
        private enhanceService: EnhanceService,
    ) {}

    public $afterRoutesInit(): void {
        this.connection = this.typeORMService.get('users');
    }

    public async findOne(id: ObjectID): Promise<any> {
        const caseScheme = await this.connection.manager.findOne(CaseScheme, {
            where: { _id: id },
        });
        return caseScheme;
    }

    public getCaseInfo(cases: CaseInfo[], id: CaseId): CaseInfo {
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
        detail.equip = equips;
        detail.enhance = enhances;

        return detail;
    }
}
