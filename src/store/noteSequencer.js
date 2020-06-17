import { engine } from '../engine/main'
import {map, mergeAll} from 'ramda'


const steps = [
  {id: 1, noteVal: 0},
  {id: 2, noteVal: 0},
  {id: 3, noteVal: 0},
]

const state = () => ({
    steps,
    currentStep: 1
})

const getters = {
  notes(state) {
    const notes = map(s => mergeAll([s, engine.getNoteFromNumber(s.noteVal, 3, "C chromatic"), {isActive: s.id == state.currentStep}]), state.steps)
    console.log('will return notes from getter')
    console.log(notes)
    return notes
  }
}
const actions = {
  advancePattern ({ dispatch, state, getters }) {
    if(state.currentStep === state.steps.length) {
      state.currentStep = 1
    } else {
      state.currentStep += 1
    }

    // play the new note
    const note = getters.notes[state.currentStep - 1]
    dispatch('output/playNote', {duration: 500, note: note.noteName}, {root: true})
  }
}

// mutations
const mutations = {
  noteUp (state, stepId) {
    state.steps[stepId - 1].noteVal += 1

  },
  noteDown (state, stepId) {
    state.steps[stepId - 1].note -= 1
  },
  resetPattern (state) {
    state.currentStep = 1
  },
  replacePattern (state, steps) {
    state.steps = steps
    if(state.currentStep > state.steps.length) {
      state.currentStep = state.steps.length
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
