import {
    Column, PrimaryGeneratedColumn, Entity, ManyToMany, JoinTable,
} from 'typeorm';
import { Title } from '@tsed/swagger';
import { StoneAttribute } from './StoneAttribute';

@Entity()
export class Stone {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    @Title('五彩石名称')
    public name: string;

    @ManyToMany(() => StoneAttribute, attribute => attribute.id)
    @JoinTable()
    @Title('五彩石属性')
    public attributes: StoneAttribute[];

    @Column()
    @Title('五彩石图标')
    public icon: number;

    @Column()
    @Title('五彩石等级')
    public level: number;

    @Column()
    @Title('是否过期')
    public deprecated: boolean;
}
