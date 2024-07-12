import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <div style="height: 1px; background-color: gray"></div>
    <footer class="py-5 shadow-lg">
      <div class="container px-4 px-lg-5">
        <p class="m-0 text-center" i18n>Happy Moments Games</p>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
