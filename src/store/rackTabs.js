import {forEach} from 'ramda'

const state = () => ({
    activeTrack: 1,
})

const mutations = {
    setActiveTrack(state, track) {
        state.activeTrack = track
    }
}

const actions = {
  advanceAllTracks({dispatch, getters}) {
    const advanceTrack = trackNum => {
      dispatch("gateSequencer/possiblyPlayGate", trackNum, {root: true})
    }
    forEach(advanceTrack, getters.tracks)
  },
  resetAllTracks({dispatch, getters}) {
    const resetTrack = trackNum => {
      dispatch("noteSequencer/reset", trackNum, {root: true})
    }
    forEach(resetTrack, getters.tracks)
  }
}

const getters = {
  tracks: (state, getters, rootState) => {
    return rootState.tracks
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
