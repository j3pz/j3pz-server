import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';
import { Title, Description } from '@tsed/swagger';
import { Effect } from './Effect';
import { EquipSet } from './EquipSet';

@Entity()
export class SetEffect {
    @PrimaryGeneratedColumn()
    @Title('ID')
    public id: number;

    @Column()
    @Title('生效要求')
    @Description('套装特效生效要求的特效装备数量')
    public requirement: number;

    @ManyToOne(() => Effect, effect => effect.id, { cascade: true })
    @Title('特效')
    public effect: Effect;

    @ManyToOne(() => EquipSet, set => set.setEffect, { cascade: true })
    public set: EquipSet;
}
