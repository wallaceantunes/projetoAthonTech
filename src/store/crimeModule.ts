import { Crime } from '@/domain/model/crime'
import { CrimeState } from '@/domain/model/crimeState'
import { SearchCrimeResponse } from '@/domain/model/searchCrimeResponse'
import { WeaponsCrime } from '@/domain/model/weaponsCrime'
import { HttpProvider } from '@/domain/provider/httpProvider'
import { Module } from 'vuex'
import { searchCrime } from './actions'
import { setCrimes } from './mutations'

export const crimeModule: Module<CrimeState, {}> = {
  state: {
    crimes: []
  },
  mutations: {
    [setCrimes] (state, payload: Array<Crime>) {
      state.crimes = payload
    }
  },
  actions: {
    async [searchCrime] (context, params) {
      const httpProvider = new HttpProvider()
      const response = await httpProvider.get<SearchCrimeResponse>('/crimes', params)
      const searchCrimeArray: Array<Crime> = response.data.data.crimes
        .map((searchCrime) => ({
          idCrime: searchCrime.id_crime,
          country: searchCrime.country,
          crimeDate: searchCrime.crime_date,
          weaponsCrime: searchCrime.weapons_crime
            .map(weapon => ({
              weapon: weapon.weapon,
              weaponType: weapon.weapon_type
            })),
          criminalCrimeTypes: searchCrime.criminal_crime_types
            .map((criminal) => ({
              criminal: criminal.criminal,
              crimeType: criminal.crime_type
            })),
          victimsCrime: searchCrime.victims_crime
            .map((victim) => ({
              victim: victim.victim
            }))
        }))
      context.commit(setCrimes, searchCrimeArray)
    }
  }
}
