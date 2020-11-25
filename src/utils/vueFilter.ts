import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', (value: string) =>
  moment(value)
    .format('YYYY/MM/DD - HH:MM:SS')
)
