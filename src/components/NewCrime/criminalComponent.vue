<template>
    <div class="container">
        <div
            v-for="(t, index) in criminal"
            :key="index"
        >
            <div class="row">
                <div class="col-pc-50p col-tb-75p col-mb-100p">
                    <Input
                        label="Criminal"
                        type="select"
                        :options="optionCriminals"
                        :value="t.criminal"
                        v-on:input="changeCriminal($event, index)"
                        optionPlaceHolder="Select"
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-pc-25p col-tb-50p col-mb-100p">
                    <Input
                        label="Weapon (optional)"
                        type="select"
                        :options="optionWeapons"
                        :value="t.weapon"
                        v-on:input="changeWeapon($event, index)"
                        optionPlaceHolder="Select"
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-pc-25p col-tb-25p col-mb-50p row-margin">
                <button class="btn btn-white block" @click="addCriminal()">
                    <i class="fa fa-plus-square-o" aria-hidden="true" />
                     ADD CRIMINAL
                </button>
            </div>
            <div class="col-pc-25p col-tb-25p col-mb-50p hidden-pc hidden-tb hidden-mb">
                <button class="btn btn-white block" @click="addNewWeapon()">
                    <i class="fa fa-plus-square-o" aria-hidden="true" />
                    <span class="hidden-mb hidden-tb"> REGISTER NEW WEAPON</span>
                    <span class="hidden-pc"> ADD WEAPON</span>

                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Input from '@/components/utils/inputComponent.vue'
import { mapState } from 'vuex'
import { StoreState } from '@/domain/model/storeState'
import { getCriminals, getWeapons } from '@/store/actions'
import { Weapon } from '@/domain/model/weapon'
import { Criminal } from '@/domain/model/criminal'
interface Data {
    optionWeapons: Array<{id: number; text: string}>;
    optionCriminals: Array<{id: number; text: string}>;
    criminal: Array<{criminal?: string; weapon?: number}>;
}
export default Vue.extend({
  components: { Input },
  data (): Data {
    return {
      optionWeapons: [],
      optionCriminals: [],
      criminal: [{
        criminal: undefined,
        weapon: undefined
      }]
    }
  },
  computed: {
    ...mapState({
      weapons: (state) => (state as StoreState).weaponModule.weapons,
      criminals: (state) => (state as StoreState).criminalModule.criminals
    })
  },
  watch: {
    weapons (newValue: Array<Weapon>) {
      if (newValue) {
        this.optionWeapons = newValue.map((ele) => ({
          id: ele.idWeapon,
          text: ele.txModel
        }))
      }
    },
    criminals (newValue: Array<Criminal>) {
      if (newValue) {
        this.optionCriminals = newValue.map((ele) => ({
          id: ele.idCriminal,
          text: ele.txName
        }))
      }
    }
  },
  mounted () {
    this.$store.dispatch(getWeapons)
    this.$store.dispatch(getCriminals)
  },
  methods: {
    dispatchModel () {
      this.$emit('changeCriminal', this.criminal)
    },

    addNewWeapon () {
      this.$router.push({ path: '/new-weapon' })
    },
    addCriminal () {
      const data = {
        criminal: undefined,
        weapon: undefined
      }
      this.criminal.push(data)
    },
    changeCriminal (value: any, index: number) {
      this.criminal[index].criminal = value
      this.dispatchModel()
    },
    changeWeapon (value: any, index: number) {
      if (value) {
        this.criminal[index].weapon = value
        this.dispatchModel()
      }
    }
  }
})
</script>

<style scoped>
.row-nowrap{
    width: auto;
    flex-wrap: nowrap;
    overflow-x: scroll;
}
</style>
