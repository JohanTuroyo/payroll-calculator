import { HighIncomeTax } from "./highIncomeTax.model";

export interface ExtraHighIncomeTax {
  lowerTaxRate: HighIncomeTax;
  higherTaxRate: HighIncomeTax;
}
