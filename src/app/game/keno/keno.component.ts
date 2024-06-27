import {Component} from '@angular/core';
import {GameComponent} from "../game.component";
import {getRandom} from "../../api/api";

@Component({
  selector: 'app-keno',
  standalone: true,
  imports: [
    GameComponent
  ],
  template: `
    <app-game [data]="data" [buttonAction]="getKeno">
      <h1 class="card-title p-5 pb-3 text-center" i18n>{{ data.mainHeading }}</h1>
      <div class="card m-5">
        <div class="row justify-content-center m-5">
          @for (num of data.result; track num) {
            <div class="card col-md-1 col-6 m-2 text-bg-primary">
              <p class="card-body text-center">{{ num }}</p>
            </div>
          }
        </div>
      </div>

    </app-game>
  `
})
export class KenoComponent {
  getKeno = (): void => {
    getRandom(4, 1, 80).then((data) => {
      this.data.result = data
    });
  }

  data = {
    mainHeading: "Current Keno Numbers\n",
    mainText: "",
    result: "",
    resultBannerFirst: "",
    resultBannerLast: "",
    mainButton: "",
    cards: [
      {
        heading: "Experience Keno: A Unique Lottery Adventure",
        text: "Step into the world of Keno, where every draw brings the potential for excitement and rewards. Select your numbers, watch the draw live, and see if luck favors you with our easy-to-play Keno games. It’s simple, it’s fun, and it could be your chance to win big!"
      },
      {
        heading: "Play Keno Online: Simple and Rewarding",
        text: "Experience the excitement of playing Keno online, where you can select your numbers, place your bet, and eagerly anticipate the draw to see if your picks align with the winning numbers, offering a straightforward yet thrilling opportunity to test your luck and potentially win prizes. Experience the excitement of playing Keno online, where you can select your numbers, place your bet, and eagerly anticipate the draw to see if your picks align with the winning numbers, offering a straightforward yet thrilling opportunity to test your luck and potentially win prizes."
      },
      {
        heading: "Discover the Thrill of Keno with Us",
        text: "Explore the excitement of Keno with our user-friendly platform. Experience the thrill of watching the numbers come in and see if you’re the next big winner. Whether you’re new to Keno or a seasoned player, our online Keno games offer a convenient way to enjoy this classic lottery experience."
      }
    ]
  };
}
