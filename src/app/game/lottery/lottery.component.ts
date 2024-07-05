import { Component } from '@angular/core'
import { GameComponent } from '../game.component'
import { getNumbersFromAPI } from '../../api/api'

@Component({
  selector: 'app-lottery',
  standalone: true,
  imports: [GameComponent],
  template: `
    <app-game [data]="data" [buttonAction]="getLottery">
      <div class="align-items-center">
        <h1 class="p-5 pb-3 text-center" i18n>{{ data.mainHeading }}</h1>
        <div class="card m-5 shadow">
          <div class="row justify-content-center m-md-3 m-lg-5 m-1">
            @for (num of data.result; track num) {
              <div class="card col-md-1 col-3 m-2 text-bg-primary w-auto">
                <p class="card-body text-center">{{ num }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </app-game>
  `,
})
export class LotteryComponent {
  getLottery = (): void => {
    getNumbersFromAPI("api/Lottery").then((data) => {
      this.data.result = data;
    });
  };
  data = {
    mainHeading: 'Current Lottery Numbers',
    mainText: '',
    result: '',
    resultBannerFirst: '',
    resultBannerLast: '',
    mainButton: '',
    cards: [
      {
        heading: 'Feeling Lucky? Play the Lottery Online!\n',
        text: 'Dive into the thrill of chance and fortune with our online lottery platform. From the comfort of your home, participate in various lotteries from around the globe. Whether you\'re aiming for a local jackpot or dreaming of international riches, our secure and convenient service makes playing easy and exciting. Don\'t miss your chance to turn a lucky ticket into a life-changing win!',
      },
      {
        heading: 'Discover Your Winning Moment with Our Lottery Games',
        text: 'Explore a world of possibilities with our diverse selection of lottery games. Whether you prefer traditional number draws or innovative gameplay, we offer something for every enthusiast. With seamless ticket purchasing and instant results, the excitement of potentially winning big is just a click away. Join thousands of players who are already enjoying the thrill of our lottery games. Who knows? The next big winner could be you!',
      },
      {
        heading: 'Why Choose Our Online Lottery Platform?\n',
        text: 'Experience the ultimate in convenience and reliability with our trusted online lottery platform. Enjoy quick access to a wide range of lotteries, all from the comfort of your device. Our secure payment options and transparent processes ensure peace of mind while you chase your dreams. Whether you\'re a seasoned player or new to the game, our user-friendly interface and dedicated customer support team are here to enhance your lottery experience. Start playing today and see where your luck takes you!',
      },
    ],
  }
}
