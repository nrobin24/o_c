<template>
  <BasePanel panel-label="Note Sequencer">
    <template v-slot:body>
      <BaseControl control-label="Steps">
        <template v-slot:body>
          <div class="note-step-container">
            <div class="note-step" v-for="step in notes" :key="step.id">
              <NoteSpinner
                :key="step.note"
                v-bind:step-id="step.id"
                v-bind:note-label="step.noteName"
                v-on:note-up="noteUp(step.id)"
                v-on:note-down="noteDown(step.id)"
              />
              <StepIndicatorLight v-bind:is-active="step.isActive" />
            </div>
          </div>
        </template>
      </BaseControl>
      <BaseControl control-label="Root" class="root-note-control">
        <template v-slot:body>
          <NoteSpinner
            v-bind:note-label="rootNote"
            v-on:note-up="rootNoteUp"
            v-on:note-down="rootNoteDown"
          />
        </template>
      </BaseControl>
      <BaseControl control-label="Scale">
        <template v-slot:body>
          <select
            name="scale-select"
            id="scale-select"
            v-on:change="selectScale($event.target.value)"
            class="scale-select"
          >
            <option v-for="s in scaleNames" v-bind:value="s" :key="s">{{s}}</option>
          </select>
        </template>
      </BaseControl>
    </template>
  </BasePanel>
</template>

<script>
import { mapState } from "vuex";

import NoteSpinner from "./NoteSpinner";
import StepIndicatorLight from "./StepIndicatorLight";
import BasePanel from "./BasePanel";
import BaseControl from "./BaseControl";

export default {
  name: "NoteSequencerPanel",
  components: { NoteSpinner, StepIndicatorLight, BasePanel, BaseControl },
  props: {
    activeTrack: Number
  },
  methods: {
    selectScale(scaleName) {
      this.$store.commit("noteSequencer/selectScale", scaleName);
    },
    rootNoteUp() {
      this.$store.commit("noteSequencer/rootNoteUp");
    },
    rootNoteDown() {
      this.$store.commit("noteSequencer/rootNoteDown");
    },
    noteUp(stepId) {
      this.$store.commit("noteSequencer/noteUp", stepId);
    },
    noteDown(stepId) {
      this.$store.commit("noteSequencer/noteDown", stepId);
    }
  },
  computed: {
    rootNote() {
      return this.$store.getters["noteSequencer/rootNote"](this.activeTrack);
    },
    notes() {
      return this.$store.getters["noteSequencer/notes"](this.activeTrack);
    },
    ...mapState({
      scaleNames: state => state.noteSequencer.scaleNames
    })
  }
};
</script>

<style scoped>
.note-button-row {
  justify-content: space-around;
}
.step-indicator-row {
  justify-content: space-around;
}

.note-step {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36px;
  border-width: 2px;
  border-style: solid;
  border-color: #5a5a5a;
  padding: 2px;
  margin: 1px;
}

.root-note-control {
  width: 92px;
}

.note-step-container {
  width: 428px;
  border-width: 2px;
  border-style: solid;
  border-color: white;
}

.scale-select {
  height: 36px;
  font-size: 16px;
}
</style>
