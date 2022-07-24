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
        top: 1vh;
        right: 0.5vw;
      "
      >{{ mode }}</span
    >
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
  -ms-overflow-style: none;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  width: 15px;
}
::-webkit-scrollbar-track {
  background: rgb(218, 181, 181);
}

::-webkit-scrollbar-thumb {
  background: rgb(104, 0, 0);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(73, 0, 0);
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
  .material-icons-two-tone {
    filter: invert(1);
  }
}
</style>
