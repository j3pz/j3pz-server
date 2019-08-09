import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Effect {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'simple-array', default: null, nullable: true })
    public attribute: string[];

    @Column({ type: 'simple-array', default: null, nullable: true })
    public value: number[];

    @Column()
    public trigger: 'Usage' | 'Passive';

    @Column()
    public description: string;
}
