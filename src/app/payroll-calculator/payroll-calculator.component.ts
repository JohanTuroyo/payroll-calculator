import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payroll-calculator',
  templateUrl: './payroll-calculator.component.html',
  styleUrls: ['./payroll-calculator.component.scss']
})
export class PayrollCalculatorComponent implements OnInit {
  occupations: {} = {};
  basicLocationTaxRates: {} = {};
  // occupations = { 'Programmer': 1000, 'Teacher': 1000, 'Cashier': 1000 }
  incomeYears: {} = {};
  // incomeYears = { '2020': 0.70, '2019': 0.71 };
  // occupations: string[] = ['Programmer','Teacher','Cashier'];
  cities: string[] = ['Stockholm', 'Gothenburg'];
  // incomeYears: number[] = [2020,2019];


  constructor() { }

  ngOnInit(): void {
    this.occupations = require('../../data/data.json').occupations;
    this.basicLocationTaxRates = require('../../data/data.json').basicLocationTaxRate;
    console.log(this.basicLocationTaxRates)
    // this.incomeYears = require('../../data/data.json');
  }
}
