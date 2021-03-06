import Vue from 'vue'
import Vuex from 'vuex'
import gateSequencer from './gateSequencer'
import noteSequencer from './noteSequencer'
import output from './output'
import euclideanGenerator from './euclideanGenerator'
import turingMachine from './turingMachine'
import clock from './clock'
import rackTabs from './rackTabs'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    tracks: [1, 2, 3, 4]
  },
  modules: {
    gateSequencer,
    output,
    euclideanGenerator,
    noteSequencer,
    turingMachine,
    clock,
    rackTabs
  }
})
