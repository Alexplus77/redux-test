import {nanoid} from "nanoid";

const initialState=[
    {id: nanoid(), text:'Ремонт телефона', price:20000}
]

const todoListReducer = (state=initialState, action) => {
if(action.type==='CREATE_LIST'){
    const {text, price}=action?.payload

  return  [...state, {id:nanoid(), text:text, price:price}]
}

return state

}
export {todoListReducer}