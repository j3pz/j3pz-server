import { Email, MinLength } from '@tsed/common';

export class UserModel {
    @Email()
    public email: string;

    @MinLength(6)
    public password: string;

    public name: string;
}
