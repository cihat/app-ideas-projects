import API from '../services/API'
export default {
  getToDos() {
    return API().get('todo')
  },
  addTodo(todo) {
    return API().post('addTodo', {
      todo: todo
    })
  },
  deleteTodo(todoID) {
    return API().post('deleteTodo', {
      todoID: todoID
    })
  }
}