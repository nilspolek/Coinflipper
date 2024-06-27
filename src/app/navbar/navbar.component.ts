import { Component } from '@angular/core';
import {NgbNavLinkBase} from "@ng-bootstrap/ng-bootstrap";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgbNavLinkBase,
    RouterLink
  ],
  template: `
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark"
    >
      <div class="container px-5">
        <a class="navbar-brand" routerLink="/" i18n>Happy Moments Games</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/coinflipper"
                i18n
              >Coinflipper</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/lottery" i18n>Lottery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/keno" i18n>Keno</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/dice" i18n>Dice</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/card" i18n>CardShuffeler</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/bfg" i18n>Birdie Fund Random Generator</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/text.html?data=impressum"
                x-text="i18n.imp"
              ></a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="text.html?data=datenschutz"
                x-text="i18n.data"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {

}
