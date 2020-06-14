import WebMidi from "webmidi"

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


// const store = new Vuex.Store({
//   state: {
//     gates: [true, false, true, false],
//     pitches: ['C3', 'C3', 'C3', 'C3']
//   },
//   mutations: {
//       switchGate(state, switchId) {
//         state.gates[switchId] = !state.gates[switchId]
//     }
//   }

// })

// function switchGate(switchId) {
//     store.commit("switchGate", switchId)
// }

const engine = {
    getMidiOutputs,
    enable,
    playNote
}
export {
    engine
}
