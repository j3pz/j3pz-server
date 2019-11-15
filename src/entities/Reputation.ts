import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Title } from '@tsed/swagger';

@Entity()
export class Reputation {
    @PrimaryGeneratedColumn()
    @Title('ID')
    public id: number;

    @Column()
    @Title('声望名称')
    public name: string;

    @Column({
        nullable: true,
    })
    @Title('声望等级')
    public level: string;
}
