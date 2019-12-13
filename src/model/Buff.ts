import { Title } from '@tsed/swagger';
import { Resource } from './Server';
import { Buff, BuffType } from '../entities/Buff';

export class BuffCore {
    @Title('ID')
    public id: number;

    @Title('名称')
    public name: string;

    @Title('类型')
    public type: BuffType;

    @Title('图标')
    public icon: number;

    @Title('描述')
    public description: string;
}

export type BuffCoreResource = Resource<BuffCore>;
export type BuffResource = Resource<Buff>;
