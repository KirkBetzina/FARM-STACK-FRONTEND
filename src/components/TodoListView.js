import TodoItem from "./Todo";

function TodoView(props) {
    console.log('HEY OVER HERE', props)
    return ( 
        <div>
            <ul>
                {props.todoList.map((todo, idx) => <TodoItem todo ={todo} key={idx} />)}
                
            </ul>
        </div>
    )
}
export default TodoView