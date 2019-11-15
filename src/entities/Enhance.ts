import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Title } from '@tsed/swagger';
import { Category, Attribute, AttributeDecorator } from '../model/Base';

@Entity()
export class Enhance {
    @PrimaryGeneratedColumn()
    @Title('ID')
    public id: number;

    @Column()
    @Title('名称')
    public name: string;

    @Column({
        type: 'enum',
        enum: Category,
    })
    @Title('部位')
    public category: Category;

    @Column()
    @Title('描述')
    public description: string;

    @Column({ type: 'simple-array' })
    @Title('属性 key')
    public attribute: Attribute[];

    @Column({ type: 'simple-array' })
    @Title('属性值')
    public value: number[];

    @Column()
    @Title('修饰属性')
    public decorator: AttributeDecorator;

    @Column()
    @Title('过时附魔')
    public deprecated: boolean;
}
