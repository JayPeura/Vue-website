<template>
  <MainCard />
</template>

<script>
import MainCard from "./components/MainCard.vue";

export default {
  name: "App",
  components: {
    MainCard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6b0000;
  background-color: rgb(255, 228, 228);
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);

  margin: 60px;
}
</style>
