import { Component } from '@angular/core';
import { Experience } from './experience/experience';
import { EXP_DATA } from './experience/experience-data';
import { Header } from './header/header';
import { Work } from './work/work';

@Component({
  selector: 'app-root',
  imports: [Experience, Header, Work],
  templateUrl: './app.html',
})
export class App {
  protected expData = EXP_DATA;
}
