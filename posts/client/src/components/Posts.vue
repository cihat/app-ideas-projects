<template>
  <div id="posts">
    <h1>Posts</h1>
    This file Will list all the posts.
    <div v-for="post in posts" :key="post">
      <p>
        <span
          ><b>{{ post.title }}</b></span
        >
        <span>{{ post.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import PostsService from "../services/PostsService";
import PostServices from "../services/PostsService";

export default {
  name: "posts",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await PostsService.fetchPosts();
      this.posts = response.data;
    },
  },
};
</script>

<style lang="scss" scoped>
#posts {
  margin: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: bold;
    background-color: green;
    color: white;
  }
}
</style>