import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import { SetEffect } from './SetEffect';

@Entity()
export class EquipSet {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @OneToMany(() => SetEffect, setEffect => setEffect.set)
    public setEffect: SetEffect[];
}
