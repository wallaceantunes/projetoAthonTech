
import { GetWeaponsResponse } from '@/domain/model/getWeaponsResponse'
import { Weapon } from '@/domain/model/weapon'
import { WeaponState } from '@/domain/model/weaponState'
import { HttpProvider } from '@/domain/provider/httpProvider'
import { Module } from 'vuex'
import { getWeapons } from './actions'
import { setWeapons } from './mutations'

export const weaponModule: Module<WeaponState, {}> = {
  state: {
    weapons: []
  },
  mutations: {
    [setWeapons] (state, payload: Array<Weapon>) {
      state.weapons = payload
    }
  },
  actions: {
    async [getWeapons] (context) {
      const httpProvider = new HttpProvider()
      const response = await httpProvider.get<GetWeaponsResponse>('/weapons')
      const weaponsArray: Array<Weapon> = response.data.data
        .map((ele) => ({
          idWeapon: ele.id_weapon,
          txModel: ele.tx_model,
          txWeaponType: ele.tx_weapon_type
        }))
      context.commit(setWeapons, weaponsArray)
    }
  }
}
