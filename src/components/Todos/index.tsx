import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoContextTypes from "../../contexts/TodoContextTypes";
import ItemTodo from "../Todo/ItemTodo";
import { ContainerNone, ContainerWrapperTodo } from "./style";

const Todos = () => {
  const { todos } = useContext<TodoContextTypes>(TodoContext);
  
  return (
    <ContainerWrapperTodo>
        {todos.length > 0 ? todos?.map((todo) => (
            <ItemTodo key={todo.id} todo={todo} />
        )) : (<ContainerNone><span>no task</span></ContainerNone>)} 
    </ContainerWrapperTodo>
  );
};

export default Todos;
