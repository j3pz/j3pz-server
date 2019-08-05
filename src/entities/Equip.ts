import { Property } from '@tsed/common';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Equip {
    @PrimaryGeneratedColumn()
    @Property()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public category: string;
}
