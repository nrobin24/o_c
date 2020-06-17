<template>
  <div class="note-spinner">
    <button v-on:click="$emit('note-up')">+</button>
    <div class="note-value">{{ noteLabel }}</div>
    <button v-on:click="$emit('note-down')">-</button>
  </div>
</template>

<script>
export default {
  name: "NoteSpinner",
  props: {
    noteLabel: String
  }
};
</script>

<style>
.note-spinner {
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
}

.note-value {
  justify-content: center;
}
</style>
