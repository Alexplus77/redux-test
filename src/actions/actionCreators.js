export const todoListCreate = (text, price) => {
  return {type:'CREATE_LIST', payload:{text, price}}
}
export const todoInputCreate=(name, value)=>{
  return{type:'CREATE_INPUT', payload:{name, value}}
}