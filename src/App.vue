<template>
  <div id="app">
  <AppBar/>
    <div class="flex flex-col h-screen">
      <div class="bg-blue-500 flex-1 flex overflow-y-hidden">
        <div class="sidebar bg-gray-300 w-1/4 flex-none">Sidebar</div>
        <div class="content-area bg-gray-200 flex-1 overflow-y-auto">
          <MemeCard :meme="meme"/>
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
  data : ()=>({
    meme:{
      profileUrl:"",
      profileName:"Unusual Mexican Images",
      
    }
  })
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
