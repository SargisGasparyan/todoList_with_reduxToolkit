import React from 'react'
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";

const TodoList=()=>{

    const todos = useSelector((state)=>state.todos)
    return(
        <div>
            {todos.map((todo)=>{
                return(
                    <div key={Math.random()}>
                        <TodoItem title={todo.title} id={todo.id} completed={todo.completed}/>
                    </div>
                )
            })}
        </div>
    )
}
export default TodoList