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
      <NumberSpinner
        :value="channel"
        label="Channel"
        v-on:plus="plusChannel"
        v-on:minus="minusChannel"
      />
    </template>
  </BasePanel>
</template>

<script>
import { mapState } from "vuex";
import BasePanel from "./BasePanel";
import BaseControl from "./BaseControl";
import NumberSpinner from "./NumberSpinner";

export default {
  name: "OutputPanel",
  props: {
    activeTrack: Number
  },
  components: { BasePanel, BaseControl, NumberSpinner },
  computed: {
    channel() {
      return this.$store.getters["output/channel"](this.activeTrack);
    },
    ...mapState({
      allMidiOutputs: state => state.output.allMidiOutputs
    })
  },
  methods: {
    plusChannel() {
      this.$store.commit("output/plusChannel", this.activeTrack);
    },
    minusChannel() {
      this.$store.commit("output/minusChannel", this.activeTrack);
    }
  }
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
