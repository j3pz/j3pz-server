import { Email, MinLength, Required } from '@tsed/common';
import { User } from '../entities/users/User';

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

export type UserInfo = Partial<User>;
