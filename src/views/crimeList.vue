<template>
  <div>
    <SearchCrime />
    <br>
    <CardCrime />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchCrime from '@/components/CrimeList/searchCrime.vue'
import CardCrime from '@/components/CrimeList/cardCrime.vue'
export default Vue.extend({
  components: { SearchCrime, CardCrime }
})
</script>
