export interface RawGlobalConfig {
    qualityRange: string;
    talent: boolean;
}
export class GlobalConfig {
    public minQuality: number;

    public maxQaulity: number;

    public qualityTick: number;

    public talent: boolean;

    public constructor(rawConfig: RawGlobalConfig) {
        this.update(rawConfig);
    }

    public update(rawConfig: RawGlobalConfig): void {
        this.updateQuality(rawConfig.qualityRange);
        this.talent = rawConfig.talent;
    }

    private updateQuality(range: string): void {
        const [min, tick, max] = range.split('|');
        if (min) this.minQuality = parseInt(min, 10);
        if (tick) this.qualityTick = parseInt(tick, 10);
        if (max) this.maxQaulity = parseInt(max, 10);
    }
}
