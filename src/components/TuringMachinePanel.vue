<template>
  <BasePanel panel-label="Turing Machine">
    <template v-slot:body>
      <div>
        <NumberSpinner
          :value="rangeInputValue"
          label="Range"
          v-on:plus="plusRangeInputValue"
          v-on:minus="minusRangeInputValue"
        />
        <NumberSpinner
          :value="lengthInputValue"
          label="Length"
          v-on:plus="plusLengthInputValue"
          v-on:minus="minusLengthInputValue"
        />
        <NumberSpinner
          :value="probInputValue"
          label="Probability"
          v-on:plus="plusProbInputValue"
          v-on:minus="minusProbInputValue"
        />
      </div>
      <!-- <button class="turing-machine-panel-button" v-on:click="generatePattern">Generate</button> -->
      <GenerateButton v-on:generate="generateSteps" />
    </template>
  </BasePanel>
</template>

<script>
import { mapState } from "vuex";
import NumberSpinner from "./NumberSpinner";
import BasePanel from "./BasePanel";
import GenerateButton from "./GenerateButton";

export default {
  name: "TuringMachinePanel",
  components: { NumberSpinner, BasePanel, GenerateButton },
  computed: {
    // steps() {
    //   return this.$getters.euclideanGenerator.steps;
    // },
    ...mapState({
      rangeInputValue: state => state.turingMachine.rangeInputValue,
      lengthInputValue: state => state.turingMachine.lengthInputValue,
      probInputValue: state => state.turingMachine.probInputValue
    })
  },
  methods: {
    plusRangeInputValue() {
      this.$store.commit("turingMachine/plusRangeInputValue");
    },
    minusRangeInputValue() {
      this.$store.commit("turingMachine/minusRangeInputValue");
    },
    plusProbInputValue() {
      this.$store.commit("turingMachine/plusProbInputValue");
    },
    minusProbInputValue() {
      this.$store.commit("turingMachine/minusProbInputValue");
    },
    plusLengthInputValue() {
      this.$store.commit("turingMachine/plusLengthInputValue");
    },
    minusLengthInputValue() {
      this.$store.commit("turingMachine/minusLengthInputValue");
    },
    generateSteps() {
      this.$store.dispatch("turingMachine/generateSteps");
    }
  }
};
</script>

<style>
.turing-machine-panel-button {
  height: 40px;
}
</style>
