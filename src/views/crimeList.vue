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
import { getNameRouter } from '@/store/actions'
export default Vue.extend({
  components: { SearchCrime, CardCrimeList },
  mounted () {
    this.$store.dispatch(getNameRouter, (this.$router as any).history.current.name)
  }
})
</script>
