import TodoListItem from "./TodoListItem";

function TodoListSection(props){
    return props.items.map((item) => {
        return <TodoListItem item={item}/>
    })
}

export default TodoListSection
