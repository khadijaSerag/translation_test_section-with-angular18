import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  direction: string = 'ltr'; // Default direction
  currentLang: string = 'en'; // Default language

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLang);
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    this.switchLanguage(savedLang);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.currentLang = language;
    localStorage.setItem('selectedLanguage', language);
    this.updateDirection(language);
  }

  private updateDirection(language: string) {
    if (language === 'ar') {
      this.direction = 'rtl';
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      this.direction = 'ltr';
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    }
  }

  getCurrentLang() {
    return this.currentLang;
  }

  getDirection() {
    return this.direction;
  }
}
