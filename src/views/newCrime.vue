<template>
    <div class="container">
        <div class="row">
            <div class="col-pc-100p col-tb-100p col-mb-100p">
                <b class="title">NEW CRIME</b>
            </div>
        </div>
        <div class="row">
            <div class="col-pc-50p col-tb-100p col-mb-100p">
                <Input
                    label="Type of crime"
                    type="select"
                    :options="optionTypeCrime"
                    v-model="idCrimeType"
                    optionPlaceHolder="Select"
                />
            </div>
        </div>
        <div class="row">
            <div class="col-pc-25p col-tb-50p col-mb-100p">
                <Input
                    label="Country"
                    type="text"
                    v-model="country"
                    placeholder="Country"
                />
            </div>
        </div>
        <div class="row">
            <div class="col-pc-25p col-tb-50p col-mb-100p">
                <Input
                    label="Date"
                    type="datetime-local"
                    :value="crimeDate"
                    v-model="crimeDate"
                />
            </div>
        </div>
        <br>
        <Criminal @changeCriminal="getCriminal" />
        <br>
        <Victim @changeVictim="getVictim" />
        <br>
        <div class="row hidden-mb">
            <div class="col-pc-50p col-tb-50p">
                <button class="btn btn-add block" @click="saveCrime()">
                    <i class="fa fa-plus-square-o" aria-hidden="true" />
                     SAVE NEW CRIME
                </button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Input from '@/components/utils/inputComponent.vue'
import Criminal from '@/components/NewCrime/criminalComponent.vue'
import Victim from '@/components/NewCrime/victimComponent.vue'
import { addNewCrime, getCrimeTypes, getNameRouter, searchCrime } from '@/store/actions'
import { mapState } from 'vuex'
import { StoreState } from '@/domain/model/storeState'
import { CrimeType } from '@/domain/model/crimeType'
import moment from 'moment'
interface Data {
    optionTypeCrime: Array<{id: number; text: string}>;
    country?: string;
    crimeDate?: Date;
    idCrimeType?: number;
    criminalAndWeapon?: Array<{criminal: string; weapon: string}>;
    victim_list?: Array<{victimId: string}>;
}
export default Vue.extend({
  components: { Input, Criminal, Victim },
  data (): Data {
    return {
      optionTypeCrime: [],
      country: undefined,
      crimeDate: undefined,
      idCrimeType: undefined,
      criminalAndWeapon: [],
      victim_list: []
    }
  },
  computed: {
    ...mapState({
      crimeTypes: (state) => (state as StoreState).crimeTypeModule.crimeTypes
    })
  },
  watch: {
    crimeTypes (newValue: Array<CrimeType>) {
      if (newValue) {
        this.optionTypeCrime = newValue.map((ele) => ({
          id: ele.idCrimeType,
          text: ele.txType
        }))
      }
    }
  },
  mounted () {
    this.$store.dispatch(getCrimeTypes)
    this.$store.dispatch(getNameRouter, (this.$router as any).history.current.name)
  },
  methods: {
    async saveCrime () {
      console.log(this.idCrimeType)
      const data = {
        victim_list: this.victim_list?.map((ele) => ({
          victim_id: ele.victimId
        })),
        weapon_list: this.criminalAndWeapon?.map((wp) => ({
          weapon_id: Number(wp.weapon)
        })),
        criminal_list: this.criminalAndWeapon?.map((cm) => ({
          criminal_id: Number(cm.criminal),
          id_crime_type: Number(this.idCrimeType)
        })),
        country: this.country,
        crime_date: moment(this.crimeDate).format('YYYY-MM-DD HH:MM:SS')
      }
      console.log(data)

      await this.$store.dispatch(addNewCrime, data)
      this.$store.dispatch(searchCrime)
      this.$router.push({ path: '/' })
    },
    getCriminal (value: any) {
      console.log(value)

      this.criminalAndWeapon = value
    },
    getVictim (value: any) {
      this.victim_list = value
    }
  }
})
</script>

<style scoped>
.title{
  color: #313131;
  font-family: Cinzel Decorative;
  font-size: 30px;
}
@media screen and (max-width: 699px){
    .content{
        background-color: #FAFAFA;
    }
}
</style>
