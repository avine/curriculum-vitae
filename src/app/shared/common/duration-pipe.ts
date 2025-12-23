import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform([startDate, endDate]: [string, string]): unknown {
    const oneDayMs = 86_400_000;

    const days = (new Date(endDate).getTime() - new Date(startDate).getTime()) / oneDayMs;

    const months = Math.floor(days / 30) + 1;

    if (months <= 12) {
      return `${months} mois`;
    }

    const years = Math.floor(months / 12);

    return `${years} ${years >= 2 ? 'ans' : 'an'} et ${months % 12} mois`;
  }
}
