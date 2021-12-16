import { Component, OnInit } from '@angular/core';
import { PayrollDataService } from './service/payroll-data-service.component';

@Component({
  selector: 'app-payroll-calculator',
  templateUrl: './payroll-calculator.component.html',
  styleUrls: ['./payroll-calculator.component.scss']
  ,providers:  [ PayrollDataService ]
})
export class PayrollCalculatorComponent implements OnInit {
  occupations: {} = {};
  basicLocationTaxRates: {} = {};
  // occupations = { 'Programmer': 1000, 'Teacher': 1000, 'Cashier': 1000 }
  incomeYears: {} = {};
  // incomeYears = { '2020': 0.70, '2019': 0.71 };
  // occupations: string[] = ['Programmer','Teacher','Cashier'];
  cities: string[] = ['Stockholm', 'Gothenburg'];
  data: any
  occupation: any;
  incomeYear: any;
  city: any;
  // incomeYears: number[] = [2020,2019];


  constructor(private payrollDataService: PayrollDataService) {

    // console.log(payrollDataService.data)
    // this.data = payrollDataService.data;
  }

  click(form:any){
console.log(form)
  }

  ngOnInit(): void {
    this.data = require('../../data/data.json');

    setTimeout(() => {
      console.log(this.occupation)
    }, 5000);
    // this.data = data;
    // console.log(this.payrollDataService.getData())
    // this.basicLocationTaxRates = require('../../data/data.json').basicLocationTaxRate;
    // console.log(this.basicLocationTaxRates)
    // this.incomeYears = require('../../data/data.json');
  }
}
