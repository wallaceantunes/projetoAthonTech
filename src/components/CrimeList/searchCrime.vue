<template>
    <div class="container">
        <div class="row row-spaced">
            <div class="col-pc-25p col-tb-100p col-mb-100p">
                <span class="title">CRIME LIST</span>
            </div>
            <div class="col-pc-25p hidden-tb hidden-mb">
                <button class="btn btn-add block" @click="addNewCrime()">
                    <i class="fa fa-plus-square-o" aria-hidden="true" />
                     ADD NEW CRIME
                </button>
            </div>
        </div>
        <!-- INPUTS PC -->
        <div class="row hidden-mb hidden-tb">
            <div class="col-pc-50p col-tb-25p col-mb-50p row-margin">
                <Input
                    icon="fa fa-folder-open"
                    label="Type of crime"
                    type="select"
                    :options="optionTypeCrime"
                    optionPlaceHolder="All Crimes"
                    :value="crimeType"
                    v-model="crimeType"
                />
            </div>
            <div class="col-pc-25p">
                <Input
                    icon="fa fa-calendar"
                    label="Date - From"
                    type="datetime-local"
                    :value="initialDate"
                    v-model="initialDate"
                />
            </div>
            <div class="col-pc-25p">
                <Input
                    icon="fa fa-calendar"
                    label="Date - To"
                    type="datetime-local"
                    :value="finalDate"
                    v-model="finalDate"
                />
            </div>
            <div class="col-pc-50p">
                <Input
                    icon="fa fa-sort-amount-asc"
                    label="Order By"
                    type="select"
                    :options="optionOrderBy"
                    :value="orderBy"
                    v-model="orderBy"
                />
            </div>
        </div>
        <!-- INPUTS CELULAR E TABLET -->
        <div class="row hidden-pc">
            <div class="col-tb-25p col-mb-50p hidden-tb">
                <Input
                    icon="fa fa-folder-open"
                    label="Type of crime"
                    type="select"
                    :options="optionTypeCrime"
                    optionPlaceHolder="All Crimes"
                    :value="crimeType"
                    v-model="crimeType"
                />
            </div>
            <div class="col-tb-25p col-mb-50p row-margin">
                <Input
                  icon="fa fa-calendar"
                  label="Date"
                  type="datetime-local"
                  :value="initialDate"
                  v-model="initialDate"
                />
            </div>
            <div class="col-tb-25p col-mb-50p hidden-mb">
                <Input
                    icon="fa fa-folder-open"
                    label="Type of crime"
                    type="select"
                    :options="optionTypeCrime"
                    optionPlaceHolder="All Crimes"
                    :value="crimeType"
                    v-model="crimeType"
                />
            </div>
            <div class="col-tb-25p"/>
            <div class="col-tb-25p col-mb-50p">
                <Input
                    icon="fa fa-sort-amount-asc"
                    label="Order By"
                    type="select"
                    :options="optionOrderBy"
                    :value="orderBy"
                    v-model="orderBy"
                />
            </div>
        </div>
        <div class="row">
            <div class="col-pc-25p col-tb-100p col-mb-100p">
                <button class="btn btn-search block" @click="search()">
                    <i class="fa fa-search" aria-hidden="true" />
                    <span class="hidden-mb">BUSCAR</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { StoreState } from '@/domain/model/storeState'
import Input from '@/components/utils/inputComponent.vue'
import { getCrimeTypes, getNameRouter, searchCrime } from '@/store/actions'
import { mapState } from 'vuex'
import { CrimeType } from '@/domain/model/crimeType'
import { SearchParams } from '@/domain/model/searchParams'
import moment from 'moment'
interface Data {
    optionTypeCrime: Array<{id: number; text: string}>;
    optionOrderBy: Array<{id: string; text: string}>;
    crimeType?: number;
    initialDate?: Date;
    finalDate?: Date;
    orderBy?: string;
}
export default Vue.extend({
  components: { Input },
  data (): Data {
    return {
      optionTypeCrime: [],
      optionOrderBy: [{
        id: 'Date',
        text: 'Date'
      }, {
        id: 'Weapon',
        text: 'Weapon'
      }, {
        id: 'Criminal',
        text: 'Criminal'
      }, {
        id: 'Victim',
        text: 'Victim'
      }, {
        id: 'Country',
        text: 'Country'
      }],
      crimeType: undefined,
      initialDate: undefined,
      finalDate: undefined,
      orderBy: undefined
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
    addNewCrime () {
      this.$router.push({ path: '/new-crime' })
    },
    search () {
      const params = {
        crime_type: this.crimeType,
        initial_datetime: this.initialDate ? moment(this.initialDate).format('YYYY-MM-DD HH:MM:SS') : undefined,
        final_datetime: this.finalDate ? moment(this.finalDate).format('YYYY-MM-DD HH:MM:SS') : undefined,
        order_by: this.orderBy
      } as SearchParams
      this.$store.dispatch(searchCrime, params)
    }
  }
})
</script>
<style scoped>
.title{
    text-align: left;
    font: normal normal bold 25px/25px Cinzel Decorative;
    letter-spacing: 0px;
    color: #313131;
    opacity: 1;
}
.btn-search{
    color: #313131;
    background: #F1F9FF;
}
</style>
