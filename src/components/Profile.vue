<template>
  <div>
    <h1 class="text-center mt-4 text-2xl">PROFILE</h1>
    <img
        :src="this.profilePicture"
        class="rounded-full overflow-x-auto w-6/12 p-6 inline-block"
    />
    <p class="inline-block w-6/12">E-mail: {{ email }}</p>
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
  }
}
</script>

<style>
</style>