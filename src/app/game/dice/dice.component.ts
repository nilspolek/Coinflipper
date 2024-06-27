import {Component} from '@angular/core';
import {GameComponent} from "../game.component";
import {getRandom} from "../../api/api";

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [
    GameComponent
  ],
  template: `
    <app-game [data]="data" [buttonAction]="getANumber">
      <div class="col-lg-7">
        <div class="container">
            <p
              style="font-size: xxx-large"
            >{{ data.result }}</p>
        </div>
      </div>
    </app-game>
  `
})
export class DiceComponent {
  getANumber = async (): Promise<any> => {
    return await getRandom(1, 1, 6);
  }

  data = {
    mainHeading: "Dice Roller",
    mainText: "Welcome to Dice Roller – your ultimate destination for a quick and fair decision! Whether you need to break a tie, make a tough choice, or just have some fun, our Coin Flipper is here to help. With a simple click, our virtual coin will randomly display either heads or tails. It's fast, easy, and perfect for any situation where you need a fair and unbiased outcome. Try it now and let fate decide!",
    result: "",
    resultBannerFirst: "Congratulations! You've rolled a ",
    resultBannerLast: "! 🎲 Whether you're playing a game or just adding some excitement, our dice roller is here to bring a touch of randomness to your day. Feel the anticipation with every roll as you watch the die tumble across the table, revealing your number. Let the games begin",
    mainButton: "Roll the Dice",
    cards: [
      {
        heading: "Roll the Dice: Exciting Online Dice Roller",
        text: "Try our virtual dice roller for all your gaming and decision-making needs. From tabletop games to random choices, our digital dice provide a reliable and enjoyable way to generate random numbers. Explore different dice types and roll combinations to enhance your gaming experience."
      },
      {
        heading: "Enjoy Dice Rolling Anywhere, Anytime",
        text: "Roll dice effortlessly with our online dice roller. Whether you're at home or on the go, our platform offers a simple way to roll virtual dice for games, decisions, or just for fun. With customizable options and instant results, it's never been easier to enjoy the excitement of rolling dice online."
      },
      {
        heading: "Virtual Dice Roller: Fun and Versatile",
        text: "Try our virtual dice roller for all your gaming and decision-making needs. From tabletop games to random choices, our digital dice provide a reliable and enjoyable way to generate random numbers. Explore different dice types and roll combinations to enhance your gaming experience."
      }
    ]
  };
}
