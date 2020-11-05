<template>
  <div class="">
    <h1>Edit Task</h1>
    <task-form @createOrUpdate="createOrUpdate" :task="this.task"></task-form>
  </div>
</template>

<script>
import taskForm from "../components/TaskForm";
import { api } from "../helpers/Helpers";

export default {
  name: "edit",
  components: {
    taskForm,
  },
  data() {
    return {
      task: {},
    };
  },
  // methods: {
  //   createOrUpdate: async function () {
  //     await api.updatetask(task);
  //     this.flash("task updated successfully!", "success");
  //     this.$router.push(`/tasks/${task._id}`);
  //   },
  // },
  // async mounted() {
  //   this.task = await api.gettask(this.$route.params.id);
  // },
};
</script>

<style>
</style>