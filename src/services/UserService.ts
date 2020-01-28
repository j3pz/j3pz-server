import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection } from 'typeorm';
import { User } from '../entities/users/User';
import { RegisterModel, UserInfo } from '../model/Credentials';

@Service()
export class UserService implements AfterRoutesInit {
    private connection: Connection;

    public constructor(private typeORMService: TypeORMService) {
        // nothing
    }

    public $afterRoutesInit(): void {
        this.connection = this.typeORMService.get('users');
    }

    public redact(user: User): UserInfo {
        const info = {
            syncLimit: user.syncLimit,
            activate: user.activate,
            email: user.email,
            name: user.name,
        };
        return info;
    }

    public async findOne(email: string): Promise<User> {
        const user = await this.connection.manager.findOne(User, {
            where: { email },
        });
        return user;
    }

    public async create(register: RegisterModel): Promise<User> {
        const user = new User();
        user.name = register.name;
        user.email = register.email;
        user.password = register.password;
        await this.connection.manager.save(user);
        return user;
    }
}
