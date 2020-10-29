import { Title } from '@tsed/swagger';
import { Resource } from './Server';
import { Equip } from '../entities/resources/Equip';
import { AttributeTag, Category } from './Base';

export class EquipCore {
    @Title('ID')
    public id: number;

    @Title('名称')
    public name: string;

    @Title('部位')
    public category: Category;

    @Title('图标')
    public icon: number;

    @Title('品质')
    public quality: number;

    @Title('属性标签')
    public tags: AttributeTag[];
}

export type EquipCoreResource = Resource<EquipCore>;
export type EquipResource = Resource<Equip>;
