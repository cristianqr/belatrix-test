import {DecimalPipe} from '@angular/common';
import {Injectable} from '@angular/core';
@Injectable()
export class CommonUtilsService {
  constructor (
    private decimalPipe: DecimalPipe
  ) {}

  convertStringToNumber (number: any) {
    const formattedNumber = number.replace(',', '');
    if (!number || isNaN(formattedNumber)) {
      return 0;
    }
    return +formattedNumber;
  }

  formatNumber (number: any) {
    const formattedNumber = number.replace(',', '');
    if (!number || isNaN(formattedNumber)) {
      return number;
    }
    return this.decimalPipe.transform(formattedNumber, '1.2-4');
  }
}
