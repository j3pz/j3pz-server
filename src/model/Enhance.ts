import { Title } from '@tsed/swagger';
import { Category } from './Base';
import { Resource } from './Server';
import { Enhance } from '../entities/resources/Enhance';

export class EnhanceCore {
    @Title('ID')
    public id: number;

    @Title('名称')
    public name: string;

    @Title('部位')
    public category: Category;
}


export type EnhanceCoreResource = Resource<EnhanceCore>;
export type EnhanceResource = Resource<Enhance>;
