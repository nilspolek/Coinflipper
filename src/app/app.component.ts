import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CookiesComponent } from './cookies/cookies.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { CookieService } from 'ngx-cookie-service';
import { FooterComponent } from './footer/footer.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MainComponent, FooterComponent],
  template: `
    <app-navbar />

    <router-outlet></router-outlet>
    <app-footer />
  `,
})
export class AppComponent {
  constructor(
    private modalService: NgbModal,
    private cookieService: CookieService,
    private titleService: Title,
  ) {}
  ngOnInit() {
    this.titleService.setTitle('Happy Moments Games');
    if (!this.cookieService.get('acceptedCookies')) {
      this.modalService.open(CookiesComponent, { centered: true });
    }
  }
}
