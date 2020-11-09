<template>
  <div id="editpost">
    <h1>Edit Post</h1>
    <div class="form">
      <div>
        <input type="text" name="title" placeholder="TITLE" v-model="title" />
      </div>
      <div>
        <textarea
          name=""
          id=""
          cols="15"
          rows="15"
          placeholder="DESCRİPTION"
          v-model="description"
        ></textarea>
      </div>
      <div>
        <button class="app_post_btn" @click="updatePost">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from "../services/PostsService";
export default {
  name: "editpost",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    async getPost() {
      const response = await PostsService.getPost({
        id: this.$router.params.id,
      });
      this.title = response.data.title;
      this.description = response.data.description;
      // this.$router.push({name: 'Posts});
    },
    async updatePost() {
      await PostsService.updatePost({
        id: this.$router.params.id,
        title: this.title,
        description: this.description,
      });
      this.$swal("Great!", "Your post has been updated!", "success");
      this.$router.push({ name: "Posts" });
    },
  },
};
</script>

<style type="text/css">
.form input,
.form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>