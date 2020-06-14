import WebMidi from "webmidi"
import { Note, Interval } from "@tonaljs/tonal";

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

const engine = {
    getMidiOutputs,
    enable,
    playNote,
    noteUp,
    noteDown
}
export {
    engine
}
