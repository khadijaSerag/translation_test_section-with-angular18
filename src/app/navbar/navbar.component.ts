import {Component, Input} from '@angular/core';
import {AppComponent} from "../app.component";
import {LanguageService} from "../language.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public languageService: LanguageService) {
  }

  switchLanguage(language: string) {
    this.languageService.switchLanguage(language);
  }
}
