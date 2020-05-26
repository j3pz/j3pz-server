import { BodyParams, Req } from '@tsed/common';
import { OnVerify, Protocol } from '@tsed/passport';
import { IStrategyOptions, Strategy } from 'passport-local';
import { UserService } from '../services/UserService';
import { CredentialsModel } from '../model/Credentials';
import { NoSuchUserError, PasswordVerifyError } from '../utils/errors/Unauthorized';
import { UserInfo } from '../entities/users/User';

@Protocol<IStrategyOptions>({
    name: 'login',
    useStrategy: Strategy,
    settings: {
        usernameField: 'email',
        passwordField: 'password',
        session: false,
    },
})
export class LoginLocalProtocol implements OnVerify {
    public constructor(private userService: UserService) {}

    public async $onVerify(@Req() request: Req, @BodyParams() credentials: CredentialsModel): Promise<UserInfo> {
        const { email, password } = credentials;

        const user = await this.userService.findOne(email);
        if (!user) {
            throw new NoSuchUserError(email);
        }

        if (!user.verifyPassword(password)) {
            throw new PasswordVerifyError();
        }
        return user;
    }
}
