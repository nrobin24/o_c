<template>
  <BasePanel panel-label="Turing Machine">
    <template v-slot:body>
      <div>
        <NumberSpinner
          :value="probInputValue"
          label="Probability"
          v-on:plus="plusProbInputValue"
          v-on:minus="minusProbInputValue"
        />
        <NumberSpinner
          :value="lengthInputValue"
          label="Length"
          v-on:plus="plusLengthInputValue"
          v-on:minus="minusLengthInputValue"
        />
      </div>
      <button class="turing-machine-panel-button" v-on:click="generateMelody">
        Generate
      </button>
    </template>
  </BasePanel>
</template>

<script>
import { mapState } from "vuex";
import NumberSpinner from "./NumberSpinner";
import BasePanel from "./BasePanel";
export default {
  name: "TuringMachinePanel",
  components: { NumberSpinner, BasePanel },
  computed: {
    // steps() {
    //   return this.$getters.euclideanGenerator.steps;
    // },
    ...mapState({
      probInputValue: (state) => state.turingMachine.probInputValue,
      lengthInputValue: (state) => state.turingMachine.lengthInputValue,
    }),
  },
  methods: {
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
    generateMelody() {
      this.$store.commit("turingMachine/generateMelody");
    },
  },
};
</script>

<style>
.turing-machine-panel-button {
  height: 40px;
}
</style>
