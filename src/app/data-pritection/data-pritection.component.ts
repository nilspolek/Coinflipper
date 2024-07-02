import { Component } from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-data-pritection',
  standalone: true,
  imports: [TextComponent],
  template: `
    <app-text>
      <h1 class="card-title text-center">Privacy Policy</h1>
      <p class="card-body">
        Last Updated: June 16, 2024<br /><br />Scam.com values your privacy. This privacy policy explains how we collect, use, disclose, and protect your information when you visit or use the Scam.com website.<br /><br />Collection and Use of Information<br />a. Personal Data: We may collect personal information such as your name, email address, phone number, and other details you voluntarily provide on the website (e.g., through contact forms, registration, or purchases).<br />b. Non-Personal Data: We automatically collect certain information about your use of the website, such as IP addresses, browser type, devices used, pages visited, and duration of visit. This information is anonymized and helps us improve our services.<br /><br />Use of Information<br />a. We use your personal data to provide the services you request, such as responding to inquiries or processing orders.<br />b. We may use your information to send you information about our products or services if you have agreed to receive such communications.<br />c. Non-personal data is used for analyzing user behavior, improving our website, and for statistical purposes.<br /><br />Disclosure of Information<br />a. We do not disclose your personal data to third parties unless necessary to fulfill our contractual or legal obligations.<br />b. We may share information with third parties who assist us in providing our services, such as technical service providers or payment processors, but only to the extent necessary for those services.<br /><br />Cookies and Tracking Technologies<br />a. We use cookies and similar tracking technologies to analyze website usage and enhance user experience.<br />b. You can control or reject the use of cookies through your browser settings. However, please note that some features of the website may not function properly if you disable cookies.<br /><br />Data Security<br />a. We implement appropriate security measures to protect your information from loss, misuse, and unauthorized access.<br />b. Despite our efforts, we cannot guarantee absolute security. You assume the risk of disclosing your information when transmitting it over the Internet.<br /><br />Changes to This Privacy Policy<br />a. We reserve the right to change this privacy policy at any time. The updated privacy policy will be posted on the website with a revised "Last Updated" date.<br />b. We will notify you of any material changes via email or other appropriate means.<br /><br />Contact<br />If you have any questions about this privacy policy, please contact us at max&#64;example.com.<br />By using our website, you consent to the collection, use, and disclosure of your information as described in this privacy policy.<br />End of Privacy Policy<br />
      </p>
    </app-text>
  `,
})
export class DataPritectionComponent {}
