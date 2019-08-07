import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';
import { Effect } from './Effect';

@Entity()
export class SetEffect {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public requirement: number;

    @ManyToOne(() => Effect, effect => effect.id)
    public effect: Effect;
}
