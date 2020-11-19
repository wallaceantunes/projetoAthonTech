<template>
  <div>
    <SearchCrime />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchCrime from '@/components/CrimeList/searchCrime.vue'
export default Vue.extend({
  components: { SearchCrime }
})
</script>
