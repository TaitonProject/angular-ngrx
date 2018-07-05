import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetterComponent } from './getter.component';
import { PeoplesComponent } from './peoples/peoples.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GetterComponent, PeoplesComponent],
  exports: [GetterComponent]
})
export class GetterModule { }
