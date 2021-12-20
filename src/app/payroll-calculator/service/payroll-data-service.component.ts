import { Injectable } from '@angular/core';
import { Experience } from '../model/experience.model';
import { Income } from '../model/income.model';
import { BasicTaxRate } from '../model/BasicTaxRate.model';
import { PayrollData } from '../model/payrollData.model';
import { PayrollFormModel } from '../model/payrollFormModel.model';
import { Tax } from '../model/tax.model';
import { HighIncomeTax } from '../model/highIncomeTax.model';

@Injectable({
  providedIn: 'root',
})
export class PayrollDataService {

  getData(): PayrollData {
    const data = require('../../../data/data.json') as PayrollData;
    return data;
  }

  calculatePayRoll(data: PayrollData, payrollModel: PayrollFormModel): number {
    const basicTaxRate = data.basicTaxRates
      .filter((income: BasicTaxRate) => income.incomeYear == payrollModel.incomeYear)
      .flatMap((basicTaxRate: BasicTaxRate) => basicTaxRate.taxes)
      .find((tax: Tax) => tax.cityId === payrollModel.city.id);

    const experience = data.experiences
      .find((experience: Experience) => payrollModel.experience >= experience.from && payrollModel.experience <= experience.to)

    const income = data.incomes
      .find((income: Income) => income.occupationId == payrollModel.occupation.id);

    if (experience && income && basicTaxRate) {
      return this.calculateSalaryAfterTaxes(data, income, experience, basicTaxRate);
    } else {
      throw new Error('System Error - Could Not Calculate Payroll');
    }
  }

  calculateSalaryAfterTaxes(data: PayrollData, income: Income, experience: Experience, basicTaxRate: Tax): number {

    let salaryBeforeTaxed = income.salary * experience.percentageGain;

    const higherTaxRate = data.extraHighIncomeTaxes.higherTaxRate;
    const lowerTaxRate = data.extraHighIncomeTaxes.lowerTaxRate;

    let salaryAfterTax = 0;

    if (salaryBeforeTaxed > higherTaxRate.fromSalaryTaxed) {
      salaryAfterTax += this.highTaxRateCalculation(higherTaxRate, salaryBeforeTaxed);
      salaryBeforeTaxed = higherTaxRate.fromSalaryTaxed;
    }

    if (salaryBeforeTaxed > data.extraHighIncomeTaxes.lowerTaxRate.fromSalaryTaxed) {
      salaryAfterTax += this.lowerTaxRateCalculation(lowerTaxRate, salaryBeforeTaxed);
      salaryBeforeTaxed = lowerTaxRate.fromSalaryTaxed;
    }

    salaryAfterTax += this.standardTaxRateCalculation(salaryBeforeTaxed, basicTaxRate);

    return salaryAfterTax;
  }

  highTaxRateCalculation(higherTaxRate: HighIncomeTax, salaryBeforeTaxed: number): number {
    return higherTaxRate.incomeAfterTaxPercentage * (salaryBeforeTaxed - higherTaxRate.fromSalaryTaxed);
  }

  lowerTaxRateCalculation(lowerTaxRate: HighIncomeTax, salaryBeforeTaxed: number): number {
    return lowerTaxRate.incomeAfterTaxPercentage * (salaryBeforeTaxed - lowerTaxRate.fromSalaryTaxed)
  }

  standardTaxRateCalculation(salaryBeforeTaxed: number, basicTaxRate: Tax): number {
    return salaryBeforeTaxed * basicTaxRate.incomeAfterTaxPercentage;
  }
}
