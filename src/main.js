import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import WebMidi from "webmidi"

import store from './store'


Vue.config.productionTip = false

Vue.use(Vuex)

function tick(store) {
  store.commit('output/updateAllMidiOutputs')
}

function startTicking(store) {
  WebMidi.enable(function() {
    setInterval(() => tick(store), 5000)
  })
}

new Vue({
  render: h => h(App),
  store,
  mounted: function() {
    startTicking(store)
  }
}).$mount('#app')
