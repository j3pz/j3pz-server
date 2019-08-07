import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Reputation {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;
}
