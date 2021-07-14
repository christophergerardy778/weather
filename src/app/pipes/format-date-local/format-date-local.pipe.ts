import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDateLocal'
})
export class FormatDateLocalPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
