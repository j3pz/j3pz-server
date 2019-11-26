enum SettingType {
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
}

export class GlobalConfig {
    public minQuality: number;

    public maxQaulity: number;

    public qualityTick: number;

    public talent: boolean;

    private parseConfig<T>(config: ConfigObject<T>): T {
        return config.Value;
    }

    public update(rawConfig: RawGlobalConfig): void {
        this.updateQuality(this.parseConfig(rawConfig.qualityRange));
        this.talent = this.parseConfig(rawConfig.talent);
    }

    private updateQuality(range: string): void {
        const [min, tick, max] = range.split('|');
        if (min) this.minQuality = parseInt(min, 10);
        if (tick) this.qualityTick = parseInt(tick, 10);
        if (max) this.maxQaulity = parseInt(max, 10);
    }
}
