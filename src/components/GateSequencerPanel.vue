<template>
  <BasePanel panel-label="Gate Sequencer">
    <template v-slot:body>
      <BaseControl control-label="Steps">
        <template v-slot:body>
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
        </template>
      </BaseControl>

      <div class="gate-steps-add-remove">
        <div class="gate-steps-add-remove-header">Add/Remove</div>
        <div class="gate-steps-add-remove-body"></div>
        <button v-on:click="addGate">+</button>
        <button v-on:click="removeGate">-</button>
      </div>
    </template>
  </BasePanel>
</template>

<script>
// import { mapState } from "vuex";
import { map } from "ramda";

import OnOffSwitch from "./OnOffSwitch";
import StepIndicatorLight from "./StepIndicatorLight";
import BasePanel from "./BasePanel";
import BaseControl from "./BaseControl";

export default {
  name: "GateSequencerPanel",
  components: { OnOffSwitch, StepIndicatorLight, BasePanel, BaseControl },
  props: {
    activeTrack: Number
  },
  methods: {
    toggleGate(stepId) {
      const track = this.activeTrack;
      this.$store.commit("gateSequencer/toggleGate", { stepId, track });
    },
    addGate() {
      const track = this.activeTrack;
      this.$store.commit("gateSequencer/addGate", track);
    },
    removeGate() {
      const track = this.activeTrack;
      this.$store.commit("gateSequencer/removeGate", track);
    }
  },
  computed: {
    steps() {
      const steps = this.$store.getters["gateSequencer/steps"](
        this.activeTrack
      );
      const currentStep = this.$store.getters["gateSequencer/currentStep"](
        this.activeTrack
      );
      return map(
        step => ({ isActive: step.id == currentStep, ...step }),
        steps
      );
    }
    // ...mapState({
    //   steps: state =>
    //     state.gateSequencer.steps.map(step => ({
    //       isActive: step.id == state.gateSequencer.currentStep,
    //       ...step
    //     }))
    // })
  }
};
</script>

<style scoped>
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
