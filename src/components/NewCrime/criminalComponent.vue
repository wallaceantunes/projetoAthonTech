<template>
    <div class="container">
        <div class="row">
            <div class="col-pc-50p col-tb-75p col-mb-100p">
                <Input label="Criminal" placeholder="Type the name of the criminal..." type="text"/>
            </div>
        </div>
        <div class="row">
            <div class="col-pc-25p col-tb-50p col-mb-100p">
                <Input label="Weapon (optional)" type="select"/>
            </div>
        </div>
        <div class="row">
            <div class="col-pc-25p col-tb-25p col-mb-50p row-margin">
                <button class="btn btn-white block">
                    <i class="fa fa-plus-square-o" aria-hidden="true" />
                     ADD CRIMINAL
                </button>
            </div>
            <div class="col-pc-25p col-tb-25p col-mb-50p">
                <button class="btn btn-white block">
                    <i class="fa fa-plus-square-o" aria-hidden="true" />
                    <span class="hidden-mb hidden-tb"> REGISTER NEW WEAPON</span>
                    <span class="hidden-pc"> ADD WEAPON</span>

                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Input from '@/components/utils/inputComponent.vue'

export default Vue.extend({
  components: { Input }
})
</script>

<style>

</style>
