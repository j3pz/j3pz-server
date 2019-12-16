import { expect } from 'chai';
import { GlobalConfig, SettingType } from '../../../src/model/GlobalConfig';

describe('GlobalConfig', () => {
    it('should be able to create', () => {
        const config = new GlobalConfig();
        expect(config).to.be.instanceOf(GlobalConfig);
        expect(config.minQuality).equals(undefined);
        expect(config.maxQaulity).equals(undefined);
        expect(config.qualityTick).equals(undefined);
        expect(config.talent).equals(undefined);
    });
    it('should be able to parse config', () => {
        const config = new GlobalConfig();
        config.update({
            qualityRange: {
                Value: '1080|2000|3000',
                SettingType: SettingType.TEXT,
            },
            talent: {
                Value: true,
                SettingType: SettingType.ON_OFF_TOGGLE,
            },
        });
        expect(config.minQuality).equals(1080);
        expect(config.maxQaulity).equals(3000);
        expect(config.qualityTick).equals(2000);
        expect(config.talent).equals(true);
    });
});
