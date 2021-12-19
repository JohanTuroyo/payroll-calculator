import { Component, OnInit } from '@angular/core';
import { PayrollDataService } from './service/payroll-data-service.component';

export class PayRollFormModel {
  public experience: number;
  public incomeYear: number;
  public occupation: {
    id: number,
    name: string,
    income: number
  }
  public city: {
    id: number,
    name: string
  }
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
  incomeYearOptions: any[];

  constructor(private payrollDataService: PayrollDataService) {
  }

  ngOnInit(): void {
    this.payRollFormModel = new PayRollFormModel();

    this.data = this.payrollDataService.getData();

    this.incomeYearOptions = this.data.income.map((income: any) => income.incomeYear)
  }

  onSubmit(payrollModel: PayRollFormModel) {
    const a = this.data.income
      .filter((income: any) => income.incomeYear == payrollModel.incomeYear)
      .flatMap((a: any) => a.tax)
      .find((b: any) => b.cityId === payrollModel.city.id)

    const occupation = this.data.occupations.find((occupation: any) => occupation.id == payrollModel.occupation.id)

    const exp = this.data.experiences.find((experience: any) => payrollModel.experience >= experience.from && payrollModel.experience <= experience.to)

    console.log(exp)
    console.log(occupation)
    console.log(a)

  }
}
