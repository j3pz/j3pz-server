import {
    Entity, PrimaryGeneratedColumn, Column, TableInheritance, ManyToOne, ChildEntity,
} from 'typeorm';
import { Title } from '@tsed/swagger';
import { Boss } from './Boss';
import { Reputation } from './Reputation';

enum SourceType {
    RAID = 'raid', // 副本、掉落
    REPUTATION = 'reputation', // 声望
    REDEEM = 'redeem', // 道具兑换（威望、名剑）
    ACTIVITY = 'activity', // 常规活动
    OTHER = 'other', // 其他类型
}

enum RedeemType {
    CONTRIBUTION = 'contribution', // 帮贡
    CHIVALRY = 'chivalry', // 侠义
    PRESTIGE_FIEND = 'prestige_fiend', // 恶人谷威望
    PRESTIGE_VIRTUE = 'prestige_virtue', // 浩气盟威望
    ARENA = 'arena', // 名剑竞技场
    STORE = 'store', // 其他商店
}

@Entity()
@TableInheritance({ column: { type: 'enum', enum: SourceType } })
export class Source {
    @PrimaryGeneratedColumn()
    @Title('ID')
    public id: number;

    @Column({
        nullable: true,
    })
    @Title('备注')
    public comment?: string;
}

@ChildEntity()
export class RaidSource extends Source {
    @ManyToOne(() => Boss, boss => boss.id)
    @Title('首领ID')
    public boss: Boss;
}

@ChildEntity()
export class ReputationSource extends Source {
    @ManyToOne(() => Reputation, reputation => reputation.id)
    @Title('声望ID')
    public reputation: Reputation;
}

@ChildEntity()
export class RedeemSource extends Source {
    @Column({
        type: 'enum',
        enum: RedeemType,
    })
    @Title('兑换类型')
    public redeem: RedeemType;
}

@ChildEntity()
export class ActivitySource extends Source {
    @Column()
    @Title('活动名')
    public activity: string;

    @Column()
    @Title('是否限时')
    public limitedTime?: boolean;
}

@ChildEntity()
export class OtherSource extends Source {

}
