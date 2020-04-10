import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe extends CurrencyPipe implements PipeTransform {

  transform(value: number, symbol: string = 'symbol', digits: string = '1.0-0'): string {
    return super.transform(value ? value : 0, null, symbol, digits);
  }

}
