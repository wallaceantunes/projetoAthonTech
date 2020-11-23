<template>
  <div class="header">
    <img v-if="nomeRota === 'crimeList'" class="logo" src="../../public/images/logo-crime-maneger.png">
    <div v-if="nomeRota !== 'crimeList'" class="container">
      <div class="row row-center">
        <div class="col-tb-25p col-mb-25p">
          <button class="btn btn-back">
            <i class="fa fa-arrow-left" aria-hidden="true" />
          </button>
        </div>
        <div class="col-tb-75p col-mb-75p title hidden-pc hidden-tb">
          <b>Nome da Rota</b>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      nomeRota: null
    }
  },
  mounted () {
    this.nomeRota = (this.$router as any).history.current.name
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
    padding-left: 20px
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
