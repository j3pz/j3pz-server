import { Controller, Get, Req } from '@tsed/common';
import { Summary } from '@tsed/swagger';
import { Authenticate } from '@tsed/passport';
import { ConfigService } from '../services/ConfigService';
import { UserService } from '../services/UserService';
import { UserInfoResource } from '../model/Credentials';
import { Resource } from '../model/Server';

@Controller('/user')
export class UserCtrl {
    public constructor(private userService: UserService, private configService: ConfigService) {}

    @Get()
    @Summary('获取用户信息')
    @Authenticate('jwt', { failWithError: true })
    public async userInfo(@Req() req: Req): Promise<UserInfoResource> {
        return new Resource(req.user.uid, 'User', req.user);
    }
}
