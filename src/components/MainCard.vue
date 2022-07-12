<template>
  <div class="main-container">
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
                <h3>2. Maine Coon</h3>
                <p>
                  The ancestral origins of the Maine Coon are unknown, some
                  speculate that they are descended from Norwegian forest cats
                  or Siberian forest cats, which may have been brought to New
                  England by settlers.
                </p>
                <h3>3. Ragdoll</h3>
                <p>
                  The Ragdoll has been known to have a very floppy and calm
                  nature. It is a cat breed with a colorpoint coat and blue
                  eyes. The name 'Ragdoll' is derived from the tendency of
                  individuals from the original breeding stock to go limp and
                  relaxed when picked up.
                </p>
                <h3>4. Norwegian Forest cat</h3>
                <p>
                  It is a big, strong cat, similar to the Maine Coon breed, with
                  long legs, a bushy tail, and a sturdy body. It is very good at
                  climbing, partly because of strong claws.
                </p>
                <h3>5. Bombay</h3>
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
        <hr />
        <div @click="showModal = true" class="link">
          <img src="../assets/mainecoon.jpg" alt="" />

          <h2>2. Maine Coon</h2>
        </div>
        <hr />

        <div @click="showModal = true" class="link">
          <img src="../assets/ragdoll.jpg" alt="" />
          <h2>3. Ragdoll</h2>
        </div>
        <hr />

        <div @click="showModal = true" class="link">
          <img src="../assets/nfc.jpg" alt="" />
          <h2>4. Norwegian Forest cat</h2>
        </div>
        <hr />

        <div @click="showModal = true" class="link">
          <img src="../assets/bombay.jpg" alt="" />
          <h2>5. Bombay</h2>
        </div>
        <hr />
      </div>
    </div>
    <hr />
    <div class="container-two">
      <div class="about-cats">
        <h1>Cats in general</h1>
        <p>
          Cats originate from Africa, since the earliest known indication for
          the taming of an African wildcat was excavated close by a human
          Neolithic grave in Shillourokambos, southern Cyprus, dating to about
          7500-7200 BC. During domestication, cats have undergone only minor
          changes in anatomy and behavior, and they are still capable of
          surviving in the wild. However this is not ideal for the domestic cat
          especially in Finland.
          <br />
          <br />
          Female domestic cats can have kittens from spring to late autumn, with
          litter sizes often ranging from two to five kittens. Population
          control of cats may be effected by spaying and neutering, but their
          proliferation and the abandonment of pets has resulted in large
          numbers of feral cats worldwide, contributing to the extinction of
          entire bird, mammal, and reptile species.
        </p>
        <h2>Fun facts about cats</h2>
        <p style="text-align: start">
          - A house cat's genome is 95.6 percent tiger, and they share many
          behaviors with their jungle ancestors, says Layla Morgan Wilde, a cat
          behavior expert and the founder of Cat Wisdom 101. These behaviors
          include scent marking by scratching, prey play, prey stalking,
          pouncing, chinning, and urine marking.
          <br />
          - Cats are believed to be the only mammals who don't taste sweetness.
          <br />
          - Cats are nearsighted, but their peripheral vision and night vision
          are much better than that of humans.
          <br />
          - Cats are supposed to have 18 toes (five toes on each front paw; four
          toes on each back paw). There are cats who have more than 18 toes.
          These extra-digit felines are referred to as being “polydactyl.”
          <br />
          - Cats can jump up to six times their length.
          <br />
          - Cats' claws all curve downward, which means that they can't climb
          down trees head-first. Instead, they have to back down the trunk.
          <br />
          - Cats' collarbones don't connect to their other bones, as these bones
          are buried in their shoulder muscles.
          <br />
          - Cats have 230 bones, while humans only have 206.
          <br />
          - Cats have an extra organ that allows them to taste scents on the
          air, which is why your cat stares at you with her mouth open from time
          to time.
          <br />
          - Cats have whiskers on the backs of their front legs, as well.
          <br />
          - Cats have nearly twice the amount of neurons in their cerebral
          cortex as dogs.
          <br />
          - Cats have the largest eyes relative to their head size of any
          mammal.
          <br />
          - Cats make very little noise when they walk around. The thick, soft
          pads on their paws allow them to sneak up on their prey — or you!
          <br />
          - Cats' rough tongues can lick a bone clean of any shred of meat.
          <br />
          - Cats use their long tails to balance themselves when they're jumping
          or walking along narrow ledges.
          <br />
          - Cats use their whiskers to “feel” the world around them in an effort
          to determine which small spaces they can fit into.
          <br />
          - A cat's whiskers are generally about the same width as its body.
          (This is why you should never, EVER cut their whiskers.)
          <br />
          - Cats walk like camels and giraffes: They move both of their right
          feet first, then move both of their left feet. No other animals walk
          this way.
          <br />
          - Male cats are more likely to be left-pawed, while female cats are
          more likely to be right-pawed. Some cats are ambidextrous, but 40
          percent are either left- or right-pawed.
          <br />
          - Though cats can notice the fast movements of their prey, it often
          seems to them that slow-moving objects are actually stagnant.
          <br />
          - Some cats can swim.
          <br />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./ModalComponent.vue";
export default {
  name: "MainCard",
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
img {
  height: 200px;
  margin: 5px;
}

.main-container {
  display: flex;
  flex-direction: row;
}

p {
  margin: 25px;
}

.link {
  cursor: pointer;
}
</style>
