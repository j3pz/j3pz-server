import { expect } from 'chai';
import { ObjectID } from 'mongodb';
import { User } from '../../../src/entities/users/User';
import { UserActivation } from '../../../src/entities/users/UserActivation';

describe('User Entity', () => {
    it('should be able to create', () => {
        const user = new User();
        expect(user.syncLimit).is.a('number');
        expect(user.activation).is.instanceOf(UserActivation);
    });
    it('should be able to verify password', () => {
        const user = new User();
        user.password = 'eab123';
        expect(user.verifyPassword('eab123')).to.equal(true);
        expect(user.verifyPassword('eab323')).to.equal(false);
    });
    it('should be able to get uid', () => {
        const user = new User();
        const hex = '5e3abe763a77c50db0c63f78';
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        user._id = ObjectID.createFromHexString(hex);
        expect(user.uid).to.equal(hex);
    });
});
