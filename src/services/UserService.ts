import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection } from 'typeorm';
import { ObjectID } from 'mongodb';
import { sign } from 'jsonwebtoken';
import { isAfter } from 'date-fns';
import { User } from '../entities/users/User';
import { RegisterModel, UserInfo, JWTSignPayload } from '../model/Credentials';
import { IncorrectTokenError, ExpiredTokenError } from '../utils/errors/Forbidden';
import { MailService } from './MailService';

@Service()
export class UserService implements AfterRoutesInit {
    private connection: Connection;

    public constructor(private typeORMService: TypeORMService, private mailService: MailService) {
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
            activate: user.activation.activate,
            token,
        };
        return info;
    }

    public sign(user: User): string {
        const payload: JWTSignPayload = {
            eml: user.email,
            nam: user.name,
            lim: user.syncLimit,
            act: user.activation.activate,
        };
        const token = sign(payload, process.env.JWT_SECRET);
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
        user.email = register.email.trim();
        user.password = register.password;
        await this.connection.manager.save(user);
        this.mailService.sendWelcomeMail(user);
        return user;
    }

    public async verify(permalink: string, token: string): Promise<User> {
        const user = await this.connection.manager.findOne(User, {
            where: { _id: ObjectID.createFromHexString(permalink) },
        });
        if (!user) {
            throw new IncorrectTokenError('permalink', permalink);
        }
        if (user.activation.verifyToken !== token) {
            throw new IncorrectTokenError('token', token);
        }
        if (isAfter(Date.now(), user.activation.expireAt)) {
            throw new ExpiredTokenError(`${permalink}/${token}`);
        }
        user.activation.activate = true;
        await this.connection.manager.save(user);
        return user;
    }
}
