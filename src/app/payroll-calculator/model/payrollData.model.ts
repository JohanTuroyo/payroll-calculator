import { City } from "./city.model";
import { Experience } from "./experience.model";
import { ExtraHighIncomeTax } from "./extraHighIncomeTax.model";
import { Income } from "./income.model";
import { BasicTaxRate } from "./BasicTaxRate.model";
import { Occupation } from "./occupation.model";

export class PayrollData {
  public occupations: Occupation[];
  public incomes: Income[];
  public cities: City[];
  public basicTaxRates: BasicTaxRate[];
  public extraHighIncomeTaxes: ExtraHighIncomeTax;
  public experiences: Experience[];
}
