<template>
  <div class="note-spinner">
    <button v-on:click="$emit('note-up')">+</button>
    <div>
      {{ noteLabel }}
    </div>
    <button v-on:click="$emit('note-down')">-</button>
  </div>
</template>

<script>
export default {
  name: "NoteSpinner",
  props: {
    noteLabel: String,
  },
};
</script>

<style>
.note-spinner {
  flex-direction: column;
  height: 80px;
}
</style>
