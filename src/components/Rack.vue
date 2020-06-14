<template>
  <div class="rack">
    <TransportControls />
    <EuclideanGenerator v-on:replace-gates="replaceGates" />
    <GateSequencerPanel />
    <NoteSequencerPanel />
    <OutputPanel />
  </div>
</template>

<script>
import GateSequencerPanel from "./GateSequencerPanel";
import TransportControls from "./TransportControls";
import EuclideanGenerator from "./EuclideanGenerator";
import OutputPanel from "./OutputPanel";
import NoteSequencerPanel from "./NoteSequencerPanel";
// import { mapGetters } from "vuex";

export default {
  components: {
    GateSequencerPanel,
    TransportControls,
    EuclideanGenerator,
    OutputPanel,
    NoteSequencerPanel,
  },
  name: "Rack",
  methods: {
    replaceGates() {
      const steps = this.$store.getters["euclideanGenerator/steps"];
      this.$store.commit("gateSequencer/replaceGates", steps);
    },
  },
  // computed: {
  //   ...mapGetters({
  //     steps
  //   })
  //   ...mapGetters(["euclideanGenerator/steps"]),
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rack {
  flex-direction: column;
  justify-content: center;
  width: 80%;
}
</style>
