<template>
    <div>
        <div @click.prevent="closeModal" class="modal hidden-mb" :class="{active: isActive}">
            <div @click.prevent="activeModal" class="card" :class="{active: isActive}">
                <div class="container">
                    <div v-if="isActive" class="row row-spaced">
                        <div class="col-pc-100p col-tb-100p text-right" @click="deleteCrime()">
                            <i class="fa fa-trash icon" aria-hidden="true" />
                        </div>
                        <div class="col-pc-100p col-tb-100p">
                            <b class="title">Crime</b>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-pc-100p  col-tb-100p col-mb-100p">
                            <b>{{crimeName}}</b>
                        </div>
                        <br>
                        <div class="col-pc-100p  col-tb-100p col-mb-100p">
                            Crime type
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-pc-100p  col-tb-100p col-mb-100p">
                            {{content.crimeDate | formatDate}}
                        </div>
                        <br>
                        <div class="col-pc-100p  col-tb-100p col-mb-100p">
                            {{content.country}}
                        </div>
                    </div>
                    <div v-if="isActive" class="row">
                        <div class="col-pc-100p  col-tb-100p">
                            <b class="title">CRIMINAL</b>
                        </div>
                    </div>
                    <div v-if="isActive" class="row">
                        <div
                            v-for="(criminal, index) in criminals"
                            :key="index"
                            class="col-pc-50p col-tb-50p row-margin"
                        >
                            <img class="rounded" src="https://www.thispersondoesnotexist.com/image" width="100px" height="100px">
                            <p>{{criminal.criminal}}</p>
                            <p>Criminal</p>
                        </div>
                    </div>
                    <div v-if="isActive" class="row">
                        <div class="col-pc-100p col-tb-100p">
                            <b class="title">WEAPONS</b>
                        </div>
                    </div>
                    <div v-if="isActive" class="row" >
                        <div
                            v-for="(weapon, index) in weapons"
                            :key="index"
                            class="col-pc-25p col-tb-25p row-margin"
                        >
                            <p>{{weapon.weapon}}</p>
                            <p>{{weapon.weaponType}}</p>
                        </div>
                    </div>
                    <div v-if="isActive" class="row">
                        <div class="col-pc-100p col-tb-100p">
                            <b class="title">VICTIM</b>
                        </div>
                    </div>
                    <div v-if="isActive" class="row" >
                        <div
                            v-for="(victim, index) in victims"
                            :key="index"
                            class="col-pc-50p col-tb-50p row-margin"
                        >
                            <img class="rounded" src="https://www.thispersondoesnotexist.com/image" width="100px" height="100px" >
                            <p>{{victim.victim}}</p>
                            <p>Victim</p>
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
        <div class="hidden-pc hidden-tb">
            <div @click="mobileModal(content.idCrime)" class="card">
                <div class="container">
                    <div class="row">
                        <div class="col-pc-100p  col-tb-100p col-mb-100p">
                            <b>{{crimeName}}</b>
                        </div>
                        <br>
                        <div class="col-pc-100p  col-tb-100p col-mb-100p">
                            Crime type
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-pc-100p  col-tb-100p col-mb-100p">
                            {{content.crimeDate | formatDate}}
                        </div>
                        <br>
                        <div class="col-pc-100p  col-tb-100p col-mb-100p">
                            {{content.country}}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-pc-100p col-tb-100p col-mb-100p text-right">
                            <i class="fa fa-search-plus icon" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment'
import '@/utils/vueFilter'
import { deleteCrime, searchCrime } from '@/store/actions'
export default Vue.extend({
  props: ['content'],
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    crimeName () {
      if (this.content.criminalCrimeTypes) {
        const name = this.content.criminalCrimeTypes.map((ele: any) => ele.crimeType).join(' and ')
        return name || 'Unknown crime'
      }
      return 'Unknown crime'
    },
    criminals () {
      if (this.content.victimsCrime.length > 0) {
        return this.content.criminalCrimeTypes.map((ele: any) => ({ criminal: ele.criminal }))
      }
      return [{ criminal: 'Unknown Criminal' }]
    },
    weapons () {
      if (this.content.weaponsCrime.length > 0) {
        return this.content.weaponsCrime.map((ele: any) => ({ weapon: ele.weapon, weaponType: ele.weaponType }))
      }
      return null
    },
    victims () {
      if (this.content.victimsCrime.length > 0) {
        return this.content.victimsCrime
      }
      return [{ victim: 'No Victims' }]
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
    },
    async deleteCrime () {
      await this.$store.dispatch(deleteCrime, this.content.idCrime)
      this.$store.dispatch(searchCrime)
      this.isActive = false
    },
    mobileModal (id: number) {
      this.$router.push({ path: `/modal-mobile/${id}` })
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
    float: left;
    margin-right: 20%;
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
