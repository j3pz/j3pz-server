import {
    Entity, ObjectID, ObjectIdColumn, Column, AfterLoad,
} from 'typeorm';
import { EmbedStoneType, Category } from '../../model/Base';
import { CaseSchemeV1, categoryMap } from './CaseSchemeV1';

export class EquipEmbed {
    @Column()
    public type: EmbedStoneType;

    @Column()
    public level: number;
}

export class EquipScheme {
    @Column()
    public id: number;

    @Column()
    public category: Category;

    @Column()
    public strengthen: number;

    @Column()
    public enhance: number;

    @Column(() => EquipEmbed)
    public embed: EquipEmbed[];

    @Column()
    public stone?: number;
}

@Entity({ name: 'case' })
export class CaseScheme {
    @ObjectIdColumn()
    private _id: ObjectID;

    @Column()
    public equip: EquipScheme[] = [];

    @Column()
    public effect: number[] = [];

    @Column()
    public talent: number[] = [];

    @Column()
    public deleted: boolean;

    @Column()
    public deletedAt: Date;

    @Column()
    public version: number = 2;

    public get id(): string {
        // eslint-disable-next-line no-underscore-dangle
        return this._id.toHexString();
    }

    @AfterLoad()
    public versionAdapter(): CaseScheme {
        if (this.version === 1 && this.save) {
            Object.entries(this.save.equips).forEach(([key, equip]) => {
                const es = new EquipScheme();
                es.id = equip.equipId;
                es.enhance = equip.enhanceId;
                es.strengthen = equip.strengthen;
                es.embed = equip.embed.map(v => ({ type: 'unified', level: v.level }));
                es.category = categoryMap[key];
                this.equip.push(es);
            });
        }
        return this;
    }

    // ↓ Version 1 Properties
    @Column({ update: false })
    public save?: CaseSchemeV1;
}
