import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';
import { Title } from '@tsed/swagger';
import { Effect } from './Effect';
import { KungFu } from '../model/Base';

type BuffType = 'Formation' | 'Buff';

@Entity()
export class Buff {
    @PrimaryGeneratedColumn()
    @Title('ID')
    public id: number;

    @Column()
    @Title('名称')
    public name: string;

    @Column()
    @Title('图标 ID')
    public icon: number;

    @Column()
    @Title('类型')
    public type: BuffType;

    @Column({ nullable: true })
    @Title('冲突组')
    public conflict: number;

    @ManyToOne(() => Effect, effect => effect.id, { nullable: true })
    @Title('激活效果')
    public effect?: Effect;

    @Column({ type: 'simple-array', default: null, nullable: true })
    @Title('限定心法')
    public kungfuLimit: KungFu[];
}
