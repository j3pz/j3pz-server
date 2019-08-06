import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Equip {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public category: string;

    @Column()
    public quality: number;

    @Column()
    public school: number;

    @Column()
    public primaryAttribute: string;

    @Column()
    public score: number;

    @Column()
    public body: number;

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
    public acce: number;

    @Column()
    public hit: number;

    @Column()
    public strain: number;

    @Column()
    public huajing: number;

    @Column()
    public threat: number;

    @Column()
    public texiao: number;

    @Column()
    public xiangqian: string;

    @Column()
    public strengthen: number;

    @Column()
    public dropSource: string;
}
