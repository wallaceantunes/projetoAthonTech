import { ConfigState } from './configState'
import { CrimeState } from './crimeState'
import { CrimeTypeState } from './crimeTypeState'

export interface StoreState {
    crimeTypeModule: CrimeTypeState;
    configModule: ConfigState;
    crimeModule: CrimeState;
}
