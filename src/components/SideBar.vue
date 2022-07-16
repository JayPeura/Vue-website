<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
      <img src="../assets/logo.png" alt="Vue" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-symbols-rounded">menu</span>
      </button>
    </div>

    <h3>Menu</h3>

    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-symbols-rounded">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link class="button" to="/List">
        <span class="material-symbols-rounded">pets</span>
        <span class="text">Cat breeds</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const is_expanded = ref(false);

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 2rem);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: rgb(94, 0, 0);
  color: rgb(255, 234, 234);

  transition: 0.2s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }
  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;

      .material-symbols-rounded {
        font-size: 2rem;
        color: white;
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }
  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;

      .material-symbols-rounded {
        font-size: 2rem;
        color: white;
        transition: 0.2s ease-out;
        padding: 1rem 0;
      }

      .text {
        color: white;
        padding: 0.5rem;
        transition: 0.2s ease-out;
      }

      &:hover,
      &.router-link-exact-active {
        background-color: rgb(54, 0, 0);
      }

      &.router-link-exact-active {
        border-right: 5px solid red;
      }
    }
  }

  .material-symbols-rounded {
    font-size: 2rem;
    color: white;
    margin-bottom: 1rem;
  }
  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
  &.is-expanded {
    width: 500px;

    .menu-toggle-wrap {
      top: -3rem;
    }

    h3,
    .button .text {
      opacity: 1;
    }

    h3 {
      color: rgb(109, 73, 73);
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }
    .button {
      .material-symbols-rounded {
        margin-right: 1rem;
      }
    }
  }
}
</style>
