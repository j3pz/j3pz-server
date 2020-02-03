import {
    Controller, Get, Req, PathParams,
} from '@tsed/common';
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

    @Get('/verify/:permalink/:token')
    @Summary('邮箱验证')
    @Authenticate(['jwt', 'anonymous'])
    public async verify(
        @Req() req: Req,
        @PathParams('permalink') permalink: string,
        @PathParams('token') token: string,
    ): Promise<UserInfoResource> {
        const user = await this.userService.verify(permalink, token);
        const jwt = this.userService.sign(user);
        const userInfo = this.userService.redact(user, jwt);
        return new Resource(user.uid, 'User', userInfo);
    }
}
