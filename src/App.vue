<template>
  <div id="app">
  <AppBar/>
    <div class="flex flex-col h-screen">
      <div class="bg-blue-500 flex-1 flex overflow-y-hidden">
        <div class="sidebar bg-gray-300 w-1/4 flex-none">Sidebar</div>
        <div class="content-area bg-gray-200 flex-1 overflow-y-auto">
          <MemeCard :meme="meme" />
        </div>
        <div class="sidebar bg-gray-300 w-1/4 flex-none">Sidebar</div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from './components/AppBar.vue';
import MemeCard from "./components/MemeCard.vue";

export default {
  name: "App",
  components: {
    AppBar,
    MemeCard,
  },
  data: () => ({
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
  })
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
