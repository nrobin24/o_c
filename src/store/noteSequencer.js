import { engine } from '../engine/main'
import {map, mergeAll, range} from 'ramda'

const steps = map(id => ({id, noteVal: 0}), range(1, 9))

const state = () => ({
    scaleNames: engine.getScaleNames(),
    steps,
    currentStep: 1,
    scaleName: 'chromatic',
    rootNote: 'C3'
})


const getNote = (noteVal, rootOctave, rootNote, scaleName) => {
  const scaleNameFormatted = rootNote + " " + scaleName
  const note = engine.getNoteFromNumber(noteVal, rootOctave, scaleNameFormatted)
  return note
}

const getters = {
  notes(state) {
    const rootOctave = parseInt(state.rootNote.slice(-1))
    const rootNote = state.rootNote.slice(0, -1)

    const notes = map(s => mergeAll([
      s, getNote(s.noteVal, rootOctave, rootNote, state.scaleName), {isActive: s.id == state.currentStep}
    ]), state.steps)

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

    // check if note should mutate from turing machine
    // const shouldMutate = Math.random() < rootState.turingMachine.probInputValue
    // if(shouldMutate) {
    //   adjust(state.currentStep - 1, merge(_, {noteVal: }))
    // }

    // play the new note
    const note = getters.notes[state.currentStep - 1]
    dispatch('output/playNote', {duration: 500, note: note.noteName}, {root: true})
  }
}

const mutations = {
  selectScale (state, scaleName) {
    state.scaleName = scaleName
  },
  rootNoteUp (state) {
    state.rootNote = engine.noteUp(state.rootNote)
  },
  rootNoteDown (state) {
    state.rootNote = engine.noteDown(state.rootNote)
  },
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
