import { Component, input } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.html',
})
export class Download {
  readonly url = input.required<string>();
}
