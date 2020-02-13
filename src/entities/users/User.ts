import {
    Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn,
} from 'typeorm';
import { createHash } from 'crypto';
import { UserActivation } from './UserActivation';
import { Preference } from './Preference';
import { CaseInfo } from './CaseInfo';

export interface UserInfo {
    uid: string;
    email: string;
    name: string;
    syncLimit: number;
    activation: UserActivation;
    preference: Preference;
    cases: CaseInfo[];
}

@Entity()
export class User implements UserInfo {
    @ObjectIdColumn()
    private _id: ObjectID;

    @Column({
        unique: true,
    })
    public email: string;

    @Column()
    private hashedPassword: string;

    @Column()
    public name: string;

    @Column()
    public syncLimit: number;

    @Column(() => UserActivation)
    public activation: UserActivation;

    @CreateDateColumn()
    public createAt: Date;

    @Column(() => Preference)
    public preference: Preference;

    @Column(() => CaseInfo)
    public cases: CaseInfo[];

    public constructor() {
        this.syncLimit = 3;
        this.activation = new UserActivation();
        this.preference = new Preference();
        this.cases = [];
    }

    public set password(password: string) {
        const hashedPassword = createHash('md5').update(password).digest('hex');
        this.hashedPassword = hashedPassword;
    }

    public verifyPassword(password: string): boolean {
        const hashedPassword = createHash('md5').update(password).digest('hex');
        return hashedPassword === this.hashedPassword;
    }

    public token?: string;

    public get uid(): string {
        // eslint-disable-next-line no-underscore-dangle
        return this._id.toHexString();
    }
}
