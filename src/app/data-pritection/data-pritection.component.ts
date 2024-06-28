import { Component } from '@angular/core';
import {TextComponent} from "../text/text.component";

@Component({
  selector: 'app-data-pritection',
  standalone: true,
  imports: [
    TextComponent
  ],
  template: `
    <app-text>
      <h1 class="card-title text-center">Datenschutz</h1>
      <p class="card-body">Zuletzt aktualisiert am:
        16.06.2024<br/><br/>Scam.com legt großen Wert auf Ihren Datenschutz. Diese Datenschutzerklärung erläutert,
        wie wir Ihre Informationen erfassen, verwenden, weitergeben und schützen, wenn Sie die Website Scam.com besuchen
        oder nutzen.<br/><br/>Erfassung und Verwendung von Informationen<br/>a. Personenbezogene Daten: Wir
        können personenbezogene Informationen wie Ihren Namen, Ihre E-Mail-Adresse, Telefonnummer und andere Details
        erfassen, die Sie freiwillig auf der Website angeben (z.B. beim Ausfüllen von Kontaktformularen, Registrierung
        oder Einkäufen).<br/>b. Nicht personenbezogene Daten: Wir erfassen automatisch bestimmte Informationen über
        Ihre Nutzung der Website, wie z.B. IP-Adressen, Browsertyp, verwendete Geräte, besuchte Seiten und Dauer des
        Besuchs. Diese Informationen sind anonymisiert und helfen uns, unsere Dienste zu verbessern.<br/><br/>
        Verwendung der Informationen<br/> a. Wir verwenden Ihre personenbezogenen Daten, um die von Ihnen angeforderten
        Dienste bereitzustellen, z.B. um Anfragen zu beantworten oder Bestellungen zu verarbeiten.<br/>b. Wir können
        Ihre Informationen verwenden, um Ihnen Informationen über unsere Produkte oder Dienstleistungen zuzusenden, wenn
        Sie derartige Mitteilungen zugestimmt haben.<br/>c. Nicht personenbezogene Daten werden zur Analyse des
        Nutzerverhaltens, zur Verbesserung unserer Website und für statistische Zwecke verwendet.<br/><br/>
        Weitergabe von Informationen<br/>a. Wir geben Ihre personenbezogenen Daten nicht an Dritte weiter, es sei
        denn, dies ist zur Erfüllung unserer vertraglichen oder gesetzlichen Verpflichtungen erforderlich.<br/>b. Wir
        können Informationen mit Dritten teilen, die uns bei der Erbringung unserer Dienstleistungen unterstützen, wie
        z.B. technische Dienstleister oder Zahlungsabwickler, jedoch nur in dem für diese Dienstleistungen
        erforderlichen
        Umfang.<br/><br/>Cookies und Tracking-Technologien<br/>a. Wir verwenden Cookies und ähnliche
        Tracking-Technologien, um die Nutzung der Website zu analysieren und die Benutzererfahrung zu verbessern.<br/>
        b. Sie können die Verwendung von Cookies über Ihre Browsereinstellungen kontrollieren oder ablehnen. Bitte
        beachten Sie jedoch, dass einige Funktionen der Website möglicherweise nicht richtig funktionieren, wenn Sie
        Cookies deaktivieren.<br/><br/>Datensicherheit<br/>a. Wir setzen angemessene Sicherheitsmaßnahmen ein,
        um Ihre Informationen vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen.<br/>b. Trotz unserer
        Bemühungen können wir keine absolute Sicherheit garantieren. Sie tragen das Risiko der Offenlegung Ihrer
        Informationen, wenn Sie sie über das Internet übermitteln.<br/>Änderungen dieser
        Datenschutzerklärung<br/> a. Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern.
        Die aktualisierte Datenschutzerklärung wird auf der Website mit einem überarbeiteten "Zuletzt
        aktualisiert"-Datum veröffentlicht.<br/> b. Über wesentliche Änderungen werden wir Sie per E-Mail oder auf
        andere geeignete Weise informieren.<br/><br/>Kontakt<br/>Wenn Sie Fragen zu dieser Datenschutzerklärung
        haben, kontaktieren Sie uns bitte unter max&#64;musterman.com.<br/>Durch die Nutzung unserer Website erklären
        Sie sich mit der Erfassung, Nutzung und Offenlegung Ihrer Informationen gemäß dieser Datenschutzerklärung
        einverstanden.<br/>Ende der Datenschutzerklärung<br/></p>
    </app-text>
  `
})
export class DataPritectionComponent {

}
