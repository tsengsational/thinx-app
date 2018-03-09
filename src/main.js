import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.Event = new class {
  constructor() {
    this.vue = new Vue();
  }
  fire(event, data = null) {
    this.vue.$emit(event, data)
  }
  listen(event, callback){
    this.vue.$on(event, callback)
  }
}

let AppComponent = Vue.component('app', App)
new Vue({
  render: h => h(App)
}).$mount('#app')
