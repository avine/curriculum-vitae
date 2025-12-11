import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-logo-zenika',
  host: {
    '[style.height]': 'size() + "px"',
  },
  templateUrl: './logo-zenika.html',
  styleUrl: './logo-zenika.css',
  encapsulation: ViewEncapsulation.None,
})
export class LogoZenika {
  size = input(24);
}
