import { Component, input } from '@angular/core';
import { DurationPipe, PeriodPipe } from '../common';
import { ResumeWork } from './work-types';

@Component({
  selector: 'app-work',
  imports: [DurationPipe, PeriodPipe],
  templateUrl: './work.html',
})
export class Work {
  readonly work = input.required<ResumeWork>();
}
