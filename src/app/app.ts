import { Component, ViewEncapsulation } from '@angular/core';
import { Intro } from './intro/intro';

@Component({
  selector: 'app-root',
  imports: [Intro],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None,
})
export class App {}
