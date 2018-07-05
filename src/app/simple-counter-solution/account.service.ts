import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AccountService implements OnDestroy {

  balance$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  isNegative$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  transactions$: BehaviorSubject<Array<number>> = new BehaviorSubject<Array<number>>([]);

  constructor() {
    this.subscribeTransactions();
    this.subscribeBalance();
  }

  subscribeTransactions() {
    this.transactions$.subscribe(transactions => {
      this.balance$.next(this.sum(transactions));
    });
  }

  subscribeBalance() {
    this.balance$.subscribe(balance => {
      this.isNegative$.next(balance < 0);
    });
  }

  deposit(money: number) {
    this.transactions$.next([...this.transactions$.getValue(), money]);
  }

  withdrow(money: number) {
    this.transactions$.next([...this.transactions$.getValue(), -money]);
  }

  sum(array: Array<number>) {
    return array.reduce((prev, next) => prev + next, 0);
  }

  logger() {
    console.log('computed');
  }

  ngOnDestroy(): void {
    this.transactions$.unsubscribe();
    this.balance$.unsubscribe();
  }

}
