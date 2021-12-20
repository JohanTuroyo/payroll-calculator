import { Component, OnInit } from '@angular/core';
import { BasicTaxRate } from './model/BasicTaxRate.model';
import { PayrollData } from './model/payrollData.model';
import { PayrollFormModel } from './model/payrollFormModel.model';
import { PayrollDataService } from './service/payroll-data-service.component';

@Component({
  selector: 'app-payroll-calculator',
  templateUrl: './payroll-calculator.component.html',
  styleUrls: ['./payroll-calculator.component.scss'],
  providers: [PayrollDataService]
})
export class PayrollCalculatorComponent implements OnInit {
  data: PayrollData;
  payRollFormModel: PayrollFormModel;
  incomeYearOptions: number[];
  salaryAfterTaxes: number;

  constructor(private payrollDataService: PayrollDataService) { }

  ngOnInit(): void {
    this.payRollFormModel = new PayrollFormModel();
    this.data = this.payrollDataService.getData();
    this.incomeYearOptions = this.data.basicTaxRates.map((income: BasicTaxRate) => income.incomeYear);
    console.log(this.payRollFormModel)
  }

  onSubmit(): void {
    this.salaryAfterTaxes = this.payrollDataService.calculatePayRoll(this.data, this.payRollFormModel);
  }
}
