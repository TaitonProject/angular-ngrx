import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-simple-counter',
  templateUrl: './simple-counter.component.html',
  styleUrls: ['./simple-counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleCounterComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

}
