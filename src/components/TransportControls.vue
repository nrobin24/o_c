<template>
  <BasePanel panel-label="Clock">
    <template v-slot:body>
      <BaseControl control-label="Transport">
        <template v-slot:body>
          <button class="transport-button" v-on:click="play">▶️</button>
          <button class="transport-button" v-on:click="stop">⏹</button>
        </template>
      </BaseControl>
      <NumberSpinner :value="bpm" label="BPM" v-on:plus="plusBpm" v-on:minus="minusBpm" />
    </template>
  </BasePanel>
</template>

<script>
// TODO: make the selector do something, use the v-model
import NumberSpinner from "./NumberSpinner";
import BasePanel from "./BasePanel";
import BaseControl from "./BaseControl";
import { mapState } from "vuex";

export default {
  name: "TransportControls",
  components: { NumberSpinner, BasePanel, BaseControl },
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
  width: 46px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
</style>
