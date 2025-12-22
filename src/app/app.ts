import { Component } from '@angular/core';
import { Basics } from './basics/basics';
import { LogoZenika } from './logo-zenika/logo-zenika';
import { markdownToResumeWork } from './shared/resume/resume-work-utils';
import { SKILLS } from './shared/skills';
import { WORK_MARKDOWNS } from './shared/works';
import { Skill } from './skill/skill';
import { Work } from './work/work';

@Component({
  selector: 'app-root',
  imports: [Basics, LogoZenika, Skill, Work],
  templateUrl: './app.html',
})
export class App {
  protected works = WORK_MARKDOWNS.map(markdownToResumeWork);

  protected companies = Array.from(new Set(this.works.map(({ company }) => company)));

  protected skills = SKILLS;
}
