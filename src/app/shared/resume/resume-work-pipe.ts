import { Pipe, PipeTransform } from '@angular/core';
import { ResumeWork } from './resume-work-types';
import { markdownToResumeWork } from './resume-work-utils';

@Pipe({
  name: 'resumeWork',
})
export class ResumeWorkPipe implements PipeTransform {
  transform(markdown: string): ResumeWork {
    return markdownToResumeWork(markdown);
  }
}
