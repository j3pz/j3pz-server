import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection, Between, In } from 'typeorm';
import { Equip } from '../entities/Equip';
import {
    AttributeTag, Category, KungFu,
} from '../model/Base';
import { kungFuLib } from '../utils/KungFuLib';
import { KungFuMeta } from '../utils/KungfuMeta';

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
        const meta = kungFuLib[kungfu];
        return meta;
    }

    public async find(filter: EquipListFilter): Promise<Equip[]> {
        const kungfuFilter = this.getFilterByKungfu(filter.kungfu);
        const equips = await this.connection.manager.find(Equip, {
            select: ['id', 'icon', 'name', 'quality', 'category'],
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
        const equip = await this.connection.manager.findOne(Equip, id, {
            relations: [
                'effect',
                'set',
                'set.equip',
                'set.setEffect',
                'set.setEffect.effect',
                'source',
                'source.boss',
                'source.boss.map',
                'source.reputation',
            ],
        });
        return equip;
    }
}
