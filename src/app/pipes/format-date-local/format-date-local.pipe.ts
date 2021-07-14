import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDateLocal'
})
export class FormatDateLocalPipe implements PipeTransform {

  transform(value: string): string {
    return new Date(value).toLocaleString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

}
