<template>
    <div class="container">
        <div class="row row-spaced">
            <div class="col-25p">
                <span class="title">CRIME LIST</span>
            </div>
            <div class="col-25p">
                <button class="btn-add block"><i class="fa fa-plus-square-o" aria-hidden="true"></i> ADD NEW CRIME</button>
            </div>
        </div>
        <div class="row">
            <div class="col-50p">
                <Input />
            </div>
        </div>
        <div class="row">
            <div class="col-50p">
                <Input />
            </div>
            <div class="col-25p">
                <Input />
            </div>
            <div class="col-25p">
                <Input />
            </div>
        </div>
        <div class="row">
            <div class="col-50p">
                <Input />
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
.col-25p{
    width: 24%;
    flex-basis: auto;
    margin-right: 1%;
}
.col-50p{
    width: 49%;
    align-self: flex-end;
    margin-right: 1%;
}
.title{
    text-align: left;
    font: normal normal bold 25px/25px Cinzel Decorative;
    letter-spacing: 0px;
    color: #313131;
    opacity: 1;
}
.btn-add{
    color: #313131;
    letter-spacing: 0px;
    font: normal normal bold 14px/19px Cinzel Decorative;
    background: #FCFC99;
    border: none;
    -webkit-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.31);
    -moz-box-shadow:    3px 3px 6px 0px rgba(0, 0, 0, 0.31);
    box-shadow:         3px 3px 6px 0px rgba(0, 0, 0, 0.31);
    border-radius: 2px;
}
.block{
    display: block;
    width: 100%;
    height: 30px;

}
</style>
