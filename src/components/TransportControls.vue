<template>
  <BasePanel panel-label="Clock">
    <template v-slot:body>
      <button class="transport-button" v-on:click="play">▶️</button>
      <button class="transport-button" v-on:click="stop">⏹</button>
      <NumberSpinner :value="bpm" label="BPM" v-on:plus="plusBpm" v-on:minus="minusBpm" />
    </template>
  </BasePanel>
</template>

<script>
// TODO: make the selector do something, use the v-model
import NumberSpinner from "./NumberSpinner";
import BasePanel from "./BasePanel";
import { mapState } from "vuex";

export default {
  name: "TransportControls",
  components: { NumberSpinner, BasePanel },
  methods: {
    play() {
      this.$store.dispatch("clock/play");
    },
    stop() {
      this.$store.dispatch("clock/stop");
    },
    plusBpm() {
      this.$store.dispatch("clock/plusBpm");
    },
    minusBpm() {
      this.$store.dispatch("clock/minusBpm");
    }
  },
  computed: {
    ...mapState({
      bpm: state => state.clock.bpm
    })
  }
};
</script>

<style>
.transport-button {
  height: 40px;
}
</style>
