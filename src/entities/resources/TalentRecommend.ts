import { Title } from '@tsed/common';
import {
    Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { KungFu } from '../../model/Base';
import { Talent } from './Talent';

@Entity()
export class TalentRecommend {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    @Title('心法')
    public kungfu: KungFu;

    @Column()
    @Title('推荐方案名称')
    public name: string;

    @ManyToMany(() => Talent, talent => talent.id)
    @JoinTable()
    @Title('推荐奇穴列表')
    public talents: Talent[];
}
