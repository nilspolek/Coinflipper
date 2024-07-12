import { Component } from '@angular/core';
import { GameComponent } from '../game.component';
import { getRandom } from '../../api/api';

@Component({
  selector: 'app-bfg',
  standalone: true,
  imports: [GameComponent],
  template: `
    <app-game [data]="data" [buttonAction]="getANumber">
      <div class="col-lg-7">
        <div class="container" style="color: #001b3f;">
          <p style="font-size: xxx-large" >{{ data.result }}</p>
        </div>
      </div>
    </app-game>
  `,
})
export class BfgComponent {
  getANumber = async (): Promise<any> => {
    return await getRandom(1, 1, 18);
  };

  data = {
    mainHeading: 'Birdie Fund Randomizer',
    mainText:
      'Are you ready to add a fun twist to your next golf round? The Birdie Fund Randomizer is here to spice up the game and keep everyone on their toes. Perfect for friendly matches, charity tournaments, or just a casual day on the course, our randomizer brings an element of surprise and excitement to your birdie fund contributions.',
    result: '',
    resultBannerFirst: "Congratulations! You've rolled a ",
    resultBannerLast:
      "! 🦅 Whether you're playing a round of golf or just adding some excitement, our Birdie Fund Randomizer is here to bring a touch of randomness to your day. Feel the anticipation with every roll as you watch the fund grow, revealing your contribution. Let the game begin!",
    mainButton: 'Get a Number',
    cards: [
      {
        heading: 'Unlock the Magic of Giving: Birdie Fund Randomizer',
        text: "Discover the joy of philanthropy with our Birdie Fund Randomizer! Whether you're a seasoned donor or new to charitable giving, our innovative platform makes supporting causes easy and fun. Simply spin the wheel and let fate decide where your donation goes next. Every contribution counts towards making a difference in the world. Join us in spreading kindness one birdie at a time!",
      },
      {
        heading: 'Elevate Your Impact: Birdie Fund Randomizer',
        text: 'Ready to make a meaningful impact with just a click? Introducing the Birdie Fund Randomizer, your gateway to supporting diverse causes effortlessly. Empower communities, preserve nature, or aid in educational endeavors—all by engaging in our interactive giving experience. With each spin, you contribute towards positive change globally. Start your journey today and see the difference you can make with every random act of kindness!',
      },
      {
        heading: 'Transforming Giving: Birdie Fund Randomizer',
        text: "Experience the future of philanthropy with the Birdie Fund Randomizer. It's not just about donating—it's about engaging with a community of givers who share your passion for change. Spin the wheel and watch as your contributions make a direct impact on charities around the world. Every spin is an opportunity to support causes close to your heart and discover new ones that resonate with your values. Together, we can amplify our collective generosity and create a better tomorrow for everyone.",
      },
    ],
  };
}
