import { INCREMENT, DECREMENT, RESET } from '../actions/counter.actions';
import { Action } from '@ngrx/store';

export interface CounterState {
    count: number;
}

const initialState = 0;

export function counterReducer(state: number = initialState, action: Action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state - 1;

        case RESET:
            return 0;

        default:
            return state;
    }
}
