<template>
  <div>
    <h1>Edit Post</h1>
    <form @submit.prevent="updatePost">
      <div>
        <div>
          <div>
            <label>Post Title:</label>
            <input type="text" v-model="post.title" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <label>Post Body:</label>
            <textarea v-model="post.body" rows="5"></textarea>
          </div>
        </div>
      </div>
      <br />
      <div>
        <button>Update</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  created() {
    let uri = `//localhost:4000/posts/edit/${this.$route.params.id}`;
    this.axios.get(uri).then((response) => {
      this.post = response.data;
    });
  },
  methods: {
    updatePost() {
      let uri = `//localhost:4000/posts/update/${this.$route.params.id}`;
      this.axios.post(uri, this.post).then(() => {
        this.$router.push({ name: "posts" });
      });
    },
  },
};
</script>