import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { TodoContext } from "../../contexts/TodoContext";
import TodoContextTypes from "../../contexts/TodoContextTypes";
import { ContainerTodo } from "./style";

interface ITodoItem {
    todo: {
        id: number;
        title: string;
        done: boolean;
    }
}

const ItemTodo = (props:ITodoItem) => {

    const {toggle, remove} = useContext<TodoContextTypes>(TodoContext)
    
    function checkedTask() {
        toggle(props.todo)
    }

    const handleRemove = () => {        
        remove(props.todo)
    }


    return (
        <ContainerTodo>
            <div className="todo-done">
                <input 
                type="checkbox" 
                checked={props.todo.done} 
                onChange={checkedTask} />
                <span>{props.todo.title}</span>
            </div>
            <button onClick={handleRemove}>
                <FaTrashAlt />
            </button>
        </ContainerTodo>
    )
}

export default ItemTodo;