<template>
  <BasePanel panel-label="Note Sequencer">
    <template v-slot:body>
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
    </template>
  </BasePanel>
</template>

<script>
import { mapState } from "vuex";

import NoteSpinner from "./NoteSpinner";
import StepIndicatorLight from "./StepIndicatorLight";
import BasePanel from "./BasePanel";

export default {
  name: "NoteSequencerPanel",
  components: { NoteSpinner, StepIndicatorLight, BasePanel },
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
        state.turingMachine.steps.map((step) => ({
          isActive: step.id == state.turingMachine.currentStep,
          ...step,
        })),
    }),
  },
};
</script>

<style scoped>
.note-button-row {
  justify-content: space-around;
}
.step-indicator-row {
  justify-content: space-around;
}
</style>
