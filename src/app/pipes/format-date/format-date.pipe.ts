import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value);
    const day = date.toLocaleDateString("es-ES", { weekday: "long" });

    const hours = date.getHours() >= 9 ? date.getHours() : `0${date.getHours()}`;
    const minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;

    const time = `${hours}:${minutes}`;

    if (date.getHours() > 12) return `${day}, ${time} pm`;
    return `${day}, ${time} am`;
  }

}
