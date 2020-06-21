import er from 'euclidean-rhythms';
import {map, mergeAll, range, pipe} from 'ramda'

const trackState = track => ({
  [track]: {
    stepsInputValue: 3,
    lengthInputValue: 8,
  }
})

const trackNums = range(1,5)

const state = () => ({tracks: pipe(map(trackState), mergeAll)(trackNums)})


// getters
const getters = {
  steps: state => track => {
    return map(
      s => ({1: true, 0: false}[s]),
      er.getPattern(state.tracks[track].stepsInputValue, state.tracks[track].lengthInputValue)
    )
  },
  stepsInputValue: state => track => {
    return state.tracks[track].stepsInputValue
  },
  lengthInputValue: state => track => {
    return state.tracks[track].lengthInputValue
  }
}

// mutations
const mutations = {
    plusStepsInputValue (state, track) {
        state.tracks[track].stepsInputValue += 1
    },
    minusStepsInputValue (state, track) {
        state.tracks[track].stepsInputValue -= 1
    },
     plusLengthInputValue (state, track) {
        state.tracks[track].lengthInputValue += 1
    },
    minusInputValue (state, track) {
        state.tracks[track].lengthInputValue -= 1
    }
}

export default {
  namespaced: true,
  state,
  getters,
//   actions,
  mutations
}
