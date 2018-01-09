import { Action } from "@ngrx/store";
import { Todo } from "../todo.model";


export const ADD_TODO = 'ADD_TODO'

export class AddTodo implements Action {
    readonly type = ADD_TODO;
    constructor(public payload: Todo) { }
}

export type Actions = AddTodo;