import { Controller, Get, PathParams } from '@tsed/common';
import { Summary } from '@tsed/swagger';
import { KungFu } from '../model/Base';
import { Resource } from '../model/Server';
import { kungFuLib } from '../utils/KungFuLib';
import { KungFuInfo, KungFuMeta } from '../utils/KungfuMeta';

@Controller('/kungfu')
export class KungfuCtrl {
    @Get()
    @Summary('获取支持门派和心法')
    public list(): Resource<KungFuInfo>[] {
        return Object.entries(kungFuLib).map(([name, meta]: [KungFu, KungFuMeta]) => {
            const { role, primaryAttribute, school } = meta;
            return new Resource(name, 'KungFu', {
                primaryAttribute, school, role,
            });
        });
    }

    @Get('/:name')
    @Summary('获取指定心法的信息')
    public detail(@PathParams('name') name: KungFu): Resource<KungFuMeta> {
        return new Resource(name, 'KungFu', kungFuLib[name]);
    }
}
