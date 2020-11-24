<template>
    <div>
        <h2>CRIME</h2>
        <br>
        <div class="card">
            <div class="container">
                <div class="row">
                    <div class="col-mb-100p text-right">
                        <i class="fa fa-trash icon" aria-hidden="true" />
                    </div>
                    <div class="col-mb-100p">
                        <b class="title">Mass Attack</b>
                    </div>
                    <br>
                    <div class="col-mb-100p">
                        Crime Type
                    </div>
                </div>
                <div class="row">
                    <div class="col-mb-100p title">
                        1981/10/31 - 22:33:44
                    </div>
                    <br>
                    <div class="col-mb-100p">
                        Hogwards
                    </div>
                </div>
                <div class="row">
                    <div class="col-mb-50p">
                        <p class="title">nome</p>
                        <p>nome</p>
                    </div>
                    <div class="col-mb-25p">
                        <img class="rounded" src="https://via.placeholder.com/50x50" alt="">
                    </div>
                </div>
                <div class="row">
                    <div class="col-mb-100p">
                        <p class="title">nome</p>
                        <p>nome</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-mb-50p">
                        <p class="title">nome</p>
                        <p>nome</p>
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
import { getNameRouter } from '@/store/actions'
import Vue from 'vue'
export default Vue.extend({
  mounted () {
    this.$store.dispatch(getNameRouter, (this.$router as any).history.current.name)
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
