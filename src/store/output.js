import { engine } from '../engine/main'
import {range, pipe, map, mergeAll} from 'ramda'

const trackState = track => ({
  [track]: {
    midiOutput: -1,
    channel: track
  }
})

const trackNums = range(1,5)


const state = () => ({
  tracks: pipe(map(trackState), mergeAll)(trackNums),
  allMidiOutputs: []
})

// const getters = mapGetters(['currentMidiOutput', 'allMidiOutputs'])

const getters = {
  channel: state => track => {
    return state.tracks[track].channel
  }
}

const actions = {
  playNote(context, {duration, note, track}) {
    // TOOD: use context arg to get state
    engine.playNote(note, duration, track.channel)
  }
}

// mutations
const mutations = {
    updateAllMidiOutputs (state) {
        state.allMidiOutputs = engine.getMidiOutputs()
    },
    updateCurrentMidiOutput (state, midiOutputId) {
        state.currentMidiOutput = midiOutputId
    },
    plusChannel (state, track) {
      state.tracks[track].channel += 1
    },
    minusChannel (state, track) {
      state.tracks[track].channel -= 1
    },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
