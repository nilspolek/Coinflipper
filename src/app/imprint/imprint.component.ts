import { Component } from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TextComponent],
  template: `
    <app-text>
      <h1 class="card-title text-center">Imprint</h1>
      <p class="card-body">
        <b>Imprint for Max Mustermann:</b><br /><br />
        Max Mustermann<br />
        Musterstraße 123<br />
        12345 Musterstadt<br /><br />
        Phone: 0123-456789<br />
        Email: max.muster&#64;example.com<br /><br />
        Authorized Representative:<br />
        Max Mustermann, Musterstraße 123, 12345 Musterstadt<br /><br />
        Commercial Register:<br />
        Entry in the commercial register.<br />
        Register Court: District Court of Musterstadt<br />
        Registration Number: HRB 12345<br /><br />
        <br />
        DE123456789 (if applicable)<br /><br />
        Professional Liability Insurance:<br />
        Name of the Insurance Company<br />
        Musterstraße 456<br />
        12345 Versicherungsstadt<br /><br />
        Coverage Area: Germany<br />
        Supervisory Authority:<br />
        Musterstadt Trade Office<br />
        Musterstraße 789<br />
        12345 Musterstadt<br /><br />
        Content Responsible Person according to § 55 Abs. 2 RStV:<br />
        Max Mustermann, Musterstraße 123, 12345 Musterstadt<br /><br />
      </p>
    </app-text>
  `,
})
export class ImprintComponent {}
