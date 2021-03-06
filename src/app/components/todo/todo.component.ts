import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import * as fromTodo from './store/todo.reducer';
import * as TodoActions from './store/todo.actions';
import { Todo } from "./todo.model";

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent {

    todoState: Observable<fromTodo.State>
    description: string = '';

    constructor(private store: Store<{todo: fromTodo.State}>) { }

    ngOnInit() {
        this.todoState = this.store.select('todo');
    }

    onAddTodoClick() {
        let tempDesc = this.description.trim() === '' ? 'Undefined description' : this.description.trim();
        this.store.dispatch(new TodoActions.AddTodo(new Todo(tempDesc)));
    }
}