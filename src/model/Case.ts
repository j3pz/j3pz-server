import { Resource } from './Server';
import { CaseScheme } from '../entities/users/CaseScheme';
import { CaseInfo } from '../entities/users/CaseInfo';

export type CaseInfoResource = Resource<CaseInfo>;
export type CaseResource = Resource<CaseScheme>;
