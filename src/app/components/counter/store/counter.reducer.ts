import { Action } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export interface State {
	counter: number;
}

export function counterReducer(state = 0, action: CounterActions.Actions) {
	switch (action.type) {
		case CounterActions.INCREMENT:
			return state + 1;

		case CounterActions.DECREMENT:
			return state - 1;

		case CounterActions.RESET:
			return 0;

		default:
			return state;
	}
}