import er from 'euclidean-rhythms';
import {map} from 'ramda'


const state = () => ({
    stepsInputValue: 3,
    lengthInputValue: 8,
})

// getters
const getters = {
  steps (state) {
    // const x = state
    // console.log('getter!')
    // console.log(x)
    // return [false, false, false, true, false, false, false, false]
    return map(
      s => ({1: true, 0: false}[s]),
      er.getPattern(state.stepsInputValue, state.lengthInputValue)
    )
}
}

// mutations
const mutations = {
    plusStepsInputValue (state) {
        state.stepsInputValue += 1
    },
    minusStepsInputValue (state) {
        state.stepsInputValue -= 1
    },
     plusLengthInputValue (state) {
        state.lengthInputValue += 1
    },
    minusInputValue (state) {
        state.lengthInputValue -= 1
    }
}

export default {
  namespaced: true,
  state,
  getters,
//   actions,
  mutations
}
