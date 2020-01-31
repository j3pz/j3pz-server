import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection } from 'typeorm';
import { sign } from 'jsonwebtoken';
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

    public redact(user: User, token: string): UserInfo {
        const info = {
            uid: user.uid,
            email: user.email,
            name: user.name,
            syncLimit: user.syncLimit,
            activate: user.activate,
            token,
        };
        return info;
    }

    public sign(user: User): string {
        const token = sign({
            eml: user.email,
            nam: user.name,
        }, process.env.JWT_SECRET);
        return token;
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
