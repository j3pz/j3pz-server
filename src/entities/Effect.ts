import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Effect {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column({ type: 'simple-array' })
    public attribute: string[];

    @Column({ type: 'simple-array' })
    public value: number[];

    @Column()
    public trigger: 'Usage' | 'Passive';
}
