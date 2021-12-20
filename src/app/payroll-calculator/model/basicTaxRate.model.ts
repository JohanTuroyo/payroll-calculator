import { Tax } from "./tax.model";

export interface BasicTaxRate {
  incomeYear: number;
  taxes: Tax[];
}
