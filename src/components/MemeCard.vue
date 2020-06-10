<template>
  <div
    class="flex flex-col shadow-xl bg-white rounded-xlg m-8 sm:p-6 xsm:p-4 w-5/6 ml-auto mr-auto"
  >
    <div class="title-bar flex pb-4 flex items-center border-b-4 border-gray-500">
      <img
        :src="this.profilePicture"
        class="rounded-full overflow-x-auto sm:w-12 sm:h-12 xsm:w-10 xsm:h-10"
      />
      <div class="p-3 text-xl flex-1">{{meme.title}}</div>
    </div>
    <div class="memeImage self-center shadow-md rounded-xlg mt-2">
      <img :src="meme.link" class="rounded-xlg shadow-xl" />
    </div>
    <div class="flex">
      <button @click.once="like"> 
        <div class="sm:pt-4 px-4 xsm:pt-3">
          <span class="pb-2">
          {{meme.likes}}
          </span>
          <font-awesome-icon icon="heart" class="text-indigo-700 sm:text-3xl xsm:text-lg" />
        </div>
      </button>
      <button @click.once="dislike">
        <div class="px-4 sm:pt-4 xsm:pt-3">
          {{meme.dislikes}}<font-awesome-icon icon="heart-broken" class="text-indigo-700 sm:text-3xl xsm:text-lg" />
        </div>
      </button>
      <div class="flex-1"></div>
      <button @click="show">
        <div class="px-3 sm:pt-4 xsm:pt-3">
          <modal :name="this.meme.link" :width="300" :height="180">
            <div>
              <h1 class="text-xl mb-4">Upload Comment</h1>
              <div class="name mb-2">
                <input class="p-1 rounded-lg" placeholder="Comentario" v-model="comentario" />
              </div>
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mt-4 mb-2 rounded-2xlg"
                type="submit"
                @click="comment"
              >Upload Comment</button>
            </div>
          </modal>
          {{meme.comments.length}}
          <font-awesome-icon icon="comments" class="text-indigo-700 sm:text-3xl xsm:text-lg" />
        </div>
      </button>
    </div>
    <div>
      <p class="text-lg text-center w-full mt-2 mb-2">Comments</p>
      <ul id="example-1">
        <li class="bg-gray-300 w-full mt-3 mb-3 m-auto p-2 rounded-lg" v-for="comment in meme.comments" :key="comment.index">
          {{ comment }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["meme"],
  data: () => ({
    profilePicture: "",
    comentario: ""
  }),
  async beforeMount() {
    this.profilePicture = await this.getImageUrl(this.meme.email);
  },
  methods: {
    ...mapGetters(["getUser"]),
    ...mapActions(["getProfilePicture"]),
    ...mapActions(["reaction"]),
    ...mapActions(["uploadComment"]),
    ...mapActions(["updateUserTags"]),
    async like() {
      this.meme.like++
      await this.reaction({
        uidMeme: this.meme.id,
        type: 0,
        email: this.getUser().email,
        tags: this.meme.tags
      });
    },
    async dislike() {
      this.meme.dislike++
      await this.reaction({
        uidMeme: this.meme.id,
        type: 1,
        email: this.getUser().email
      });
    },
    comment() {
      this.uploadComment({ uidMeme: this.meme.id, comment: this.comentario });
    },
    async getImageUrl(email) {
      return await this.getProfilePicture(email);
    },
    show() {
      this.$modal.show(`${this.meme.link}`);
    },
    hide() {
      this.$modal.hide(`${this.meme.link}`);
    }
  }
};
</script>

<style>
</style>