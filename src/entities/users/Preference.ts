import { Column } from 'typeorm';

export class Preference {
    @Column()
    public quality: number[];

    @Column()
    public strengthen: number;

    @Column()
    public magicStoneLevel: number;

    public constructor() {
        this.quality = [];
        this.strengthen = 6;
        this.magicStoneLevel = 6;
    }
}
