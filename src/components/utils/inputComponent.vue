<template>
    <div>
        <label class="label-control"><i v-if="icon" :class="icon" aria-hidden="true"></i> {{label}}</label>
        <div v-if="type !== 'select'">
            <input class="input-control" :type="type" :placeholder="placeholder">
        </div>
        <div v-else>
            <select class="input-control">
                <option value="volvo">Volvo</option>
            </select>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['icon', 'label', 'placeholder', 'type']

})
</script>

<style scoped>
.input-control{
    width: 100%;
    padding: 7px 14px;
    right: 14px;
    border: 1px solid #BCE0FD;
    margin-top: 8px;
    background-color: #fff;
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
