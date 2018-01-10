import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo.component';
import { todoReducer } from './store/todo.reducer';

@NgModule({
    declarations: [
        TodoComponent,
        TodoListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        StoreModule.forFeature('todo', todoReducer)        
    ],
    exports: [
        TodoComponent,
        TodoListComponent
    ],
    bootstrap: [TodoComponent]
})
export class TodoModule { }