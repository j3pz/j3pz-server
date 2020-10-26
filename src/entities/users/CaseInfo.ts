import { Column } from 'typeorm';
import { KungFu } from '../../model/Base';
import { kungFuLib } from '../../utils/KungFuLib';
import { KungFuMeta } from '../../utils/KungfuMeta';

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

    public versionAdapter(): CaseInfo {
        [this.kungfu] = Object.entries(kungFuLib)
            .find(([, meta]) => meta.name === this.school) as [KungFu, KungFuMeta] ?? [];
        this.published = false;
        delete this.school;
        return this;
    }

    // ↓ Version 1 Properties
    @Column({ update: false })
    public school?: string;
}
