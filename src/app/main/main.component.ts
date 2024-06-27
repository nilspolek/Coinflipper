import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  template: `
    <div class="row justify-content-center m-auto">
      @for (card of cards; track card.name) {
        <div class="card col-sm-3 col-12 m-2 p-3">
          <h1 class="card-title pb-3">{{ card.name }}</h1>
          <img
            class="rounded mb-3"
            alt="lotto"
            [src]="card.img"
          />
          <a
            class="btn btn-primary"
            [href]="card.link"
          >Draw numbers</a>
        </div>
      }
    </div>
  `
})
export class MainComponent {
  cards = [
    { name: "Coinflipper", img: "assets/coinflipper.webp", link: "/coinflipper" },
    { name: "Lottery", img: "assets/lottery.webp", link: "/lottery" },
    { name: "Keno", img: "assets/keno.webp", link: "/keno" },
    { name: "Dice", img: "assets/dice.webp", link: "/dice" },
    { name: "CardShuffeler", img: "assets/card.webp",link: "/card" },
    { name: "Birdie Fund Random Generator", img: "assets/bfg.webp", link: "/bfg" }
  ]
}
