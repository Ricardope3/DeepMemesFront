<template>
  <div class="flex-col row-uploader items-center">
    <div class="cont-uploader bg-gray-400 w-4/5 rounded-full py-2">
      <div class="items-center text-center">
        <input id="fileUpload" type="file" accept=".jpg, .png, .jpeg" hidden />
        <modal name="example" :width="300" :height="300">
          <h1 class="text-xl mb-4">Upload Meme</h1>
          <div class="name mb-2">
            <input class="p-1 rounded-lg" placeholder="name" v-model="name" />
          </div>
          <div class="link mb-2">
            <input class="p-1 rounded-lg" placeholder="link to Meme" v-model="link" />
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mt-4 mb-2 rounded-2xlg"
            type="submit"
            @click="uploadMeme"
           >Upload meme</button>
        </modal>
        <button
          id="show-modal"
          @click="show"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xlg"
        >Subir Meme</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
  name: "uploadMeme",
  data: () => ({
    showModal: false,
    name: "",
    link : "",
  }),
  components: {},
  methods: {
      ...mapGetters(['getUser']),
      ...mapActions(['createMeme']),
    show() {
      this.$modal.show("example");
    },
    hide() {
      this.$modal.hide("example");
    },
    uploadMeme(){
        let email = this.getUser().email
        this.createMeme({email,title:this.name,link:this.link})
        this.hide()
    },
  }
};
</script>

<style>
.cont-uploader {
  margin: auto;
}
.row-uploader {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>