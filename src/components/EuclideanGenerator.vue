<template>
  <BasePanel panel-label="Euclidean Generator">
    <template v-slot:body>
      <NumberSpinner
        :value="stepsInputValue"
        label="Steps"
        v-on:plus="plusStepsInputValue"
        v-on:minus="minusStepsInputValue"
      />
      <NumberSpinner
        :value="lengthInputValue"
        label="Length"
        v-on:plus="plusLengthInputValue"
        v-on:minus="minusLengthInputValue"
      />
      <GenerateButton v-on:generate="replaceGates" />
    </template>
  </BasePanel>
</template>

<script>
import { mapState } from "vuex";
import NumberSpinner from "./NumberSpinner";
import BasePanel from "./BasePanel";
import GenerateButton from "./GenerateButton";

export default {
  name: "EuclideanGenerator",
  components: { NumberSpinner, BasePanel, GenerateButton },
  computed: {
    ...mapState({
      stepsInputValue: state => state.euclideanGenerator.stepsInputValue,
      lengthInputValue: state => state.euclideanGenerator.lengthInputValue
    })
  },
  methods: {
    plusStepsInputValue() {
      this.$store.commit("euclideanGenerator/plusStepsInputValue");
    },
    minusStepsInputValue() {
      this.$store.commit("euclideanGenerator/minusStepsInputValue");
    },
    plusLengthInputValue() {
      this.$store.commit("euclideanGenerator/plusLengthInputValue");
    },
    minusLengthInputValue() {
      this.$store.commit("euclideanGenerator/minusInputValue");
    },
    replaceGates() {
      const steps = this.$store.getters["euclideanGenerator/steps"];
      this.$store.commit("gateSequencer/replaceGates", steps);
    }
  }
};
</script>
