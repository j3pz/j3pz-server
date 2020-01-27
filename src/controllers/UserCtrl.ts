import { Controller, Post } from '@tsed/common';
import { Summary, Returns } from '@tsed/swagger';
import { ConfigService } from '../services/ConfigService';
import { UserService } from '../services/UserService';
import { User } from '../entities/users/User';

@Controller('/user')
export class UserCtrl {
    public constructor(private userService: UserService, private configService: ConfigService) {}

    @Post()
    @Summary('注册用户')
    @Returns(200, { description: 'OK', type: User })
    public async create(): Promise<User> {
        const user = await this.userService.create();
        return user;
    }
}
