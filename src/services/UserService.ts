import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection } from 'typeorm';
import { createHash } from 'crypto';
import { User } from '../entities/users/User';
import { UserModel } from '../model/User';

@Service()
export class UserService implements AfterRoutesInit {
    private connection: Connection;

    public constructor(private typeORMService: TypeORMService) {
        // nothing
    }

    public $afterRoutesInit(): void {
        this.connection = this.typeORMService.get('users');
    }

    public async create(userModel: UserModel): Promise<User> {
        const user = new User();
        // TODO: 处理用户注册信息
        user.name = userModel.name;
        user.email = userModel.email;
        const cipheredPassword = createHash('md5').update(userModel.password).digest('hex');
        user.password = cipheredPassword;
        await this.connection.manager.save(user);
        return user;
    }
}
