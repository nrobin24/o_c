<template>
  <BasePanel panel-label="Note Sequencer">
    <template v-slot:body>
      <BaseControl control-label="Steps">
        <template v-slot:body>
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
        </template>
      </BaseControl>
    </template>
  </BasePanel>
</template>

<script>
import { mapGetters } from "vuex";

import NoteSpinner from "./NoteSpinner";
import StepIndicatorLight from "./StepIndicatorLight";
import BasePanel from "./BasePanel";
import BaseControl from "./BaseControl";

export default {
  name: "NoteSequencerPanel",
  components: { NoteSpinner, StepIndicatorLight, BasePanel, BaseControl },
  methods: {
    noteUp(stepId) {
      this.$store.commit("noteSequencer/noteUp", stepId);
    },
    noteDown(stepId) {
      this.$store.commit("noteSequencer/noteDown", stepId);
    }
  },
  computed: {
    ...mapGetters({
      notes: "noteSequencer/notes"
    })
    // ...mapState({
    //   steps: state =>
    //     state.noteSequencer.steps.map(step => ({
    //       isActive: step.id == state.noteSequencer.currentStep,
    //       ...step
    //     }))
    // })
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
</style>
