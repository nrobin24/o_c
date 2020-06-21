import { engine } from '../engine/main'
import {map, mergeAll, range, pipe} from 'ramda'

const steps = () => map(id => ({id, noteVal: 0}), range(1, 9))

const trackState = track => ({
  [track]: {
    steps: steps(),
    currentStep: 1,
    scaleName: 'chromatic',
    rootNote: 'C3'
  }
})

const trackNums = range(1,5)

const state = () => ({
  tracks: pipe(map(trackState), mergeAll)(trackNums),
  scaleNames: engine.getScaleNames(),
})


const getNote = (noteVal, rootOctave, rootNote, scaleName) => {
  const scaleNameFormatted = rootNote + " " + scaleName
  const note = engine.getNoteFromNumber(noteVal, rootOctave, scaleNameFormatted)
  return note
}

const getters = {
  notes: state => track => {
    const rootOctave = parseInt(state.tracks[track].rootNote.slice(-1))
    const rootNote = state.tracks[track].rootNote.slice(0, -1)

    const notes = map(s => mergeAll([
      s, getNote(s.noteVal, rootOctave, rootNote, state.tracks[track].scaleName), {isActive: s.id == state.tracks[track].currentStep}
    ]), state.tracks[track].steps)

    return notes
  },
  rootNote: state => track => {
    return state.tracks[track].rootNote
  },
  scaleName: state => track => {
    return state.tracks[track].scaleName
  },
  scaleNames: state => state.scaleNames
}
const actions = {
  advancePattern ({ dispatch, state, getters }, track) {
    if(state.tracks[track].currentStep === state.tracks[track].steps.length) {
      state.tracks[track].currentStep = 1
    } else {
      state.tracks[track].currentStep += 1
    }

    // play the new note
    const note = getters.notes(track)[state.tracks[track].currentStep - 1]
    dispatch('output/playNote', {duration: 50, note: note.noteName, track}, {root: true})
  }
}

const mutations = {
  selectScale (state, {scaleName, track}) {
    state.tracks[track].scaleName = scaleName
  },
  rootNoteUp (state, track) {
    state.tracks[track].rootNote = engine.noteUp(state.tracks[track].rootNote)
  },
  rootNoteDown (state, track) {
    state.tracks[track].rootNote = engine.noteDown(state.tracks[track].rootNote)
  },
  noteUp (state, {stepId, track}) {
    state.tracks[track].steps[stepId - 1].noteVal += 1

  },
  noteDown (state, {stepId, track}) {
    state.tracks[track].steps[stepId - 1].noteVal -= 1
  },
  resetPattern (state, track) {
    state.tracks[track].currentStep = 1
  },
  replacePattern (state, {steps, track}) {
    state.tracks[track].steps = steps
    if(state.tracks[track].currentStep > state.tracks[track].steps.length) {
      state.tracks[track].currentStep = state.tracks[track].steps.length
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
