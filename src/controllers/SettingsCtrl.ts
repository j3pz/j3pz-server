import {
    Controller, Get,
} from '@tsed/common';
import {
    Summary, Returns,
} from '@tsed/swagger';
import { ConfigService } from '../services/ConfigService';

@Controller('/settings')
export class SettingsCtrl {
    public constructor(private configService: ConfigService) {}

    @Get('/quality-range')
    @Summary('获取装备品级范围')
    @Returns(200, { description: 'OK' })
    public async detail(): Promise<[number, number, number]> {
        const { minQuality, qualityTick, maxQaulity } = this.configService.getConfig();
        return [minQuality, qualityTick, maxQaulity];
    }
}
