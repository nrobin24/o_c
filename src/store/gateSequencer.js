import {zip, map, range, append, pipe, mergeAll} from 'ramda'

const steps = () => map(id => ({id, gale: false}), range(1, 9))

const trackState = track => ({
  [track]: {
    steps: steps()
  }
})

const trackNums = range(1,5)

const state = () => ({
    tracks: pipe(map(trackState), mergeAll)((trackNums)),
})

const getters = {
  steps: state => track => {
    return state.tracks[track].steps
  },
  currentStep: (state, rootState, rootGetters) => track => {
    const l = state.tracks[track].steps.length
    const c = rootGetters.clock.count
    return (c % l) + 1
  }
}

const actions = {
  possiblyPlayGate({state, dispatch, getters}, trackNum) {
    const currentStep = getters.currentStep(trackNum)
    if(state.tracks[trackNum].steps[currentStep - 1].gate) {
      dispatch("noteSequencer/playNote", trackNum, {root: true})
    }
  }
}

// mutations
const mutations = {
  toggleGate (state, {stepId, track}) {
    state.tracks[track].steps[stepId - 1].gate = !state.tracks[track].steps[stepId - 1].gate
  },
  replaceGates (state, {steps, track}) {
    const stepIds = range(1,steps.length + 1)
    state.tracks[track].steps = map(
      x => ({id: x[1], gate: x[0]}),
      zip(steps, stepIds),
    )
  },
  addGate (state, track) {
    if(state.tracks[track].steps.length < 16) {
      state.tracks[track].steps = append(
        {gate: false, id: state.tracks[track].steps.length + 1},
        state.tracks[track].steps
      )
    }
  },
  removeGate (state, track) {
    if(state.tracks[track].steps.length > 1) {
      state.tracks[track].steps = state.tracks[track].steps.slice(0, -1)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
