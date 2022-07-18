<template>
  <div>
    <div class="container-one">
      <div class="breed-list">
        <h2>My top 5 cat breeds</h2>
        <p>And what's up with them</p>
      </div>
      <div class="cat-breeds">
        <div @click="showModal = true" class="link">
          <img src="../assets/savannah-cat-size.webp" alt="" />

          <h2>1. Savannah</h2>

          <Teleport to="body">
            <modal :show="showModal" @close="showModal = false">
              <template #header>
                <h2>Deeper info about the breeds</h2>
              </template>

              <template #body>
                <h3>1. Savannah</h3>
                <br />
                <p>
                  The Savannah is a hybrid cat breed. It results from a cross
                  between a serval and a domestic cat. F1 and F2 generations are
                  usually the largest, due to the stronger genetic influence of
                  the African serval ancestor. As Savannahs are produced by
                  crossbreeding servals and domestic cats, each generation of
                  Savannahs is marked with a filial number. For example, the
                  cats produced directly from a serval x domestic cat cross are
                  termed F1, and they are 50% serval.
                </p>
                <br />
                <hr />
                <br />

                <h3>2. Maine Coon</h3>
                <br />
                <p>
                  The ancestral origins of the Maine Coon are unknown, some
                  speculate that they are descended from Norwegian forest cats
                  or Siberian forest cats, which may have been brought to New
                  England by settlers.
                </p>
                <br />
                <hr />
                <br />

                <h3>3. Ragdoll</h3>
                <br />
                <p>
                  The Ragdoll has been known to have a very floppy and calm
                  nature. It is a cat breed with a colorpoint coat and blue
                  eyes. The name 'Ragdoll' is derived from the tendency of
                  individuals from the original breeding stock to go limp and
                  relaxed when picked up.
                </p>
                <br />
                <hr />
                <br />

                <h3>4. Norwegian Forest cat</h3>
                <br />
                <p>
                  It is a big, strong cat, similar to the Maine Coon breed, with
                  long legs, a bushy tail, and a sturdy body. It is very good at
                  climbing, partly because of strong claws.
                </p>
                <br />
                <hr />
                <br />

                <h3>5. Bombay</h3>
                <br />
                <p>
                  The Bombay is a short-haired breed of domestic cat, closely
                  related to the Burmese. Bombay cats are typically
                  characterized as having an all-black coat, black soles, black
                  nose and mouth, with copper or green eyes. The close-lying,
                  sleek and glossy black coat is generally colored to the roots,
                  with little or no paling.
                </p>
              </template>
            </modal>
          </Teleport>
        </div>
        <br />
        <hr />
        <br />
        <div @click="showModal = true" class="link">
          <img src="../assets/mainecoon.jpg" alt="" />

          <h2>2. Maine Coon</h2>
        </div>
        <br />
        <hr />
        <br />

        <div @click="showModal = true" class="link">
          <img src="../assets/ragdoll.jpg" alt="" />
          <h2>3. Ragdoll</h2>
        </div>
        <br />
        <hr />
        <br />

        <div @click="showModal = true" class="link">
          <img src="../assets/nfc.jpg" alt="" />
          <h2>4. Norwegian Forest cat</h2>
        </div>
        <br />
        <hr />
        <br />

        <div @click="showModal = true" class="link">
          <img src="../assets/bombay.jpg" alt="" />
          <h2>5. Bombay</h2>
        </div>
      </div>
    </div>
    <button @click="backToTop" class="backToTop">Back to top</button>
  </div>
</template>

<script>
import Modal from "../components/ModalComponent.vue";

export default {
  name: "BreedList",
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    backToTop() {
      let to = this.moveToDown ? this.$refs.description.offsetTop - 60 : 0;

      window.scroll({
        top: to,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.container-one {
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
  margin: 60px;
  color: #6b0000;
  background-color: rgb(255, 240, 240);
  text-align: center;
  max-width: 80vw;
  min-width: 80vw;
}

.container-one:hover {
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.33);
}

img {
  width: 700px;
  padding: 15px;
}

button {
  width: 75px;
  display: flex;
  height: 25px;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: rgb(255, 181, 181);
  border: 2px solid rgba(0, 0, 0, 0.33);
  border-radius: 3px;
  margin: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.33);
}

button:hover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.582);
}

hr {
  height: 1px;
  border: none;
  background-color: darkred;
}
</style>
