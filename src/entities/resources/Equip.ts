import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, AfterLoad,
} from 'typeorm';
import { Title } from '@tsed/swagger';
import { EquipSet } from './EquipSet';
import { Effect } from './Effect';
import {
    SecondaryAttribute, AttributeDecorator, Category, School, PrimaryAttribute, AttributeTag,
} from '../../model/Base';
import { Source } from './Source';
import { Represent } from './Represent';
import { EquipEmbedTransformer, EmbedInfo } from '../../utils/transformers/EquipEmbedTransformer';
import { schoolKungfuMap } from '../../utils/KungFuLib';

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
    public primaryAttribute: PrimaryAttribute | 'magic' | 'physics';

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
    @Title('破招')
    public surplus: number;

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
        type: 'varchar',
        transformer: new EquipEmbedTransformer(),
    })
    @Title('镶嵌')
    public embed: EmbedInfo;

    @Column()
    @Title('最大精炼等级')
    public strengthen: number;

    @ManyToMany(() => Source, source => source.id)
    @JoinTable()
    @Title('装备来源')
    public source: Source[];

    @ManyToOne(() => Represent, represent => represent.id)
    @JoinTable()
    @Title('装备外观')
    public represent: Represent;

    @Column()
    @Title('过时装备')
    public deprecated: boolean;

    @Title('属性修饰符')
    public decorators: { [key in SecondaryAttribute]?: AttributeDecorator };

    @Title('属性标签')
    public get tags(): AttributeTag[] {
        const tags: AttributeTag[] = [];
        AttributeTag.forEach((key) => {
            if (this[key] > 0) {
                tags.push(key);
            }
        });
        return tags;
    }

    @AfterLoad()
    protected computeDecorators(): void {
        if (!this.school) return;
        const decorators: { [key in SecondaryAttribute]?: AttributeDecorator} = {
            attack: AttributeDecorator.ALL,
            hit: AttributeDecorator.ALL,
            crit: AttributeDecorator.ALL,
            critEffect: AttributeDecorator.ALL,
            overcome: AttributeDecorator.ALL,
        };
        if (this.school === '通用') {
            switch (this.primaryAttribute) {
                case 'spirit':
                    decorators.attack = AttributeDecorator.MAGIC;
                    decorators.hit = AttributeDecorator.MAGIC;
                    decorators.crit = AttributeDecorator.MAGIC;
                    decorators.critEffect = AttributeDecorator.MAGIC;
                    decorators.overcome = AttributeDecorator.MAGIC;
                    break;
                case 'spunk':
                    decorators.attack = AttributeDecorator.MAGIC;
                    decorators.overcome = AttributeDecorator.MAGIC;
                    break;
                case 'agility':
                case 'strength':
                    decorators.attack = AttributeDecorator.PHYSICS;
                    decorators.hit = AttributeDecorator.PHYSICS;
                    decorators.crit = AttributeDecorator.PHYSICS;
                    decorators.critEffect = AttributeDecorator.PHYSICS;
                    decorators.overcome = AttributeDecorator.PHYSICS;
                    break;
                default:
                    break;
            }
        } else if (this.school === '精简') {
            switch (this.primaryAttribute) {
                case 'magic':
                case 'spirit':
                case 'spunk':
                    decorators.attack = AttributeDecorator.MAGIC;
                    decorators.overcome = AttributeDecorator.MAGIC;
                    break;
                case 'physics':
                case 'agility':
                case 'strength':
                    decorators.attack = AttributeDecorator.PHYSICS;
                    decorators.hit = AttributeDecorator.PHYSICS;
                    decorators.crit = AttributeDecorator.PHYSICS;
                    decorators.critEffect = AttributeDecorator.PHYSICS;
                    decorators.overcome = AttributeDecorator.PHYSICS;
                    break;
                default:
                    break;
            }
        } else {
            const kungfu = schoolKungfuMap[this.school]?.find(meta => meta.primaryAttribute === this.primaryAttribute);
            if (kungfu) {
                kungfu.decorator.forEach(([attribute, decorator]) => {
                    decorators[attribute] = decorator;
                });
            }
        }
        this.decorators = decorators;
    }
}
