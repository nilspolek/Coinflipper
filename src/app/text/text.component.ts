import { Component } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [],
  template: `
    <div
      class="container px-4 px-lg-5"
    >
      <div class="card col-9 m-5 p-3"><ng-content /></div>
    </div>
  `
})
export class TextComponent {

}
