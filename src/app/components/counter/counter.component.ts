import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as CounterActions from './store/counter.actions';
import * as fromCounter from './store/counter.reducer';

@Component({
  selector: 'counter',
	template: `
		<div>Current Count: {{ counter | async }}</div>
		<button (click)="increment()">Increment</button>
		<button (click)="decrement()">Decrement</button>
		<button (click)="reset()">Reset Counter</button>
	`
})
export class CounterComponent {
  counter: Observable<number>;

  constructor(private store: Store<fromCounter.AppState>){ }

	ngOnInit() {
		this.counter = this.store.select('counter');
	}

	increment(){
		this.store.dispatch(new CounterActions.Increment());
	}

	decrement(){
		this.store.dispatch(new CounterActions.Decrement());
	}

	reset(){
		this.store.dispatch(new CounterActions.Reset());
	}  
}
