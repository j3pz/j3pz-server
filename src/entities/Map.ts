import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class GameMap {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;
}
