<template>
  <div>
    <Header />
    <router-view class="content" />
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
  padding-top: 90px;
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
.text-left{
  text-align: left;
}
.text-right{
  text-align: right;
}
.container
{
    display: flex;
    flex-direction: column;
}
.row-margin{
  margin-bottom: 20px;
}
.row{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}
.row-spaced{
    justify-content: space-between;
}
.btn{
    letter-spacing: 0px;
    font: normal normal bold 14px/19px Cinzel Decorative;
    border: none;
    -webkit-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.31);
    -moz-box-shadow:    3px 3px 6px 0px rgba(0, 0, 0, 0.31);
    box-shadow:         3px 3px 6px 0px rgba(0, 0, 0, 0.31);
    border-radius: 2px;
    cursor: pointer;
}
.btn-add{
    color: #313131;
    background-color: #FCFC99;
}
.btn-white{
  color: #2699FB;
  background-color: #FAFAFA;
}
.block{
    display: block;
    width: 100%;
    height: 30px;

}
/* PC */
@media screen and (min-width: 1024px){
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
  .hidden-pc{
    display: none;
  }
}
/* TABLET */
@media screen and (min-width: 700px) and (max-width: 1023px){
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
  .col-tb-75p{
      width: 74%;
      flex-basis: auto;
      margin-right: 1%;

  }
  .col-tb-100p{
      width: 100%;
      flex-basis: auto;

  }
  .hidden-tb{
    display: none;
  }
}
/* CELULAR */
@media screen and (max-width: 699px){
  .col-mb-25p{
      width: 24%;
      flex-basis: auto;
      margin-right: 1%;

  }
  .col-mb-50p{
      width: 49%;
      flex-basis: auto;
      margin-right: 1%;

  }
  .col-mb-75p{
      width: 74%;
      flex-basis: auto;
      margin-right: 1%;

  }
  .col-mb-100p{
      width: 100%;
      flex-basis: auto;

  }
  .hidden-mb{
    display: none;
  }
  .btn{
    letter-spacing: 0px;
    font: normal normal bold 12px/19px Cinzel Decorative;
    border: none;
    -webkit-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.31);
    -moz-box-shadow:    3px 3px 6px 0px rgba(0, 0, 0, 0.31);
    box-shadow:         3px 3px 6px 0px rgba(0, 0, 0, 0.31);
    border-radius: 2px;
    cursor: pointer;
}
}
</style>
