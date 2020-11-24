<template>
    <div v-if="nomeRota !== 'modalMobile'" class="footer">
        <div v-if="nameRouter === 'crimeList'" class="row hidden-pc">
            <div class="col-tb-100p col-mb-100p">
                <button class="btn btn-add block" @click="addNewCrime()">
                    <i class="fa fa-plus-square-o" aria-hidden="true" />
                    ADD NEW CRIME
                </button>
            </div>
        </div>
        <div v-if="nameRouter === 'newCrime'" class="row hidden-pc hidden-tb">
            <div class="col-tb-100p col-mb-100p">
                <button class="btn btn-add block">
                    <i class="fa fa-plus-square-o" aria-hidden="true" />
                    SAVE NEW CRIME
                </button>
            </div>
        </div>
        <div v-if="nameRouter === 'newWeapon'" class="row hidden-pc hidden-tb">
            <div class="col-tb-100p col-mb-100p">
                <button class="btn btn-add block">
                    <i class="fa fa-plus-square-o" aria-hidden="true" />
                    SAVE NEW WEAPON
                </button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { StoreState } from '@/domain/model/storeState'
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  data () {
    return {
      nomeRota: null
    }
  },
  computed: {
    ...mapState({
      nameRouter: (state) => (state as StoreState).configModule.nameRouter
    })
  },
  mounted () {
    this.nomeRota = (this.$router as any).history.current.name
  },
  methods: {
    addNewCrime () {
      this.$router.push({ path: '/new-crime' })
    }
  }
})
</script>
<style scoped>
.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #FCFC99;
    height: 60px;
    opacity: 1;
    box-shadow: 0px -3px 3px #00000029;
}
.row{
    padding-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
}
</style>
