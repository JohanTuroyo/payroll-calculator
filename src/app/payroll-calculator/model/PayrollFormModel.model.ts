import { City } from "./City.model";
import { Occupation } from "./Occupation.model";

export class PayrollFormModel {
  public experience: number;
  public incomeYear: number;
  public occupation: Occupation;
  public city: City;
}
