import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-my-modal',
  standalone: true,
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Cookie consent</h4>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      ></button>
    </div>
    <div class="modal-body">
      <div i18n>
        This website uses cookies to enhance your browsing experience and
        provide personalized content. By clicking 'Accept,' you agree to the use
        of cookies as described in our
        <a routerLink="cookie-policy">Cookie Policy</a>.
      </div>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        (click)="activeModal.close('Close click')"
      mat-button>
        Decline
      </button>
      <button
        type="button"
        class="btn btn-primary"
        (click)="
          activeModal.close('Close click');
          setCookie('acceptedCookies', 'true', 999)
        "
        mat-flat-button
      >
        Accept
      </button>
    </div>
  `,
  imports: [
    RouterLink,
    MatButton
  ]
})
export class CookiesComponent {
  setCookie(name: string, value: string, days: number): void {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + days);
    this.cookieService.set(name, value, expiryDate);
  }

  getCookie(name: string): string {
    return this.cookieService.get(name);
  }
  constructor(
    public activeModal: NgbActiveModal,
    private cookieService: CookieService,
  ) {}
}
