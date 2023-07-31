import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'change_currency',
})
export class changeCurrency implements PipeTransform {
  transform(value: string,quantity:number): string {
    if (value) {
      let amountWithoutDollar = value.replace(/\$/g, '');
      let amount = parseFloat(amountWithoutDollar);
      const exchangeRateUSDToINR = 74.5;
      let indianRupeesAmount = Math.floor(amount * exchangeRateUSDToINR)
       indianRupeesAmount= (indianRupeesAmount*quantity)
      
      return "₹"+indianRupeesAmount;
    }
    return value; 
  }
}
