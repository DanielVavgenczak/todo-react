import Todo from "../Model/Todo";

const TODO_STORE = "todos";

export const save = (data:Todo[]) => {
    if(data?.length > 0) {
        localStorage.setItem(TODO_STORE, JSON.stringify(data))
    }
}

export const getData = () =>{

    const data = localStorage.getItem(TODO_STORE) || '';

    try {

        const result = JSON.parse(data) as Todo[];

        return result;
    }catch {
        return []
    }

}