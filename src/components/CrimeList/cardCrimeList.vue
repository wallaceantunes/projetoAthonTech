<template>
  <div class="container">
    <div class="row">
        <div
          v-for="(cardCrime, index) in crimes"
          :key="index"
          class="col-pc-25p col-tb-50p col-mb-100p row-margin slideInUp"
        >
            <Card :content="cardCrime" />
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '@/components/CrimeList/cardCrime.vue'
import { mapState } from 'vuex'
import { StoreState } from '@/domain/model/storeState'
export default Vue.extend({
  components: { Card },
  computed: {
    ...mapState({
      crimes: (state) => (state as StoreState).crimeModule.crimes
    })
  }
})
</script>

<style scoped>

.slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes slideInUp {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}
@keyframes slideInUp {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}
</style>
