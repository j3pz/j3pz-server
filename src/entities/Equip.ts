import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';
import { Title } from '@tsed/swagger';
import { EquipSet } from './EquipSet';
import { Effect } from './Effect';
import { Category, School } from '../model/Base';
// import { Source } from './Source';

@Entity()
export class Equip {
    @PrimaryGeneratedColumn()
    @Title('ID')
    public id: number;

    @Column()
    @Title('名称')
    public name: string;

    @Column()
    @Title('图标')
    public icon: number;

    @Column({
        type: 'enum',
        enum: Category,
    })
    @Title('部位')
    public category: Category;

    @Column()
    @Title('品质')
    public quality: number;

    @Column({
        type: 'enum',
        enum: School,
    })
    @Title('门派')
    public school: School;

    @Column()
    @Title('主属性')
    public primaryAttribute: string;

    @Column()
    @Title('基础装分')
    public score: number;

    @Column()
    @Title('体质')
    public vitality: number;

    @Column()
    @Title('根骨')
    public spirit: number;

    @Column()
    @Title('力道')
    public strength: number;

    @Column()
    @Title('身法')
    public agility: number;

    @Column()
    @Title('元气')
    public spunk: number;

    @Column()
    @Title('基础外功防御')
    public basicPhysicsShield: number;

    @Column()
    @Title('基础内功防御')
    public basicMagicShield: number;

    @Column()
    @Title('基础武器伤害')
    public damageBase: number;

    @Column()
    @Title('武器伤害范围')
    public damageRange: number;

    @Column()
    @Title('攻击速度')
    public attackSpeed: number;

    @Column()
    @Title('外功防御')
    public physicsShield: number;

    @Column()
    @Title('内功防御')
    public magicShield: number;

    @Column()
    @Title('闪避')
    public dodge: number;

    @Column()
    @Title('招架')
    public parryBase: number;

    @Column()
    @Title('拆招')
    public parryValue: number;

    @Column()
    @Title('御劲')
    public toughness: number;

    @Column()
    @Title('攻击')
    public attack: number;

    @Column()
    @Title('治疗')
    public heal: number;

    @Column()
    @Title('会心等级')
    public crit: number;

    @Column()
    @Title('会心效果等级')
    public critEffect: number;

    @Column()
    @Title('破防等级')
    public overcome: number;

    @Column()
    @Title('加速等级')
    public haste: number;

    @Column()
    @Title('命中等级')
    public hit: number;

    @Column()
    @Title('无双')
    public strain: number;

    @Column()
    @Title('化劲')
    public huajing: number;

    @Column()
    @Title('威胁值')
    public threat: number;

    @ManyToOne(() => Effect, effect => effect.id, {
        nullable: true,
    })
    @Title('特效')
    public effect: Effect;

    @ManyToOne(() => EquipSet, set => set.equip, {
        nullable: true,
    })
    @Title('套装')
    public set: EquipSet;

    @Column({
        nullable: true,
    })
    @Title('镶嵌')
    public embed: string;

    @Column()
    @Title('最大精炼等级')
    public strengthen: number;

    // @ManyToMany(() => Source, source => source.id)
    // @JoinTable()
    // @Title('装备来源')
    // public source: Source[];

    @Column()
    @Title('过时装备')
    public deprecated: boolean;
}
