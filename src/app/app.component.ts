import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "./language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mmap-app';
  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    // The language service already handles the initial language setting
  }
}
