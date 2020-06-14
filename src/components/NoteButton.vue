<template>
  <div>
    <button>
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: "NoteButton",
  props: {
    label: String,
  },
};
</script>

<style></style>
