import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PeoplesService } from './peoples.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-getter-solution',
  templateUrl: './getter.component.html',
  styleUrls: ['./getter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetterSolutionComponent implements OnInit {

  peoples$: Subject<Array<string>> = this.peoplesService.peoples$;
  counter = 0;

  constructor(public peoplesService: PeoplesService) { }

  ngOnInit() {
  }

  changePeoples() {
    this.peoples$.next([...this.peoplesService.peoples$.getValue(), 'yyy']);
  }

  changeAllPeoples() {
    this.peoples$.next(['ggg', '666', '888', 'ttt']);
  }

  count() {
    console.log('computed solu', this.counter++);
  }
}
