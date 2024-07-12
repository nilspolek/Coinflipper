import { Component } from '@angular/core';
import { NgbNavLinkBase } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import {MatAnchor, MatFabAnchor} from "@angular/material/button";
import {MatNavList} from "@angular/material/list";
import {MatTabNav} from "@angular/material/tabs";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbNavLinkBase, RouterLink, MatFabAnchor, MatAnchor, MatNavList, MatTabNav],
  template: `
    <mat-nav-list class="navbar navbar-expand-lg navbar-dark shadow" style="background-color: #d7e3ff">
      <div class="container px-5">
        <a class="navbar-brand my-2" routerLink="/" mat-flat-button>Happy Moments Games</a>
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
            <li class="nav-item mx-1">
              <a class="nav-link" routerLink="/coinflipper" i18n mat-button>Coinflipper</a>
            </li>
            <li class="nav-item mx-1">
              <a class="nav-link" routerLink="/lottery" i18n mat-button>Lottery</a>
            </li>
            <li class="nav-item mx-1">
              <a class="nav-link" routerLink="/keno" i18n mat-button>Keno</a>
            </li>
            <li class="nav-item mx-1">
              <a class="nav-link" routerLink="/dice" i18n mat-button>Dice</a>
            </li>
            <li class="nav-item mx-1">
              <a class="nav-link" routerLink="/card" i18n mat-button>CardShuffeler</a>
            </li>
            <li class="nav-item mx-1">
              <a class="nav-link" routerLink="/bfg" i18n mat-button
                >Birdie Fund Random Generator</a>
            </li>
            <li class="nav-item mx-1">
              <a class="nav-link" routerLink="imprint" mat-button>Imprint</a>
            </li>
            <li class="nav-item mx-1">
              <a class="nav-link" routerLink="data" href="data" mat-button
                >data-protection</a
              >
            </li>
          </ul>
        </div>
      </div>
    </mat-nav-list>
  `,
})
export class NavbarComponent {}
