import {
    Entity, PrimaryGeneratedColumn, Column, TableInheritance, ManyToOne, ChildEntity,
} from 'typeorm';
import { Boss } from './Boss';
import { Reputation } from './Reputation';

enum SourceType {
    RAID = 'raid',
    REPUTATION = 'reputation',
    REDEEM = 'redeem',
}

enum RedeemType {
    CONTRIBUTION = 'contribution',
    CHIVALRY = 'chivalry',
    PRESTIGE_FIEND = 'prestige_fiend',
    PRESTIGE_VIRTUE = 'prestige_virtue',
    ARENA = 'arena',
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
