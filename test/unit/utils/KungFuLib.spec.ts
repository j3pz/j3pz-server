import { expect } from 'chai';
import { kungFuLib } from '../../../src/utils/KungFuLib';

describe('KungFuLib', () => {
    it('should have 26 kungfues', () => {
        expect(Object.keys(kungFuLib).length).equals(26);
    });
});
