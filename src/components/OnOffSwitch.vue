<template>
  <div>
    <button v-bind:class="{ gateOn: isGateOn }" v-on:click="$emit('toggle')">
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: "OnOffSwitch",
  props: {
    isGateOn: Boolean,
    label: String,
  },
};
</script>

<style>
.gateOn {
  background-color: #f44336;
}
</style>
