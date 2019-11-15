import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';
import { GameMap } from './Map';

@Entity()
export class Boss {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        nullable: true,
    })
    public name: string;

    @ManyToOne(() => GameMap, map => map.id)
    public map: GameMap;
}
