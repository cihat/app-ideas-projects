<template>
  <div id="create">
    <h1>Create Component</h1>
    <form @submit.prevent="addPost">
      <div>
        <div>
          <div>
            <label for="post-title">Post Title:</label>
            <input
              type="text"
              name="post-title"
              id="post-title"
              v-model="posts.title"
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <label for="post-body">Post Body:</label>
            <textarea
              v-model="post.body"
              name="post-body"
              id="post-body"
              rows="5"
            ></textarea>
          </div>
        </div>
      </div>
      <br />
      <div>
        <button>Create</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: {},
    };
  },
  methods: {
    addPost() {
      let uri = "//localhost:4000/posts/add";
      this.axios.post(uri, this.post).then(() => {
        this.$router.push({ name: "posts" });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>