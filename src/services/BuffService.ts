import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection } from 'typeorm';
import { Buff } from '../entities/Buff';
import { KungFu } from '../model/Base';
import { BuffCore } from '../model/Buff';

interface BuffListFilter {
    kungfu: KungFu;
}

@Service()
export class BuffService implements AfterRoutesInit {
    private connection: Connection;

    public constructor(private typeORMService: TypeORMService) {
        // nothing
    }

    public $afterRoutesInit(): void {
        this.connection = this.typeORMService.get('resources');
    }

    public async find(filter: BuffListFilter): Promise<BuffCore[]> {
        const buffs = await this.connection.manager.find(Buff, {
            select: ['id', 'name', 'icon'],
            relations: ['effect'],
        });

        return buffs.map(buff => ({ ...buff, description: buff.effect.description, effect: undefined }));
    }

    public async findById(id: number): Promise<Buff> {
        const buff = await this.connection.manager.findOne(Buff, id, {
            relations: ['effect'],
        });
        return buff;
    }
}
