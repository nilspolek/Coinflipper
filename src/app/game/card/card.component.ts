import {Component} from '@angular/core';
import {GameComponent} from "../game.component";
import {getRandom} from "../../api/api";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    GameComponent
  ],
  template: `
    <app-game [data]="data" [buttonAction]="getACard">
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
export class CardComponent {
  getACard = async (): Promise<any> => {
    const data = {
      jsonrpc: "2.0",
      method: "generateIntegers",
      params: {
        apiKey: "69108fbd-3368-4cdb-b181-aedff90ee76b",
        n: 1,
        min: 1,
        max: 52,
      },
      id: 1,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(
        "https://api.random.org/json-rpc/4/invoke",
        options,
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
      const ranks = [
        "Ace",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
      ];

      const suitIndex = Math.floor((responseData.result.random.data[0] - 1) / 13);
      const rankIndex = (responseData.result.random.data[0] - 1) % 13;

      const suit = suits[suitIndex];
      const rank = ranks[rankIndex];

      return `${rank} of ${suit}`;
    } catch (error) {
      console.error("Error:", error);
      return 3;
    }
  }

  data = {
    mainHeading: "Draw Your Fate: Get Random Playing Cards Instantly!",
    mainText: "Discover endless possibilities with our virtual deck! Click to draw a random card and let destiny unfold. Perfect for games, decision-making, or sparking creativity",
    result: "",
    resultBannerFirst: "Congratulations! You've drawn a card with the value ",
    resultBannerLast: " of Diamonds! 🃏 Whether you're playing a game of cards or just adding some excitement, our card drawer is here to bring a touch of randomness to your day. Feel the anticipation with every draw as you reveal the card from the deck, showing its value. Let the games begin!",
    mainButton: "Get a Card",
    cards: [
      {
        heading: "Shuffle and Surprise: Your Virtual Deck Awaits!",
        text: "Experience the thrill of a shuffled deck anytime, anywhere. Our website delivers random cards with a click, ideal for games, tarot enthusiasts, or spontaneous fun!"
      },
      {
        heading: "Deal Luck: Instantly Draw Playing Cards Online!",
        text: "Experience the thrill of a shuffled deck anytime, anywhere. Our website delivers random cards with a click, ideal for games, tarot enthusiasts, or spontaneous fun!"
      },
      {
        heading: "Ace Up Your Sleeve: Random Playing Cards at Your Fingertips!",
        text: "Experience the thrill of a shuffled deck anytime, anywhere. Our website delivers random cards with a click, ideal for games, tarot enthusiasts, or spontaneous fun!"
      }
    ]
  };
}
