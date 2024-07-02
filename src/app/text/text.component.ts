import { Component } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <div class="card col-9 m-5 mx-0 mx-lg-5 mx-md-3 p-3 col-12"><ng-content /></div>
    </div>
  `,
})
export class TextComponent {}
