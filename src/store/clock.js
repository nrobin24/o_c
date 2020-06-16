const state = () => ({
    count: 0,
    bpm: 127,
    isPlaying: false,
    intervalId: ''
})

function toIntervalLength(bpm) {
    // TODO make this work
    return 1000 / (bpm / (60 / 4))
}

const actions = {
    play({state, commit, dispatch}) {
        if(!state.isPlaying) {
            commit('setIsPlaying', true)
            const intervalId = setInterval(dispatch, toIntervalLength(state.bpm), 'advance')
            commit('setIntervalId', intervalId)
        }
    },
    stop({commit, state}) {
        if(state.isPlaying) {
            commit('setIsPlaying', false)
            clearInterval(state.intervalId)
        }

    },
    advance({commit, dispatch}) {
        dispatch('gateSequencer/advancePattern', null, {root: true})
        commit('advanceCount')

    },
    plusBpm({state, commit, dispatch}) {
        commit('setBpm', state.bpm + 1)
        clearInterval(state.intervalId)
        if(state.isPlaying){
            commit('setIsPlaying', false)
            dispatch('play')
        }
    },
    minusBpm({state, commit, dispatch}) {
        commit('setBpm', state.bpm - 1)
        clearInterval(state.intervalId)
        if(state.isPlaying){
            commit('setIsPlaying', false)
            dispatch('play')
        }
    },
}

// mutations
const mutations = {
    setIsPlaying(state, isPlaying) {
        state.isPlaying = isPlaying
    },
    advanceCount(state) {
        state.count += 1
    },
    setIntervalId(state, intervalId) {
        state.intervalId = intervalId
    },
    setBpm(state, bpm) {
        state.bpm = bpm
    },
}

export default {
  namespaced: true,
  state,
//   getters,
  actions,
  mutations
}