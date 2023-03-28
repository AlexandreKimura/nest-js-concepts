import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

axios.get(url).then(res => {
  const todo = res.data as ITodo

  const userId = todo.userId
  const id = todo.id
  const title = todo.title
  const completed = todo.completed

  logTodo(userId, id, title, completed)
}).catch()

const logTodo = (userId: number, id: number, title: string, completed: boolean) => {
  console.log(userId, id, title, completed)
}