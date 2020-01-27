import {
    Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn,
} from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    private _id: ObjectID;

    @Column({
        unique: true,
    })
    public email: string;

    @Column()
    public password: string;

    @Column()
    public name: string;

    @Column()
    public syncLimit: number;

    @Column()
    public activate: boolean;

    @CreateDateColumn()
    public createAt: Date;

    public constructor() {
        this.syncLimit = 3;
        this.activate = false;
    }
}
