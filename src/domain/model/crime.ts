import { CriminalCrimeTypes } from './criminalCrimeTypes'
import { VictimsCrime } from './victimsCrime'
import { WeaponsCrime } from './weaponsCrime'

export interface Crime {
    idCrime?: number;
    country: string;
    crimeDate: Date;
    weaponsCrime: Array<WeaponsCrime>;
    criminalCrimeTypes: Array<CriminalCrimeTypes>;
    victimsCrime: Array<VictimsCrime>;
}
