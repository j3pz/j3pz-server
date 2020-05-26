import { Entity, PrimaryColumn, Column } from 'typeorm';
import { Title } from '@tsed/swagger';

@Entity()
export class Furniture {
    @PrimaryColumn()
    @Title('ID')
    public id: number;

    @Column()
    @Title('类别')
    public category: number;

    @Column()
    @Title('名称')
    public name: string

    @Column()
    @Title('品质')
    public quality: number;

    @Column()
    @Title('品质等级')
    public level: number;

    @Column()
    @Title('可交互')
    public interact: boolean;

    @Column({ type: 'simple-array', default: null, nullable: true })
    @Title('缩放比例')
    public scaleRange: number[];

    @Column()
    @Title('来源')
    public source: string;

    @Column()
    @Title('图片地址')
    public img: string;

    @Column()
    @Title('描述文本')
    public desc: string;

    @Column()
    @Title('可用家园等级')
    public limit: number;

    @Column()
    @Title('园宅币')
    public price: number;

    @Column()
    @Title('风水')
    public environment: number;

    @Column()
    @Title('景观')
    public beauty: number;

    @Column()
    @Title('实用')
    public practicality: number;

    @Column()
    @Title('坚固')
    public robustness: number;

    @Column()
    @Title('趣味')
    public fun: number;
}
