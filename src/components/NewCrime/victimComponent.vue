<template>
    <div class="container">
        <div
            v-for="(t, index) in victim"
            :key="index"
            class="row"
        >
            <div class="col-pc-50p col-tb-75p col-mb-100p">
                <Input
                        label="Victim (optional)"
                        type="select"
                        :options="optionVictim"
                        :value="t.victim"
                        v-on:input="changeVictim($event, index)"
                        optionPlaceHolder="Select"
                    />
            </div>
        </div>
        <div class="row">
            <div class="col-pc-25p col-tb-25p col-mb-50p">
                <button class="btn btn-white block" @click="addVictim()">
                    <i class="fa fa-plus-square-o" aria-hidden="true" />
                     ADD VICTIM
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
import { Victim } from '@/domain/model/victim'
import { getVictims } from '@/store/actions'
interface Data {
    optionVictim: Array<{id: number; text: string}>;
    victim: Array<{victimId?: number}>;
}
export default Vue.extend({
  components: { Input },
  data (): Data {
    return {
      optionVictim: [],
      victim: [{
        victimId: undefined
      }]
    }
  },
  computed: {
    ...mapState({
      victims: (state) => (state as StoreState).victimModule.victims
    })
  },
  watch: {
    victims (newValue?: Array<Victim>) {
      if (newValue) {
        this.optionVictim = newValue.map((ele) => ({
          id: ele.victimId,
          text: ele.txName
        }))
      }
    }
  },
  mounted () {
    this.$store.dispatch(getVictims)
  },
  methods: {
    dispatchModel () {
      this.$emit('changeVictim', this.victim)
    },
    addVictim () {
      const data = {
        victimId: undefined
      }
      this.victim.push(data)
    },
    changeVictim (value: any, index: number) {
      if (value) {
        this.victim[index].victimId = Number(value)
        this.dispatchModel()
      }
    }
  }
})
</script>

<style>

</style>
