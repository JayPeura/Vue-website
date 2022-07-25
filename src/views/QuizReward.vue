<template>
  <div class="quiz-reward">
    <h1>This is the mighty secret!</h1>
    <br />
    <form @submit.prevent="keyWord">
      <input
        type="text"
        class="reward"
        placeholder="Reward keyword here"
        v-model="keyword"
      />
    </form>
    <h1 v-if="showInvalid">Invalid keyword!</h1>
    <h1 v-if="showSuccess">Good job! Loading image...</h1>
    <h1 v-if="showSuccesspt2">Good job!</h1>
    <img v-if="show" src="../assets/quizReward.png" alt="catto" />
  </div>
</template>

<script>
export default {
  name: "QuizReward",
  data() {
    return {
      keyword: "",
      show: false,
      showInvalid: false,
      showSuccess: false,
      showSuccesspt2: false,
    };
  },
  methods: {
    keyWord: function () {
      if (this.keyword === "catto") {
        this.showSuccess = true;
        if (this.showInvalid === true) {
          this.showInvalid = false;
        }
        setTimeout(() => {
          this.show = true;
          this.showSuccess = false;
          this.showSuccesspt2 = true;
        }, 2000);
      } else {
        this.showInvalid = true;
        this.showSuccess = false;
        this.showSuccesspt2 = false;
        this.show = false;
      }
    },
  },
};
</script>

<style scoped>
.quiz-reward {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  height: 100vh;
}

img {
  width: 400px;
  padding: 4rem;
  display: flex;
  flex-direction: column;
}
</style>
