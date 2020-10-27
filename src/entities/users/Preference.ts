import { Column } from 'typeorm';

export class Preference {
    @Column()
    public quality: number[];

    @Column()
    public strengthen: boolean;

    @Column()
    public magicStoneLevel: number;

    public constructor() {
        this.quality = [];
        this.strengthen = true;
        this.magicStoneLevel = 6;
    }
}
