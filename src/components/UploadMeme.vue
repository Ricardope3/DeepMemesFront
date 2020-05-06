<template>
<div class="flex-col row-uploader items-center ">
    <div class="cont-uploader bg-gray-400 w-4/5 rounded-full py-2">
        <h2 class="text-center">Subir meme</h2>
        <div class="items-center text-center">
        <input id="fileUpload" type="file" accept=".jpg, .png, .jpeg" hidden>
        <button @click="chooseFiles()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xlg">
            Selecionar archivo
        </button>  
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'uploadMeme',
    components: {
  },
  methods: {
    chooseFiles() {
        document.getElementById("fileUpload").click()
    },
  },
}
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