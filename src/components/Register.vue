<template>
  <div class="text-center mt-4">
    <div v-if="error">{{error.message}}</div>
    <div v-if="isSignUp">
      <form @submit.prevent="onRegister">
        <h1 class="text-xl mb-4">Register</h1>
        <div class="email mb-2">
          <input class="p-1 rounded-lg" type="email" placeholder="email" v-model="email" />
        </div>
        <div class="password">
          <input class="p-1 rounded-lg" type="password" placeholder="password" v-model="password" />
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mt-4 mb-2 rounded-2xlg" type="submit">Register</button>
      </form>
      <p>You already have an account? <span class="text-blue-500 hover:text-blue-700" v-on:click="changeMode">login</span></p>
    </div>

    <div v-if="!isSignUp">
      <form @submit.prevent="onLogin">
        <h1 class="text-xl mb-4">Login</h1>
        <div class="email mb-2">
          <input class="p-1 rounded-lg" type="email" placeholder="email" v-model="email" />
        </div>
        <div class="password">
          <input class="p-1 rounded-lg" type="password" placeholder="password" v-model="password" />
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mt-4 mb-2 rounded-2xlg" type="submit">Login</button>
      </form>
      <p>You dont have an account? <span class="text-blue-500 hover:text-blue-700" v-on:click="changeMode">register</span></p>

    </div>

    <br />
    <br />Log Out
    <button @click="onLogOut">Logout</button>

    <br />
    <br />

   
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "register",
  mounted() {},
  methods: {
    onRegister() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.replace({ name: "memes" });
      } catch (error) {
        this.error = error;
      }
    },
    onLogOut() {
      try {
        const data = firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "login" });
      } catch (error) {
        this.error = error;
        console.log(error);
      }
    },
    onLogin(){
      try {
        const user = firebase.auth().signInWithEmailAndPassword(this.email,this.password);
        console.log(user);
      } catch (error) {
        console.log(error);
        this.error = error;
      }
    },
    changeMode(){
      this.isSignUp = !this.isSignUp;
      this.email = "";
      this.password = "";
    }
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
      isSignUp: true
    };
  }
};
</script>

<style>
span {
  cursor: pointer;
}
</style>