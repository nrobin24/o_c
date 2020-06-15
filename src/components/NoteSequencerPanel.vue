<template>
  <div class="note-sequencer-panel">
    <div class="note-sequencer-panel-header">Note Sequencer</div>
    <div class="note-sequencer-panel-body">
      <div class="note-selectors">
        <select>
          <option>Scale</option>
        </select>
        <select>
          <option>Key</option>
        </select>
      </div>
      <div class="gate-button-row">
        <NoteSpinner
          v-for="step in steps"
          :key="step.id"
          v-bind:step-id="step.id"
          v-bind:note-label="step.note"
          v-on:note-up="noteUp(step.id)"
          v-on:note-down="noteDown(step.id)"
        />
      </div>
      <div class="step-indicator-row">
        <StepIndicatorLight
          v-for="step in steps"
          :key="step.id"
          v-bind:is-active="step.isActive"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import NoteSpinner from "./NoteSpinner";
import StepIndicatorLight from "./StepIndicatorLight";

export default {
  name: "NoteSequencerPanel",
  components: { NoteSpinner, StepIndicatorLight },
  methods: {
    noteUp(stepId) {
      console.log("noteup method");
      this.$store.commit("noteSequencer/noteUp", stepId);
    },
    noteDown(stepId) {
      this.$store.commit("noteSequencer/noteDown", stepId);
    },
  },
  computed: {
    ...mapState({
      steps: (state) =>
        state.noteSequencer.steps.map((step) => ({
          isActive: step.id == state.noteSequencer.currentStep,
          ...step,
        })),
    }),
  },
};
</script>

<style scoped>
.note-sequencer-panel {
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}

.note-sequencer-panel-body {
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.note-button-row {
  justify-content: space-around;
}
.step-indicator-row {
  justify-content: space-around;
}
</style>
