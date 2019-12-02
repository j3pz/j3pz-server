import {
    Column, PrimaryGeneratedColumn, Entity,
} from 'typeorm';
import { Title } from '@tsed/swagger';
import { Attribute, AttributeDecorator } from '../model/Base';
import { ColumnNumericTransformer } from '../utils/transformers';

@Entity()
export class StoneAttribute {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    @Title('属性名称')
    public name: Attribute;

    @Column()
    @Title('属性修饰')
    public decorator: AttributeDecorator;

    @Column()
    @Title('属性标识')
    public key: string;

    @Column({
        type: 'decimal',
        precision: 5,
        scale: 2,
        transformer: new ColumnNumericTransformer(),
    })
    @Title('属性值')
    public value: number;

    @Column()
    @Title('激活需求五行石数量')
    public requiredQuantity: number;

    @Column()
    @Title('激活需求五行石等级')
    public requiredLevel: number;
}
