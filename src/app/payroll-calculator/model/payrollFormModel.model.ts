import { City } from "./city.model";
import { Occupation } from "./occupation.model";

export class PayrollFormModel {
  public experience: number;
  public incomeYear: number;
  public occupation: Occupation;
  public city: City;
}
