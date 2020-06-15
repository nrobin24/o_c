<template>
  <div class="gate-sequencer-panel">
    <div class="gate-sequencer-panel-header">Gate Sequencer</div>
    <div class="gate-sequencer-panel-body">
      <div class="gate-step-container">
        <div class="gate-step-container-header">
          Steps
        </div>
        <div class="gate-step-container-body">
          <div class="gate-step" v-for="step in steps" :key="step.id">
            <OnOffSwitch
              v-bind:is-gate-on="step.gate"
              v-bind:step-id="step.id"
              v-bind:label="step.id.toString()"
              v-on:toggle="toggleGate(step.id)"
            />
            <StepIndicatorLight v-bind:is-active="step.isActive" />
          </div>
        </div>
      </div>
      <div class="gate-steps-add-remove">
        <div class="gate-steps-add-remove-header">
          Add/Remove
        </div>
        <div class="gate-steps-add-remove-body"></div>
        <button v-on:click="addGate">+</button>
        <button v-on:click="removeGate">-</button>
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
    addGate() {
      this.$store.commit("gateSequencer/addGate");
    },
    removeGate() {
      this.$store.commit("gateSequencer/removeGate");
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
  background-color: grey;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  padding: 20px;
}

.gate-step-container-header {
  padding: 5px;
  justify-content: center;
  font-weight: bold;
  color: white;
}
.gate-sequencer-panel-header {
  font-size: 18px;
}

.gate-sequencer-panel-body {
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px;
}

.step-indicator-row {
  justify-content: space-around;
}

.gate-step-container {
  flex-direction: column;
}

.gate-step-container-body {
  border-width: 1px;
  border-style: solid;
  border-color: white;
  height: 118px;
  width: 352px;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.gate-step {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36px;
  border-width: 1px;
  border-style: solid;
  border-color: white;
  padding: 2px;
  margin: 1px;
  height: 50px;
}

.gate-steps-add-remove {
  flex-direction: column;
  justify-content: flex-start;
}

.gate-steps-add-remove-header {
  padding: 5px;
  justify-content: center;
  font-weight: bold;
  color: white;
}

.gate-steps-add-remove-body {
  flex-direction: column;
}
</style>
