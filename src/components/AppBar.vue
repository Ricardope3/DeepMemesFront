<template>
  <div class="w-screen flex flex-row bg-gray-800 h-14 p-2">
    <div class="flex flex-row w-1/3">
      <div class="w-1/3" />
      <div class="w-1/3">
        <img class="w-8 center-image" src="../assets/icons/email.svg" />
      </div>
      <div class="w-1/3">
        <img class="w-8 center-image" src="../assets/icons/notification.svg" />
      </div>
    </div>
    <div class="w-1/3">
      <h1 class="text-white text-center text-2xl">Deep Memes</h1>
    </div>
    <div class="flex flex-row w-1/3">
      <div class="w-1/3">
        <img
          v-if="isHidden"
          class="w-8 center-image"
          src="../assets/icons/search.svg"
          v-on:click="isHidden = false"
        />
        <input v-if="!isHidden" type="text" placeholder="Search.." />
      </div>
      <router-link to="/profile"  tag="div" router class="w-1/3 profile">
        <img  class="w-8 center-image " src="../assets/icons/account.svg" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "appBar",
  components: {},
  data: () => ({
    isHidden: true
  })
};
</script>

<style>
.center-image {
  margin-left: auto;
  margin-right: auto;
}
.profile img:hover {
  cursor: pointer;
}
</style>