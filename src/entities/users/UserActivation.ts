import { Column } from 'typeorm';
import randomString from 'crypto-random-string';
import { addMinutes } from 'date-fns';

const VERIFY_EXPIRATION_MINUTES = 30;
const RESET_EXPIRATION_MINUTES = 10;

export class UserActivation {
    @Column()
    public activate: boolean;

    @Column()
    public verifyToken: string;

    @Column()
    public verifyExpireAt: Date;

    @Column()
    public resetToken: string;

    @Column()
    public resetExpireAt: Date;

    public constructor() {
        this.activate = false;
        this.verifyToken = randomString({ length: 64, type: 'url-safe' });
        this.verifyExpireAt = addMinutes(Date.now(), VERIFY_EXPIRATION_MINUTES);
    }

    public updateResetToken(): void {
        this.resetToken = randomString({ length: 64, type: 'url-safe' });
        this.resetExpireAt = addMinutes(Date.now(), RESET_EXPIRATION_MINUTES);
    }
}
