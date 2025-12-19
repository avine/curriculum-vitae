import { Component } from '@angular/core';
import { Header } from './header/header';
import { ResumeWorkPipe } from './shared/resume/resume-work-pipe';
import { WORK_MARKDOWNS } from './shared/works';
import { Work } from './work/work';

@Component({
  selector: 'app-root',
  imports: [Header, Work, ResumeWorkPipe],
  templateUrl: './app.html',
})
export class App {
  protected workMarkdowns = WORK_MARKDOWNS;
}
