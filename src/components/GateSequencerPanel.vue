<template>
  <div class="gate-sequencer-panel">
    <div class="gate-sequencer-panel-header">Gate Sequencer</div>
    <div class="gate-sequencer-panel-body">
      <div class="gate-button-row">
        <OnOffSwitch
          v-for="step in steps"
          :key="step.id"
          v-bind:is-gate-on="step.gate"
          v-bind:step-id="step.id"
          v-bind:label="step.id.toString()"
          v-on:toggle="toggleGate(step.id)"
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

import OnOffSwitch from "./OnOffSwitch";
import StepIndicatorLight from "./StepIndicatorLight";

export default {
  name: "GateSequencerPanel",
  components: { OnOffSwitch, StepIndicatorLight },
  methods: {
    toggleGate(stepId) {
      this.$store.commit("gateSequencer/toggleGate", stepId);
    },
  },
  computed: {
    ...mapState({
      steps: (state) =>
        state.gateSequencer.steps.map((step) => ({
          isActive: step.id == state.gateSequencer.currentStep,
          ...step,
        })),
    }),
  },
};
</script>

<style scoped>
.gate-sequencer-panel {
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}

.gate-sequencer-panel-body {
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.gate-button-row {
  justify-content: space-around;
}
.step-indicator-row {
  justify-content: space-around;
}
</style>
