import { useState } from 'react'
import './App.css'
import TodoInput from './components/todoinput'
import TodoList from './components/TodoList'

function App() {
const [todos,setTodos] = useState([
  'GO to the gym'
]);
const [todoValue , setTodoValue] = useState('');

function handleAddTodo(newTodo) {
  const newTodolist = [...todos,newTodo];
  setTodos(newTodolist);
}
function handleEditTodo(index) {
  const valueTobeEdited = todos(index)
  setTodoValue(valueTobeEdited)
  handleDeleteTodo(index)
  
}
function handleDeleteTodo(index){
  const newTodoslist = todos.filter((todo,todoIndex)=>{
    return todoIndex !== index
  })
  setTodos(newTodoslist)
}
  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} setTodoValue={setTodoValue}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
