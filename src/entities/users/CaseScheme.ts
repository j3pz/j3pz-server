import {
    Entity, ObjectID, ObjectIdColumn, Column,
} from 'typeorm';
import { EmbedStoneType, Category } from '../../model/Base';

export class EquipEmbed {
    @Column()
    public type: EmbedStoneType;

    @Column()
    public level: number;
}

export class EquipScheme {
    @Column()
    public id: number;

    @Column()
    public category: Category;

    @Column()
    public strengthen: number;

    @Column()
    public enhance: number;

    @Column(() => EquipEmbed)
    public embed: EquipEmbed[];

    @Column()
    public stone?: number;
}

@Entity({ name: 'case' })
export class CaseScheme {
    @ObjectIdColumn()
    private _id: ObjectID;

    @Column()
    public equip: EquipScheme[];

    @Column()
    public effect: number[];

    @Column()
    public talent: number[];

    @Column()
    public deleted: boolean;

    public get id(): string {
        // eslint-disable-next-line no-underscore-dangle
        return this._id.toHexString();
    }
}
