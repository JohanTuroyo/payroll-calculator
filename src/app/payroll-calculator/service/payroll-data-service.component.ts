import { Injectable } from '@angular/core';
import { PayrollFormModel } from '../model/PayrollFormModel.model';

@Injectable({
  providedIn: 'root',
})
export class PayrollDataService {

  getData() {
    const data = require('../../../data/data.json');
    return data;
  }

  calculatePayRoll(data: any, payrollModel: PayrollFormModel): number {
    const a = data.incomeTaxes
      .filter((income: any) => income.incomeYear == payrollModel.incomeYear)
      .flatMap((a: any) => a.tax)
      .find((b: any) => b.cityId === payrollModel.city.id)

    const exp = data.experiences.find((experience: any) => payrollModel.experience >= experience.from && payrollModel.experience <= experience.to)

    let salaryBeforeTaxed = data.incomes.find((income: any) => income.occupationId == payrollModel.occupation.id).income * exp.percentageGain;

    let salaryAfterTax = 0;

    // TODO - finare kod, alltså skapa mindre variabler ur de längre
    // FIXME - Fixa Read ME
    // ändra namn på de dåliga variabel namn O A etc..

    if (salaryBeforeTaxed > data.extraHighIncomeTax.higherTaxRate.highTaxRate) {
      salaryAfterTax += this.highTaxRateCalculation(data, salaryBeforeTaxed);
      salaryBeforeTaxed = data.extraHighIncomeTax.higherTaxRate.highTaxRate;
    }

    if (salaryBeforeTaxed > data.extraHighIncomeTax.lowerTaxRate.highTaxRate) {
      salaryAfterTax += this.lowerTaxRateCalculation(data, salaryBeforeTaxed);
      salaryBeforeTaxed = data.extraHighIncomeTax.lowerTaxRate.highTaxRate;
    }

    salaryAfterTax += this.standardTaxRateCalculation(salaryBeforeTaxed, a);

    return salaryAfterTax;
  }

  highTaxRateCalculation(data: any, salaryBeforeTaxed: any): number {
    return data.extraHighIncomeTax.higherTaxRate.incomeAfterTaxPercentage * (salaryBeforeTaxed - data.extraHighIncomeTax.higherTaxRate.highTaxRate);
  }

  lowerTaxRateCalculation(data: any, salaryBeforeTaxed: any): number {
    return data.extraHighIncomeTax.lowerTaxRate.incomeAfterTaxPercentage * (salaryBeforeTaxed - data.extraHighIncomeTax.lowerTaxRate.highTaxRate)
  }

  standardTaxRateCalculation(salaryBeforeTaxed: any, a: any): number {
    return salaryBeforeTaxed * a.incomeAfterTaxPercentage;
  }
}
