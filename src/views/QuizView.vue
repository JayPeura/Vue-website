<template>
  <main class="quizApp">
    <h1>The Great Cat Quiz</h1>
    <br />

    <section class="quiz" v-if="!quizCompleted">
      <div class="quiz-info">
        <span class="question">{{ getCurrentQuestion.question }}</span>
        <span class="score">Score {{ score }}/{{ questions.length }}</span>
      </div>

      <div class="options">
        <label
          v-for="(option, index) in getCurrentQuestion.options"
          :key="option"
          :for="'option' + index"
          :class="`option ${
            getCurrentQuestion.selected == index
              ? index == getCurrentQuestion.answer
                ? 'correct'
                : 'wrong'
              : ''
          } ${
            getCurrentQuestion.selected != null &&
            index != getCurrentQuestion.selected
              ? 'disabled'
              : ''
          }`"
        >
          <input
            type="radio"
            :id="'option' + index"
            :name="getCurrentQuestion.index"
            :value="index"
            v-model="getCurrentQuestion.selected"
            :disabled="getCurrentQuestion.selected"
            @change="SetAnswer"
          />
          <span>{{ option }}</span>
        </label>
      </div>

      <button
        @click="NextQuestion"
        :disabled="!getCurrentQuestion.selected"
        class="nextQuestion"
      >
        {{
          getCurrentQuestion.index == questions.length - 1
            ? "Finish"
            : getCurrentQuestion.selected == null
            ? "Select an option"
            : "Next question"
        }}
      </button>
    </section>

    <section v-else>
      <h2>You have finished the quiz!</h2>
      <p>Your score is {{ score }}/{{ questions.length }}</p>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import router from "../router/index";

const questions = ref([
  {
    question: "What is a cat?",
    answer: 0,
    options: ["Feline", "Canine", "Vulpine", "Bovine"],
    selected: null,
  },
  {
    question: "How many kittens does the female cat usually have?",
    answer: 1,
    options: ["1-2", "2-5", "4-6", "6-8"],
    selected: null,
  },
  {
    question: "Where do the cats originate from?",
    answer: 2,
    options: ["Europe", "America", "Africa", "Australia"],
    selected: null,
  },
  {
    question: "When do cats usually have kittens?",
    answer: 0,
    options: [
      "Spring to late autumn",
      "Winter to spring",
      "Summer to late winter",
    ],
    selected: null,
  },
]);

const quizCompleted = ref(false);
const currentQuestion = ref(0);
const score = computed(() => {
  let value = 0;
  questions.value.map((q) => {
    if (q.selected == q.answer) {
      value++;
    }
  });
  return value;
});

const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value];
  question.index = currentQuestion.value;
  return question;
});

const SetAnswer = (evt) => {
  questions.value[currentQuestion.value].selected = evt.target.value;
  evt.target.value = null;
};

const NextQuestion = () => {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++;
  } else {
    quizCompleted.value = true;
    if (score.value === questions.value.length) {
      alert(
        "You got all the answers correctly! Here's your reward: use the word 'catto' in jaypeura.github.io/Vue-website/quiz/reward/"
      );
      setTimeout(() => {
        router.replace({ path: "/quiz/reward/" });
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.quizApp {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  height: 100vh;
}

.score {
  color: #ffe4e4;
}

.quiz {
  background-color: #2c0000;
  padding: 1rem;
  width: 100%;
  max-width: 640px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.555);
}

.quiz-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.quiz-info .question {
  color: #ffe4e4;
  font-size: 1.25rem;
}

.quiz-info.score {
  color: #fff;
  font-size: 1.25rem;
}

.options {
  margin-bottom: 1rem;
}

.option {
  padding: 1rem;
  display: block;
  background-color: #633737;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #ffe4e4;
}

.option:hover {
  background-color: #3f2121;
}

.option.correct {
  background-color: #2cce55;
}

.option.wrong {
  background-color: #ff0008;
}

.option:last-of-type {
  margin-bottom: 0;
}

.option.disabled {
  opacity: 0.5;
}

.option input {
  display: none;
}

.nextQuestion {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #a10000;
  color: #ffc7c7;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.2rem;
  border-radius: 0.5rem;
}

.nextQuestion:disabled {
  opacity: 0.2;
}
</style>
