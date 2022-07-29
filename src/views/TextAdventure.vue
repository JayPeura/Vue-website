<template>
  <div class="main-container">
    <h1>Welcome to the text adventure!</h1>
    <div class="text-adventure">
      <h3>{{ currentLocation.name }}</h3>
      <p>{{ currentLocation.text }}</p>
      <br />
      <label>Enter your answers here and press enter: </label>
      <input v-on:keydown.enter="changeScenery" v-model="userInput" />
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
          text: "You find yourself in a tunnel surrounded by cats. Only way out is to go to the NORTH...",
          north: "two",
          south: null,
          east: null,
          west: null,
        },
        two: {
          name: "Streets",
          text: "You step out of the tunnel to an empty street. Cats are running around your feet. Behind you (SOUTH) is the tunnel you started in. To the WEST it's a deadend, to the EAST is the downtown where your home is.",
          north: null,
          south: "one",
          east: "three",
          west: null,
        },
        three: {
          name: "Downtown",
          text: "You continue down the streets of the city and you reach the downton in no time. One of the cats is following you and you reach your home street. EAST is the apartment building you live in with your own cat and WEST another street that takes you to a shelter. SOUTH is the street you came from.",
          north: null,
          south: "two",
          east: "four",
          west: "five",
        },
        threeNoCat: {
          name: "Downtown",
          text: "You continue down the streets of the city and you reach the downton in no time. EAST is the apartment building you live in with your own cat and WEST another street that takes you to a shelter. SOUTH is the street you came from.",
          north: null,
          south: "twoNoCat",
          east: "fourNoCat",
          west: "fiveNoCat",
        },
        twoNoCat: {
          name: "Streets",
          text: "You step out of the tunnel to an empty street. Cats have gone into hiding now. You decide the starting tunnel is not worth going anymore... To the EAST is the downtown.",
          north: null,
          south: null,
          east: "threeNoCat",
          west: null,
        },
        four: {
          name: "Home",
          text: "You get home and your cat greets you at first and then realises you have the street cat still following you, so your cat runs and hides. You decide to give home to the cat and eventually your cat gets used to stranger. You can return to your adventure by going SOUTH.",
          north: null,
          south: "threeNoCat",
          east: null,
          west: null,
        },
        fourNoCat: {
          name: "Home",
          text: "You get home and your both cats greet you. They start chasing eachother. You can return to your adventure by going SOUTH.",
          north: null,
          south: "threeNoCat",
          east: null,
          west: null,
        },
        five: {
          name: "Shelter",
          text: "You reach the shelter and it's open! You can decide to ADOPT another cat, DROP the cat off for adoption then leave or go SOUTH to leave.",
          adopt: "adoptCat",
          drop: "threeNoCat",
          south: "three",
          west: null,
        },
        fiveNoCat: {
          name: "Shelter",
          text: "You reach the shelter and it's open! You can decide to ADOPT another cat or go SOUTH to leave.",
          adopt: "adoptCat",
          south: "threeNoCat",
          east: null,
          west: null,
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
        case "south":
          if (this.currentLocation.south !== null) {
            this.currentLocation = this.locations[this.currentLocation.south];
          }
          break;
        case "east":
          if (this.currentLocation.east !== null) {
            this.currentLocation = this.locations[this.currentLocation.east];
          }
          break;
        case "west":
          if (this.currentLocation.west !== null) {
            this.currentLocation = this.locations[this.currentLocation.west];
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
</style>
