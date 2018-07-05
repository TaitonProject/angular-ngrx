import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  transactions: Array<number> = new Array<number>();

  constructor() { }

  getBalance(): number {
    return this.sum();
  }

  isNegative(): boolean {
    return this.getBalance() < 0;
  }

  deposit(money: number) {
    this.transactions.push(money);
  }

  withdrow(money: number) {
    this.transactions.push(-money);
  }

  sum() {
    let sum = 0;
    this.transactions.forEach(_ => sum += _);
    return sum;
  }

  logger() {
    console.log('computed');
  }

}
