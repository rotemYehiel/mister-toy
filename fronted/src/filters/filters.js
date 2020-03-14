import Vue from 'vue'
import moment from 'moment'

Vue.filter('date', (timestamp) => {
    return moment(new Date(timestamp)).fromNow();
})

Vue.filter('number', (numberFormat) => {
    let num = +numberFormat
    num = num.toLocaleString('he-IL');
    return num
})