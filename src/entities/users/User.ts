import {
    Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn,
} from 'typeorm';
import { createHash } from 'crypto';

@Entity()
export class User {
    @ObjectIdColumn()
    private _id: ObjectID;

    @Column({
        unique: true,
    })
    public email: string;

    @Column({
        name: 'password',
    })
    private hashedPassword: string;

    @Column()
    public name: string;

    @Column()
    public syncLimit: number;

    @Column()
    public activate: boolean;

    @CreateDateColumn()
    public createAt: Date;

    public constructor() {
        this.syncLimit = 3;
        this.activate = false;
    }

    public set password(password: string) {
        const hashedPassword = createHash('md5').update(password).digest('hex');
        this.hashedPassword = hashedPassword;
    }

    public verifyPassword(password: string): boolean {
        const hashedPassword = createHash('md5').update(password).digest('hex');
        return hashedPassword === this.hashedPassword;
    }
}
