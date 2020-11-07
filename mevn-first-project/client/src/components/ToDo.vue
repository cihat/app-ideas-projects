<template>
  <div id="ToDoVue">
    <div class="container">
      <div class="title">
        <h1>ToDo List</h1>
      </div>
      <div class="input">
        <form v-on:submit="ekleToDo($event)">
          <input
            class="input-text"
            type="text"
            placeholder="Ne Yapacaksınız."
            v-model="yeniToDo"
          />
          <transition name="slide" mode="out-in">
            <input class="input-submit" v-if="yeniToDo" type="submit" />
          </transition>
        </form>
      </div>
      <div class="results">
        <div class="text-message" v-if="todos.length > 0"></div>
        <div class="text-message" v-else>
          <transition name="slide" mode="out-in">
            <p>Şuan Yapacak Bir Şey Yok</p>
          </transition>
        </div>
        <div class="todos">
          <transition name="slide" mode="out-in">
            <ul>
              <li v-for="todo in todos" :key="todo._id">
                <button>
                  Yaptım
                  <input id="do" type="checkbox" @click="silToDo(todo._id)" />
                </button>
                {{ todo.title }}
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "babel-polyfill";
import ToDoAPI from "../services/ToDoAPI.js";
export default {
  name: "ToDoVue",
  data() {
    return {
      yeniToDo: "",
      todos: [],
    };
  },
  mounted() {
    this.loadTodos();
  },
  methods: {
    async ekleToDo(evnt) {
      evnt.preventDefault();
      const response = await ToDoAPI.addTodo(this.yeniToDo);
      this.todos.push(response.data);
      this.yeniToDo = "";
    },
    silToDo(todoID) {
      ToDoAPI.deleteTodo(todoID);
      this.todos = this.todos.filter(function (obj) {
        return obj._id !== todoID;
      });
    },
    async loadTodos() {
      const response = await ToDoAPI.getToDos();
      this.todos = response.data;
    },
  },
};
</script>
<style lang="scss" scoped>
#ToDoVue {
  font-size: 15px;
  display: flex;
  margin: 10px 4px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .container {
    display: flex;
    min-width: 750px;
    widows: 900px;
    margin: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .title {
      display: flex;
      justify-content: center;
      align-content: center;
      cursor: pointer;
      h1 {
        padding: 15px 15px;
        border-radius: 5px;
        color: black;
        font-size: 36px;
        background-color: rgba(150, 106, 106, 0.6);
        transition: color 1s, background-color, font-size 500ms ease-in-out;
        &:hover {
          background-color: pink;
          font-size: 48px;
          color: rgba(0, 112, 187, 2);
        }
      }
    }
    .input {
      display: flex;
      justify-content: center;
      margin: 10px 10px;
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
        background-color: rgba(189, 163, 163, 0.6);
        .input-text {
          border-radius: 5px;
          font-size: 24px;
          width: 600px;
          padding: 5px;
          margin: 5px;
          color: rgb(43, 32, 32);
        }
        .input-submit {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: inherit;
          width: 100px;
          height: 40px;
          margin: 7px auto;
          border-radius: 5px;
          padding: 5px;
          font-weight: 900;
          transition: background-color, font-size, width,
            height 300ms ease-in-out;
          &:hover {
            width: 125px;
            height: 50px;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            background-color: rgba(255, 255, 255, 0.734);
            color: rgb(72, 42, 42);
            text-align: abs($number: 3);
            cursor: pointer;
          }
        }
      }
    }
    .results {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid black;
      border-radius: 5px;
      .text-message {
        font-size: 36px;
      }
      .todos {
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
            button {
              background-color: red;
              color: white;
              border-radius: 5px;
              display: flex;
              flex-direction: center;
              align-items: center;
              cursor: pointer;
              & > * {
                cursor: pointer;
              }
            }
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
}
</style>