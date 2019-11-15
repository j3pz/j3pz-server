import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Title } from '@tsed/swagger';
import { Attribute } from '../model/Base';

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

    @Column()
    @Title('触发方式')
    public trigger: 'Usage' | 'Passive';

    @Column()
    @Title('描述')
    public description: string;
}
