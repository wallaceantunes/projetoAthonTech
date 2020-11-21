<template>
    <div class="container">
        <div class="row row-spaced">
            <div class="col-pc-25p">
                <span class="title">CRIME LIST</span>
            </div>
            <div class="col-pc-25p">
                <button class="btn btn-add block"><i class="fa fa-plus-square-o" aria-hidden="true"></i> ADD NEW CRIME</button>
            </div>
        </div>
        <div class="row">
            <div class="col-pc-50p col-tb-100p">
                <Input icon="" label="Text Filter" placeholder="Search for..." type="text"/>
            </div>
        </div>
        <div class="row">
            <div class="col-pc-50p">
                <Input icon="fa fa-folder-open" label="Type of crime" placeholder="" type="select"/>
            </div>
            <div class="col-pc-25p">
                <Input icon="fa fa-calendar" label="Date - From" placeholder="" type="datetime-local"/>
            </div>
            <div class="col-pc-25p">
                <Input icon="fa fa-calendar" label="Date - To" placeholder="" type="datetime-local"/>
            </div>
        </div>
        <div class="row">
            <div class="col-pc-50p">
                <Input icon="fa fa-sort-amount-asc" label="Order By" placeholder="" type="select"/>
            </div>
        </div>
        <div class="row">
            <div class="col-pc-25p col-tb-100p">
                <button class="btn btn-search block"><i class="fa fa-search" aria-hidden="true"></i> BUSCAR</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Input from '@/components/utils/inputComponent.vue'
export default Vue.extend({
  components: { Input }
})
</script>
<style scoped>
.title{
    text-align: left;
    font: normal normal bold 25px/25px Cinzel Decorative;
    letter-spacing: 0px;
    color: #313131;
    opacity: 1;
}
.btn{
    letter-spacing: 0px;
    font: normal normal bold 14px/19px Cinzel Decorative;
    border: none;
    -webkit-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.31);
    -moz-box-shadow:    3px 3px 6px 0px rgba(0, 0, 0, 0.31);
    box-shadow:         3px 3px 6px 0px rgba(0, 0, 0, 0.31);
    border-radius: 2px;
}
.btn-add{
    color: #313131;
    background: #FCFC99;
}
.btn-search{
    color: #313131;
    background: #F1F9FF;
}
.block{
    display: block;
    width: 100%;
    height: 30px;

}
</style>
