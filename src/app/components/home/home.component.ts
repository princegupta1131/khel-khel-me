import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from '../../services/utils.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  result: any;
  selectedLanguage;

  constructor(public router: Router, public utils: UtilService, private localStorageService: LocalStorageService, private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.selectedLanguage=this.utils.languageChange
    this.translate.use( this.selectedLanguage|| 'en')
    
    this.utils.search().subscribe((data) => {
      this.result = data.result.content
      this.localStorageService.setItem('result', JSON.stringify(this.result))
    })
  }

  onLanguageChange() {
    this.utils.setLanguage(this.selectedLanguage)
    this.translate.use(this.selectedLanguage);
  }


}