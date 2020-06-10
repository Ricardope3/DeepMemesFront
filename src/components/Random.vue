<template>
<div>
    <MemeCard v-for="meme in allMemes" :key="meme.link" :meme="meme" />

</div>
</template>

<script>
import MemeCard from "../components/MemeCard.vue";
import {mapGetters,mapActions} from "vuex";

export default {
    name: 'memes',
    components: {
        MemeCard,
  },
    methods : {
        ...mapActions(['fetchRandomMemes']),
    },
    computed: {
        ...mapGetters(['allMemes']),
    },
    data: () => ({
    memes: []
  }),
  created() {
    this.fetchRandomMemes()
  }
  
}
</script>

<style>
</style>