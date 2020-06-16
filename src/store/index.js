import Vue from 'vue'
import Vuex from 'vuex'
import gateSequencer from './gateSequencer'
import noteSequencer from './noteSequencer'
import output from './output'
import euclideanGenerator from './euclideanGenerator'
import turingMachine from './turingMachine'
import clock from './clock'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    gateSequencer,
    output,
    euclideanGenerator,
    noteSequencer,
    turingMachine,
    clock
  }
})
