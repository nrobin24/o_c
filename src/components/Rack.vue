<template>
  <div class="rack">
    <TransportControls />
    <RackTabContainer />
    <!-- <EuclideanGenerator />
    <GateSequencerPanel />
    <TuringMachinePanel />
    <NoteSequencerPanel />
    <OutputPanel />-->
  </div>
</template>

<script>
// import GateSequencerPanel from "./GateSequencerPanel";
import TransportControls from "./TransportControls";
// import EuclideanGenerator from "./EuclideanGenerator";
// import OutputPanel from "./OutputPanel";
// import NoteSequencerPanel from "./NoteSequencerPanel";
// import TuringMachinePanel from "./TuringMachinePanel";
import RackTabContainer from "./RackTabContainer";
// import { mapGetters } from "vuex";

export default {
  components: {
    RackTabContainer,
    // GateSequencerPanel,
    TransportControls
    // EuclideanGenerator,
    // OutputPanel,
    // TuringMachinePanel,
    // NoteSequencerPanel
  },
  name: "Rack"
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
