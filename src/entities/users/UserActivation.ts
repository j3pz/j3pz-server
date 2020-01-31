import { Column } from 'typeorm';
import randomString from 'crypto-random-string';
import { addMinutes } from 'date-fns';

const VERIFY_EXPIRATION_MINUTES = 30;

export class UserActivation {
    @Column()
    public activate: boolean;

    @Column()
    public verifyToken: string;

    @Column()
    public expireAt: Date;

    public constructor() {
        this.activate = false;
        this.verifyToken = randomString({ length: 64, type: 'url-safe' });
        this.expireAt = addMinutes(Date.now(), VERIFY_EXPIRATION_MINUTES);
    }
}
