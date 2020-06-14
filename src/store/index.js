import Vue from 'vue'
import Vuex from 'vuex'
import gateSequencer from './gateSequencer'
import output from './output'
import euclideanGenerator from './euclideanGenerator'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    gateSequencer,
    output,
    euclideanGenerator
  }
})
