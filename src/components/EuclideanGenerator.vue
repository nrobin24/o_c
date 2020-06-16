<template>
  <BasePanel panel-label="Euclidean Generator">
    <template v-slot:body>
      <div>
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
      </div>
      <button
        class="euclidean-generator-button"
        v-on:click="$emit('replace-gates')"
      >
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
  name: "EuclideanGenerator",
  components: { NumberSpinner, BasePanel },
  computed: {
    ...mapState({
      stepsInputValue: (state) => state.euclideanGenerator.stepsInputValue,
      lengthInputValue: (state) => state.euclideanGenerator.lengthInputValue,
    }),
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
  },
};
</script>

<style>
.euclidean-generator-button {
  height: 40px;
}
</style>
