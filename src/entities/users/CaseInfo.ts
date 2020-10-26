import { Column } from 'typeorm';
import { KungFu } from '../../model/Base';

export class CaseInfo {
    @Column()
    public id: string;

    @Column()
    public name: string;

    @Column({ enum: KungFu })
    public kungfu: KungFu;

    @Column()
    public published: boolean;

    @Column()
    public lastUpdate: Date;
}
