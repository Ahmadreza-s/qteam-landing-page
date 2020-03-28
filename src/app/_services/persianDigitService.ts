import {Injectable} from '@angular/core';
import {isNull} from 'util';

@Injectable()
export class PersianDigitService {

  public toPersian(numbers: string) {
    let x = '';
    if (isNull(numbers))
      return '';
    for (let i = 0; i < numbers.length; i++)
      if (!isNaN(parseInt(numbers[i])))
        x += String.fromCharCode(numbers.charCodeAt(i) + 1728);
      else
        x += numbers.charAt(i);

    return x;
  }

  public toEnglish(numbers: string) {
    let x = '';
    if (isNull(numbers))
      return '';
    for (let i = 0; i < numbers.length; i++)
      x += String.fromCharCode(numbers.charCodeAt(i) - 1728);
    return x;
  }
}
