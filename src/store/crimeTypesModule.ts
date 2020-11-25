import { HttpProvider } from '@/domain/provider/httpProvider'
import { Module } from 'vuex'
import { CrimeType } from '@/domain/model/crimeType'
import { getCrimeTypes } from './actions'
import { setCrimeTypes } from './mutations'
import { CrimeTypeState } from '@/domain/model/crimeTypeState'

export const crimeTypeModule: Module<CrimeTypeState, {}> = {
  state: {
    crimeTypes: []
  },
  mutations: {
    [setCrimeTypes] (state, payload: Array<CrimeType>) {
      state.crimeTypes = payload
    }
  },
  actions: {
    async [getCrimeTypes] (context) {
      type criminalTypesResponse = {
        data: {
          crime_types: Array<{id_crime_type: number; tx_type: string}>;
        };
      }
      const httpProvider = new HttpProvider()
      const response = await httpProvider.get<criminalTypesResponse>('/crime_types')
      const criminalTypeArray: Array<CrimeType> = response.data.data.crime_types
        .map((criminalType) => ({
          idCrimeType: criminalType.id_crime_type,
          txType: criminalType.tx_type
        }))
      context.commit(setCrimeTypes, criminalTypeArray)
    }
  }
}
