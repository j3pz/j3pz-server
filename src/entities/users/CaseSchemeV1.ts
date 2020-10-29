import { Category } from '../../model/Base';

interface EquipSchemeV1 {
    equipId: number;
    strengthen: number;
    enhanceId: number;
    embed: { typeId: number; level: number }[];
}

export class CaseSchemeV1 {
    public equips: {
        '0_hat': EquipSchemeV1;
        '1_jacket': EquipSchemeV1;
        '2_belt': EquipSchemeV1;
        '3_wrist': EquipSchemeV1;
        '4_bottoms': EquipSchemeV1;
        '5_shoes': EquipSchemeV1;
        '6_necklace': EquipSchemeV1;
        '7_pendant': EquipSchemeV1;
        '8_ring_1': EquipSchemeV1;
        '9_ring_2': EquipSchemeV1;
        'a_secondaryWeapon': EquipSchemeV1;
        'b_primaryWeapon': EquipSchemeV1;
        'c_primaryWeapon': EquipSchemeV1;
    };

    public stones: {name: string; id: number}[];
}

export const categoryMap = {
    '0_hat': Category.HAT,
    '1_jacket': Category.JACKET,
    '2_belt': Category.BELT,
    '3_wrist': Category.WRIST,
    '4_bottoms': Category.BOTTOMS,
    '5_shoes': Category.SHOES,
    '6_necklace': Category.NECKLACE,
    '7_pendant': Category.PENDANT,
    '8_ring_1': Category.RING,
    '9_ring_2': Category.RING,
    // eslint-disable-next-line @typescript-eslint/camelcase
    a_secondaryWeapon: Category.SECONDARY_WEAPON,
    // eslint-disable-next-line @typescript-eslint/camelcase
    b_primaryWeapon: Category.PRIMARY_WEAPON,
    // eslint-disable-next-line @typescript-eslint/camelcase
    c_primaryWeapon: Category.TERTIARY_WEAPON,
};
