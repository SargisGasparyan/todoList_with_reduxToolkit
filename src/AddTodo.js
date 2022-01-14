import React from 'react'
import {useDispatch} from "react-redux";
import {addTodo} from "./redux/todoReducer";

const AddTodo=()=>{
    const [value,setValue]=React.useState("")
    const dispatch=useDispatch()
    return(
        <div>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={()=>dispatch(addTodo({
                title:value,
            }))}>Add Todo</button>
        </div>
    )
}
export default AddTodo