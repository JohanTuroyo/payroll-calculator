import { City } from "./City.model";
import { Experience } from "./Experience.model";
import { ExtraHighIncomeTax } from "./ExtraHighIncomeTax.model";
import { Income } from "./Income.model";
import { IncomeTax } from "./IncomeTax.model";
import { Occupation } from "./Occupation.model";

export class PayrollData {
  public occupations: Occupation[];
  public incomes: Income[];
  public cities: City[];
  public incomeTaxes: IncomeTax[];
  public extraHighIncomeTaxes: ExtraHighIncomeTax[];
  public experiences: Experience[];
}
