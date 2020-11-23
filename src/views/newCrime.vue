<template>
    <div class="container">
        <div class="row">
            <div class="col-pc-100p col-tb-100p col-mb-100p">
                <b class="title">NEW CRIME</b>
            </div>
        </div>
        <div class="row">
            <div class="col-pc-50p col-tb-100p col-mb-100p">
                <Input label="Type of crime" type="select"/>
            </div>
        </div>
        <div class="row">
            <div class="col-pc-25p col-tb-50p col-mb-100p">
                <Input label="Date" type="date"/>
            </div>
        </div>
        <br>
        <Criminal />
        <br>
        <Victim />
        <br>
        <div class="row hidden-mb">
            <div class="col-pc-50p col-tb-50p">
                <button class="btn btn-add block">
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

export default Vue.extend({
  components: { Input, Criminal, Victim }
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
