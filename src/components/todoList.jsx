import React from "react";
import {useSelector} from 'react-redux'


const TodoList = () => {
    const items=useSelector(state => state.todoList)

  return(
      <ul>
          {
           items.map(({id, text, price})=><li key={id}>{text} {price} руб.</li>)
          }
      </ul>
  )
}
export default TodoList