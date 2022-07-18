<template>
  <div class="app" :class="mode">
    <SideBar />
    <span
      class="material-icons-two-tone"
      @click="toggleTheme"
      style="
        cursor: pointer;
        width: 30px;
        height: 30px;
        position: fixed;
        left: 89.7rem;
        top: 4.1rem;
      "
      >{{ mode }}</span
    >
    <router-view />
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    SideBar,
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
  background-color: rgb(63, 0, 0);

  .material-icons {
    color: white;
  }
}
</style>
