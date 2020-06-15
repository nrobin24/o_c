<template>
  <div>
    <button
      class="on-off-switch"
      v-bind:class="{ gateOn: isGateOn }"
      v-on:click="$emit('toggle')"
    >
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

.on-off-switch {
  width: 30px;
}
</style>
