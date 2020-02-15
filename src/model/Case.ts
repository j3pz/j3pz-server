import { Resource } from './Server';
import { CaseScheme } from '../entities/users/CaseScheme';
import { CaseInfo } from '../entities/users/CaseInfo';
import { Equip } from '../entities/resources/Equip';
import { Enhance } from '../entities/resources/Enhance';
import { Stone } from '../entities/resources/Stone';

export class CaseDetail extends CaseInfo {
    public scheme: CaseScheme;

    public equip: Equip[];

    public enhance: Enhance[];

    public stone: Stone[];

    // public result: CaseResult;
}

export type CaseModel = CaseInfo & CaseScheme;
export type CaseInfoResource = Resource<CaseInfo>;
export type CaseResource = Resource<CaseDetail>;
