import { Action } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { Todo } from '../todo.model';

export interface State {
	todos: Todo[];
}

const initialState: State = {
    todos: [
        new Todo("Pay electricity bill"),
        new Todo("Go to GYM")
    ]
};

export function todoReducer(state = initialState, action: TodoActions.Actions) {
    switch(action.type) {
        case TodoActions.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state;    
    }
}