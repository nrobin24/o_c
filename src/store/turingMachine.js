import {map, range, pipe, mergeAll} from 'ramda'

const trackState = track => ({
  [track]: {
    rangeInputValue: 3,
    lengthInputValue: 8,
    probInputValue: 0
  }
})

const trackNums = range(1,5)

const state = () => ({
  tracks: pipe(map(trackState), mergeAll)(trackNums)
})

const generateNoteVal = range => {
  return Math.floor(Math.random() * (range + 1));
}

const actions = {
  generateSteps ({commit, state}, track) {
    const steps = map(
      id => ({id, noteVal: generateNoteVal(state.tracks[track].rangeInputValue)}),
      range(1, state.tracks[track].lengthInputValue + 1)
    )
    commit('noteSequencer/replacePattern', {steps, track}, {root: true})
  }
}

const getters = {
  probInputValue: state => track => {
    return state.tracks[track].probInputValue
  },
  rangeInputValue: state => track => {
    return state.tracks[track].rangeInputValue
  },
  lengthInputValue: state => track => {
    return state.tracks[track].lengthInputValue
  },
}

const mutations = {
    plusProbInputValue (state, track) {
        if(state.tracks[track].probInputValue < 100) {
          state.tracks[track].probInputValue += 10
        }

    },
    minusProbInputValue (state, track) {
      if(state.tracks[track].probInputValue > 0) {
          state.tracks[track].probInputValue -= 10
        }
    },
    plusRangeInputValue (state, track) {
        state.tracks[track].rangeInputValue += 1
    },
    minusRangeInputValue (state, track) {
        state.tracks[track].rangeInputValue -= 1
    },
     plusLengthInputValue (state, track) {
        state.tracks[track].lengthInputValue += 1
    },
    minusLengthInputValue (state, track) {
        state.tracks[track].lengthInputValue -= 1
    },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
