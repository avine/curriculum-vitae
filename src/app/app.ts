import { Component } from '@angular/core';
import { BASICS, PROJECTS, SKILLS, WORK_MARKDOWNS } from './data';
import { Download } from './download/download';
import { LogoZenika } from './logo-zenika/logo-zenika';
import { Section } from './section/section';
import { Basics, Project, Skill, Work } from './shared';
import { parseMarkdown } from './shared/common/parse-markdown';
import { ResumeWork } from './shared/work/work-types';

@Component({
  selector: 'app-root',
  imports: [Download, LogoZenika, Section, Basics, Project, Skill, Work],
  templateUrl: './app.html',
})
export class App {
  protected basics = BASICS;

  protected skills = SKILLS;

  protected works: ResumeWork[] = WORK_MARKDOWNS.map(
    parseMarkdown<Omit<ResumeWork, 'content'>>,
  ).map(({ metadata, content }) => ({ ...metadata, content }));

  protected companies = this.works.map(({ company }) => company);

  protected projects = PROJECTS;
}
