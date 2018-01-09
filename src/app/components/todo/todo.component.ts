import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import * as fromTodo from './store/todo.reducer';

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent {

    todoState: Observable<fromTodo.State>

    constructor(private store: Store<{todo: fromTodo.State}>) { }

    ngOnInit() {
        this.todoState = this.store.select('todo');
        console.log('todoState', this.todoState);
    }
}