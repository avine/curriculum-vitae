import { Component, computed, input, ViewEncapsulation } from '@angular/core';
import { parseExperience } from '../experience/experience-utils';

@Component({
  selector: 'app-work',
  templateUrl: './work.html',
  encapsulation: ViewEncapsulation.None,
})
export class Work {
  data = input.required<string>();

  protected output = computed(() => parseExperience(this.data()));

  protected duration = computed(() => {
    const { endDate, startDate } = this.output();

    const oneDayInMs = 86_400_000;

    const days = (new Date(endDate).getTime() - new Date(startDate).getTime()) / oneDayInMs;

    const months = Math.round(days / 30) + 1;

    if (months <= 12) {
      return `${months} mois`;
    }

    const years = Math.floor(months / 12);

    return `${years} ${years >= 2 ? 'ans' : 'an'} et ${months % 12} mois`;
  });
}
