<template>
  <div>
    <Header />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default Vue.extend({
  components: { Header, Footer }
})
</script>
<style >
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.content{
  padding-top: 107px;
  padding-bottom: 60px;
  padding-left: 32px;
  padding-right: 32px;
  background-color: #F1F9FF;
  min-height: 100vh;
}
.pointer{
  cursor: pointer;
}
.text-center{
  text-align: center;
}
</style>
