export const enum SettingType {
    ON_OFF_TOGGLE,
    TEXT,
    WHOLE_NUMBER,
    DECIMAL_NUMBER,
}

export interface ConfigObject<T> {
    Value: T;
    SettingType: SettingType;
}

export interface RawGlobalConfig {
    qualityRange: ConfigObject<string>;
    talent: ConfigObject<boolean>;
    dbVersion: ConfigObject<string>;
    announcement: ConfigObject<string>;
}

export const defaultConfig: RawGlobalConfig = {
    qualityRange: {
        Value: '1080|2000|3000',
        SettingType: SettingType.TEXT,
    },
    talent: {
        Value: true,
        SettingType: SettingType.ON_OFF_TOGGLE,
    },
    dbVersion: {
        Value: '1.0.0.0',
        SettingType: SettingType.TEXT,
    },
    announcement: {
        Value: '||',
        SettingType: SettingType.TEXT,
    },
};

export class GlobalConfig {
    public minQuality: number;

    public maxQaulity: number;

    public qualityTick: number;

    public talent: boolean;

    public dbVersion: string;

    public announcementVersion: string;

    public announcementTitle: string;

    public announcement: string;

    private parseConfig<T>(config: ConfigObject<T>): T {
        return config.Value;
    }

    public update(rawConfig: RawGlobalConfig): void {
        this.updateQuality(this.parseConfig(rawConfig.qualityRange));
        this.talent = this.parseConfig(rawConfig.talent);
        this.dbVersion = this.parseConfig(rawConfig.dbVersion);
        [this.announcementVersion, this.announcementTitle, this.announcement] = this.parseConfig(rawConfig.announcement);
    }

    private updateQuality(range: string): void {
        const [min, tick, max] = range.split('|');
        if (min) this.minQuality = parseInt(min, 10);
        if (tick) this.qualityTick = parseInt(tick, 10);
        if (max) this.maxQaulity = parseInt(max, 10);
    }
}
