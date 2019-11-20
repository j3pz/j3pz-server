import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { Title } from '@tsed/swagger';
import { KungFu } from '../model/Base';

@Entity()
export class Talent {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    @Title('心法')
    public kungfu: KungFu;

    @Column()
    @Title('奇穴位置')
    public index: number;

    @Column()
    @Title('奇穴名称')
    public name: string;

    @Column()
    @Title('描述')
    public description: string;

    @Column()
    @Title('图标 ID')
    public icon: number;

    @Column()
    @Title('对应游戏版本')
    public version: string;
}
