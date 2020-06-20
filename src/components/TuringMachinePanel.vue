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
import NumberSpinner from "./NumberSpinner";
import BasePanel from "./BasePanel";
import GenerateButton from "./GenerateButton";

export default {
  name: "TuringMachinePanel",
  components: { NumberSpinner, BasePanel, GenerateButton },
  props: {
    activeTrack: Number
  },
  computed: {
    rangeInputValue() {
      return this.$store.getters["turingMachine/rangeInputValue"](
        this.activeTrack
      );
    },
    lengthInputValue() {
      return this.$store.getters["turingMachine/lengthInputValue"](
        this.activeTrack
      );
    },
    probInputValue() {
      return this.$store.getters["turingMachine/probInputValue"](
        this.activeTrack
      );
    }
  },
  methods: {
    plusRangeInputValue() {
      this.$store.commit("turingMachine/plusRangeInputValue", this.activeTrack);
    },
    minusRangeInputValue() {
      this.$store.commit(
        "turingMachine/minusRangeInputValue",
        this.activeTrack
      );
    },
    plusProbInputValue() {
      this.$store.commit("turingMachine/plusProbInputValue", this.activeTrack);
    },
    minusProbInputValue() {
      this.$store.commit("turingMachine/minusProbInputValue", this.activeTrack);
    },
    plusLengthInputValue() {
      this.$store.commit(
        "turingMachine/plusLengthInputValue",
        this.activeTrack
      );
    },
    minusLengthInputValue() {
      this.$store.commit(
        "turingMachine/minusLengthInputValue",
        this.activeTrack
      );
    },
    generateSteps() {
      this.$store.dispatch("turingMachine/generateSteps", this.activeTrack);
    }
  }
};
</script>

<style>
.turing-machine-panel-button {
  height: 40px;
}
</style>
