import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection } from 'typeorm';
import { ObjectID } from 'mongodb';
import { sign } from 'jsonwebtoken';
import { isAfter } from 'date-fns';
import { customAlphabet } from 'nanoid';
import { User, UserInfo } from '../entities/users/User';
import {
    RegisterModel, JWTSignPayload, SimpleUserInfo, ResetModel,
} from '../model/Credentials';
import { IncorrectTokenError, ExpiredTokenError } from '../utils/errors/Forbidden';
import { MailService } from './MailService';

const nanoid = customAlphabet('23456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ', 10);

@Service()
export class UserService implements AfterRoutesInit {
    private connection: Connection;

    public constructor(private typeORMService: TypeORMService, private mailService: MailService) {
        // nothing
    }

    public $afterRoutesInit(): void {
        this.connection = this.typeORMService.get('users');
    }

    public redact(user: UserInfo, token: string): SimpleUserInfo {
        const info = {
            uid: user.uid,
            email: user.email,
            name: user.name,
            activate: user.activation.activate,
            token,
        };
        return info;
    }

    public sign(user: UserInfo): string {
        const payload: JWTSignPayload = {
            nam: user.name,
            act: user.activation.activate,
        };
        const token = sign(payload, process.env.JWT_SECRET, {
            expiresIn: '7d',
            subject: user.email,
        });
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
        user.domain = nanoid();
        await this.connection.manager.save(user);
        this.mailService.sendWelcomeMail(user);
        return user;
    }

    public async verify(permalink: string, token: string): Promise<User> {
        const user = await this.connection.manager.findOne(User, {
            where: { _id: ObjectID.createFromHexString(permalink) },
        });
        if (!user) {
            throw new IncorrectTokenError('permalink', permalink, 'activation');
        }
        if (user.activation.verifyToken !== token) {
            throw new IncorrectTokenError('token', token, 'activation');
        }
        if (isAfter(Date.now(), user.activation.verifyExpireAt)) {
            throw new ExpiredTokenError(`${permalink}/${token}`, 'activation');
        }
        user.activation.activate = true;
        await this.connection.manager.save(user);
        return user;
    }

    public async resetPassword(resetInfo: ResetModel): Promise<User> {
        const { password, permalink, token } = resetInfo;
        const user = await this.connection.manager.findOne(User, {
            where: { _id: ObjectID.createFromHexString(permalink) },
        });
        if (!user) {
            throw new IncorrectTokenError('permalink', permalink, 'reset');
        }
        if (user.activation.resetToken !== token) {
            throw new IncorrectTokenError('token', token, 'reset');
        }
        if (isAfter(Date.now(), user.activation.resetExpireAt)) {
            throw new ExpiredTokenError(`${permalink}/${token}`, 'reset');
        }
        user.password = password;
        await this.update(user);
        return user;
    }

    public async update(user: User): Promise<User> {
        await this.connection.manager.save(user);
        return user;
    }

    public async findByDomain(domain: string): Promise<User> {
        const user = await this.connection.manager.findOne(User, {
            where: { domain },
        });
        return user;
    }
}
