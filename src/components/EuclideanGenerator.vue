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
import NumberSpinner from "./NumberSpinner";
import BasePanel from "./BasePanel";
import GenerateButton from "./GenerateButton";

export default {
  name: "EuclideanGenerator",
  components: { NumberSpinner, BasePanel, GenerateButton },
  props: {
    activeTrack: Number
  },
  computed: {
    stepsInputValue() {
      return this.$store.getters["euclideanGenerator/stepsInputValue"](
        this.activeTrack
      );
    },
    lengthInputValue() {
      return this.$store.getters["euclideanGenerator/lengthInputValue"](
        this.activeTrack
      );
    }
  },
  methods: {
    plusStepsInputValue() {
      this.$store.commit(
        "euclideanGenerator/plusStepsInputValue",
        this.activeTrack
      );
    },
    minusStepsInputValue() {
      this.$store.commit(
        "euclideanGenerator/minusStepsInputValue",
        this.activeTrack
      );
    },
    plusLengthInputValue() {
      this.$store.commit(
        "euclideanGenerator/plusLengthInputValue",
        this.activeTrack
      );
    },
    minusLengthInputValue() {
      this.$store.commit(
        "euclideanGenerator/minusInputValue",
        this.activeTrack
      );
    },
    replaceGates() {
      const track = this.activeTrack;
      const steps = this.$store.getters["euclideanGenerator/steps"](track);
      this.$store.commit("gateSequencer/replaceGates", { steps, track });
    }
  }
};
</script>
