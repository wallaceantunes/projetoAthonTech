<template>
  <div class="header">
    <img v-if="nameRouter === 'crimeList'" class="logo" src="../../public/images/logo-crime-maneger.png">
    <div v-if="nameRouter !== 'crimeList'" class="container">
      <div class="row row-center">
        <div class="col-tb-25p col-mb-25p">
          <button class="btn btn-back" @click="backPage()">
            <i class="fa fa-arrow-left" aria-hidden="true" />
          </button>
        </div>
        <div class="col-tb-75p col-mb-75p title hidden-pc hidden-tb">
          <b>{{nameRouter}}</b>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { StoreState } from '@/domain/model/storeState'
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapState({
      nameRouter: (state) => (state as StoreState).configModule.nameRouter
    })
  },
  methods: {
    backPage () {
      if (this.nameRouter === 'newCrime') {
        this.$router.push({ path: '/' })
      } else if (this.nameRouter === 'newWeapon') {
        this.$router.push({ path: '/new-crime' })
      } else if (this.nameRouter === 'modalMobile') {
        this.$router.push({ path: '/' })
      }
    }
  }
})
</script>
<style scoped>
.header{
    position: fixed;
    width: 100%;
    background-color: #FCFC99;
    height: 60px;
    box-shadow: 0px 3px 3px #00000029;
}
.logo{
    padding-left: 20px;
}
.btn-back{
    color: #313131;
    background: #FCFC99;
    padding: 6px 10px 6px 10px;
}
.row-center{
  margin: 15px;
}
.title{
  color: #313131;
  font-family: Cinzel Decorative;
  font-size: 18px;
  align-self: center;
  justify-content: center;
}
</style>
