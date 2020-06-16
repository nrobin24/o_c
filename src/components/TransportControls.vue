<template>
  <div class="transport-controls">
    <div class="transport-controls-header">Transport Controls</div>
    <div class="transport-controls-body">
      <button class="transport-button" v-on:click="play">▶️</button>
      <button class="transport-button" v-on:click="stop">⏹</button>
      <NumberSpinner
        :value="bpm"
        label="BPM"
        v-on:plus="plusBpm"
        v-on:minus="minusBpm"
      />
    </div>
  </div>
</template>

<script>
// TODO: make the selector do something, use the v-model
import NumberSpinner from "./NumberSpinner";
import { mapState } from "vuex";

export default {
  name: "TransportControls",
  components: { NumberSpinner },
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
    },
  },
  computed: {
    ...mapState({
      bpm: (state) => state.clock.bpm,
    }),
  },
};
</script>

<style>
.transport-controls {
  background-color: grey;
  height: 80px;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
}

.transport-controls-header {
  font-size: 18px;
}

.transport-controls-body {
  justify-content: center;
}

.transport-button {
  height: 40px;
}
</style>
