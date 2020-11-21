<template>
  <div>
    <SearchCrime />
    <br>
    <CardCrimeList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchCrime from '@/components/CrimeList/searchCrime.vue'
import CardCrimeList from '@/components/CrimeList/cardCrimeList.vue'
export default Vue.extend({
  components: { SearchCrime, CardCrimeList }
})
</script>
