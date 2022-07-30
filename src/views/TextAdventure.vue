<template>
  <div class="main-container">
    <h1>Welcome to the text adventure!</h1>
    <div class="text-adventure">
      <h3>{{ currentLocation.name }}</h3>
      <p>{{ currentLocation.text }}</p>
      <br />
      <label>Enter your answers here and press enter: </label>
      <input v-on:keydown.enter="changeScenery" v-model="userInput" />
      <p>(Hint: your possible directions are in UPPERCASE)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextAdventure",
  data() {
    return {
      currentLocation: {
        name: null,
        text: null,
      },
      locations: {
        one: {
          name: "Cat Tunnel",
          text: "You find yourself in a tunnel surrounded by cats. Only way out is to go and LEAVE...",
          leave: "two",
          back: null,
          left: null,
          right: null,
        },
        two: {
          name: "Streets",
          text: "You step out of the tunnel to an empty street. Cats are running around your feet. Behind you (BACK) is the tunnel you started in. To the LEFT is the downtown where your home is.",
          north: null,
          back: "one",
          left: "three",
          right: null,
        },
        three: {
          name: "Downtown",
          text: "You continue down the streets of the city and you reach the downtown in no time. One of the cats is following you and you reach your home street. LEFT is the apartment building you live in with your own cat and you can go RIGHT to another street that takes you to a shelter. Now behind you (BACK) is the street you came from originally.",
          north: null,
          back: "two",
          left: "four",
          right: "five",
        },
        threeNoCat: {
          name: "Downtown",
          text: "You continue down the streets of the city and you reach the downtown in no time. LEFT is the apartment building you live in with your own cat and RIGHT another street that takes you to a shelter. Now behind you (BACK) is the street you came from originally.",
          north: null,
          back: "twoNoCat",
          left: "fourNoCat",
          right: "fiveNoCat",
        },
        twoNoCat: {
          name: "Streets",
          text: "You step out of the tunnel to an empty street. Cats have gone into hiding now. You decide the starting tunnel is not worth going anymore... To the LEFT is the downtown.",
          north: null,
          back: null,
          left: "threeNoCat",
          right: null,
        },
        four: {
          name: "Home",
          text: "You get home and your cat greets you at first and then realises you have the street cat still following you, so your cat runs and hides. You decide to give home to the cat and eventually your cat gets used to the stranger. You can return to your adventure with LEAVE.",
          north: null,
          leave: "threeNoCat",
          left: null,
          right: null,
        },
        fourNoCat: {
          name: "Home",
          text: "You get home and your both cats greet you. They start chasing eachother. You can return to your adventure with LEAVE.",
          north: null,
          leave: "threeNoCat",
          left: null,
          right: null,
        },
        five: {
          name: "Shelter",
          text: "You reach the shelter and it's open! You can decide to ADOPT another cat, DROP the cat off for adoption then leave or just LEAVE.",
          adopt: "adoptCat",
          drop: "threeNoCat",
          leave: "three",
          right: null,
        },
        fiveNoCat: {
          name: "Shelter",
          text: "You reach the shelter and it's open! You can decide to ADOPT another cat or LEAVE.",
          adopt: "adoptCat",
          leave: "threeNoCat",
          left: null,
          right: null,
        },
        adoptCat: {
          name: "You adopted another cat!",
          text: "You won the game! Thank you for playing. <3 Refresh the page to play again",
        },
      },
      userInput: null,
    };
  },
  created() {
    this.currentLocation = this.locations["one"];
  },
  methods: {
    changeScenery() {
      switch (this.userInput.toLowerCase()) {
        case "north":
          if (this.currentLocation.north !== null) {
            this.currentLocation = this.locations[this.currentLocation.north];
          }
          break;
        case "back":
          if (this.currentLocation.back !== null) {
            this.currentLocation = this.locations[this.currentLocation.back];
          }
          break;
        case "left":
          if (this.currentLocation.left !== null) {
            this.currentLocation = this.locations[this.currentLocation.left];
          }
          break;
        case "right":
          if (this.currentLocation.right !== null) {
            this.currentLocation = this.locations[this.currentLocation.right];
          }
          break;
        case "adopt":
          if (this.currentLocation.adopt !== null) {
            this.currentLocation = this.locations[this.currentLocation.adopt];
          }
          break;
        case "drop":
          if (this.currentLocation.drop !== null) {
            this.currentLocation = this.locations[this.currentLocation.drop];
          }
          break;
        case "leave":
          if (this.currentLocation.leave !== null) {
            this.currentLocation = this.locations[this.currentLocation.leave];
          }
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  color: black;
}
.text-adventure {
  width: 600px;
  margin: 10px;
}

.light_mode {
  .main-container {
    color: rgb(255, 240, 240);
  }
}
</style>
