import { Resource } from './Server';
import { CaseScheme } from '../entities/users/CaseScheme';
import { CaseInfo } from '../entities/users/CaseInfo';
import { Equip } from '../entities/resources/Equip';
import { Enhance } from '../entities/resources/Enhance';
import { Stone } from '../entities/resources/Stone';
import { Talent } from '../entities/resources/Talent';
import { KungFuMeta } from '../utils/KungfuMeta';

export class CaseDetail extends CaseInfo {
    public scheme: CaseScheme;

    public equip: Equip[];

    public enhance: Enhance[];

    public stone: Stone[];

    public talent: Talent[];

    public kungfuMeta: KungFuMeta;

    // public result: CaseResult;
}

export type CaseModel = CaseInfo & CaseScheme;
export type CaseInfoModel = Partial<CaseInfo>;
export type CaseInfoResource = Resource<CaseInfo>;
export type CaseResource = Resource<CaseDetail>;
