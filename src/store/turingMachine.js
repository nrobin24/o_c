import { engine } from '../engine/main'
import {map, range, zip} from 'ramda'


const state = () => ({
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
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
