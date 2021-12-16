import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PayrollCalculatorComponent } from './payroll-calculator/payroll-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    PayrollCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
