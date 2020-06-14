// import { getMidiOutputs } from '../engine/main'
import { mapGetters } from 'vuex'
import { engine } from '../engine/main'

// initial state
const state = () => ({
  currentMidiOutput: -1,
  allMidiOutputs: []
})

// // getters
const getters = mapGetters(['currentMidiOutput', 'allMidiOutputs'])

const actions = {
  playNote() {
    // TOOD: use context arg to get state
    engine.playNote('C3', 500)
  }
}

// mutations
const mutations = {
    updateAllMidiOutputs (state) {
        state.allMidiOutputs = engine.getMidiOutputs()
    },
    updateCurrentMidiOutput (state, midiOutputId) {
        state.currentMidiOutput = midiOutputId
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
