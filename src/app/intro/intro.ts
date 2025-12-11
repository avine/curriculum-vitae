import { Component, ViewEncapsulation } from '@angular/core';
import { LogoZenika } from '../logo-zenika/logo-zenika';

@Component({
  selector: 'app-intro',
  imports: [LogoZenika],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
  encapsulation: ViewEncapsulation.None,
})
export class Intro {}
