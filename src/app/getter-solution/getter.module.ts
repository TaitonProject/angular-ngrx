import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeoplesComponent } from './peoples/peoples.component';
import { GetterSolutionComponent } from './getter.component';
import { FilterPeoplesPipe } from './pipes/filter-peoples.pipe';
import { PeoplesService } from './peoples.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GetterSolutionComponent, PeoplesComponent, FilterPeoplesPipe],
  exports: [GetterSolutionComponent],
  providers: [PeoplesService]
})
export class GetterSolutionModule { }
