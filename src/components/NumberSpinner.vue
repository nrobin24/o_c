<template>
  <div class="number-spinner">
    <div class="number-spinner-label">{{ label }}</div>
    <div>
      <button v-on:click="$emit('minus')" class="number-spinner-button">
        -
      </button>
      <div class="number-spinner-value-indicator">{{ value }}</div>
      <button v-on:click="$emit('plus')" class="number-spinner-button">
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberSpinner",
  props: {
    value: Number,
    label: String,
  },
};
</script>

<style>
.number-spinner {
  padding: 10px;
  flex-direction: column;
}
.number-spinner-value-indicator {
  border: 1px;
  background-color: white;
  padding: 5px;
  width: 15px;
  justify-content: center;
}

.number-spinner-button {
  border: 1px;
  padding: 5px;
  width: 30px;
}

.number-spinner-label {
  padding: 5px;
  justify-content: center;
  font-weight: bold;
  color: white;
}
</style>
