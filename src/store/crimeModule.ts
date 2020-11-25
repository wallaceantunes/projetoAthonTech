import { Crime } from '@/domain/model/crime'
import { CrimeState } from '@/domain/model/crimeState'
import { SearchCrimeResponse } from '@/domain/model/searchCrimeResponse'
import { SearchCrimesResponse } from '@/domain/model/searchCrimesResponse'
import { HttpProvider } from '@/domain/provider/httpProvider'
import { Module } from 'vuex'
import { addNewCrime, deleteCrime, searchCrime, searchCrimeById } from './actions'
import { setCrime, setCrimes } from './mutations'

export const crimeModule: Module<CrimeState, {}> = {
  state: {
    crimes: [],
    crime: {} as Crime
  },
  mutations: {
    [setCrimes] (state, payload: Array<Crime>) {
      state.crimes = payload
    },
    [setCrime] (state, payload: Crime) {
      state.crime = payload
    }
  },
  actions: {
    async [searchCrime] (context, params) {
      const httpProvider = new HttpProvider()
      const response = await httpProvider.get<SearchCrimesResponse>('/crimes', params)
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
    },
    async [searchCrimeById] (context, id: string) {
      const httpProvider = new HttpProvider()
      const response = await httpProvider.get<SearchCrimeResponse>('/crime', { crime_id: id })
      const searchCrime: Crime = {
        country: response.data.data.country,
        crimeDate: response.data.data.crime_date,
        weaponsCrime: response.data.data.weapons_crime
          .map(weapon => ({
            weapon: weapon.weapon,
            weaponType: weapon.weapon_type
          })),
        criminalCrimeTypes: response.data.data.criminal_crime_types
          .map((criminal) => ({
            criminal: criminal.criminal,
            crimeType: criminal.crime_type
          })),
        victimsCrime: response.data.data.victims_crime
          .map((victim) => ({
            victim: victim.victim
          }))
      }
      context.commit(setCrime, searchCrime)
    },
    async [deleteCrime] (context, id: string) {
      const httpProvider = new HttpProvider()
      await httpProvider.delete<SearchCrimeResponse>('/crime', { crime_id: id })
    },
    async [addNewCrime] (context, body) {
      const httpProvider = new HttpProvider()
      await httpProvider.post<SearchCrimeResponse>('/crime', body)
    }
  }
}
