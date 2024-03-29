import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection, In } from 'typeorm';
import { Talent } from '../entities/resources/Talent';
import { TalentRecommend } from '../entities/resources/TalentRecommend';
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
        const talents = await this.connection.manager.find(Talent, {
            select: ['id', 'index', 'name', 'description', 'icon'],
            relations: ['effect'],
            where: {
                kungfu: filter.kungfu === '山居剑意' ? '问水诀' : filter.kungfu,
                version: filter.version,
            },
        });

        return talents;
    }

    public async findById(id: number): Promise<Talent> {
        const talent = await this.connection.manager.findOne(Talent, id, {
            relations: ['effect'],
        });
        return talent;
    }

    public async findByIds(ids: number[]): Promise<Talent[]> {
        if (ids.length === 0) return [];
        const talents = await this.connection.manager.find(Talent, {
            where: { id: In(ids) },
            relations: ['effect'],
        });
        return talents;
    }

    public async findRecommends(kungfu: KungFu): Promise<TalentRecommend[]> {
        const recommends = await this.connection.manager.find(TalentRecommend, {
            where: { kungfu },
            relations: ['talents'],
        });
        return recommends;
    }
}
