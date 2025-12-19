import { Component, input, ViewEncapsulation } from '@angular/core';
import { ResumeDurationPipe } from '../shared/resume/resume-duration-pipe';
import { ResumeWorkPeriodPipe } from '../shared/resume/resume-period-pipe';
import { ResumeWork } from '../shared/resume/resume-work-types';

@Component({
  selector: 'app-work',
  imports: [ResumeDurationPipe, ResumeWorkPeriodPipe],
  templateUrl: './work.html',
  encapsulation: ViewEncapsulation.None,
})
export class Work {
  readonly work = input.required<ResumeWork>();
}
