<template>
  <div class="shadow-xl bg-white rounded-lg m-16 p-5">
    <div class="topbar flex text">
      <img :src="meme.profileUrl" class="rounded-full w-12 flex-initial" />
      <div class="flex-auto pt-3 pl-3 text-lg">{{meme.profileName}}</div>
    </div>
    <div class="memeImage my-3">
      <img :src="meme.memeUrl" class="rounded-lg shadow-xl" />
    </div>
    <div class="bottombar flex">
      <img
        src="https://cdn.pixabay.com/photo/2016/11/30/18/14/like-1873541_960_720.png"
        class="w-12 rounded-full flex-initial"
      />
      <div style="width:15px"></div>
      <img
        src="https://cdn.pixabay.com/photo/2016/11/30/18/14/like-1873541_960_720.png"
        class="w-12 rounded-full flex-initial" style="transform: rotate(180deg) scaleX(-1);"
      />
      <div style="width:390px"></div>
      <img src="https://www.pngkey.com/png/detail/82-824259_chat-comments-chat-vector-icon-png.png" class="w-10 h-10 rounded-lg">
    </div>
  </div>
</template>

<script>
export default {
  props: ["meme"]
};
</script>

<style>
</style>