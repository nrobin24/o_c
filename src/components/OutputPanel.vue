<template>
  <BasePanel panel-label="Output">
    <template v-slot:body>
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
    </template>
  </BasePanel>
</template>

<script>
import { mapState } from "vuex";
import BasePanel from "./BasePanel";

export default {
  name: "OutputPanel",
  components: { BasePanel },
  computed: mapState({
    allMidiOutputs: (state) => state.output.allMidiOutputs,
  }),
};
</script>

<style>
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
