import Vue from "vue";
import moment from "moment";
import numeral from "numeral";

Vue.filter("formatDate", value => {
  if (value) {
    return moment(String(value)).locale("pt-br").format("L");
  }
});

Vue.filter("formatMoney", value => {
  if (value) {
    return numeral(value).format("$0,0.00");
  }
});
