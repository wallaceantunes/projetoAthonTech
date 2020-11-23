<template>
    <div @click.prevent="closeModal" class="modal" :class="{active: isActive}">
        <div @click.prevent="activeModal" class="card" :class="{active: isActive}">
            <div class="container">
                <div v-if="isActive" class="row row-spaced">
                    <div class="col-pc-100p col-tb-100p text-right">
                        <i class="fa fa-trash icon" aria-hidden="true" />
                    </div>
                    <div class="col-pc-100p col-tb-100p">
                        <b class="title">Crime</b>
                    </div>
                </div>
                <div class="row">
                    <div class="col-pc-100p  col-tb-100p col-mb-100p">
                        <b>Mass Attack</b>
                    </div>
                    <br>
                    <div class="col-pc-100p  col-tb-100p col-mb-100p">
                        Crime Type
                    </div>
                </div>
                <div class="row">
                    <div class="col-pc-100p  col-tb-100p col-mb-100p">
                        1981/10/31 - 22:33:44
                    </div>
                    <br>
                    <div class="col-pc-100p  col-tb-100p col-mb-100p">
                        Hogwards
                    </div>
                </div>
                <div v-if="isActive" class="row">
                    <div class="col-pc-100p  col-tb-100p">
                        <b class="title">CRIMINAL</b>
                    </div>
                </div>
                <div v-if="isActive" class="row">
                    <div class="col-pc-25p col-tb-25p">
                        <img class="rounded" src="https://via.placeholder.com/100x100" alt="">
                    </div>
                    <div class="col-pc-25p col-tb-25p">
                        <p>nome</p>
                        <p>nome</p>
                        <br>
                        <p>nome</p>
                        <p>nome</p>
                    </div>
                    <div class="col-pc-25p col-tb-25p">
                        <img class="rounded" src="https://via.placeholder.com/100x100" alt="">
                    </div>
                    <div class="col-pc-25p col-tb-25p">
                        <p>nome</p>
                        <p>nome</p>
                        <br>
                        <p>nome</p>
                        <p>nome</p>
                    </div>
                </div>
                 <div v-if="isActive" class="row">
                    <div class="col-pc-100p col-tb-100p">
                        <b class="title">VICTIM</b>
                    </div>
                </div>
                <div v-if="isActive" class="row">
                    <div class="col-pc-25p col-tb-25p">
                        <img class="rounded" src="https://via.placeholder.com/100x100" alt="">
                    </div>
                    <div class="col-pc-25p col-tb-25p">
                        <p>nome</p>
                        <p>nome</p>
                        <br>
                        <p>nome</p>
                        <p>nome</p>
                    </div>
                    <div class="col-pc-25p col-tb-25p">
                        <img class="rounded" src="https://via.placeholder.com/100x100" alt="">
                    </div>
                    <div class="col-pc-25p col-tb-25p">
                        <p>nome</p>
                        <p>nome</p>
                        <br>
                        <p>nome</p>
                        <p>nome</p>
                    </div>
                </div>
                <div v-if="!isActive" class="row">
                    <div class="col-pc-100p col-tb-100p col-mb-100p text-right">
                        <i class="fa fa-search-plus icon" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    activeModal () {
      this.isActive = true
    },
    closeModal (event: MouseEvent) {
      const el = event.target as Element
      if (el.classList.contains('modal') && el.classList.contains('active')) {
        this.isActive = false
      }
    }
  }
})
</script>

<style scoped>
.modal{
    transition: 0.5s;
}
.modal.active{
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.card{
    margin-top: 6px;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #F1F9FF 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.31);
    border-radius: 3px;
    min-height: 158px;
    margin-bottom: 6px;
    color: #3C5C77;
    font: normal normal medium 15px/19px Montserrat;
    cursor: pointer;
}
.title{
    font-size: 22px;
    color: #313131;
}
.icon{
    color: #2699FB;
}
.rounded{
    border-radius: 50px
}
/* PC */
@media screen and (min-width: 1024px){
    .card.active{
        background: #F1F9FF 0% 0% no-repeat padding-box;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 50%;
        font: normal normal medium 15px/19px Montserrat;
    }
}
/* TABLET */
@media screen and (min-width: 700px) and (max-width: 1023px){
    .card.active{
        background: #F1F9FF 0% 0% no-repeat padding-box;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        font: normal normal medium 15px/19px Montserrat;
    }
}
</style>
