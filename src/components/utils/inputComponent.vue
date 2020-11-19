<template>
    <div>
        <label class="label-control">TEXT</label>
        <input class="input-control" type="text" placeholder="Text">
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>

<style scoped>
.input-control{
    width: 100%;
    padding: 7px 14px;
    border: 1px solid #BCE0FD;
    margin-top: 8px;
}
.label-control{
    font: normal normal medium 18px/22px Montserrat;
    letter-spacing: 0px;
    color: #3C5C77;
}
::-webkit-input-placeholder {
    font: normal normal medium 18px/22px Montserrat;
    letter-spacing: 0px;
    color: #95A0A6;
}

:-ms-input-placeholder {
    font: normal normal medium 18px/22px Montserrat;
    letter-spacing: 0px;
    color: #95A0A6;
}

::placeholder {
    font: normal normal medium 18px/22px Montserrat;
    letter-spacing: 0px;
    color: #95A0A6;
}
</style>
