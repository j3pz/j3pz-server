import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';
import { EquipSet } from './EquipSet';
import { Effect } from './Effect';
// import { Source } from './Source';

@Entity()
export class Equip {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public icon: number;

    @Column()
    public category: string;

    @Column()
    public quality: number;

    @Column()
    public school: string;

    @Column()
    public primaryAttribute: string;

    @Column()
    public score: number;

    @Column()
    public vitality: number;

    @Column()
    public spirit: number;

    @Column()
    public strength: number;

    @Column()
    public agility: number;

    @Column()
    public spunk: number;

    @Column()
    public basicPhysicsShield: number;

    @Column()
    public basicMagicShield: number;

    @Column()
    public damageBase: number;

    @Column()
    public damageRange: number;

    @Column()
    public attackSpeed: number;

    @Column()
    public physicsShield: number;

    @Column()
    public magicShield: number;

    @Column()
    public dodge: number;

    @Column()
    public parryBase: number;

    @Column()
    public parryValue: number;

    @Column()
    public toughness: number;

    @Column()
    public attack: number;

    @Column()
    public heal: number;

    @Column()
    public crit: number;

    @Column()
    public critEffect: number;

    @Column()
    public overcome: number;

    @Column()
    public haste: number;

    @Column()
    public hit: number;

    @Column()
    public strain: number;

    @Column()
    public huajing: number;

    @Column()
    public threat: number;

    @ManyToOne(() => Effect, effect => effect.id, {
        nullable: true,
    })
    public effect: Effect;

    @ManyToOne(() => EquipSet, set => set.id, {
        nullable: true,
    })
    public set: EquipSet;

    @Column({
        nullable: true,
    })
    public embed: string;

    @Column()
    public strengthen: number;

    // @ManyToMany(() => Source, source => source.id)
    // @JoinTable()
    // public source: Source[];

    @Column()
    public deprecated: boolean;
}
