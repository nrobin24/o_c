import {map, range} from 'ramda'

const state = () => ({
    rangeInputValue: 3,
    lengthInputValue: 8,
    probInputValue: 0
})

const generateNoteVal = range => {
  return Math.floor(Math.random() * (range + 1));
}

const actions = {
  generateSteps ({commit, state}) {
    const steps = map(
      id => ({id, noteVal: generateNoteVal(state.rangeInputValue)}),
      range(1, state.lengthInputValue + 1)
    )
    commit('noteSequencer/replacePattern', steps, {root: true})
  },
  generateStep () {

  }
}

const mutations = {
    plusProbInputValue (state) {
        if(state.probInputValue < 100) {
          state.probInputValue += 10
        }

    },
    minusProbInputValue (state) {
      if(state.probInputValue > 0) {
          state.probInputValue -= 10
        }
    },
    plusRangeInputValue (state) {
        state.rangeInputValue += 1
    },
    minusRangeInputValue (state) {
        state.rangeInputValue -= 1
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
