<template>
  <div class="w-screen flex flex-row bg-gray-800 h-14 p-2">
    <div class="flex flex-row w-1/3">
      <div class="w-1/3" />
      <div class="w-1/3"  @click="onLogOut">
        <img class="w-8 center-image" src="../assets/icons/logout.svg" />
      </div>
    </div>
    <div class="w-1/3">
      <h1 class="text-white text-center text-2xl">Deep Memes</h1>
    </div>
    <div class="flex flex-row w-1/3">
      <router-link to="/register" tag="div" router class="w-1/3 profile" >
        <img class="w-8 center-image" src="../assets/icons/login.svg" />
      </router-link>
      <router-link to="/profile" tag="div" router class="w-1/3 profile" v-if="this.getUser()">
        <img class="w-8 center-image" src="../assets/icons/account.svg" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
  name: "appBar",
  components: {},
  data: () => ({
    isHidden: true
  }),
  methods: {
    ...mapGetters(["getUser"]),
    ...mapActions(["logout"]),
    onLogOut() {
      this.logout().then(() => {
        this.$router.replace({ name: "register" });
        location.reload(true);
      });
    }
  }
};
</script>

<style>
.center-image {
  margin-left: auto;
  margin-right: auto;
}
.profile :hover {
  cursor: pointer;
}
</style>