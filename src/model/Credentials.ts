import { Email, MinLength, Required } from '@tsed/common';
import { User } from '../entities/users/User';
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

export class CredentialsModel {
    public email: string;

    public password: string;
}
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Express {
        interface User {
            uid: string;
            email: string;
            name: string;
            syncLimit: number;
            activate: boolean;
            token: string;
        }
    }
}
export type UserInfo = Partial<User>;
export type UserInfoResource = Resource<UserInfo>;

export interface JWTSignPayload {
    eml: string;
    nam: string;
    act: boolean;
    lim: number;
}
export interface JWTPayload extends JWTSignPayload {
    iat: number;
}
