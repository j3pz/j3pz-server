import { Controller, Post, Req } from '@tsed/common';
import { Summary, Returns } from '@tsed/swagger';
import { Authenticate } from '@tsed/passport';
import { ConfigService } from '../services/ConfigService';
import { UserService } from '../services/UserService';
import { User } from '../entities/users/User';
import { UserInfo } from '../model/Credentials';

@Controller('/auth')
export class AuthCtrl {
    public constructor(private userService: UserService, private configService: ConfigService) {}

    @Post('/signup')
    @Summary('注册用户')
    @Authenticate('signup')
    @Returns(200, { description: 'OK', type: User })
    public async create(@Req() req: Req): Promise<UserInfo> {
        return req.user;
    }

    @Post('/login')
    @Summary('登录')
    @Authenticate('login', { failWithError: true })
    public async login(@Req() req: Req): Promise<UserInfo> {
        return req.user;
    }
}
