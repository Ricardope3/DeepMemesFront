<template>
  <div class="flex flex-col shadow-xl bg-white rounded-xlg xl:m-20 lg:m-10 sm:m-5 xsm:m-3 sm:p-6 xsm:p-4">
    <div class="title-bar flex pb-4 flex items-center">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/31xIqOqB4OL._SY355_.jpg"
        class="rounded-full overflow-x-auto sm:w-12 sm:h-12 xsm:w-10 xsm:h-10"
      />
      <div class="p-3 text-lg flex-1">LMAO</div>
    </div>
    <div class="memeImage self-center shadow-md rounded-xlg">
      <img :src="meme" class="rounded-xlg shadow-xl" />
    </div>
    <div class="flex">
      <div class="sm:px-5 sm:pt-4 xsm:px-3 xsm:pt-3">
        <font-awesome-icon icon="heart" class="text-indigo-700 sm:text-3xl xsm:text-lg " />
      </div>
      <div class="sm:px-10 sm:pt-4 xsm:px-3 xsm:pt-3">
        <font-awesome-icon icon="heart-broken" class="text-indigo-700  sm:text-3xl xsm:text-lg" />
      </div>
      <div class="flex-1"></div>
      <div class="sm:px-10 sm:pt-4 xsm:px-3 xsm:pt-3">
        <font-awesome-icon icon="comments" class="text-indigo-700  sm:text-3xl xsm:text-lg" />
      </div>
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