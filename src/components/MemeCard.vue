<template>
  <div class="shadow-xl bg-white rounded-lg m-16 p-6">
    <div class="title-bar flex pb-4">
      <img :src="meme.profileUrl" class="rounded-full md:w-12 md:h-12 xsm:h-10 flex-initial xsm:w-10 mr-2" />
      <div class="flex-auto pt-3 pl-3 text-lg">{{meme.profileName}}</div>
    </div>
    <div class="memeImage">
      <img :src="meme.memeUrl" class="rounded-lg shadow-xl" />
    </div>
    <div class="like-bar flex"></div>
  </div>
</template>

<script>
export default {
  props: ["meme"]
};
</script>

<style>
</style>