import { Component, input } from '@angular/core';
import { ResumeProject } from './project-types';

@Component({
  selector: 'app-project',
  templateUrl: './project.html',
})
export class Project {
  readonly project = input.required<ResumeProject>();
}
