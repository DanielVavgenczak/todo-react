import Todo from "../Model/Todo";

export default interface TodoContextTypes {

    todos: Todo[];

    add(title: string):void;

    remove(todo: Todo):void;

    toggle(todo: Todo): void;
}