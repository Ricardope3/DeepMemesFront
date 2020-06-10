<template>
<div class="sidebar bg-gray-300 lg:w-1/4 md:w-1/6 flex-col md:flex xsm:hidden ">
    <!--<div class="right-container flex flex-col w-4/5  mt-6 bg-gray-400 rounded-xlg lg:mx-auto sm:mx-3">
        <h3 class="text-center font-bold text-2xl mt-6">Who to Follow?</h3>
        <div class="flex flex-row ml-auto mt-4 w-11/12 lg:justify-start md:justify-center">
            <img class="w-12 rounded-full mr-2" src="../assets/demo/user1.jpg">
            <a href="#" class="pt-2 hover: lg:inline-block md:hidden">Juan Quirino</a>
        </div>
        <div class="flex flex-row ml-auto mt-4 w-11/12 lg:justify-start md:justify-center">
            <img class="w-12 rounded-full mr-2" src="../assets/demo/user2.jpg">
            <a href="#" class="pt-2 lg:inline-block md:hidden">Ricardo Espinoza</a>
        </div>
        <div class="flex flex-row ml-auto mt-4 w-11/12 lg:justify-start md:justify-center">
            <img class="w-12 rounded-full mr-2" src="../assets/demo/user3.jpg">
            <a href="#" class="pt-2 lg:inline-block md:hidden ">Carlos Cabello</a>
        </div>
    </div>-->
    <div class="right-container flex flex-col w-4/5  mt-6 bg-gray-400 rounded-xlg lg:mx-auto sm:mx-3">
        <div class="flex flex-row ml-auto mt-4 w-11/12 lg:justify-start md:justify-center">
            <img class="w-12 rounded-full mr-2" :src="this.profilePicture">
            <a href="#" class="pt-2 hover: lg:inline-block md:hidden">{{ this.email }}</a>
        </div>
    </div>
    <UploadMeme/>

</div>
</template>

<script>
import UploadMeme from "../components/UploadMeme.vue";
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'rightSideBar',
    components: {
        UploadMeme
  },  
  data: () => ({
    profilePicture: "",
    email: "",
  }),
  async beforeMount() {
    this.email = this.getUser().email;
    this.profilePicture = await this.getImageUrl(this.email);
  },
  methods: {
    ...mapGetters(["getUser"]),
    ...mapActions(["getProfilePicture"]),
    async getImageUrl(email) {
      return await this.getProfilePicture(email);
    },
  },
  computed: {
      loggedIn () {
          return this.$store.getters.getUser
        }
    },
    watch: {
        loggedIn(){
            // this.email = this.getUser().email;
            // this.profilePicture = await this.getImageUrl(this.email);
            console.log("logueado")
        }
    }
}
</script>

<style>
.right-container {
    height: 100px;
}
</style>