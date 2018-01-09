import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import * as fromTodo from '../store/todo.reducer';

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
}