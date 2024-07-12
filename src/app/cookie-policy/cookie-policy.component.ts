import { Component } from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-cookie-policy',
  standalone: true,
  imports: [TextComponent],
  template: `
    <app-text>
      <h1 class="card-title text-center">Cookie Policy</h1>
      We are committed to protecting and respecting your privacy. This Cookie Policy explains what cookies are and how we use them on our website coinflipper.com.

      What are Cookies?
      Cookies are small text files that are stored on your device (computer, smartphone, tablet) when you visit a website. Cookies help us recognize your device and store information about your preferences or past actions.

      Types of Cookies We Use
      We use the following types of cookies:

      Strictly necessary cookies: These cookies are essential for the website to function. They enable core functionalities such as security, network management, and accessibility.

      Performance cookies: These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us improve the performance of the website.

      Functionality cookies: These cookies allow the website to remember your choices (such as your username, language, or region) and provide enhanced, personalized features.

      Targeting / advertising cookies: These cookies are used to display relevant advertisements to you. They also help us measure the effectiveness of our advertising campaigns.

      How We Use Cookies
      We use cookies to:

      Enhance your browsing experience by remembering your preferences.
      Analyze website traffic and user behavior.
      Personalize content and advertisements.
      Provide social media features.
      Improve website security.
      Managing Cookies
      You have the right to choose whether to accept or decline cookies. You can set your web browser to reject cookies or notify you when cookies are sent. However, if you disable cookies, some parts of our website may not function properly.

      How to Delete Cookies
      If you want to delete cookies, follow your browser's instructions:

      Google Chrome
      Mozilla Firefox
      Microsoft Edge
      Safari
      Third-Party Cookies
      Some cookies may be placed by third-party services that appear on our pages. We do not control these cookies, so you should check the third-party websites for more information about these cookies.

      Changes to Our Cookie Policy
      We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We recommend checking this Cookie Policy regularly.

      Contact Us
      If you have any questions about our use of cookies or this Cookie Policy, please contact us at:

      Max Mustermann
      0615 Dagoberthausen Dagobert-Str. 15
      max&#64;mustermann.de
      0800 0815
    </app-text>
  `,
})
export class CookiePolicyComponent {}
