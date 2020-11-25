import { GetVictimsResponse } from '@/domain/model/getVictimsResponse'
import { Victim } from '@/domain/model/victim'
import { VictimState } from '@/domain/model/victimState'
import { HttpProvider } from '@/domain/provider/httpProvider'
import { Module } from 'vuex'
import { getVictims } from './actions'
import { setVictims } from './mutations'

export const victimModule: Module<VictimState, {}> = {
  state: {
    victims: []
  },
  mutations: {
    [setVictims] (state, payload: Array<Victim>) {
      state.victims = payload
    }
  },
  actions: {
    async [getVictims] (context, params) {
      const httpProvider = new HttpProvider()
      const response = await httpProvider.get<GetVictimsResponse>('/victims', params)
      const victimsArray: Array<Victim> = response.data.data.map((ele) => ({
        victimId: ele.id_victim,
        txName: ele.tx_name
      }))
      context.commit(setVictims, victimsArray)
    }
  }
}
