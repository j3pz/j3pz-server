import { Req } from '@tsed/common';
import { OnVerify, Protocol } from '@tsed/passport';
import { StrategyOptions, Strategy, ExtractJwt } from 'passport-jwt';
import { UserService } from '../services/UserService';
import { UserInfo } from '../model/Credentials';

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

    public async $onVerify(@Req() request: Req, payload): Promise<UserInfo> {
        console.log(payload); // TODO: do more verify here and get user object
        return {};
    }
}
