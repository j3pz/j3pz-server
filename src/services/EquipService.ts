import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection, Between, In } from 'typeorm';
import { Equip } from '../entities/Equip';
import {
    AttributeTag, Category, KungFu,
} from '../model/Base';
import { kungFuMeta, KungFuMeta } from '../utils/KungFus';

interface EquipListFilter {
    kungfu: KungFu;
    category: Category;
    quality: [number, number];
    tag?: AttributeTag[];
}

@Service()
export class EquipService implements AfterRoutesInit {
    private connection: Connection;

    public constructor(private typeORMService: TypeORMService) {
        // nothing
    }

    public $afterRoutesInit(): void {
        this.connection = this.typeORMService.get('resources');
    }

    private getFilterByKungfu(kungfu: KungFu): KungFuMeta {
        // todo: 报错处理
        return kungFuMeta[kungfu];
    }

    public async find(filter: EquipListFilter): Promise<Equip[]> {
        const kungfuFilter = this.getFilterByKungfu(filter.kungfu);
        const equips = await this.connection.manager.find(Equip, {
            select: ['id', 'icon', 'name', 'quality'],
            where: {
                quality: Between(filter.quality[0], filter.quality[1]),
                category: filter.category,
                school: In([kungfuFilter.school, '通用', '精简']),
                primaryAttribute: In([kungfuFilter.primaryAttribute, 'magic']),
            },
        });

        return equips;
    }

    public async findById(id: number): Promise<Equip> {
        const equip = await this.connection.manager.findOne(Equip, id);
        return equip;
    }
}
