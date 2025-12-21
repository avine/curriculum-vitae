import { Component } from '@angular/core';
import { Basics } from './basics/basics';
import { ResumeWorkPipe } from './shared/resume/resume-work-pipe';
import { SKILLS } from './shared/skills';
import { WORK_MARKDOWNS } from './shared/works';
import { Skill } from './skill/skill';
import { Work } from './work/work';

@Component({
  selector: 'app-root',
  imports: [Basics, ResumeWorkPipe, Skill, Work],
  templateUrl: './app.html',
})
export class App {
  protected workMarkdowns = WORK_MARKDOWNS;

  protected skills = SKILLS;
}
