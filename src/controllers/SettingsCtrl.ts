import {
    Controller, Get,
} from '@tsed/common';
import {
    Summary, Returns,
} from '@tsed/swagger';
import { ConfigService } from '../services/ConfigService';

type Announcement = {
    version: string;
    title: string;
    content: string;
}

@Controller('/settings')
export class SettingsCtrl {
    public constructor(private configService: ConfigService) {}

    @Get('/quality-range')
    @Summary('获取装备品级范围')
    @Returns(200, { description: 'OK' })
    public async range(): Promise<[number, number, number]> {
        const { minQuality, qualityTick, maxQaulity } = this.configService.getConfig();
        return [minQuality, qualityTick, maxQaulity];
    }

    @Get('/announcement')
    @Summary('获取运营公告')
    @Returns(200, { description: 'OK' })
    public async announcement(): Promise<Announcement> {
        const { announcementVersion, announcement, announcementTitle } = this.configService.getConfig();
        return {
            version: announcementVersion,
            title: announcementTitle,
            content: announcement,
        };
    }
}
