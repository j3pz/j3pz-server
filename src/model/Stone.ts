import { Title } from '@tsed/swagger';
import { Resource } from './Server';
import { Stone } from '../entities/resources/Stone';
import { AttributeDecorator } from './Base';

export type StoneResource = Resource<Stone>;
export class StoneAttributeCore {
    @Title('ID')
    public id: number;

    @Title('名称')
    public name: string;

    @Title('属性标识')
    public key: string;

    @Title('品质')
    public decorator: AttributeDecorator;
}

export type StoneAttributeCoreResource = Resource<StoneAttributeCore>;

export class StoneCore {
    @Title('ID')
    public id: number;

    @Title('名称')
    public name: string;

    @Title('属性名称')
    public attributes: StoneAttributeCore[];
}
export type StoneCoreResource = Resource<StoneCore>;
