import React, { useState } from 'react'

export default function TodoInput(props) {
  const { handleAddTodo,todoValue,setTodoValue } = props; 
  const [todoValue , setTodoValue] = useState('');
  return (
      <header>
          <input value={todoValue} onChange={(e)=>{
             setTodoValue(e.target.value)
          }}
          type="text" placeholder='Enter todo ...'/>
          <button onClick={()=>{
            handleAddTodo(todoValue)
            setTodoValue('')
          }}>Add</button>
      </header>
  )
}
