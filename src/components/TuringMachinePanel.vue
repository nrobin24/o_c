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
      <!-- <button class="turing-machine-panel-button" v-on:click="generatePattern">Generate</button> -->
      <GenerateButton v-on:generate="generatePattern" />
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
      probInputValue: state => state.turingMachine.probInputValue,
      lengthInputValue: state => state.turingMachine.lengthInputValue
    })
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
    generatePattern() {
      this.$store.dispatch("turingMachine/generatePattern");
    }
  }
};
</script>

<style>
.turing-machine-panel-button {
  height: 40px;
}
</style>
