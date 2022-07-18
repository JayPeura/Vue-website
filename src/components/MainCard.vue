<template>
  <div class="main-container">
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
        <div style="margin: 100px"></div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2w00lGT_m4w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div style="margin: 100px"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCard",
};
</script>

<style scoped>
img {
  height: 250px;
  margin: 5px;
}
.container-two {
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

.container-two:hover {
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.33);
}

p {
  margin: 35px;
}

.link {
  cursor: pointer;
  width: 550px;
}
</style>
