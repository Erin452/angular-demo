import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  lang = 'en';

  constructor(public translate: TranslateService) { 
    translate.addLangs(['en', 'ch']);
    translate.setDefaultLang(this.lang);
  }

  ngOnInit(): void {
  }
}
