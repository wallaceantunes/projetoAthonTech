import { ConfigState } from './configState'
import { CrimeState } from './crimeState'
import { CrimeTypeState } from './crimeTypeState'
import { CriminalState } from './criminalState'
import { VictimState } from './victimState'
import { WeaponState } from './weaponState'

export interface StoreState {
    crimeTypeModule: CrimeTypeState;
    configModule: ConfigState;
    crimeModule: CrimeState;
    weaponModule: WeaponState;
    victimModule: VictimState;
    criminalModule: CriminalState;
}
