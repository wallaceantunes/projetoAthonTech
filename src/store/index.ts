import { StoreState } from '@/domain/model/storeState'
import Vue from 'vue'
import Vuex from 'vuex'
import { crimeTypeModule } from './crimeTypesModule'
import { configModule } from './configModule'
import { crimeModule } from './crimeModule'
import { weaponModule } from './weaponModule'
import { victimModule } from './victimModule'
import { criminalModule } from './criminalModule'

Vue.use(Vuex)
export default new Vuex.Store<StoreState>({
  modules: {
    crimeTypeModule,
    configModule,
    crimeModule,
    weaponModule,
    victimModule,
    criminalModule
  }
})
