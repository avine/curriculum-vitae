import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumeWorkPeriod',
})
export class ResumeWorkPeriodPipe implements PipeTransform {
  transform(startDate: string, endDate?: string): string {
    const [startYear, startMonth] = startDate.split('-');

    const monthMap: Record<string, string> = {
      '01': 'Janvier',
      '02': 'Février',
      '03': 'Mars',
      '04': 'Avril',
      '05': 'Mai',
      '06': 'Juin',
      '07': 'Juillet',
      '08': 'Août',
      '09': 'Septembre',
      '10': 'Octobre',
      '11': 'Novembre',
      '12': 'Décembre',
    };

    const [endYear, endMonth] = (endDate ?? '').split('-');

    const period = [monthMap[startMonth]];
    if (startYear !== endYear) {
      period.push(startYear);
    }
    if (endDate) {
      period.push('/', monthMap[endMonth], endYear);
    }
    return period.join(' ');
  }
}
