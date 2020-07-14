import Vue from 'vue'
import App from './App.vue'

Vue.component('text-input', {
  template: '<textarea :placeholder="textValue" @click="changeText"> </textarea:placeholder>',
  data: function () {
return {
  textValue:'type here',

}
  },
  methods:{
    changeText: function () {
      this.textValue ="Text changed"
    }
  }
})

new Vue({
  el: '#app',
  //render: h => h(App)
})
