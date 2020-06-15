import {zip, map, range, append} from 'ramda'
// initial state

const steps = [
  {id: 1, gate: true},
  {id: 2, gate: true},
  {id: 3, gate: true},
  {id: 4, gate: true},
  {id: 5, gate: true},
  {id: 6, gate: true},
  {id: 7, gate: true},
  {id: 8, gate: true},
]

const state = () => ({
    steps,
    currentStep: 1,
    isRunning: false
})

const actions = {
  advancePattern ({ dispatch, state }) {
    if(state.isRunning) {
      // advance the step
      if(state.currentStep === state.steps.length) {
        // commit('')
        state.currentStep = 1
      } else {
        state.currentStep += 1
      }

      // play the new note
      const step = state.steps[state.currentStep - 1]
      if(step.gate) {
        dispatch('turingMachine/advancePattern', null, {root: true})
      }
    }
  }
}

// mutations
const mutations = {
  toggleGate (state, stepId) {
    // TODO: use ramda to get actual stepId instead of relying on list index
    state.steps[stepId - 1].gate = !state.steps[stepId - 1].gate
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
  replaceGates (state, steps) {
    const stepIds = range(1,steps.length + 1)
    state.steps = map(
      x => ({id: x[1], gate: x[0]}),
      zip(steps, stepIds),
    )

    if(state.currentStep > state.steps.length) {
      state.currentStep = state.steps.length
    }
  },
  addGate (state) {
    if(state.steps.length < 16) {
      state.steps = append(
      {gate: false, id: state.steps.length + 1},
      state.steps
    )
    }

  },
  removeGate (state) {
    if(state.steps.length > 1) {
      if(state.currentStep === state.steps.length) {
        state.currentStep = state.currentStep - 1
      }
      state.steps = state.steps.slice(0, -1)
    }

  }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
