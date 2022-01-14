import React from 'react'
import {useDispatch} from "react-redux";
import {toggleComplete} from "./redux/todoReducer";
import {removeItem} from "./redux/todoReducer";

const TodoItem=({id,title,completed})=>{
    const dispatch=useDispatch()
    const handleTemplete=()=>{
        dispatch(toggleComplete({
            id: id,
            completed: !completed

        }))
    }
    const remove=()=>{
        dispatch( removeItem({
            id: id,
        }))
    }

    return(
        <li style={{listStyle:"none",marginTop:"20px",border:"1px solid white",width:"400px"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                    <input type="checkbox" checked={completed ? true : false} onChange={
                        handleTemplete
                    }/>
                    <div>
                    <p style={{textDecoration:completed?"line-through":"none"}}>{title}</p>
                    </div>
                    <button onClick={remove}>Remove</button>
            </div>
        </li>
    )
}
export default TodoItem