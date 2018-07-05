import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeoplesComponent implements OnInit {

  @Input() peoples: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
