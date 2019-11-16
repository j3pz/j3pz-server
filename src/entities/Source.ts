import {
    Entity, PrimaryGeneratedColumn, Column, TableInheritance, ManyToOne, ChildEntity,
} from 'typeorm';
import { Boss } from './Boss';
import { Reputation } from './Reputation';

enum SourceType {
    RAID = 'raid', // 副本、掉落
    REPUTATION = 'reputation', // 声望
    REDEEM = 'redeem', // 道具兑换（威望、名剑）
    ACTIVITY = 'activity', // 常规活动
}

enum RedeemType {
    CONTRIBUTION = 'contribution', // 帮贡
    CHIVALRY = 'chivalry', // 侠义
    PRESTIGE_FIEND = 'prestige_fiend', // 恶人谷威望
    PRESTIGE_VIRTUE = 'prestige_virtue', // 浩气盟威望
    ARENA = 'arena', // 名剑竞技场
}

@Entity()
@TableInheritance({ column: { type: 'enum', enum: SourceType } })
export class Source {
    @PrimaryGeneratedColumn()
    public id: number;
}

@ChildEntity()
export class RaidSource extends Source {
    @ManyToOne(() => Boss, boss => boss.id)
    public boss: Boss;
}

@ChildEntity()
export class ReputationSource extends Source {
    @ManyToOne(() => Reputation, reputation => reputation.id)
    public reputation: Reputation;

    @Column()
    public reputationLevel: string;
}

@ChildEntity()
export class RedeemSource extends Source {
    @Column({
        type: 'enum',
        enum: RedeemType,
    })
    public redeem: RedeemType;
}

@ChildEntity()
export class ActivitySource extends Source {
    @Column()
    public activity: string;

    @Column()
    public limitedTime?: boolean;
}
