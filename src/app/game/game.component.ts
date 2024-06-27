import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  template: `
    <!-- Page Content-->
    <div class="container px-4 px-lg-5">
      <!-- Heading Row-->
      <div class="row gx-4 gx-lg-5 align-items-center my-5">

            <ng-content/>

        <div class="col-lg">
          @if ( data.mainText || data.mainButton) {
            <article>
              <h1 class="font-weight-light" i18n>{{ data.mainHeading }}</h1>
              <p i18n>{{ data.mainText }}</p>
              <a
                class="btn btn-primary"
                (click)="buttonActionWrapper()"
                i18n
              >{{ data.mainButton }}</a>
            </article>
          }
        </div>
      </div>
      <!-- Call to Action-->
      @if (data.resultBannerFirst || data.resultBannerLast) {
        <div class="card text-white bg-secondary my-5 py-4 text-center">
          <h2 class="card-title" i18n>{{ data.result }}</h2>
          <div class="card-body">
            <p class="text-white m-0" i18n>{{ data.resultBannerFirst + data.result + data.resultBannerLast }}</p>
          </div>
        </div>
      }
      <!-- Content Row-->
      <div class="row gx-4 gx-lg-5">
        @for (card of data.cards; track card.heading) {
          <div class="col-md-4 mb-5">
            <div class="card h-100">
              <div class="card-body">
                <h2 class="card-title" i18n>{{ card.heading }}</h2>
                <p class="card-text" i18n>{{ card.text }}</p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class GameComponent {
  ngOnInit() {
    this.buttonActionWrapper();
  }
  buttonActionWrapper = (): void => {
    this.buttonAction().then((data: any) => {
      this.data.result = data
    });
  }
  @Input() buttonAction = (): any => {};
  @Input() data = {
    mainHeading: "",
    mainText: "",
    result: "",
    resultBannerFirst: "",
    resultBannerLast: "",
    mainButton: "",
    cards: [
      {
        heading: "",
        text: ""
      }
    ]
  };
}

