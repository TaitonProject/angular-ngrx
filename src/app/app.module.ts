import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CounterModule } from './counter/counter.module';
import { SimpleCounterModule } from './simple-counter/simple-counter.module';
import { SimpleCounterSolutionModule } from './simple-counter-solution/simple-counter.module';

import { GetterModule } from './getter/getter.module';
import { GetterSolutionModule } from './getter-solution/getter.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CounterWithoutPayloadModule } from './counter-without-payload/counter-without-payload.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    SimpleCounterModule,
    SimpleCounterSolutionModule,
    GetterModule,
    GetterSolutionModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    // CounterWithoutPayloadModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
