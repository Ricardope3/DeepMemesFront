<template>
  <div>
    <h1 class="text-center mt-4 text-2xl">PROFILE</h1>
    <div class="flex mt-6">
      <div class="w-6/12">
        <img
            :src="this.profilePicture"
            class="rounded-full overflow-x-auto"
        />
      </div>
      <div class="w-6/12">
        <p class="inline-block w-6/12 text-xl">E-mail: <span class="text-base">{{ email }}</span></p>
        <p class="text-xl">Interested In:</p>
        <p class="w-full mt-3 mb-3 m-auto p-2 rounded-lg text-center" v-for="tag in tags" :key="tag.index">
              {{ tag }}
        </p>  
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'profile',
    components: {
  },
  data: () => ({
    profilePicture: "",
    email: "",
    tags: "",
  }),
  async beforeMount() {
    this.email = this.getUser().email;
    this.profilePicture = await this.getImageUrl(this.email);
    this.tags = this.getUserTags();
  },
  methods: {
    ...mapGetters(["getUser"]),
    ...mapGetters(["getUserTags"]),
    ...mapActions(["getProfilePicture"]),
    async getImageUrl(email) {
      return await this.getProfilePicture(email);
    },
  }
}
</script>

<style>
</style>