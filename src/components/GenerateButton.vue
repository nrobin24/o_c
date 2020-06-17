<template>
  <BaseControl control-label="Generate">
    <template v-slot:body>
      <button class="generate-button" v-on:click="$emit('generate')">Go</button>
    </template>
  </BaseControl>
</template>

<script>
import BaseControl from "./BaseControl";

export default {
  name: "GenerateButton",
  components: {
    BaseControl
  }
};
</script>

<style>
.generate-button {
  border: 1px;
  background-color: white;
  width: 92px;
  padding: 8px;
  font-size: 16px;
  height: 38px;
  width: 92px;
}
</style>
