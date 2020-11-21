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
<style>
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
.container
{
    display: flex;
    flex-direction: column;
}
.row{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}
.row-spaced{
    justify-content: space-between;
}
.col-pc-25p{
    width: 24%;
    flex-basis: auto;
    margin-right: 1%;
}
.col-pc-50p{
    width: 49%;
    align-self: flex-end;
    margin-right: 1%;
}
.col-pc-100p{
  width: 100%;
  align-self: flex-end;
}
@media screen and (min-width: 768px) and (max-width: 1439px){
.col-tb-25p{
    width: 24%;
    flex-basis: auto;
    margin-right: 1%;
}
.col-tb-50p{
    width: 49%;
    flex-basis: auto;
    margin-right: 1%;
}
.col-tb-100p{
    width: 100%;
    flex-basis: auto;
}
}
</style>
