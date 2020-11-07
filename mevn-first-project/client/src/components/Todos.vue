<template>
  <div id="HelloWorld">
    <div class="container">
      <div class="message-app">
        <h1>MongoDB ile ToDo Uygulaması 🎈</h1>
        <p>MongoDB Atlas serveri ile çalışan basit bir ToDo Uygulamasıdır.</p>
      </div>
      <div class="todo">
        <h2>Yapılacaklar!</h2>
        <ul>
          <li class="todo-list" v-for="todo in todos" :key="todo._id">
            {{ todo.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoAPI from "../services/ToDoAPI.js";

export default {
  name: "HelloWorld",
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    async loadTodos() {
      const response = await ToDoAPI.getToDos();
      this.todos = response.data;
    },
  },
  mounted() {
    this.loadTodos();
  },
};
</script>

<style lang="scss" scoped>
#HelloWorld {
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    .message-app {
      margin: 5px;
      padding: 10px;
      display: flex;
      background-color: rgb(87, 121, 47);
      color: white;
      font-size: 24px;
      font-weight: 900;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .todo {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      h2 {
        color: red;
        font-weight: bold;
        font-size: 22px;
      }
      ul {
        width: 750px;
        display: flex;
        flex-direction: column;
        padding: 5px;
        margin: 20px 20px;
        li {
          font-weight: bold;
          color: rgb(35, 116, 58);
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-content: flex-start;
          font-size: 18px;
          padding: 10px 10px;
          border: 1px dashed black;
          margin: 5px 5px;
          // overflow: scroll;
          word-break: break-all;
          input {
            margin: 5px 10px;
          }
        }
        p {
          font-weight: bold;
        }
      }
    }
  }
}
</style>