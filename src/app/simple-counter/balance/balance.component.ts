import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalanceComponent implements OnInit {

  constructor(public account: AccountService) { }

  ngOnInit() {
  }

}
