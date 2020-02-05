import { Req } from '@tsed/common';
import { OnVerify, Protocol, Arg } from '@tsed/passport';
import { StrategyOptions, Strategy, ExtractJwt } from 'passport-jwt';
import { UserService } from '../services/UserService';
import { JWTPayload } from '../model/Credentials';
import { NoSuchUserError } from '../utils/errors/Unauthorized';
import { UserInfo } from '../entities/users/User';

@Protocol<StrategyOptions>({
    name: 'jwt',
    useStrategy: Strategy,
    settings: {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
    },
})
export class JWTLocalProtocol implements OnVerify {
    public constructor(private userService: UserService) {}

    public async $onVerify(@Req() request: Req, @Arg(0) payload: JWTPayload): Promise<UserInfo> {
        const email = payload.eml;
        const user = await this.userService.findOne(email);
        if (!user) {
            throw new NoSuchUserError(email);
        }
        return user;
    }
}
