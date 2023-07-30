import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'change_currency',
})
export class changeCurrency implements PipeTransform {
  transform(value: string,count:number): string {
    if (value) {
      let amountWithoutDollar = value.replace(/\$/g, '');
      let amount = parseFloat(amountWithoutDollar);
      const exchangeRateUSDToINR = 74.5;
      let indianRupeesAmount = Math.floor(amount * exchangeRateUSDToINR)
      if(count){
       indianRupeesAmount= (indianRupeesAmount*count)
      }
      return "₹"+indianRupeesAmount;
    }
    return value; 
  }
}
