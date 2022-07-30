<template>
  <div class="container">
    <h2>Randomise your options</h2>
    <p>(Enter words separated by commas)</p>

    <div class="random-word-container">
      <textarea
        type="text"
        class="random-word"
        placeholder="Enter words here..."
        v-model="words"
      ></textarea>
      <h3 class="result">Result: {{ newWord }}</h3>
      <div class="button-container">
        <button @click="randomise" class="btn-randomise">Randomise</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RandomView",
  data() {
    return {
      words: "",
      newWord: "",
    };
  },
  methods: {
    randomise: function () {
      const words = this.words.split(",");

      this.newWord = words[Math.floor(Math.random() * words.length)];
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  color: black;
}
.light_mode {
  .container {
    color: rgb(255, 240, 240);
  }
}
.random-word-container {
  margin: 15px;
}

.button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
.btn-randomise {
  border: 1px solid rgb(223, 223, 223);
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  padding: 4px;
  margin: 15px;
}

.btn-randomise:active {
  background-color: rgb(243, 243, 243);
}

.random-word {
  padding: 5px;
  width: 450px;
  height: 200px;
}
</style>
