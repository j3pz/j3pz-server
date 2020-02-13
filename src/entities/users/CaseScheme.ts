import {
    Entity, ObjectID, ObjectIdColumn, Column,
} from 'typeorm';

@Entity()
export class CaseScheme {
    @ObjectIdColumn()
    private _id: ObjectID;

    @Column()
    public equips: number[];

    @Column()
    public effects: number[];

    @Column()
    public talents: number[];
}
