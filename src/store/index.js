import {createStore, combineReducers} from 'redux'
import {todoListReducer} from "reducers/todoListReducer";
import {todoInputReduce} from "reducers/todoInputReducer";

const reducer=combineReducers({
    todoList:todoListReducer,
todoInput:todoInputReduce
})

const store=createStore(reducer)

export {store}

