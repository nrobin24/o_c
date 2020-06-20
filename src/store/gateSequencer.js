import {zip, map, range, append, pipe, mergeAll, forEach} from 'ramda'
// initial state
const trackSteps = () => [
  {id: 1, gate: true},
  {id: 2, gate: true},
  {id: 3, gate: true},
  {id: 4, gate: true},
  {id: 5, gate: true},
  {id: 6, gate: true},
  {id: 7, gate: true},
  {id: 8, gate: true},
]

const trackState = (track) => ({
  [track]: {
    steps: trackSteps(),
    currentStep: 1,
  }
})

const trackNums = range(1,5)

const state = () => ({
    tracks: pipe(map(trackState), mergeAll)((trackNums)),
    isRunning: false
})

const actions = {
  advancePattern ({ dispatch, state }) {
    const advanceTrackPattern = trackNum  => {
      if(state.tracks[trackNum].currentStep === state.tracks[trackNum].steps.length) {
        // commit('')
        state.tracks[trackNum].currentStep = 1
      } else {
        state.tracks[trackNum].currentStep += 1
      }

      // play the new note
      const step = state.tracks[trackNum].steps[state.tracks[trackNum].currentStep - 1]
      if(step.gate) {
        dispatch('noteSequencer/advancePattern', trackNum, {root: true})
      }
    }
    forEach(advanceTrackPattern, trackNums)
    // // if(state.isRunning) {
    //   // advance the step
    //   if(state.tracks[track].currentStep === state.tracks[track].steps.length) {
    //     // commit('')
    //     state.tracks[track].currentStep = 1
    //   } else {
    //     state.tracks[track].currentStep += 1
    //   }

    //   // play the new note
    //   const step = state.tracks[track].steps[state.tracks[track].currentStep - 1]
    //   if(state.tracks[track].gate) {
    //     dispatch('noteSequencer/advancePattern', null, {root: true})
    //   }
  }
}

const getters = {
  steps: state => track => {
    return state.tracks[track].steps
  },
  currentStep: state => track => {
    return state.tracks[track].currentStep
  }
}

// mutations
const mutations = {
  toggleGate (state, {stepId, track}) {
    // TODO: use ramda to get actual stepId instead of relying on list index
    state.tracks[track].steps[stepId - 1].gate = !state.tracks[track].steps[stepId - 1].gate
  },
  resetPattern (state) {
    state.currentStep = 1
  },
  stop (state) {
    state.isRunning = false
  },
  play (state) {
    state.isRunning = true
  },
  replaceGates (state, {steps, track}) {
    const stepIds = range(1,steps.length + 1)
    state.tracks[track].steps = map(
      x => ({id: x[1], gate: x[0]}),
      zip(steps, stepIds),
    )

    if(state.tracks[track].currentStep > state.tracks[track].steps.length) {
      state.tracks[track].currentStep = state.tracks[track].steps.length
    }
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
      if(state.tracks[track].currentStep === state.tracks[track].steps.length) {
        state.tracks[track].currentStep = state.tracks[track].currentStep - 1
      }
      state.tracks[track].steps = state.tracks[track].steps.slice(0, -1)
    }

  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
