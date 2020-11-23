import { StoreState } from '@/domain/model/storeState'
import Vue from 'vue'
import Vuex from 'vuex'
import { crimeTypeModule } from './crimeTypesModule'
Vue.use(Vuex)
export default new Vuex.Store<StoreState>({
  modules: {
    crimeTypeModule
  }
})
