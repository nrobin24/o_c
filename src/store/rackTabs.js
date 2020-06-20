const state = () => ({
    activeTrack: 1,
    tracks: [1, 2, 3, 4]
})

const mutations = {
    setActiveTrack(state, track) {
        state.activeTrack = track
    }
}

export default {
  namespaced: true,
  state,
  // getters,
//   actions,
  mutations
}
