<template>
    <div v-if="nomeRota !== 'modalMobile'" class="footer">
        <div v-if="nomeRota === 'crimeList'" class="row hidden-pc">
            <div class="col-tb-100p col-mb-100p">
                <button class="btn btn-add block">
                    <i class="fa fa-plus-square-o" aria-hidden="true" />
                    ADD NEW CRIME
                </button>
            </div>
        </div>
        <div v-if="nomeRota === 'newCrime'" class="row hidden-pc hidden-tb">
            <div class="col-tb-100p col-mb-100p">
                <button class="btn btn-add block">
                    <i class="fa fa-plus-square-o" aria-hidden="true" />
                    SAVE NEW CRIME
                </button>
            </div>
        </div>
        <div v-if="nomeRota === 'newWeapon'" class="row hidden-pc hidden-tb">
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
