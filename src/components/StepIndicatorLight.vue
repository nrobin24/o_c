<template>
  <div class="step-indicator-light">
    <div class="step-indicator-light" v-if="isActive">🔴</div>
    <div class="step-indicator-light" v-else>⚫️</div>
  </div>
</template>

<script>
export default {
  name: "StepIndicatorLight",
  props: {
    isActive: Boolean
  }
};
</script>

<style>
.step-indicator-light {
  justify-content: center;
  align-items: center;
}
</style>
