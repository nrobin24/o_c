<template>
  <div id="app">
    <Rack />
  </div>
</template>

<script>
import Rack from "./components/Rack.vue";

export default {
  name: "App",
  components: {
    Rack,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #757575;
  justify-content: center;
}

body {
  margin: 0px;
}

div {
  display: flex;
}
</style>
