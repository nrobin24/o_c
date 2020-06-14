// import {zip, map, merge} from 'ramda'
// initial state
import { engine } from '../engine/main'


const steps = [
  {id: 1, note: 'A4'},
  {id: 2, note: 'A3'},
  {id: 3, note: 'C3'},
]

const state = () => ({
    steps,
    patternLength: steps.length,
    currentStep: 1
})

// getters
// const getters = {
//   steps (state) {
//     return state.steps
// }
// }

// // actions
// const actions = {
//   getAllProducts ({ commit }) {
//     shop.getProducts(products => {
//       commit('setProducts', products)
//     })
//   }
// }

const actions = {
  advancePattern ({ dispatch, state }) {
    if(state.currentStep === state.patternLength) {
      // commit('')
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
  // advancePattern (state) {
  //   if(state.currentStep === state.patternLength) {
  //     state.currentStep = 1
  //   } else {
  //     state.currentStep += 1
  //   }

  //   // play the new note
  //   const step = state.steps[state.currentStep - 1]
  //   if(step.gate) {
  //     playNote(step.note, 500)
  //   }
  // },
  // stop (state) {
  //   state.isRunning = false
  // },
  // play (state) {
  //   state.isRunning = true
  // },
  // replaceGates (state, steps) {
  //   const z = zip(state.steps, steps)
  //   state.steps = map((x) => merge(x[0], {gate: x[1]}) , z)
  // }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
