import { Criminal } from '@/domain/model/criminal'
import { CriminalState } from '@/domain/model/criminalState'
import { GetCriminalsResponse } from '@/domain/model/getCriminalsResponse'
import { HttpProvider } from '@/domain/provider/httpProvider'
import { Module } from 'vuex'
import { getCriminals } from './actions'
import { setCriminals } from './mutations'

export const criminalModule: Module<CriminalState, {}> = {
  state: {
    criminals: []
  },
  mutations: {
    [setCriminals] (state, payload: Array<Criminal>) {
      state.criminals = payload
    }
  },
  actions: {
    async [getCriminals] (context, params) {
      const httpProvider = new HttpProvider()
      const response = await httpProvider.get<GetCriminalsResponse>('/criminals', params)
      const criminalArray: Array<Criminal> = response.data.data
        .map((ele) => ({
          idCriminal: ele.id_criminal,
          txName: ele.tx_name
        }))
      context.commit(setCriminals, criminalArray)
    }
  }
}
