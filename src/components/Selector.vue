<template>
  <div class="hello">
    <div>
      <select name="output">
        <option
          v-for="output in allMidiOutputs"
          v-bind:key="output.id"
          v-bind:value="output.id"
        >
          {{ output.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
// TODO: make the selector do something, use the v-model

import { mapState } from "vuex";

export default {
  name: "Selector",
  props: {
    msg: String,
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
  computed: mapState({
    allMidiOutputs: (state) => state.output.allMidiOutputs,
  }),
};
</script>
