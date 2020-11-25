import { ConfigState } from '@/domain/model/configState'
import { Module } from 'vuex'
import { getNameRouter } from './actions'
import { setNameRouter } from './mutations'

export const configModule: Module<ConfigState, {}> = {
  state: {
    nameRouter: ''
  },
  mutations: {
    [setNameRouter] (state, nameRouter) {
      state.nameRouter = nameRouter
    }
  },
  actions: {
    async [getNameRouter] (context, name) {
      context.commit(setNameRouter, name)
    }
  }
}
