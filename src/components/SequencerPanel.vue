<template>
  <div id="sequencerPanel">
    <div id="stepDisplayButtonRow">
      <OnOffSwitch
        v-for="step in steps"
        :key="step.id"
        v-bind:is-gate-on="step.gate"
        v-bind:step-id="step.id"
        v-bind:step-note="step.note"
      />
    </div>
    <div id="stepIndicatorLightRow">
      <StepIndicatorLight
        v-for="step in steps"
        :key="step.id"
        v-bind:is-active="step.isActive"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import OnOffSwitch from "./OnOffSwitch";
import StepIndicatorLight from "./StepIndicatorLight";

export default {
  name: "SequencerPanel",
  components: { OnOffSwitch, StepIndicatorLight },
  computed: {
    ...mapState({
      steps: (state) =>
        state.sequencer.steps.map((step) => ({
          isActive: step.id == state.sequencer.currentStep,
          ...step,
        })),
    }),
  },
};
</script>

<style scoped>
#sequencerPanel {
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}
#stepDisplayButtonRow {
  width: 80%;
  justify-content: space-around;
}
#stepIndicatorLightRow {
  width: 80%;
  justify-content: space-around;
}
</style>
