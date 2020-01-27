import { Controller, Post, BodyParams } from '@tsed/common';
import { Summary, Returns } from '@tsed/swagger';
import { ConfigService } from '../services/ConfigService';
import { UserService } from '../services/UserService';
import { User } from '../entities/users/User';
import { UserModel } from '../model/User';

@Controller('/user')
export class UserCtrl {
    public constructor(private userService: UserService, private configService: ConfigService) {}

    @Post()
    @Summary('注册用户')
    @Returns(200, { description: 'OK', type: User })
    public async create(@BodyParams() registerInfo: UserModel): Promise<User> {
        const user = await this.userService.create(registerInfo);
        return user;
    }
}
