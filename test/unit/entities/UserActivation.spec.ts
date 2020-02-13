import { expect } from 'chai';
import { UserActivation } from '../../../src/entities/users/UserActivation';

describe('UserActivation Entity', () => {
    it('should be able to create', () => {
        const activation = new UserActivation();
        expect(activation.activate).to.equal(false);
    });
    it('should be able to update', () => {
        const activation = new UserActivation();
        expect(activation.resetToken).to.equal(undefined);
        activation.updateResetToken();
        expect(activation.resetToken).is.a('string').with.length(64);
    });
});
