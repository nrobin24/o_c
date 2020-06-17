<template>
  <BasePanel panel-label="Output">
    <template v-slot:body>
      <BaseControl control-label="Device">
        <template v-slot:body>
          <select class="output-selector-select" name="output">
            <option
              v-for="output in allMidiOutputs"
              v-bind:key="output.id"
              v-bind:value="output.id"
            >{{ output.name }}</option>
          </select>
        </template>
      </BaseControl>
    </template>
  </BasePanel>
</template>

<script>
import { mapState } from "vuex";
import BasePanel from "./BasePanel";
import BaseControl from "./BaseControl";

export default {
  name: "OutputPanel",
  components: { BasePanel, BaseControl },
  computed: mapState({
    allMidiOutputs: state => state.output.allMidiOutputs
  })
};
</script>

<style>
.output-selector-select {
  height: 38px;
  font-size: 16px;
  width: 204px;
  padding-left: 12px;
  display: flex;
  justify-content: center;
}
</style>
