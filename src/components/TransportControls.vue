<template>
  <div class="transport-controls">
    <div class="transport-controls-header">Transport Controls</div>
    <div class="transport-controls-body">
      <button class="transport-button" v-on:click="play">▶️</button>
      <button class="transport-button" v-on:click="stop">⏹</button>
    </div>
  </div>
</template>

<script>
// TODO: make the selector do something, use the v-model

export default {
  name: "TransportControls",
  methods: {
    play() {
      this.$store.commit("gateSequencer/play");
    },
    stop() {
      this.$store.commit("gateSequencer/stop");
    },
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
