import { Email, MinLength, Required } from '@tsed/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserInfo } from '../entities/users/User';
import { Resource } from './Server';

export class RegisterModel {
    @Email()
    @Required()
    public email: string;

    @MinLength(6)
    @Required()
    public password: string;

    @Required()
    public name: string;
}

export interface CredentialsModel {
    email: string;
    password: string;
}

export interface ResetModel {
    permalink: string;
    token: string;
    password: string;
    dryRun: boolean;
}

export interface PreferenceModel {
    strengthen?: boolean;
    magicStoneLevel?: number;
}

export interface UserUpdateModel {
    password?: string;
    oldPassword?: string;

    name?: string;
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Express {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface User extends UserInfo {
            token?: string;
        }
    }
}
export interface SimpleUserInfo {
    uid: string;
    email: string;
    name: string;
    activate: boolean;
    token: string;
}
export type UserInfoResource = Resource<SimpleUserInfo>;

export interface JWTSignPayload {
    nam: string;
    act: boolean;
}
export interface JWTPayload extends JWTSignPayload {
    iat: number;
    sub: string;
}
