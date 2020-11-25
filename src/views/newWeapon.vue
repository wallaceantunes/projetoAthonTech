<template>
    <div class="container">
        <div class="row">
            <div class="col-pc-100p col-tb-100p col-mb-100p">
                <b class="title">NEW WEAPON</b>
            </div>
        </div>
        <div class="row">
            <div class="col-pc-50p col-tb-50p col-mb-100p">
                <Input label="Type of weapon" type="select"/>
            </div>
        </div>
        <div class="row">
            <div class="col-pc-50p col-tb-50p col-mb-100p">
                <Input label="Weapon" type="text"/>
            </div>
        </div>
        <div class="row hidden-mb">
            <div class="col-pc-50p col-tb-50p">
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
import Input from '@/components/utils/inputComponent.vue'
import { getNameRouter } from '@/store/actions'

export default Vue.extend({
  components: { Input },
  mounted () {
    this.$store.dispatch(getNameRouter, (this.$router as any).history.current.name)
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
