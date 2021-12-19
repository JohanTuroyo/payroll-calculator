import { Component, Input, OnInit } from '@angular/core';
import { PayrollData } from './model/PayrollData.model';
import { PayrollFormModel } from './model/PayrollFormModel.model';
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
  salaryAfterTaxes: string;

  constructor(private payrollDataService: PayrollDataService) { }

  ngOnInit(): void {
    this.payRollFormModel = new PayrollFormModel();
    this.data = this.payrollDataService.getData();
    this.incomeYearOptions = this.data.incomeTaxes.map((income: any) => income.incomeYear);
  }

  onSubmit(): void {
    this.salaryAfterTaxes = this.payrollDataService.calculatePayRoll(this.data, this.payRollFormModel)
      .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
