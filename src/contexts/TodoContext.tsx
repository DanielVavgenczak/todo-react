import {createContext, useEffect, useState} from 'react';
import Todo from '../Model/Todo';
import { getData, save } from '../services/TodoService';
import TodoContextTypes from './TodoContextTypes';


export const TodoContext = createContext<TodoContextTypes>({
    todos:[],
    
    add(title: string) {

    },

    remove(todo: Todo){

    },

    toggle(todo: Todo){

    }
});

export const TodoProvider = (props: any) => {
    
    const [todos, setTodo] = useState<Todo[]>(getData);
    
    useEffect(() => {
        save(todos)
    },[todos])

    const add = (title: string) => {        
        const todo = {id: todos.length + 1 , title: title, done: false}
        setTodo([...todos, todo]);
    }

    const remove = (todo: Todo) => {
        console.log('Remove', todo)
        const index = todos.indexOf(todo);
        setTodo(todos.filter((_,i) => i !== index))
    }

    const toggle = (todo: Todo) => {
        const index = todos.indexOf(todo);
        todos[index].done = !todo.done
        setTodo([...todos]);
    }


    return (
        <TodoContext.Provider value={{todos, add, remove, toggle}}>
            {props.children}
        </TodoContext.Provider>
    )
}


