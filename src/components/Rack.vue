<template>
  <div class="rack">
    <TransportControls />
    <!-- <OutputDisplay /> -->
    <RackTabContainer />
  </div>
</template>

<script>
import TransportControls from "./TransportControls";
// import OutputDisplay from "./OutputDisplay";
import RackTabContainer from "./RackTabContainer";

export default {
  components: {
    RackTabContainer,
    TransportControls
    // OutputDisplay,
  },
  name: "Rack"
};
</script>

<style scoped>
.rack {
  flex-direction: column;
  justify-content: center;
  width: 80%;
}
</style>
