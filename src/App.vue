<template>
  <div id="app">
    <div class="flex flex-col h-screen">
      <AppBar />
      <div class="bg-blue-500 flex-1 flex overflow-y-hidden">
        <LeftSideBar />
        <div class="content-area bg-gray-200 flex-1 overflow-y-auto">
            <router-view/>
        </div>
        <RightSideBar />
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import LeftSideBar from "./components/LeftSideBar.vue";
import RightSideBar from "./components/RightSideBar.vue";
export default {
  name: "App",
  components: {
    AppBar,
    LeftSideBar,
    RightSideBar
  },
};
</script>

<style>
</style>


    meme: {
      profileUrl:
        "https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/279978_01",
      profileName: "Unusual Mexican Images",
      memeUrl:
        "https://scontent.fntr4-1.fna.fbcdn.net/v/t1.0-9/88099451_839258536540784_962865817324617728_n.jpg?_nc_cat=1&_nc_sid=110474&_nc_oc=AQnXAhzOKVvHsP-dvHpFXDDnuEn2OXx8CY7KmsDOTs3g_4K1zVLyym1act60tXvcIWQ&_nc_ht=scontent.fntr4-1.fna&oh=3e9643d8e18f0a8cab55afb4fdfc9035&oe=5E983130",
      title: "En los quince años",
      likes: 2,
      dislikes: 4,
      comments: 13
    }