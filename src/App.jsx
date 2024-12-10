import { useEffect, useState } from 'react'
import './App.css'
import TodoInput from './components/todoinput'
import TodoList from './components/TodoList'

function App() {
const [todos,setTodos] = useState([]);
const [todoValue , setTodoValue] = useState('');

function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({ todos: newList }))

}

function handleAddTodo(newTodo) {
  const newTodolist = [...todos,newTodo];
  persistData(newTodolist);
  setTodos(newTodolist);
}
function handleEditTodo(index) {
  const valueTobeEdited = todos[index]
  setTodoValue(valueTobeEdited)
  handleDeleteTodo(index)
  
}
function handleDeleteTodo(index){
  const newTodolist = todos.filter((todo,todoIndex)=>{
    return todoIndex !== index
  })
  persistData(newTodolist);
  setTodos(newTodolist)
}

useEffect(()=>{
    if(!localStorage){
      return
    } 
   const localTodos = localStorage.getItem('todos')   

    if(!localTodos){
      return 
    }
   const localTodo = JSON.parse(localTodos).todos
    setTodos(localTodo)

},[])

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} setTodoValue={setTodoValue} todoValue={todoValue}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos}/>
      </>
  )
}

export default App
