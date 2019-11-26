import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Title } from '@tsed/swagger';
import { Attribute } from '../model/Base';

type EffectTrigger = 'Usage' | 'Passive' | 'Condition';

@Entity()
export class Effect {
    @PrimaryGeneratedColumn()
    @Title('ID')
    public id: number;

    @Column({ type: 'simple-array', default: null, nullable: true })
    @Title('属性 key')
    public attribute: Attribute[];

    @Column({ type: 'simple-array', default: null, nullable: true })
    @Title('属性值')
    public value: number[];

    @Column({
        type: 'enum',
        enum: ['Usage', 'Passive', 'Condition'],
    })
    @Title('触发方式')
    public trigger: EffectTrigger;

    @Column()
    @Title('描述')
    public description: string;
}
