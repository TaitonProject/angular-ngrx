import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class CounterWithoutPayloadModule { }
