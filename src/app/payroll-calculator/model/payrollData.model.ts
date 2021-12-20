import { City } from "./city.model";
import { Experience } from "./experience.model";
import { ExtraHighIncomeTax } from "./extraHighIncomeTax.model";
import { Income } from "./income.model";
import { BasicTaxRate } from "./basicTaxRate.model";
import { Occupation } from "./occupation.model";

export class PayrollData {
  occupations: Occupation[];
  incomes: Income[];
  cities: City[];
  basicTaxRates: BasicTaxRate[];
  extraHighIncomeTax: ExtraHighIncomeTax;
  experiences: Experience[];
}
