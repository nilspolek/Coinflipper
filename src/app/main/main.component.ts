import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CookieService } from 'ngx-cookie-service';
import {RouterLink} from "@angular/router";
import {MatAnchor} from "@angular/material/button";
import {MatCard, MatCardImage} from "@angular/material/card";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, RouterLink, MatAnchor, MatCard, MatCardImage],
  template: `
    <div class="row justify-content-center m-auto my-5">
      @for (card of cards; track card.name) {
        <mat-card class=" col-sm-3 col-12 m-3 p-3" style="background-color: #d7e3ff; border-style: none;">
          <h1 class="card-title pb-3" style="color: #001b3f">{{ card.name }}</h1>
          <img class="rounded mb-3" alt="lotto" [src]="card.img"  mat-card-image/>
          <a [routerLink]="card.link" mat-flat-button>Draw numbers</a>
        </mat-card>
      }
    </div>
  `,
})
export class MainComponent {
  cards = [
    {
      name: 'Coinflipper',
      img: 'assets/coinflipper.webp',
      link: '/coinflipper',
    },
    { name: 'Lottery', img: 'assets/lottery.webp', link: '/lottery' },
    { name: 'Keno', img: 'assets/keno.webp', link: '/keno' },
    { name: 'Dice', img: 'assets/dice.webp', link: '/dice' },
    { name: 'CardShuffeler', img: 'assets/card.webp', link: '/card' },
    {
      name: 'Birdie Fund Random Generator',
      img: 'assets/bfg.webp',
      link: '/bfg',
    },
  ];
}
