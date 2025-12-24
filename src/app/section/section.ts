import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section',
  host: {
    class: 'mt-12 block',
  },
  templateUrl: './section.html',
})
export class Section {
  readonly heading = input.required<string>();

  readonly icon = input.required<string>();
}
