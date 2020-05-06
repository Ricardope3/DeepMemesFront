<template>
  <div>
    <div v-if="error">{{error.message}}</div>
    <form @submit.prevent="onRegister">
      <h1>Register</h1>
      <div class="email">
        <input type="email" placeholder="email" v-model="email" />
      </div>
      <div class="password">
        <input type="password" placeholder="password" v-model="password" />
      </div>
      <button type="submit">Register</button>
    </form>

    <br />
    <br />Log Out
    <button @click="onLogOut">Logout</button>

    <br />
    <br />

    <form @submit.prevent="onLogin">
      <h1>Login</h1>
      <div class="email">
        <input type="email" placeholder="email" v-model="email" />
      </div>
      <div class="password">
        <input type="password" placeholder="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
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
    }
  },
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  }
};
</script>

<style>
</style>