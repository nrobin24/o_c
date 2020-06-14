import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import WebMidi from "webmidi"

import store from './store'


Vue.config.productionTip = false

Vue.use(Vuex)

function tick(store) {
  store.commit('output/updateAllMidiOutputs')
  store.dispatch('gateSequencer/advancePattern')
}

function startTicking(store) {
  WebMidi.enable(function() {
    setInterval(() => tick(store), 250)
  })
}

new Vue({
  render: h => h(App),
  store,
  mounted: function() {
    startTicking(store)
  }
}).$mount('#app')
