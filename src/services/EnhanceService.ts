import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection } from 'typeorm';
import { Enhance } from '../entities/Enhance';
import { Category, KungFu } from '../model/Base';
import { kungFuLib } from '../utils/KungFuLib';
import { KungFuMeta } from '../utils/KungfuMeta';

interface EnhanceListFilter {
    kungfu: KungFu;
    category: Category;
}

@Service()
export class EnhanceService implements AfterRoutesInit {
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

    public async find(filter: EnhanceListFilter): Promise<Enhance[]> {
        const kungfuFilter = this.getFilterByKungfu(filter.kungfu);
        const enhances = await this.connection.manager.find(Enhance, {
            select: ['id', 'name', 'category'],
            where: {
                category: filter.category,
            },
        });

        return enhances;
    }

    public async findById(id: number): Promise<Enhance> {
        const enhance = await this.connection.manager.findOne(Enhance, id);
        return enhance;
    }
}
