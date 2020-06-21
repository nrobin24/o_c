import { engine } from '../engine/main'
import {map, mergeAll, range, pipe, merge} from 'ramda'

const steps = () => map(id => ({id, noteVal: 0}), range(1, 9))

const trackState = track => ({
  [track]: {
    steps: steps(),
    scaleName: 'chromatic',
    rootNote: 'C3',
    count: 0
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
  steps: state => track => {
    return state.tracks[track].steps
  },
  currentStep: state => track => {
    const l = state.tracks[track].steps.length
    const c = state.tracks[track].count
    return (c % l) + 1
  },
  notes: (state, getters) => track => {
    const steps = getters.steps(track)
    const rootOctave = parseInt(state.tracks[track].rootNote.slice(-1))
    const rootNote = state.tracks[track].rootNote.slice(0, -1)
    const scaleName = state.tracks[track].scaleName
    const toNote = ({noteVal}) => getNote(noteVal, rootOctave, rootNote, scaleName)
    const notes =  map(s => merge(s, toNote(s)), steps)
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
  playNote({commit, dispatch, getters}, trackNum) {
    // play the note
    const c = getters.currentStep(trackNum)
    const note = getters.notes(trackNum)[c - 1]
    dispatch('output/playNote', {duration: 50, note: note.noteName, trackNum}, {root: true})

    // advance the count
    commit("advance", trackNum)
  },
  reset({commit}, trackNum) {
    commit("resetCount", trackNum)
  }
}

const mutations = {
  advance(state, trackNum) {
    state.tracks[trackNum].count += 1
  },
  resetCount(state, trackNum) {
    state.tracks[trackNum].count = 0
  },
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
