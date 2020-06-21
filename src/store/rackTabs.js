import {forEach} from 'ramda'

const state = () => ({
    activeTrack: 1,
    // tracks: [1, 2, 3, 4]
})

const mutations = {
    setActiveTrack(state, track) {
        state.activeTrack = track
    }
}

const actions = {
  advanceAllTracks({dispatch, getters}) {
    const advanceTrack = trackNum => {
      dispatch("gateSequencer/advancePattern", trackNum, {root: true})
    }
    forEach(advanceTrack, getters.tracks)
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
