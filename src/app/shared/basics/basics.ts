import { Component, input } from '@angular/core';
import { LogoZenika } from '../../logo-zenika/logo-zenika';
import { ResumeBasics } from './basics-types';

@Component({
  selector: 'app-basics',
  imports: [LogoZenika],
  templateUrl: './basics.html',
})
export class Basics {
  readonly basics = input.required<ResumeBasics>();
}
