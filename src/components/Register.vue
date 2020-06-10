<template>
  <div class="text-center mt-4 bg-gray-400 rounded-lg pt-4 pb-4 w-4/5 m-auto">
    <div class="text-red-400" v-if="error">{{error.message}}</div>
    <div v-if="isSignUp">
      <form @submit.prevent="onRegister">
        <h1 class="text-2xl mb-4 mt-4">Register</h1>
        <div class="name mb-2 mt-4">
          <input class="p-2 rounded-lg" placeholder="name" v-model="name" />
        </div>
        <div class="email mb-2 mt-4">
          <input class="p-2 rounded-lg" type="email" placeholder="email" v-model="email" />
        </div>
        <div class="password mb-2 mt-4">
          <input class="p-2 rounded-lg" type="password" placeholder="password" v-model="password" />
        </div>
        <div class="link mb-2 mt-4">
          <input class="p-2 rounded-lg" placeholder="link to profile picture" v-model="link" />
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mt-4 mb-2 rounded-2xlg "
          type="submit"
        >Register</button>
      </form>
      <p class="mt-4">
        You already have an account?
        <span
          class="text-blue-500 hover:text-blue-700"
          v-on:click="changeMode"
        >login</span>
      </p>
    </div>

    <div v-if="!isSignUp">
      <form @submit.prevent="onLogin">
        <h1 class="text-2xl mb-4">Login</h1>
        <!-- <div class="text-red-400" v-if="error">{{error.message}}</div> -->
        <div class="email mb-2 mt-4">
          <input class="p-2 rounded-lg" type="email" placeholder="email" v-model="email" />
        </div>
        <div class="password">
          <input class="p-2 rounded-lg" type="password" placeholder="password" v-model="password" />
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mt-4 mb-2 rounded-2xlg"
          type="submit"
        >Login</button>
      </form>
      <p class="mt-4">
        You dont have an account?
        <span
          class="text-blue-500 hover:text-blue-700"
          v-on:click="changeMode"
        >register</span>
      </p>
    </div>

    <br />
    <br />Log Out
    <button @click="onLogOut">Logout</button>

    <br />
    <br />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "register",
  mounted() {},
  methods: {
    ...mapActions(["login"]),
    ...mapActions(["register"]),
    ...mapActions(["logout"]),
    ...mapActions(["createUserMongo"]),
    onLogin() {
      this.login({ email: this.email, password: this.password })
        .then(() => {
          if (!this.error) {
            this.$router.replace({ name: "memes" });
          }
          console.log(this.error);
        })
        .catch(() => (this.error = this.getError));
    },
    onRegister(){

      
      this.register({ email: this.email, password: this.password })
        .then(() => {
          if (!this.error) {
            this.createUserMongo({email: this.email, profilePictureLink: this.link, username: this.name })
            this.$router.replace({ name: "memes" });
          }
          console.log(this.error);
        })
        .catch(() => (this.error = this.getError));
        
    },
    onLogOut() {
      this.logout().then(() => {
        this.$router.replace({ name: "login" });
      });
    },

    changeMode() {
      this.isSignUp = !this.isSignUp;
      this.email = "";
      this.password = "";
    },
    ...mapActions(["login", "register", "logout"])
  },

  computed: {
    ...mapGetters(["getUser"]),
    ...mapGetters(["getError"])
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      link: "",
      error: this.getError,
      isSignUp: true
    };
  }
};
</script>

<style>
span {
  cursor: pointer;
}
input {
  font-size: 20px;
  width: 92%;
}
</style>