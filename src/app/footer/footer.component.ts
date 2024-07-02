import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="py-5 bg-dark shadow-lg">
      <div class="container px-4 px-lg-5">
        <p class="m-0 text-center text-white" i18n>Happy Moments Games</p>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
