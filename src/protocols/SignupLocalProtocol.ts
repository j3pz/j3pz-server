import { BodyParams } from '@tsed/common';
import { OnVerify, Protocol } from '@tsed/passport';
import { Strategy } from 'passport-local';
import { UserService } from '../services/UserService';
import { RegisterModel } from '../model/Credentials';
import { DuplicateUserError } from '../utils/errors/Forbidden';
import { UserInfo } from '../entities/users/User';

@Protocol({
    name: 'signup',
    useStrategy: Strategy,
    settings: {
        usernameField: 'email',
        passwordField: 'password',
    },
})
export class SignupLocalProtocol implements OnVerify {
    public constructor(private userService: UserService) {}

    public async $onVerify(@BodyParams() register: RegisterModel): Promise<UserInfo> {
        const { email } = register;
        const found = await this.userService.findOne(email);

        if (found) {
            throw new DuplicateUserError(email);
        }

        const user = await this.userService.create(register);
        return user;
    }
}
