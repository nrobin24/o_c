<template>
  <div class="output-panel">
    <div class="output-panel-header">Output</div>
    <div class="output-panel-body">
      <div class="output-selector">
        <div class="output-selector-label">
          Output Device
        </div>
        <select class="output-selector-select" name="output">
          <option
            v-for="output in allMidiOutputs"
            v-bind:key="output.id"
            v-bind:value="output.id"
          >
            {{ output.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "OutputPanel",
  computed: mapState({
    allMidiOutputs: (state) => state.output.allMidiOutputs,
  }),
};
</script>

<style>
.output-panel {
  background-color: grey;
  height: 80px;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
}

.output-panel-header {
  font-size: 18px;
}

.output-panel-body {
  justify-content: center;
}

.output-selector {
  padding: 10px;
  flex-direction: column;
}

.output-selector-label {
  padding: 5px;
  justify-content: center;
  font-weight: bold;
  color: white;
}

.output-selector-select {
  height: 30px;
}
</style>
