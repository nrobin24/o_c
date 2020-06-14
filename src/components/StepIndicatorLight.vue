<template>
  <div>
    <div v-if="isActive">🔴</div>
    <div v-else>⚫️</div>
  </div>
</template>

<script>
export default {
  name: "StepIndicatorLight",
  props: {
    isActive: Boolean,
  },
};
</script>
