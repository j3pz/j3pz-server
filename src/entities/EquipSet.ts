import {
    Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn,
} from 'typeorm';
import { SetEffect } from './SetEffect';

@Entity()
export class EquipSet {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @OneToOne(() => SetEffect)
    @JoinColumn()
    public setEffect: SetEffect;
}
