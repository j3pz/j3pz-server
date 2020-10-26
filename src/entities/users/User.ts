import {
    Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, AfterLoad,
} from 'typeorm';
import { createHash } from 'crypto';
import { UserActivation } from './UserActivation';
import { Preference } from './Preference';
import { CaseInfo } from './CaseInfo';

export interface UserInfo {
    uid: string;
    email: string;
    name: string;
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

    @Column({
        unique: true,
    })
    public domain: string;

    @Column()
    private hashedPassword: string;

    @Column()
    public name: string;

    @Column()
    public version: number;

    @Column(() => UserActivation)
    public activation: UserActivation;

    @CreateDateColumn()
    public createAt: Date;

    @Column(() => Preference)
    public preference: Preference;

    @Column(() => CaseInfo)
    public cases: CaseInfo[];

    public constructor() {
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

    @AfterLoad()
    public versionAdapter(): void {
        // adapter for version 1
        if (this.version === 1) {
            this.hashedPassword = this.v1Password;
            if (this.activate) {
                this.activation.activate = true;
            }
            this.cases = this.cases.map(c => c.versionAdapter());
        }
    }

    // ↓ Version 1 Properties
    @Column({ name: 'password', update: false })
    public v1Password: string;

    @Column({ update: false })
    public activate: boolean;
}
