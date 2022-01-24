
const initialState={
    text:'',
    price:''
}
const todoInputReduce = (state=initialState, action) => {
if(action.type==='CREATE_INPUT'){
    const {name, value}=action.payload
    return {...state, [name]:value}
}
return state
}
export {todoInputReduce}