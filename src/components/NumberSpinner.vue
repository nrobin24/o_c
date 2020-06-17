<template>
  <BaseControl v-bind:control-label="label">
    <template v-slot:body>
      <button v-on:click="$emit('minus')" class="number-spinner-button">-</button>
      <div class="number-spinner-value-indicator">{{ value }}</div>
      <button v-on:click="$emit('plus')" class="number-spinner-button">+</button>
    </template>
  </BaseControl>
</template>

<script>
import BaseControl from "./BaseControl";

export default {
  name: "NumberSpinner",
  components: {
    BaseControl
  },
  props: {
    value: Number,
    label: String
  }
};
</script>

<style>
.number-spinner-value-indicator {
  border: 1px;
  background-color: white;
  padding: 8px;
  width: 16px;
  justify-content: center;
  font-size: 16px;
}

.number-spinner-button {
  border: 1px;
  width: 30px;
}
</style>
