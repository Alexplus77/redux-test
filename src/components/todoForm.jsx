import React, {useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {todoListCreate} from 'actions/actionCreators'
import {todoInputCreate} from "actions/actionCreators";
import 'App.css'

const TodoForm = () => {
    const form=useRef()
    const dispatch=useDispatch()
    const text=useSelector(state => state.todoInput)
    console.log(text)
    const handleChange=({target})=>{
        const{name, value}=target
        dispatch(todoInputCreate(name, value))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(todoListCreate(text?.text, text?.price))
        form.current.reset()
    }

  return(
      <form onSubmit={handleSubmit} ref={form}>
          <input onChange={handleChange} name='text' defaultValue='' required={true} placeholder={'Название услуги'}/>
          <input onChange={handleChange} name='price' defaultValue='' required={true} placeholder={'Стоимость'}/>
          <button  type={"submit"}>Add</button>
      </form>
  )
}

export default TodoForm