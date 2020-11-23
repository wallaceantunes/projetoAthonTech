<template>
    <div class="container">
        <div class="row">
            <div class="col-pc-50p col-tb-75p col-mb-100p">
                <Input label="Victim (optional)" placeholder="Type the name of the victim..." type="text"/>
            </div>
        </div>
        <div class="row">
            <div class="col-pc-25p col-tb-25p col-mb-50p">
                <button class="btn btn-white block">
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

export default Vue.extend({
  components: { Input }
})
</script>

<style>

</style>
