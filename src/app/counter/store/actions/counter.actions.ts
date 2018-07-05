import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const SET_VALUE = 'SET_VALUE';

export class IncrementAction implements Action {
    readonly type = INCREMENT;
}

export class DecrementAction implements Action {
    readonly type = DECREMENT;
}

export class ResetAction implements Action {
    readonly type = RESET;
}

export class SetValueAction implements Action {
    readonly type = SET_VALUE;
    constructor(public payload: number) { }
}

export type CounterActions = IncrementAction | DecrementAction | ResetAction | SetValueAction;
