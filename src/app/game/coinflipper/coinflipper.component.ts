import {Component, input} from '@angular/core';
import {GameComponent} from "../game.component";
import {getRandom} from "../../api/api";

@Component({
  selector: 'app-coinflipper',
  standalone: true,
  imports: [
    GameComponent
  ],
  template: `
    <app-game [data]="data" [buttonAction]="flipCoin">
      <div class="col-lg-7">
        <div class="container">
          <div id="coin">
            <div id="heads" class="heads"></div>
            <div id="tails" class="tails"></div>
          </div>
        </div>
      </div>
    </app-game>
  `
})
export class CoinflipperComponent {
  flipCoin = async (): Promise<any> => {
    function deferFn(callback: any, ms: number ) {
      setTimeout(callback, ms);
    }
    async function flipCoin() {
      const coin = document.querySelector("#coin");
      const button = document.querySelector("#flip");
      const status = document.querySelector("#status");
      // @ts-ignore
      coin.setAttribute("class", "");
      const random = await getRandom(1, 1, 2); // Wait for the random value
      const result = random == 1 ? "heads" : "tails";

      deferFn(function () {
        // @ts-ignore
        coin.setAttribute("class", "animate-" + result);
      }, 100);
      return result;
    }
    return await flipCoin();
  }

  data = {
    mainHeading: "Coin Flipper",
    mainText: "Welcome to Coin Flipper – your ultimate destination for a quick and fair decision! Whether you need to break a tie, make a tough choice, or just have some fun, our Coin Flipper is here to help. With a simple click, our virtual coin will randomly display either heads or tails. It's fast, easy, and perfect for any situation where you need a fair and unbiased outcome. Try it now and let fate decide!",
    result: "",
    resultBannerFirst: "Congratulations! You've chosen ",
    resultBannerLast:" ! 🎉 Whether you're making a decision or just testing your luck, our coin flipper is here to add a dash of randomness to your day. Enjoy the thrill of chance with every click as you watch the coin dance through the air, landing on your selected side. Let the games begin!",
    mainButton: "Flip the Coin",
    cards: [
      {
        heading: "Instant Decision Maker",
        text: "Need to break a tie or make a quick choice? Flip a virtual coin and get an instant heads or tails result! Perfect for resolving debates or adding a bit of chance to your day."
      },
      {
        heading: "Fun and Fair",
        text: "Looking for a fun way to decide? Our Coin Flipper ensures a fair and random outcome every time. Great for games, settling arguments, or just enjoying a bit of randomness."
      },
      {
        heading: "Simple and Fast",
        text: "No coin? No problem! With just one click, get a clear decision in seconds with our easy-to-use Coin Flipper. Whether you're making big decisions or small ones, let us do the flipping for you."
      }
    ]
  };
}
