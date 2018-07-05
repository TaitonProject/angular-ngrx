import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPeoples'
})
export class FilterPeoplesPipe implements PipeTransform {

  transform(peoples: Array<string>, args?: any): any {
    console.log('filter peoples');
    return peoples.filter(people => people !== 'ttt');
  }

}
