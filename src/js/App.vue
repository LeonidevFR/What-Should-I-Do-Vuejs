<template>
  <div id="app">
    <TheHomePage />
  </div>
</template>

<script>
import TheHomePage from "./pages/TheHomePage.vue";

export default {
  name: "App",
  components: {
    TheHomePage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
