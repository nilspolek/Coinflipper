import { Component, Input } from '@angular/core';
import {MatAnchor} from "@angular/material/button";
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    MatAnchor,
    MatCard
  ],
  template: `
    <!-- Page Content-->
    <div class="container px-4 px-lg-5">
      <!-- Heading Row-->
      <div class="row align-items-center my-5">
        <ng-content />
        <div class="col-lg">
          @if (data.mainText || data.mainButton) {
            <article>
              <h1 class="font-weight-light" style="color: #001b3f;">{{ data.mainHeading }}</h1>
              <p i18n>{{ data.mainText }}</p>
              <a (click)="buttonActionWrapper()" mat-flat-button>{{
                data.mainButton
              }}</a>
            </article>
          }
        </div>
      </div>
      <!-- Call to Action-->
      @if (data.resultBannerFirst || data.resultBannerLast) {
        <mat-card
          class="my-5 py-4 text-center shadow-lg"
          style="background-color: #d7e3ff; border-style: none;"
        >
          <h2 class="card-title" style="color: #001b3f;">{{ data.result }}</h2>
          <div class="card-body">
            <p class="m-0" style="color: #005cbb;">
              {{ data.resultBannerFirst + data.result + data.resultBannerLast }}
            </p>
          </div>
        </mat-card>
      }
      <!-- Content Row-->
      <div class="row gx-4 gx-lg-5">
        @for (card of data.cards; track card.heading) {
          <div class="col-md-4 mb-5">
            <mat-card class="p-3" style="background-color: #d7e3ff; border-style: none;">
              <div class="card-body">
                <h2 class="card-title" style="color: #001b3f;">{{ card.heading }}</h2>
                <p class="card-text" style="color: #005cbb;">{{ card.text }}</p>
              </div>
            </mat-card>
          </div>
        }
      </div>
    </div>
  `,
})
export class GameComponent {
  ngOnInit() {
    this.buttonActionWrapper();
  }
  buttonActionWrapper = (): void => {
    this.buttonAction().then((data: any) => {
      this.data.result = data;
    });
  };
  @Input() buttonAction = (): any => {};
  @Input() data = {
    mainHeading: '',
    mainText: '',
    result: '',
    resultBannerFirst: '',
    resultBannerLast: '',
    mainButton: '',
    cards: [
      {
        heading: '',
        text: '',
      },
    ],
  };
}
