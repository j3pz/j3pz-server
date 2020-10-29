import {
    Controller, Get, Req, PathParams, Post, QueryParams, BodyParams, Put,
} from '@tsed/common';
import { Summary, Description } from '@tsed/swagger';
import { Authenticate } from '@tsed/passport';
import { UserService } from '../services/UserService';
import {
    UserInfoResource, ResetModel, UserUpdateModel, PreferenceModel,
} from '../model/Credentials';
import { Resource, Status } from '../model/Server';
import { ActivatedError } from '../utils/errors/Forbidden';
import { MailService } from '../services/MailService';
import { NoSuchUserError, PasswordVerifyError } from '../utils/errors/Unauthorized';
import { User } from '../entities/users/User';
import { UserActivation } from '../entities/users/UserActivation';

@Controller('/user')
export class UserCtrl {
    public constructor(
        private userService: UserService,
        private mailService: MailService,
    ) {}

    @Get()
    @Summary('获取用户信息')
    @Authenticate('jwt', { failWithError: true })
    public async userInfo(@Req() req: Req): Promise<UserInfoResource> {
        const token = this.userService.sign(req.user);
        const info = this.userService.redact(req.user, token);
        return new Resource(info.uid, 'User', info);
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

    @Post('/verify')
    @Summary('重发邮箱验证')
    @Authenticate('jwt', { failWithError: true })
    public async resend(@Req() req: Req): Promise<Status> {
        if (req.user.activation.activate) {
            throw new ActivatedError(req.user.email);
        }
        req.user.activation = new UserActivation();
        await this.userService.update(req.user as User);
        this.mailService.sendWelcomeMail(req.user);
        return new Status(true);
    }

    @Get('/reset')
    @Summary('请求重设密码')
    public async requestReset(@QueryParams('email') @Description('注册邮箱') email: string): Promise<Status> {
        const user = await this.userService.findOne(email);
        if (!user) {
            throw new NoSuchUserError(email);
        }
        user.activation.updateResetToken();
        await this.userService.update(user);
        this.mailService.sendResetMail(user);
        return new Status(true);
    }

    @Post('/reset')
    @Summary('重置密码')
    public async reset(@BodyParams() resetInfo: ResetModel): Promise<Status> {
        await this.userService.resetPassword(resetInfo);
        return new Status(true);
    }

    @Put()
    @Authenticate('jwt', { failWithError: true })
    public async updateUser(@Req() req: Req, @BodyParams() patch: UserUpdateModel): Promise<Status> {
        const user = req.user as User;
        if (patch.password && patch.oldPassword && user.verifyPassword(patch.oldPassword)) {
            user.password = patch.password;
        } else if (patch.password) {
            throw new PasswordVerifyError();
        }
        if (patch.name) {
            user.name = patch.name;
        }
        await this.userService.update(user);
        return new Status(true);
    }

    @Put('/preference')
    @Authenticate('jwt', { failWithError: true })
    public async updatePreference(@Req() req: Req, @BodyParams() patch: PreferenceModel): Promise<Status> {
        const user = req.user as User;
        if (patch.magicStoneLevel) {
            user.preference.magicStoneLevel = patch.magicStoneLevel;
        }
        if (patch.strengthen) {
            user.preference.strengthen = patch.strengthen;
        }
        await this.userService.update(user);
        return new Status(true);
    }
}
