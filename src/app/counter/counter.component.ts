import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as CounterActions from './store/actions/counter.actions';
import { CounterState } from './store/reducers/counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {

  count$: Observable<number>;
  count: number;

  constructor(private store: Store<CounterState>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(new CounterActions.IncrementAction());
  }

  decrement() {
    this.store.dispatch(new CounterActions.DecrementAction());
  }

  reset() {
    this.store.dispatch(new CounterActions.ResetAction());
  }

  setValue() {
    this.store.dispatch(new CounterActions.SetValueAction(this.count));
  }

}
