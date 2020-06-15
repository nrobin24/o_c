// import { getMidiOutputs } from '../engine/main'
// import { mapGetters } from 'vuex'
// import { engine } from '../engine/main'

// initial state

// var timer;

const state = () => ({
    count: 0,
    bpm: 120,
    isPlaying: false
})

// // getters
// const getters = mapGetters(['currentMidiOutput', 'allMidiOutputs'])

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
    play (state) {
        // timer = setInterval(tick(state))
        state.isPlaying = true
    },
    pause (state) {
        state.isPlaying = false
    },
    stop (state) {
        state.isPlaying = false
        state.count = 0
    }
}

export default {
  namespaced: true,
  state,
//   getters,
  actions,
  mutations
}
