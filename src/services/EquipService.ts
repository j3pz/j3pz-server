import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection } from 'typeorm';
import { Equip } from '../entities/Equip';

@Service()
export class EquipService implements AfterRoutesInit {
    private connection: Connection;

    public constructor(private typeORMService: TypeORMService) {
        // nothing
    }

    public $afterRoutesInit(): void {
        this.connection = this.typeORMService.get('resources');
    }

    public async find(): Promise<Equip[]> {
        const equips = await this.connection.manager.find(Equip);

        return equips;
    }
}
