import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleCounterComponent } from './simple-counter.component';
import { FormsModule } from '@angular/forms';
import { AccountService } from './account.service';
import { BalanceComponent } from './balance/balance.component';
import { ActionComponent } from './action/action.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [AccountService],
  declarations: [SimpleCounterComponent, BalanceComponent, ActionComponent, TransactionsComponent],
  exports: [SimpleCounterComponent]
})
export class SimpleCounterSolutionModule { }
