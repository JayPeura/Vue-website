<template>
  <div
    class="main-container"
    style="
      width: 100vw;
      height: 100vh;
      overflow-y: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      margin-top: 50px;
    "
  >
    <div class="profile">
      <form @submit.prevent="getUser">
        <input
          type="text"
          class="search"
          placeholder="Search a github user..."
          v-model="username"
        />
      </form>
      <main class="main">
        <div class="card">
          <div>
            <img
              v-if="show"
              :src="avatar_url"
              style="width: 200px; height: 200px"
            />
          </div>
          <div>
            <h2 v-if="show">{{ name }}</h2>
            <h2 v-if="nsd">No such user found!</h2>
            <p v-if="show">({{ login }})</p>
            <p v-if="show">{{ bio }}</p>
            <br />
            <ul class="info">
              <li v-if="show">{{ followers }} Followers</li>
              <li v-if="show">{{ following }} Following</li>
              <li v-if="show">{{ public_repos }} Public repos</li>
            </ul>
            <br />
            <br />

            <a v-if="show" :href="github" target="_blank"
              >Click here for the GitHub page</a
            >
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      name: "",
      bio: "",
      avatar_url: "",
      login: "",
      public_repos: "",
      followers: "",
      following: "",
      url: "https://api.github.com/users/",
      github: "",
      show: false,
      nsd: false,
    };
  },
  methods: {
    getUser: async function () {
      const response = await fetch(this.url + this.username);
      const responseData = await response.json();
      this.name = responseData.name;
      this.bio = responseData.bio;
      this.avatar_url = responseData.avatar_url;
      this.login = responseData.login;
      this.public_repos = responseData.public_repos;
      this.following = responseData.following;
      this.followers = responseData.followers;
      this.github = responseData.html_url;
      if (responseData.message === "Not Found") {
        this.show = false;
        this.nsd = true;
      } else {
        this.nsd = false;
        this.show = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;
  width: 500px;
  min-height: 65vh;
  background: rgb(36, 0, 0);
  background: linear-gradient(
    315deg,
    rgba(36, 0, 0, 1) 0%,
    rgba(121, 9, 9, 1) 74%
  );
  color: white;
  border-radius: 15px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.37);
}

img {
  border: 10px solid rgb(56, 0, 0);
  border-radius: 50%;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.37);
}

.search {
  width: auto;
  height: 30px;
  border-radius: 5px;
  padding: 1rem;
}

.info {
  display: flex;
  justify-content: space-between;
}
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: rgb(106, 141, 240);
}
</style>
