import TodoItem from "./Todo";
import React from 'react'

function TodoView(props) {
    return ( 
        <div>
            <ul>
                {props.todoList.map((todo, index) => <TodoItem todo ={todo} key={index} />)}
                {/* {props.todoList.map(todo => <TodoItem todo={todo} />)} */}
            </ul>
        </div>
    )
}
export default TodoView