import React from 'react'
import TodoCard from './TodoCArd'

export default function TodoList(props) {
    const {todos} = props
  return (
    <ul className='main'>
      {todos.map((todo, todoIndex)=>{
         return (
            <div>
                <TodoCard {...props} key={todoIndex} index={todoIndex}>
                     {todo} 
                </TodoCard>
            </div>
         )
      })}
    </ul>
  )
}
