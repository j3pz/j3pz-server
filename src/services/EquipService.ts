import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection, Between } from 'typeorm';
import { Equip } from '../entities/Equip';
import { AttributeTag, Category, KungFu } from '../model/Base';

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

    public async find(filter: EquipListFilter): Promise<Equip[]> {
        const equips = await this.connection.manager.find(Equip, {
            where: {
                quality: Between(filter.quality[0], filter.quality[1]),
                category: filter.category,
            },
        });

        return equips;
    }

    public async findById(id: number): Promise<Equip> {
        const equip = await this.connection.manager.findOne(Equip, id);
        return equip;
    }
}
