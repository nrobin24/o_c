import { engine } from '../engine/main'
import {map, range, zip} from 'ramda'

const steps = [
  {id: 1, note: 'A4'},
  {id: 2, note: 'A3'},
  {id: 3, note: 'C3'},
]

const state = () => ({
    steps,
    currentStep: 1,
    probInputValue: 3,
    lengthInputValue: 3,
})

const actions = {
  generatePattern ({commit, state}) {
    const notes = engine.generateMelody(state.lengthInputValue)
    const stepIds = range(1, state.lengthInputValue + 1)
    const steps = map(
      x => ({id: x[1], note: x[0]}),
      zip(notes, stepIds),
    )
    commit('noteSequencer/replacePattern', steps, {root: true})
  }
  // advancePattern ({ dispatch, state }) {
  //   if(state.currentStep === state.steps.length) {
  //     // commit('')
  //     state.currentStep = 1
  //   } else {
  //     state.currentStep += 1
  //   }

  //   // play the new note
  //   const step = state.steps[state.currentStep - 1]
  //   dispatch('output/playNote', {duration: 500, note: step.note}, {root: true})
  // }
}

// mutations
const mutations = {
    plusProbInputValue (state) {
        state.probInputValue += 1
    },
    minusProbInputValue (state) {
        state.probInputValue -= 1
    },
     plusLengthInputValue (state) {
        state.lengthInputValue += 1
    },
    minusLengthInputValue (state) {
        state.lengthInputValue -= 1
    },
    // generateMelody (state) {
    //   const notes = engine.generateMelody(state.lengthInputValue)
    //   const stepIds = range(1, state.lengthInputValue + 1)
    //   state.steps = map(
    //     x => ({id: x[1], note: x[0]}),
    //     zip(notes, stepIds),
    //   )
    //   if(state.currentStep > state.steps.length) {
    //     state.currentStep = state.steps.length
    //   }
    // }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
