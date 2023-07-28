import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'change_currency',
})
export class changeCurrency implements PipeTransform {
  transform(value: string): string {
    if (value) {
      let amountWithoutDollar = value.replace(/\$/g, '');
      let amount = parseFloat(amountWithoutDollar);
      const exchangeRateUSDToINR = 74.5;
      const indianRupeesAmount = Math.floor(amount * exchangeRateUSDToINR)
      return "₹"+indianRupeesAmount;
    }
    return value; 
  }
}
