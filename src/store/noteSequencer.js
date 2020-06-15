import { engine } from '../engine/main'


const steps = [
  {id: 1, note: 'A4'},
  {id: 2, note: 'A3'},
  {id: 3, note: 'C3'},
]

const state = () => ({
    steps,
    currentStep: 1
})

const actions = {
  advancePattern ({ dispatch, state }) {
    if(state.currentStep === state.steps.length) {
      state.currentStep = 1
    } else {
      state.currentStep += 1
    }

    // play the new note
    const step = state.steps[state.currentStep - 1]
    dispatch('output/playNote', {duration: 500, note: step.note}, {root: true})
  }
}

// mutations
const mutations = {
  noteUp (state, stepId) {
    console.log('noteup mutation')
    // TODO: use ramda to get actual stepId instead of relying on list index
    state.steps[stepId - 1].note = engine.noteUp(state.steps[stepId - 1].note)
  },
  noteDown (state, stepId) {
    // TODO: use ramda to get actual stepId instead of relying on list index
    state.steps[stepId - 1].note = engine.noteDown(state.steps[stepId - 1].note)
  },
  resetPattern (state) {
    state.currentStep = 1
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
