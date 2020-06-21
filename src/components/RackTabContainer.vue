<template>
  <div class="rack-tab-container">
    Rack Tab Container
    <div class="rack-selector-row">
      <div
        class="track-selector"
        v-bind:class="{ 'track-active': track == activeTrack, 'track-inactive': track != activeTrack }"
        v-on:click="setActiveTrack(track)"
        v-for="track in tracks"
        :key="track"
      >Track {{track}}</div>
    </div>
    <div v-bind:active-track="activeTrack" class="track-rack">
      <EuclideanGenerator v-bind:active-track="activeTrack" />
      <GateSequencerPanel v-bind:active-track="activeTrack" />
      <TuringMachinePanel v-bind:active-track="activeTrack" />
      <NoteSequencerPanel v-bind:active-track="activeTrack" />
      <OutputPanel v-bind:active-track="activeTrack" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import EuclideanGenerator from "./EuclideanGenerator";
import GateSequencerPanel from "./GateSequencerPanel";
import OutputPanel from "./OutputPanel";
import NoteSequencerPanel from "./NoteSequencerPanel";
import TuringMachinePanel from "./TuringMachinePanel";

export default {
  name: "RackTabContainer",
  components: {
    EuclideanGenerator,
    GateSequencerPanel,
    TuringMachinePanel,
    NoteSequencerPanel,
    OutputPanel
  },
  computed: {
    tracks() {
      return this.$store.getters["rackTabs/tracks"];
    },
    ...mapState({
      activeTrack: state => state.rackTabs.activeTrack
    })
  },
  methods: {
    setActiveTrack(track) {
      this.$store.commit("rackTabs/setActiveTrack", track);
    }
  }
};
</script>

<style>
.track-rack {
  flex-direction: column;
}

.rack-tab-container {
  justify-content: center;
  flex-direction: column;
  margin: 4px;
  border-color: #5a5a5a;
  border-width: 4px;
  border-style: solid;
}

.track-selector {
  margin: 10px;
  width: 120px;
  justify-content: center;
  user-select: none;
}
/*
.track-selector:active {
  background-color: blue;
  margin: 10px;
  width: 120px;
  justify-content: center;
} */

.track-active {
  background-color: aquamarine;
}

.track-inactive {
  background-color: white;
  margin: 10px;
  width: 120px;
  justify-content: center;
}

/* .rack-tab-header-row {
} */
</style>
