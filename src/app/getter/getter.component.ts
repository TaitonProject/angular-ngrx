import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-getter',
  templateUrl: './getter.component.html',
  styleUrls: ['./getter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetterComponent implements OnInit {

  peoples = ['ttt', 'ggg', 'hhh'];
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  getSelectedPeoples(): Array<string> {
    return this.peoples.filter(people => people !== 'ttt');
  }

  changePeoples() {
    this.peoples.push('yyy');
  }

  changeAllPeoples() {
    this.peoples = ['ggg', '666', '888', 'ttt'];
  }

  count() {
    console.log('computed', this.counter++);
  }
}
