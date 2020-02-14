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
    public published: boolean;

    @Column()
    public equip: EquipScheme[];

    @Column()
    public effects: number[];

    @Column()
    public talents: number[];
}
