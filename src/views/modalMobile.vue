<template>
    <div>
        <h2>CRIME</h2>
        <br>
        <div class="card">
            <div class="container">
                <div class="row">
                    <div class="col-mb-100p text-right" @click="deleteCrime()">
                        <i class="fa fa-trash icon" aria-hidden="true" />
                    </div>
                    <div class="col-mb-100p">
                        <b class="title">{{crimeName}}</b>
                    </div>
                    <br>
                    <div class="col-mb-100p">
                        Crime Type
                    </div>
                </div>
                <div class="row">
                    <div class="col-mb-100p title">
                        {{crime.crimeDate | formatDate}}
                    </div>
                    <br>
                    <div class="col-mb-100p">
                        {{crime.country}}
                    </div>
                </div>
                <div
                    v-for="(criminal, index) in criminals"
                    :key="`criminal-${index}`"
                    class="row"
                >
                    <div class="col-mb-50p">
                        <p class="title">{{criminal.criminal}}</p>
                        <p>Criminal</p>
                    </div>
                    <div class="col-mb-25p">
                        <img class="rounded" src="https://via.placeholder.com/50x50" alt="">
                    </div>
                </div>
                <div
                    v-for="(weapon, index) in weapons"
                    :key="`weapon-${index}`"
                    class="row"
                >
                    <div class="col-mb-100p">
                        <p class="title">{{weapon.weapon}}</p>
                        <p>{{weapon.weaponType}}</p>
                    </div>
                </div>
                <div
                    v-for="(victim, index) in victims"
                    :key="`victim-${index}`"
                    class="row"
                >
                    <div class="col-mb-50p">
                        <p class="title">{{victim.victim}}</p>
                        <p>Victim</p>
                    </div>
                    <div class="col-mb-25p">
                        <img class="rounded" src="https://via.placeholder.com/50x50" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { StoreState } from '@/domain/model/storeState'
import { deleteCrime, getNameRouter, searchCrime, searchCrimeById } from '@/store/actions'
import Vue from 'vue'
import { mapState } from 'vuex'
import '@/utils/vueFilter'
export default Vue.extend({
  mounted () {
    this.$store.dispatch(searchCrimeById, this.$route.params.id)
    this.$store.dispatch(getNameRouter, (this.$router as any).history.current.name)
  },
  computed: {
    ...mapState({
      crime: (state) => (state as StoreState).crimeModule.crime
    }),
    crimeName () {
      if (this.crime.criminalCrimeTypes) {
        const name = this.crime.criminalCrimeTypes.map((ele: any) => ele.crimeType).join(' and ')
        return name || 'Unknown crime'
      }
      return 'Unknown crime'
    },
    criminals () {
      if (this.crime.victimsCrime) {
        return this.crime.criminalCrimeTypes.map((ele: any) => ({ criminal: ele.criminal }))
      }
      return [{ criminal: 'Unknown Criminal' }]
    },
    weapons () {
      if (this.crime.weaponsCrime) {
        return this.crime.weaponsCrime.map((ele: any) => ({ weapon: ele.weapon, weaponType: ele.weaponType }))
      }
      return null
    },
    victims () {
      if (this.crime.victimsCrime) {
        return this.crime.victimsCrime
      }
      return [{ victim: 'No Victims' }]
    }
  },
  methods: {
    async deleteCrime () {
      await this.$store.dispatch(deleteCrime, this.$route.params.id)
      this.$store.dispatch(searchCrime)
      this.$router.push({ path: '/' })
    }
  }
})
</script>

<style scoped>
h2{
    font-family: Cinzel Decorative;
    font-size: 22px;
    color: #313131;
}
.card{
    margin-top: 6px;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #F1F9FF 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.31);
    border-radius: 3px;
    min-height: 158px;
    margin-bottom: 6px;
    color: #3C5C77;
    font: normal normal medium Montserrat;
    font-style: 17px;
    cursor: pointer;
}
.icon{
    color: #2699FB;
}
.rounded{
    border-radius: 50px
}
.title{
    font-size: 22px;
}
</style>
