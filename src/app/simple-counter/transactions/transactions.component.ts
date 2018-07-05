import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsComponent implements OnInit {

  constructor(public account: AccountService) { }

  ngOnInit() {
  }

}
