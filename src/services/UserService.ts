import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection } from 'typeorm';
import { User } from '../entities/users/User';

@Service()
export class UserService implements AfterRoutesInit {
    private connection: Connection;

    public constructor(private typeORMService: TypeORMService) {
        // nothing
    }

    public $afterRoutesInit(): void {
        this.connection = this.typeORMService.get('users');
    }

    public async create(): Promise<User> {
        const user = new User();
        // TODO: 处理用户注册信息
        await this.connection.manager.save(user);
        return user;
    }
}
