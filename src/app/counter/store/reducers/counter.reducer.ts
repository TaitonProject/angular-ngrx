import { CounterActions } from '../actions/counter.actions';
import * as actions from '../actions/counter.actions';

export interface CounterState {
    count: number;
}

const initialState = 0;

export function counterReducer(state: number = initialState, action: CounterActions) {
    switch (action.type) {
        case actions.INCREMENT:
            return state + 1;

        case actions.DECREMENT:
            return state - 1;

        case actions.RESET:
            return 0;

        case actions.SET_VALUE:
            return action.payload;

        default:
            return state;
    }
}
