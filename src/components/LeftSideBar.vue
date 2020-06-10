<template>
  <div class="sidebar bg-gray-300 lg:w-1/4 md:w-1/6 md:flex xsm:hidden" v-if="this.getUser()">
    <div class="flex flex-col w-4/5 mt-2 m-auto">
      <router-link
        to="/"
        tag="button"
        class="inline-block h-12 bg-gray-600 px-8 text-white hover:bg-gray-800 mt-6 rounded-xlg"
      >For You</router-link>
      <router-link
        to="/random"
        tag="button"
        class="inline-block h-12 bg-gray-600 px-8 text-white hover:bg-gray-800 mt-6 rounded-xlg"
      >Random</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "leftSideBar",
  components: {},
    methods: {
    ...mapGetters(["getUser"]),
  },
};
</script>

<style>
</style>