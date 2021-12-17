import { Component, Input, OnInit } from '@angular/core';
import { PayrollDataService } from './service/payroll-data-service.component';

export class PayRollFormModel {
  public experience: number;
  public occupation: string
  public city: string
  public incomeYear: string;
}

@Component({
  selector: 'app-payroll-calculator',
  templateUrl: './payroll-calculator.component.html',
  styleUrls: ['./payroll-calculator.component.scss'],
  providers: [PayrollDataService]
})
export class PayrollCalculatorComponent implements OnInit {
  data: any
  payRollFormModel: PayRollFormModel;
  incomeYearOptions: number[];

  constructor(private payrollDataService: PayrollDataService) {
  }

  ngOnInit(): void {
    this.data = this.payrollDataService.getData();

    const years = this.data.basicLocationTaxRate
      .map((tax: any) => tax.incomeYear)

    this.incomeYearOptions = [... new Set(years)] as number[];



    this.payRollFormModel = new PayRollFormModel();
  }

  onSubmit(value: PayRollFormModel) {
    console.log(value)
  }
}
