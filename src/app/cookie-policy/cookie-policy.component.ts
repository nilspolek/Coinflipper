import { Component } from '@angular/core';
import {TextComponent} from "../text/text.component";

@Component({
  selector: 'app-cookie-policy',
  standalone: true,
  imports: [
    TextComponent
  ],
  template: `
  <app-text>
    <h1 class="card-title text-center">Cookie-Richtlinie</h1> <p class="card-body">Wir sind
    bestrebt, Ihre Privatsphäre zu schützen und zu respektieren. Diese Cookie-Richtlinie erklärt, was Cookies sind und
    wie wir sie auf unserer Website coinflipper.com verwenden.<br/><br/>Was sind Cookies?<br/> Cookies sind
    kleine Textdateien, die auf Ihrem Gerät (Computer, Smartphone, Tablet) gespeichert werden, wenn Sie eine Website
    besuchen. Cookies helfen uns dabei, Ihr Gerät zu erkennen und Informationen über Ihre Präferenzen oder vergangene
    Aktionen zu speichern.<br/><br/>Arten von Cookies, die wir verwenden<br/>Wir verwenden die folgenden
    Arten von Cookies:<br/><br/>Unbedingt erforderliche Cookies: Diese Cookies sind für die Funktion der Website
    unerlässlich. Sie ermöglichen Kernfunktionalitäten wie Sicherheit, Netzwerkmanagement und Zugänglichkeit.<br/><br/>
    Leistungscookies: Diese Cookies sammeln Informationen darüber, wie Besucher unsere Website nutzen, zum Beispiel
    welche Seiten am häufigsten besucht werden. Diese Daten helfen uns, die Leistung der Website zu
    verbessern.<br/><br/>Funktionalitätscookies: Diese Cookies ermöglichen es der Website, sich an Ihre
    Entscheidungen zu erinnern (wie Ihren Benutzernamen, Ihre Sprache oder Region) und erweiterte, personalisierte
    Funktionen bereitzustellen.<br/><br/>Targeting-/Werbungs-Cookies: Diese Cookies werden verwendet, um Ihnen
    relevante Werbung anzuzeigen. Sie helfen uns auch, die Effektivität unserer Werbekampagnen zu messen.<br/><br/>
    Wie wir Cookies verwenden<br/>Wir verwenden Cookies, um:<br/><br/> Ihre Browser-Erfahrung zu verbessern,
    indem wir uns an Ihre Präferenzen erinnern.<br/> Website-Traffic und Nutzungsverhalten zu analysieren.<br/>
    Inhalte und Anzeigen zu personalisieren.<br/>Funktionen für soziale Medien bereitzustellen.<br/>Die
    Sicherheit der Website zu verbessern.<br/>Verwaltung von Cookies<br/>Sie haben das Recht zu entscheiden,
    ob Sie Cookies akzeptieren oder ablehnen möchten. Sie können Ihren Webbrowser so einstellen, dass er Cookies ablehnt
    oder Sie benachrichtigt, wenn Cookies gesendet werden. Wenn Sie Cookies deaktivieren, funktionieren möglicherweise
    einige Teile unserer Website nicht ordnungsgemäß.<br/><br/>Wie man Cookies löscht<br/>Wenn Sie Cookies
    löschen möchten, folgen Sie den Anweisungen Ihres Browsers:<br/><br/>Google Chrome<br/>Mozilla
    Firefox<br/>Microsoft Edge<br/>Safari<br/>Cookies von Drittanbietern<br/>Einige Cookies können
    von Drittanbieter-Diensten platziert werden, die auf unseren Seiten erscheinen. Wir kontrollieren diese Cookies
    nicht, daher sollten Sie die Websites der Drittanbieter für weitere Informationen zu diesen Cookies überprüfen.<br/><br/>
    Änderungen unserer Cookie-Richtlinie<br/>Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um
    Änderungen in unseren Praktiken oder aus anderen betrieblichen, rechtlichen oder regulatorischen Gründen
    widerzuspiegeln. Wir empfehlen Ihnen, diese Cookie-Richtlinie regelmäßig zu überprüfen.<br/><br/>Kontaktieren
    Sie uns<br/>Wenn Sie Fragen zu unserer Verwendung von Cookies oder zu dieser Cookie-Richtlinie haben,
    kontaktieren Sie uns bitte unter:<br/><br/>Max Mustermann<br/>0615 Dagoberthausen Dagobert-Str. 15<br/>
    max&#64;mustermann.de<br/>0800 0815<br/></p>
  </app-text>
  `
})
export class CookiePolicyComponent {

}
