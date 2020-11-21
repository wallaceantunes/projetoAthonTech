<template>
  <div class="container">
    <div class="row">
        <div class="col-pc-25p col-tb-50p">
            <Card />
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '@/components/CrimeList/cardCrime.vue'
export default Vue.extend({
  components: { Card }
})
</script>

<style scoped>
</style>
