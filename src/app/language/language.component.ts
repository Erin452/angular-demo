import { JSDocTagName } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  lang = '';

  constructor(public translate: TranslateService) { 
    
    translate.addLangs(['en', 'ch']);
    
  }

  ngOnInit(): void {
    this.lang = JSON.parse(localStorage.getItem('lang') || '{"lang": "en"}')['lang'];
    console.log(this.lang);
    this.translate.setDefaultLang(this.lang);
  }

  change(lang:any) {
    localStorage.setItem('lang', JSON.stringify({"lang": lang}));
  }
}
