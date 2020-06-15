<template>
  <div class="turing-machine-panel">
    <div class="turing-machine-panel-header">Turing Machine</div>
    <div class="turing-machine-panel-body">
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
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NumberSpinner from "./NumberSpinner";
export default {
  name: "TuringMachinePanel",
  components: { NumberSpinner },
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
.turing-machine-panel {
  background-color: grey;
  height: 80px;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
}

.turing-machine-panel-header {
  font-size: 18px;
}

.turing-machine-panel-body {
  justify-content: space-evenly;
  align-items: center;
}

.turing-machine-panel-button {
  height: 40px;
}
</style>
