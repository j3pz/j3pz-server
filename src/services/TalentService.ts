import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection } from 'typeorm';
import { Talent } from '../entities/Talent';
import { KungFu } from '../model/Base';

interface TalentListFilter {
    kungfu: KungFu;
    version: string;
}

@Service()
export class TalentService implements AfterRoutesInit {
    private connection: Connection;

    public constructor(private typeORMService: TypeORMService) {
        // nothing
    }

    public $afterRoutesInit(): void {
        this.connection = this.typeORMService.get('resources');
    }

    public async find(filter: TalentListFilter): Promise<Talent[]> {
        const Talents = await this.connection.manager.find(Talent, {
            where: {
                kungfu: filter.kungfu,
                version: filter.version,
            },
        });

        return Talents;
    }

    public async findById(id: number): Promise<Talent> {
        const talent = await this.connection.manager.findOne(Talent, id);
        return talent;
    }
}
