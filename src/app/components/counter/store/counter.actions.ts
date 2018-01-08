import { Action } from "@ngrx/store";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export class Increment implements Action {
    readonly type = INCREMENT;
    payload: number
}

export class Decrement implements Action {
    readonly type = DECREMENT;
    payload: number
}

export class Reset implements Action {
    readonly type = RESET;
    payload: number
}

export type Actions = Increment | Decrement | Reset;