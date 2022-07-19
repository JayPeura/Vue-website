<template>
  <div class="app" :class="mode">
    <SideBar />
    <router-view v-bind="myProps" />
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    SideBar,
  },
  computed: {
    myProps() {
      return { mode: this.mode, toggleTheme: this.toggleTheme };
    },
  },
  data() {
    return {
      mode: "dark_mode",
    };
  },
  methods: {
    toggleTheme: function () {
      if (this.mode === "dark_mode") {
        this.mode = "light_mode";
      } else {
        this.mode = "dark_mode";
      }
    },
  },
};
</script>

<style lang="scss">
:root {
  --sidebar-width: 300px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lato;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(255, 226, 226);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;
    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}

.light_mode {
  background-color: rgb(39, 14, 14);
}
</style>
