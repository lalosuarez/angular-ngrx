import { Action } from "@ngrx/store";
import { Todo } from "../todo.model";


export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export class AddTodo implements Action {
    readonly type = ADD_TODO;
    constructor(public payload: Todo) { }
}

export class DeleteTodo implements Action {
    readonly type = DELETE_TODO;
    constructor(public payload: number) { }
}

export type Actions = AddTodo | DeleteTodo;