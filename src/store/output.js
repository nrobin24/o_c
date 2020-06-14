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
  playNote(context, {duration, note}) {

    console.log('got play note!')
    console.log(note)
    // TOOD: use context arg to get state
    engine.playNote(note, duration)
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
