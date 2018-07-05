import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PeoplesService {

  peoples$: BehaviorSubject<Array<string>> = new BehaviorSubject(['ttt', 'ggg', 'hhh']);

  constructor() { }
}
