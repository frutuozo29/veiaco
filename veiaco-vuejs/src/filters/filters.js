import Vue from 'vue'
import moment from 'moment'
import numeral from 'numeral'

Vue.filter('formatDate', value => {
  if (value) {
    return moment
      .utc(value)
      .locale('pt-br')
      .format('L')
  }
})

Vue.filter('formatMoney', value => {
  if (value) {
    return numeral(value).format('$0,0.00')
  } else {
    return numeral(0).format('$0,0.00')
  }
})
