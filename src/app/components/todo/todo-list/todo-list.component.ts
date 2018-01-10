import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import * as fromTodo from '../store/todo.reducer';
import * as TodoActions from '../store/todo.actions';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html'
})
export class TodoListComponent {

    todoState: Observable<fromTodo.State>

    constructor(private store: Store<{todo: fromTodo.State}>) { }

    ngOnInit() {
        this.todoState = this.store.select('todo');
    }

    onDeleteClick(index) {
        this.store.dispatch(new TodoActions.DeleteTodo(index));
    }
}