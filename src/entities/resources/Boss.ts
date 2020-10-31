import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';
import { Title } from '@tsed/swagger';
import { GameMap } from './Map';

@Entity()
export class Boss {
    @PrimaryGeneratedColumn()
    @Title('ID')
    public id: number;

    @Column({
        nullable: true,
    })
    @Title('首领名称')
    public name: string;

    @ManyToOne(() => GameMap, map => map.id, { cascade: true })
    @Title('对应地图')
    public map: GameMap;
}
