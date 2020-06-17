import WebMidi from "webmidi"
import { Note, Interval, Scale } from "@tonaljs/tonal";
import { times, range, map, findIndex, propEq, flatten } from 'ramda';


function getAllScaleNames() {
    return Scale.names()
}

function getScaleNames() {
    return ['chromatic', 'major', 'dorian', 'aeolian', 'minor pentatonic']
}

function getMidiOutputs() {
    return WebMidi.outputs
}

function enable(cb) {
    WebMidi.enable(cb);
}

function playNote(note, duration) {
    const noteOptions = {
        duration
    }
    WebMidi.outputs[0].playNote(note, 'all', noteOptions)
}

function simpleTranspose(note, i) {
    return Note.simplify(Note.transpose(note, Interval.fromSemitones(i)))
}

function noteUp(note) {
    return simpleTranspose(note, 1)
}

function noteDown(note) {
    return simpleTranspose(note, -1)
}

function toScaleAndOctaves(scaleName) {
    const scale = Scale.get(scaleName).notes
    const octaves = range(0,6)
    return flatten(map(octave => map(note => ({
        note, octave, noteName: note + octave.toString()
    }), scale), octaves))
}


function getNoteFromNumber(noteNumber, rootOctave, scaleName) {
    const notes = toScaleAndOctaves(scaleName)
    // note 0 is the first note in the rootOctave
    const noteZeroIndex = findIndex(propEq('octave', rootOctave))(notes)
    let noteIndex = noteZeroIndex + noteNumber
    if(noteIndex > notes.length - 1) {
        noteIndex = notes.length - 1
    }
    return notes[noteIndex]
    // filter(propEq('octave', octave), notes)
}

function generateNote() {
    const notes = Scale.get("c pentatonic")
    return notes[Math.floor(Math.random() * notes.length)] + "3"
}

function generateMelody(length) {
    return times(generateNote, length)
}

const engine = {
    getMidiOutputs,
    enable,
    playNote,
    noteUp,
    noteDown,
    generateMelody,
    getNoteFromNumber,
    getScaleNames,
    getAllScaleNames,
}
export {
    engine
}
