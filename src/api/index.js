import {TodoResource} from './resources'

export default {
  getTodos: function () {
    return TodoResource.get()
  },
  createTodo: function (name) {
    return TodoResource.save({name: name})
  },
  updateTodo: function (todo, name) {
    return TodoResource.update({id: todo._id}, {name: todo.name, completed: todo.completed, newName: name})
  },
  deleteTodo: function (todo) {
    return TodoResource.delete({id: todo._id})
  }
}
