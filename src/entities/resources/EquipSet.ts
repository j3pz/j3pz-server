import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import { Title } from '@tsed/swagger';
import { SetEffect } from './SetEffect';
import { Equip } from './Equip';
import { Category } from '../../model/Base';
import { EquipCore } from '../../model/Equip';

type SetEquipInfo = Partial<Record<Category, EquipCore[]>>;

@Entity()
export class EquipSet {
    @PrimaryGeneratedColumn()
    @Title('ID')
    public id: number;

    @Column()
    @Title('套装名称')
    public name: string;

    @OneToMany(() => SetEffect, setEffect => setEffect.set, { cascade: true })
    @Title('套装特效')
    public setEffect: SetEffect[];

    @OneToMany(() => Equip, equip => equip.set, { cascade: true })
    public equip: Equip[];

    // 实际返回给前端的过滤后的值
    public equips: SetEquipInfo;
}
