import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { counterReducer } from './components/counter/store/counter.reducer';
import { CounterComponent } from './components/counter/counter.component';
import { todoReducer } from './components/todo/store/todo.reducer';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: counterReducer,
      todo: todoReducer
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
