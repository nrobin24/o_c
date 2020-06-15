import WebMidi from "webmidi"
import { Note, Interval, Scale } from "@tonaljs/tonal";
import { times } from 'ramda';

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

function generateNote() {
    const notes = Scale.get("C major").notes
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
    generateMelody
}
export {
    engine
}
