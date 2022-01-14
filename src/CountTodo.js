import React from 'react'
import {useSelector} from "react-redux";
export const CountTodo= ()=>  {
    const todos = useSelector((state)=>state.todos)
return(
    <div>
        <h1>Todos length is {todos.length}</h1>
    </div>
)
}